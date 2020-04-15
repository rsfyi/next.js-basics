import React from 'react';

/**
 * using direct anchor tag - will load/refresh the application everytime you go the new page
 *  - <a href='/'>Home</a>
 *
 * Instead of that - we should use Link from next/Link
 */
import Link from 'next/link';

export const Header = () => (
  <>
    <h1>rsdoc.dev</h1>
    <nav>
      <Link href='/'>
        <a>Home</a>
      </Link>{' '}
      -
      <Link href='/contact'>
        <a>Contact</a>
      </Link>{' '}
      -
      <Link href='/about'>
        <a>About</a>
      </Link>{' '}
      -
      <Link href='/users'>
        <a>Users</a>
      </Link>
    </nav>
  </>
);
