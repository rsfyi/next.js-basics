import React, { Fragment, Component } from 'react';
import Router from 'next/router';

import { MainLayout } from '../components/layouts/main-layout';
import Message from '../components/includes/message';

class About extends Component {
  handleRouteChangeStart = (url) => {
    console.log('Route change start event ...');
  };

  handleRouteChangeComplete = (url) => {
    console.log('Route change complete event ...');
  };

  handleBeforeHistoryChange = (url) => {
    console.log('Route before history change event ...');
  };

  componentDidMount() {
    console.log(' [ About ] : ', Router);

    // adding the router change event
    Router.events.on('routeChangeStart', this.handleRouteChangeStart);
    Router.events.on('routeChangeComplete', this.handleRouteChangeComplete);
    Router.events.on('beforeHistoryChange', this.handleBeforeHistoryChange);

    // beforePopState - leaving the component - based browser back button
    // Router.beforePopState(({ url, as, options }) => {
    //   console.log(url, as);
    //   if (as === '/contact') {
    //     window.location.href = '/whatever';
    //     return false;
    //   }

    //   return true;
    // });

    //adding redirection
    // Router.replace('/contact', '/contact/56');
  }

  render() {
    return (
      <Fragment>
        <MainLayout>
          <h1>Welcome to About page</h1>
          <Message />
          <button
            className='btn btn-warning mt-3'
            onClick={() =>
              Router.push(
                { pathname: '/users/profile', query: { userId: 1 } },
                'users/profile/1'
              )
            }
          >
            Router(class based component)
          </button>
        </MainLayout>
      </Fragment>
    );
  }
}

export default About;
