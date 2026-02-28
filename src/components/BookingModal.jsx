import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCar, FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaChild, FaPlus, FaMinus, FaMoneyBillWave } from 'react-icons/fa';

const BookingModal = ({ isOpen, onClose, carDetails, onBookingConfirm }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookingConfirm(formData);
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-400 p-6 relative rounded-t-2xl">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-all z-10"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-3xl font-bold text-white mb-2">Complete Your Booking</h2>
            <p className="text-orange-100 text-sm">Fill in your details to proceed with payment</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
            
            {/* Car Details Section */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-2xl border-2 border-orange-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <FaCar className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Selected Vehicle</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-xs text-gray-500 font-semibold mb-1">Vehicle</p>
                  <p className="font-bold text-gray-800">{carDetails.carName}</p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-xs text-gray-500 font-semibold mb-1">Service</p>
                  <p className="font-bold text-gray-800">{carDetails.tourTitle}</p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <p className="text-xs text-gray-500 font-semibold mb-1">Booking Amount</p>
                  <p className="text-xl font-black text-orange-600">₹{carDetails.bookingAmount}</p>
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <FaUser className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Personal Details</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Contact Number</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
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
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Trip Details</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Pickup Location</label>
                  <input
                    type="text"
                    required
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    placeholder="Enter pickup location"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Drop Location</label>
                  <input
                    type="text"
                    value={formData.dropLocation}
                    onChange={(e) => setFormData({ ...formData, dropLocation: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    placeholder="Enter drop location"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Pickup Date</label>
                  <input
                    type="date"
                    required
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    placeholder="dd/mm/yyyy"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Pickup Time</label>
                  <input
                    type="time"
                    required
                    value={formData.pickupTime}
                    onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    placeholder="--:--"
                  />
                </div>
              </div>
            </div>

            {/* Passenger Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                  <FaUsers className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Number of Travellers</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-bold text-gray-700 mb-3 block flex items-center gap-2">
                    <FaUsers className="text-purple-500" /> Adults
                  </label>
                  <div className="flex items-center gap-4 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-2xl border-2 border-purple-100">
                    <button
                      type="button"
                      onClick={() => handleCountChange('adults', 'dec')}
                      className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow text-purple-600 hover:bg-purple-600 hover:text-white transition-all"
                    >
                      <FaMinus />
                    </button>
                    <div className="flex-1 text-center">
                      <div className="text-4xl font-black text-purple-600">{formData.adults}</div>
                      <div className="text-xs text-gray-500 font-semibold mt-1">Passengers</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCountChange('adults', 'inc')}
                      className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow text-purple-600 hover:bg-purple-600 hover:text-white transition-all"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-700 mb-3 block flex items-center gap-2">
                    <FaChild className="text-pink-500" /> Children (Below 8)
                  </label>
                  <div className="flex items-center gap-4 bg-gradient-to-r from-pink-50 to-orange-50 p-4 rounded-2xl border-2 border-pink-100">
                    <button
                      type="button"
                      onClick={() => handleCountChange('children', 'dec')}
                      className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow text-pink-600 hover:bg-pink-600 hover:text-white transition-all"
                    >
                      <FaMinus />
                    </button>
                    <div className="flex-1 text-center">
                      <div className="text-4xl font-black text-pink-600">{formData.children}</div>
                      <div className="text-xs text-gray-500 font-semibold mt-1">Kids</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCountChange('children', 'inc')}
                      className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow text-pink-600 hover:bg-pink-600 hover:text-white transition-all"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="text-sm font-bold text-gray-700 mb-2 block">Special Requests (Optional)</label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
                placeholder="Any special requirements, preferences, or notes for your journey..."
                rows="4"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-4 bg-gradient-to-r from-orange-600 to-orange-400 text-white rounded-xl font-bold text-lg hover:from-orange-700 hover:to-orange-500 transition-all shadow-lg"
              >
                CONFIRM BOOKING
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
