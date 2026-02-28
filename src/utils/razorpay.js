const RAZORPAY_KEY_ID = 'rzp_test_6kz5nGEzi8uXRw';

const getBookingAmount = (carName) => {
  const car = carName.toLowerCase();
  if (car.includes('wagnor') || car.includes('dzire') || car.includes('ertiga')) return 600;
  if (car.includes('carens') || car.includes('innova') || car.includes('crysta')) return 1000;
  if (car.includes('tempo') || car.includes('traveller') || car.includes('urbania')) return 2000;
  return 600;
};

export const initiatePayment = (carName, tourTitle, onSuccess, onFailure) => {
  const amount = getBookingAmount(carName);
  
  const options = {
    key: RAZORPAY_KEY_ID,
    amount: amount * 100,
    currency: 'INR',
    name: 'Delhi Tour Cab',
    description: `Booking for ${carName} - ${tourTitle}`,
    handler: function (response) {
      onSuccess(response);
    },
    prefill: {
      name: '',
      email: '',
      contact: ''
    },
    theme: {
      color: '#f97316'
    },
    modal: {
      ondismiss: function() {
        onFailure && onFailure('Payment cancelled');
      }
    }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
