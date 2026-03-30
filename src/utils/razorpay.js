const RAZORPAY_KEY_ID = 'rzp_live_SMIMlYKZPOKIvd';

export const getBookingAmount = (carName) => {
  const car = carName.toLowerCase();
  // Bus packages — per person fare
  if (car.includes('luxury ac deluxe')) return 499;
  if (car.includes('hi tech') || car.includes('air suspension')) return 599;
  if (car.includes('tata ac super deluxe')) return 699;
  // Delhi sightseeing bus fares
  if (car.includes('volvo') || car.includes('bharat benz')) return 1099;
  if (car.includes('tata ac luxury super deluxe')) return 1199;
  // Car packages — advance booking amount
  if (car.includes('wagnor') || car.includes('dzire') || car.includes('ertiga')) return 600;
  if (car.includes('carens') || car.includes('innova') || car.includes('crysta')) return 1000;
  if (car.includes('tempo') || car.includes('traveller') || car.includes('urbania')) return 2000;
  return 600;
};

export const initiatePayment = (carName, tourTitle, userDetails, onSuccess, onFailure, overrideAmount) => {
  if (!window.Razorpay) {
    alert('Payment gateway failed to load. Please refresh the page and try again.');
    onFailure && onFailure('Razorpay not loaded');
    return;
  }

  const amount = overrideAmount || getBookingAmount(carName);
  
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

  try {
    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function(response) {
      onFailure && onFailure(response.error.description);
    });
    rzp.open();
  } catch (err) {
    console.error('Razorpay error:', err);
    onFailure && onFailure(err.message);
  }
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

*Trip Details:*
📅 Pickup Date: ${userDetails.pickupDate}
🕐 Pickup Time: ${userDetails.pickupTime}
📍 Pickup: ${userDetails.pickupLocation}
📍 Drop: ${userDetails.dropLocation || 'N/A'}

*Passenger Details:*
👥 Adults: ${userDetails.adults}
👶 Children: ${userDetails.children}
${userDetails.specialRequests ? `📝 Special Requests: ${userDetails.specialRequests}` : ''}

*Payment Details:*
✅ Payment ID: ${paymentId}
✅ Status: SUCCESS

Thank you for booking with Delhi Tour Cab! 🚕`;
  
  window.open(`https://wa.me/919278063535?text=${encodeURIComponent(message)}`, '_blank');
  
  if (userDetails.email) {
    fetch('https://delhitourcab-backend.onrender.com/api/send-booking-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ carName, tourTitle, userDetails, paymentId, bookingAmount })
    }).catch(err => console.error('Email error:', err));
  }
};
