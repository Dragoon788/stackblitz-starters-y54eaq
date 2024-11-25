import React from 'react';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      {/* using the component we just created from Header.jsx */}
      {/* Could be verbose and add curly brackets to revert back to javascript */}
      <Header title="Recipe Step Tracker" />
      <main>{children}</main>
    </>
  );
}
