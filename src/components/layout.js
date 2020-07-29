import React from 'react';
import { Link } from 'gatsby';

import './layout.css';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Link to="/">Video Chat App</Link>
      </header>
      <main>{children}</main>
    </>
  );
}
