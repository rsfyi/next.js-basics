import React from 'react';
import axios from 'axios';
import Link from 'next/link';

import { MainLayout } from '../../components/layouts/main-layout';

const Profile = ({ user }) => (
  <MainLayout>
    <div className='card mt-5' style={{ width: '18rem' }} key={user.id}>
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
        </ul>
      </div>
    </div>
  </MainLayout>
);

// adding getInitialProps to functional components
Profile.getInitialProps = async ({ pathname, query, asPath, req, res }) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${query.userId}`
    );

    return {
      user: response.data,
    };
  } catch (err) {
    console.log('[Profile Error ] - ', err.message);
    return {};
  }
};

export default Profile;
