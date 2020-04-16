import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { MainLayout } from '../components/layouts/main-layout';

class Home extends Component {
  // this is only next js feature - which will be rendered only on server not brwoser
  // best for making network requests
  // it has a context parameter
  static async getInitialProps({ pathname, query, asPath, req, res }) {
    // returned value is going to be injected with props to the components
    // console.log(pathname);
    // console.log(query);
    // console.log(asPath);

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      // console.log(response.data);
      return {
        users: response.data,
      };
    } catch (err) {
      console.log('[ Error ] - ', err.message);
      return {
        user: {
          first_name: 'rahul',
          last_name: 'singh',
        },
      };
    }
  }

  constructor(props) {
    super();

    // this.state = {
    //   user: {
    //     name: props.name,
    //   },
    // };
  }

  renderList = () => (
    <div className='card_layout'>
      {this.props.users.map((user) => (
        <div className='card' style={{ width: '18rem' }} key={user.id}>
          <img
            className='card-img-top'
            src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
            alt='Card image cap'
            height='200'
            width='200'
          />
          <div className='card-body'>
            <div className='card-header'>{user.name}</div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>{user.email}</li>
              <li className='list-group-item'>{user.phone}</li>
              <li className='list-group-item'>{user.website}</li>
              <li className='list-group-item list-group-item-action'>
                <Link href={`/users/profile?userId=${user.id}`}>
                  <a className='bio_link text-uppercase'>
                    {user.username} detail
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );

  render() {
    return (
      <MainLayout>
        <h1 style={{ color: 'salmon' }}>Welcome Mr</h1>

        <div>{this.renderList()}</div>

        {/**
        <div className='jsxStyled'>Hi Mr JSX-Styled</div>
        <style jsx>
          {`
            .jsxStyled {
              color: red;
            }
          `}
        </style>
        <div className='contact'> Hi contact with external stylesheet</div>
        <div>
          <img src='/images/img-01.png' width='200' height='200' />
          </div> **/}
      </MainLayout>
    );
  }
}

export default Home;
