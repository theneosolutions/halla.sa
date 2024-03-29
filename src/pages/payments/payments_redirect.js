// pages/payments_redirect.js

import { useRouter } from 'next/router';

const PaymentsRedirectPage = () => {
  const router = useRouter();
  const { id, status, message } = router.query;

  let statusMessage = '';

  switch (status) {
    case 'initiated':
      statusMessage = 'Payment has been initiated. The cardholder has not paid yet.';
      break;
    case 'paid':
      statusMessage = 'Payment was successful.';
      break;
    case 'failed':
      statusMessage = 'Payment failed. ' + message; // Append error message if available
      break;
    case 'authorized':
      statusMessage = 'Payment has been authorized for manual capture.';
      break;
    case 'captured':
      statusMessage = 'Payment has been captured successfully.';
      break;
    case 'refunded':
      statusMessage = 'Payment has been refunded successfully.';
      break;
    case 'voided':
      statusMessage = 'Payment has been voided/cancelled.';
      break;
    case 'verified':
      statusMessage = 'Card verification successful.';
      break;
    default:
      statusMessage = 'Unknown payment status.';
      break;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Payment Status</h1>
        <p className="text-lg text-center mb-6">{statusMessage}</p>
      </div>
    </div>
  );
};

export default PaymentsRedirectPage;
