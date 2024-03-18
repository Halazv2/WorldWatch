import logo from '@/assets/image/logo.png';
import { useLogin } from '@/hooks/auth/useLogin';
import { Link } from 'react-router-dom';

export default function Login() {
  const { state, isLoading, isError, error, handleChange, handleSubmit } = useLogin();
  const { email, password } = state;
  return (
    <>
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <img className="mx-auto h-10 w-auto" src={logo} alt="logo" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
          </div>
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div className="relative -space-y-px rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 sm:text-sm sm:leading-6 p-2"
                  placeholder="Email address"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm leading-6">
                <a className="font-semibold text-dark hover:text-light">Forgot password?</a>
              </div>
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
          {isError && <p className="text-secondary">{error.data.message}</p>}
          <p className="text-center text-sm leading-6 text-gray-500">
            <Link to="/register">
              Not a member? <span className="font-semibold text-dark hover:text-light">Sign up now</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
