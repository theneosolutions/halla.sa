// pages/payment.js

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const PaymentPage = () => {
  const router = useRouter()
  const { user, amount, description,packageId, callbackUrl } = router.query;
  console.log("🚀 ~ PaymentPage ~ router.query:", router.query)
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Capture the form submit button click event
    const handleSubmit = async (event) => {
      event.preventDefault();

      // Serialize form data
      const formData = new FormData(event.target);
      const errors = {};
      const cardholderName = formData.get('source[name]');
      if (cardholderName.length < 3) {
        errors['source[name]'] = 'Cardholder name should have at least 3 characters';
      }

      // Check if month has exactly 2 digits
      const month = formData.get('source[month]');
      if (month.length !== 2) {
        errors['source[month]'] = 'Month should be 2 digits';
      }

      // Check if year is not greater than 2
      const year = formData.get('source[year]');
      if (year.length !== 2) {
        errors['source[year]'] = 'Year should be 2 digits';
      }

      // Check if CVC is not greater than 4 digits
      const cvc = formData.get('source[cvc]');
      if (cvc.length > 4) {
        errors['source[cvc]'] = 'CVC should not be greater than 4 digits';
      }
      setErrors(errors);

      try {
        // Send a POST request to Moyasar to create a payment
        const response = await fetch('https://api.moyasar.com/v1/payments', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          const paymentData = await response.json();
          const paymentId = paymentData.id;
          const validationResponse = await fetch(`https://backendcode.halla.sa/transactions`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: Number(user),
              amount: amount,
              description: description,
              paymentId: paymentId,
              package: Number(packageId)
            })
          });
          if (validationResponse.ok) {
            // Validation successful
            console.log('Transaction validated successfully.');
            window.location.href = paymentData.source.transaction_url;

          } else {
            // Handle validation error
            console.error('Failed to validate transaction:', validationResponse.statusText);
          }
        } else {
          const errorResponse = await response.json();
          if (errorResponse && errorResponse.errors) {
            const errorMessages = {};
            Object.keys(errorResponse.errors).forEach((key) => {
              const formattedKey = key == 'company' ? `source[number]` : `source[${key}]`; // Format the error key
              const errorMessage = errorResponse.errors[key].map((msg) => msg.charAt(0).toUpperCase() + msg.slice(1)).join(', ');
              errorMessages[formattedKey] = `${key.charAt(0).toUpperCase() + key.slice(1)} ${errorMessage}`;
            });
            setErrors(errorMessages);
          } else {
            console.error('Failed to create payment:', response.statusText);
          }
        }
      } catch (error) {
        console.error('Error creating payment:', error);
      }
    };

    // Attach submit event listener to the form
    const form = document.getElementById('paymentForm');
    form.addEventListener('submit', handleSubmit);

    // Cleanup function
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, [amount, description, callbackUrl]);

  const clearError = (field) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[field];
      return newErrors;
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Payment Form</h1>
        <form id="paymentForm" acceptCharset="UTF-8" action="https://api.moyasar.com/v1/payments.html" method="POST">
          <input type="hidden" name="callback_url" value={callbackUrl} />
          <input type="hidden" name="publishable_api_key" value={process.env.NEXT_PUBLIC_PUBLISHABLE_API_KEY} />
          <input type="hidden" name="amount" value={Number(amount) * 100} />
          <input type="hidden" name="source[type]" value="creditcard" />
          <input type="hidden" name="description" value={description} />
          <div className="mb-4">
            <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700">
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardholderName"
              name="source[name]"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 my-2"
              placeholder="John Doe"
              onChange={() => clearError('source[name]')}
            />
            {errors['source[name]'] && <p className="text-red-500 text-sm mt-1">{errors['source[name]']}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="source[number]"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 my-2"
              placeholder="**** **** **** ****"
              onChange={() => clearError('source[name]')}
            />

            {errors['source[number]'] && <p className="text-red-500 text-sm mt-1">{errors['source[number]']}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="expiryMonth" className="block text-sm font-medium text-gray-700">
                Expiry Month
              </label>
              <input
                type="text"
                id="expiryMonth"
                name="source[month]"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 my-2"
                placeholder="MM"
                onChange={() => clearError('source[name]')}
              />
              {errors['source[month]'] && <p className="text-red-500 text-sm mt-1">{errors['source[month]']}</p>}
            </div>
            <div>
              <label htmlFor="expiryYear" className="block text-sm font-medium text-gray-700">
                Expiry Year
              </label>
              <input
                type="text"
                id="expiryYear"
                name="source[year]"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 my-2"
                placeholder="YY"
                onChange={() => clearError('source[name]')}
              />
              {errors['source[year]'] && <p className="text-red-500 text-sm mt-1">{errors['source[year]']}</p>}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              name="source[cvc]"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 my-2"
              placeholder="123"
              onChange={() => clearError('source[name]')}
            />
            {errors['source[cvc]'] && <p className="text-red-500 text-sm mt-1">{errors['source[cvc]']}</p>}
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            {`Pay ${(Number(amount)).toFixed(2)} SAR`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
