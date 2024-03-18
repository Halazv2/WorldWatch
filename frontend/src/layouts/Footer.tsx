import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-primary">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <Link className="text-neutral-800 dark:text-neutral-400" to="https://github/Halazv2">
          &nbsp;Halazv2
        </Link>
      </div>
    </footer>
  );
}
