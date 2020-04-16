import React from 'react';
import { withRouter } from 'next/router';

const Message = (props) => (
  <div>
    <h1>Hello from Message</h1>
    <p>I am at the "{props.router.pathname}" page</p>
    <button
      className='btn btn-success'
      onClick={() =>
        props.router.push(
          { pathname: '/users/profile', query: { userId: 2 } },
          '/users/profile/2'
        )
      }
    >
      withRouter (functional components)
    </button>
  </div>
);

export default withRouter(Message);
