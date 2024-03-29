// pages/error.js

import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Payment Error</h1>
        <p className="text-red-500 text-lg text-center mb-6">Oops! Something went wrong with your payment.</p>
        <p className="text-gray-600 text-sm text-center mb-6">We apologize for the inconvenience. Please try again later.</p>
        <div className="flex justify-center">
          <Link href="/" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-center">
              Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
