/* eslint-disable react/prop-types */
import NavBar from './navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="h-full">
      <NavBar />
      <main className="max-w-7xl mx-auto mt-6">{children}</main>
      <Footer />
    </div>
  );
}
