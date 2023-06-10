import React from 'react';
import NavBar from './navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main className="max-w-6xl mx-auto h-[100vh]">{children}</main>
      <Footer />
    </div>
  );
}
