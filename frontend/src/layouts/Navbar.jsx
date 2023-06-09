import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import logo from '@/assets/image/logo.png';
import { navigation } from '@/constants';
import { useLogout } from '@/hooks/auth/useLogout';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleLogout } = useLogout();
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <header className="bg-primary shadow-slate-800 ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-16 w-auto" src={logo} alt="" loading="lazy" />
            {isLoggedIn}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-dark" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {isLoggedIn &&
            navigation.map((item) => (
              <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-dark">
                {item.name}
              </Link>
            ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <span onClick={() => handleLogout()} className="text-sm font-semibold leading-6 text-dark">
            Log out <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-16 w-auto" src={logo} alt="" />
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-dark" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark "
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLogout();
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-dark "
                >
                  Log out
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
