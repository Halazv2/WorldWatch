import { PaperClipIcon } from '@heroicons/react/20/solid';
import { useSelector } from 'react-redux';
import Container from '@/components/container';

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Container className="flex flex-col gap-4 h-full">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">User Profile</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and information.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <span className="flex-grow">{user.full_name}</span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <span className="flex-grow">
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </Container>
  );
}
