import React from 'react';
import axios from 'axios';

const Profile = (props) => <h1>Welcome to {props.name} Profile page</h1>;

// adding getInitialProps to functional components
Profile.getInitialProps = async ({ pathname, query, asPath, req, res }) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/1`
    );

    return response.data;
  } catch (err) {
    console.log('[Profile Error ] - ', err.message);
    return {};
  }
};

export default Profile;
