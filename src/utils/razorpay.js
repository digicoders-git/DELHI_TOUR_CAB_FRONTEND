const RAZORPAY_KEY_ID = 'rzp_test_6kz5nGEzi8uXRw';

export const getBookingAmount = (carName) => {
  const car = carName.toLowerCase();
  if (car.includes('wagnor') || car.includes('dzire') || car.includes('ertiga')) return 600;
  if (car.includes('carens') || car.includes('innova') || car.includes('crysta')) return 1000;
  if (car.includes('tempo') || car.includes('traveller') || car.includes('urbania')) return 2000;
  return 600;
};

export const initiatePayment = (carName, tourTitle, userDetails, onSuccess, onFailure) => {
  const amount = getBookingAmount(carName);
  
  const options = {
    key: RAZORPAY_KEY_ID,
    amount: amount * 100,
    currency: 'INR',
    name: 'Delhi Tour Cab',
    description: `Booking for ${carName} - ${tourTitle}`,
    handler: function (response) {
      onSuccess(response, userDetails);
    },
    prefill: {
      name: userDetails.name,
      email: userDetails.email,
      contact: userDetails.phone
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

export const sendWhatsAppConfirmation = (carName, tourTitle, userDetails, paymentId, bookingAmount) => {
  const message = `🎉 *BOOKING CONFIRMED* 🎉

*Car Details:*
🚗 Vehicle: ${carName}
📍 Tour: ${tourTitle}
💰 Booking Amount: ₹${bookingAmount}

*Customer Details:*
👤 Name: ${userDetails.name}
📞 Phone: ${userDetails.phone}
📧 Email: ${userDetails.email || 'N/A'}
📅 Pickup Date: ${userDetails.pickupDate}
📍 Pickup: ${userDetails.pickupLocation}
📍 Drop: ${userDetails.dropLocation || 'N/A'}

*Payment Details:*
✅ Payment ID: ${paymentId}
✅ Status: SUCCESS

Thank you for booking with Delhi Tour Cab! 🚕`;
  
  window.open(`https://wa.me/919278063535?text=${encodeURIComponent(message)}`, '_blank');
};
