import React, { Component } from 'react';
import axios from 'axios';

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
        `https://jsonplaceholder.typicode.com/users/1`
      );

      return response.data;
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

    this.state = {
      user: {
        name: props.name,
      },
    };
  }

  render() {
    return (
      <MainLayout>
        <h1>Welcome Mr {this.state.user.name}</h1>
      </MainLayout>
    );
  }
}

export default Home;
