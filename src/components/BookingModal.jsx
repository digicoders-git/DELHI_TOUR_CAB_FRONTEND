import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCar, FaUser, FaMapMarkerAlt, FaUsers, FaChild, FaPlus, FaMinus, FaSpinner } from 'react-icons/fa';
import PhoneInput from './PhoneInput';
import { initiatePayment, sendWhatsAppConfirmation } from '../utils/razorpay';
import { useNavigate } from 'react-router-dom';

const BookingModal = ({ isOpen, onClose, carDetails, pickupOptions, dropOptions }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupDate: '',
    pickupTime: '',
    pickupLocation: '',
    dropLocation: '',
    adults: 1,
    children: 0,
    specialRequests: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    initiatePayment(
      carDetails.carName,
      carDetails.tourTitle,
      formData,
      (response) => {
        setLoading(false);
        sendWhatsAppConfirmation(
          carDetails.carName,
          carDetails.tourTitle,
          formData,
          response.razorpay_payment_id,
          carDetails.bookingAmount
        );
        onClose();
        navigate('/thank-you');
      },
      () => { setLoading(false); },
      carDetails.bookingAmount ? Number(carDetails.bookingAmount) : undefined
    );
  };

  const handleCountChange = (field, type) => {
    setFormData(prev => ({
      ...prev,
      [field]: type === 'inc' ? prev[field] + 1 : Math.max(field === 'adults' ? 1 : 0, prev[field] - 1)
    }));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-4 sm:my-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-400 p-4 sm:p-6 relative rounded-t-2xl">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white hover:bg-white/20 p-2 rounded-full transition-all z-10"
            >
              <FaTimes size={18} />
            </button>
            <h2 className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 pr-8">Complete Your Booking</h2>
            <p className="text-orange-100 text-xs sm:text-sm">Fill in your details to proceed with payment</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-6 sm:space-y-8 max-h-[80vh] sm:max-h-[70vh] overflow-y-auto">

            {/* Vehicle Details */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 sm:p-6 rounded-2xl border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <FaCar className="text-lg sm:text-2xl text-white" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-gray-800">Selected Vehicle</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-xl">
                  <p className="text-xs text-gray-500 font-semibold mb-1">Vehicle</p>
                  <p className="font-bold text-gray-800 text-sm">{carDetails.carName}</p>
                </div>
                <div className="bg-white p-3 rounded-xl">
                  <p className="text-xs text-gray-500 font-semibold mb-1">Service</p>
                  <p className="font-bold text-gray-800 text-sm">{carDetails.tourTitle}</p>
                </div>
                <div className="bg-white p-3 rounded-xl">
                  <p className="text-xs text-gray-500 font-semibold mb-1">Booking Amount</p>
                  <p className="text-lg sm:text-xl font-black text-orange-600">₹{carDetails.bookingAmount}</p>
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <FaUser className="text-white" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-gray-800">Personal Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Full Name</label>
                  <input
                    type="text" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Contact Number</label>
                  <PhoneInput
                    required value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Email Address</label>
                  <input
                    type="email" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    placeholder="Enter email address"
                  />
                </div>
              </div>
            </div>

            {/* Trip Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-gray-800">Trip Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Pickup Location</label>
                  {pickupOptions ? (
                    <select
                      required value={formData.pickupLocation}
                      onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    >
                      <option value="">-- Select Pickup Point --</option>
                      {pickupOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                    </select>
                  ) : (
                    <input
                      type="text" required value={formData.pickupLocation}
                      onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                      placeholder="Enter pickup location"
                    />
                  )}
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Drop Location</label>
                  {dropOptions ? (
                    <select
                      value={formData.dropLocation}
                      onChange={(e) => setFormData({ ...formData, dropLocation: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    >
                      <option value="">-- Select Drop Point --</option>
                      {dropOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                    </select>
                  ) : (
                    <input
                      type="text" value={formData.dropLocation}
                      onChange={(e) => setFormData({ ...formData, dropLocation: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                      placeholder="Enter drop location"
                    />
                  )}
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Pickup Date</label>
                  <input
                    type="date" required value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Pickup Time</label>
                  <input
                    type="time" required value={formData.pickupTime}
                    onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Passengers */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                  <FaUsers className="text-white" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-gray-800">Number of Travellers</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { field: 'adults', label: 'Adults', icon: <FaUsers className="text-purple-500" />, color: 'purple' },
                  { field: 'children', label: 'Children (Below 8)', icon: <FaChild className="text-pink-500" />, color: 'pink' }
                ].map(({ field, label, icon, color }) => (
                  <div key={field}>
                    <label className="text-xs sm:text-sm font-bold text-gray-700 mb-2 flex items-center gap-1">{icon} {label}</label>
                    <div className={`flex items-center gap-2 bg-gradient-to-r from-${color}-50 to-pink-50 p-3 rounded-2xl border-2 border-${color}-100`}>
                      <button type="button" onClick={() => handleCountChange(field, 'dec')}
                        className={`w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-xl shadow text-${color}-600 hover:bg-${color}-600 hover:text-white transition-all flex-shrink-0`}>
                        <FaMinus size={12} />
                      </button>
                      <div className="flex-1 text-center">
                        <div className={`text-2xl sm:text-4xl font-black text-${color}-600`}>{formData[field]}</div>
                        <div className="text-xs text-gray-500 font-semibold">{field === 'adults' ? 'Passengers' : 'Kids'}</div>
                      </div>
                      <button type="button" onClick={() => handleCountChange(field, 'inc')}
                        className={`w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-xl shadow text-${color}-600 hover:bg-${color}-600 hover:text-white transition-all flex-shrink-0`}>
                        <FaPlus size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="text-sm font-bold text-gray-700 mb-2 block">Special Requests (Optional)</label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
                placeholder="Any special requirements or notes..."
                rows="3"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={onClose}
                className="flex-1 px-4 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold text-sm sm:text-base hover:bg-gray-50 transition-all">
                Cancel
              </button>
              <button type="submit" disabled={loading}
                className="flex-1 px-4 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-orange-400 text-white rounded-xl font-bold text-sm sm:text-lg hover:from-orange-700 hover:to-orange-500 transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {loading ? <><FaSpinner className="animate-spin" /> Processing...</> : 'PROCEED TO PAYMENT'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
