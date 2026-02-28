import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCar, FaUser, FaPhone, FaEnvelope, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const BookingModal = ({ isOpen, onClose, carDetails, onBookingConfirm }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupDate: '',
    pickupLocation: '',
    dropLocation: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookingConfirm(formData);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-400 p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-all"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl font-bold text-white mb-2">Complete Your Booking</h2>
            <p className="text-orange-100 text-sm">Fill in your details to proceed with payment</p>
          </div>

          {/* Car Details */}
          <div className="p-6 bg-orange-50 border-b border-orange-100">
            <div className="flex items-center gap-4">
              <FaCar className="text-3xl text-orange-600" />
              <div>
                <h3 className="font-bold text-gray-800">{carDetails.carName}</h3>
                <p className="text-sm text-gray-600">{carDetails.tourTitle}</p>
                <p className="text-lg font-bold text-orange-600 mt-1">
                  Booking Amount: ₹{carDetails.bookingAmount}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                <FaUser className="text-orange-500" /> Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                <FaPhone className="text-orange-500" /> Phone Number *
              </label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                placeholder="10 digit mobile number"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                <FaEnvelope className="text-orange-500" /> Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                <FaCalendar className="text-orange-500" /> Pickup Date *
              </label>
              <input
                type="date"
                required
                value={formData.pickupDate}
                onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                <FaMapMarkerAlt className="text-orange-500" /> Pickup Location *
              </label>
              <input
                type="text"
                required
                value={formData.pickupLocation}
                onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                placeholder="Enter pickup address"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                <FaMapMarkerAlt className="text-orange-500" /> Drop Location
              </label>
              <input
                type="text"
                value={formData.dropLocation}
                onChange={(e) => setFormData({ ...formData, dropLocation: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                placeholder="Enter drop address (optional)"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-400 text-white rounded-xl font-bold hover:from-orange-700 hover:to-orange-500 transition-all shadow-lg"
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
