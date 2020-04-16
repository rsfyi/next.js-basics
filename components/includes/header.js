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
    <header>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <Link href='/'>
            <a className='navbar-brand'>rsdoc.dev</a>
          </Link>

          <div className='collapse navbar-collapse'>
            <div className='navbar-nav'>
              <Link href='/'>
                <a className='nav-item nav-link'>Home</a>
              </Link>
              <Link href='/contact'>
                <a className='nav-item nav-link'>Contact</a>
              </Link>
              <Link href='/about'>
                <a className='nav-item nav-link'>About</a>
              </Link>
              <Link href='/users'>
                <a className='nav-item nav-link'>Users</a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </>
);
