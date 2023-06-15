import logo from '@/assets/image/logo.png';
import { useRegister } from '@/hooks/auth/useRegister';
import { Link } from 'react-router-dom';

export default function Register() {
  const { state, isLoading, isError, error, handleChange, handleSubmit } = useRegister();
  const { full_name, email, password, password_confirmation } = state;
  return (
    <>
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <img className="mx-auto h-10 w-auto" src={logo} alt="logo" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create new account</h2>
          </div>
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div className="relative -space-y-px rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Full Name
                </label>
                <input
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 sm:text-sm sm:leading-6 p-2"
                  placeholder="Full Name"
                  type="text"
                  name="full_name"
                  value={full_name}
                  onChange={handleChange}
                />
                {isError && <p className="text-secondary">{error.data.errors.full_name}</p>}
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 sm:text-sm sm:leading-6 p-2"
                  placeholder="Email address"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              {isError && <p className="text-secondary">{error.data.errors.email}</p>}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2"
                  placeholder="Confirm Password"
                  type="password"
                  name="password_confirmation"
                  value={password_confirmation}
                  onChange={handleChange}
                />
              </div>
              {isError && <p className="text-secondary">{error.data.errors.password}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-blacktransition ease-in-out duration-150"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </form>
          <span className="text-center text-sm leading-6 text-gray-500 w-full flex justify-center">
            <Link to="/login">
              Already have an account? <span className="font-semibold text-dark hover:text-light">Sign in</span>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
