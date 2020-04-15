import React from 'react';

import { Header } from '../includes/Header';

export const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
