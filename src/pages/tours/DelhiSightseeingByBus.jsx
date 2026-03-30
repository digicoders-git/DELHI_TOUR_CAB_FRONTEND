import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBus, FaClock, FaRupeeSign, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import BookingModal from '../../components/BookingModal';
import { useNavigate } from 'react-router-dom';

const busSchedule = [
    {
        busType: 'Luxury AC Deluxe (2+2) Pushback Seater',
        departure: '7:00 AM',
        returnTime: '11:30 PM',
        fare: '499',
    },
    {
        busType: 'Volvo/Bharat Benz AC Pushback Seater (2+2)',
        departure: '7:05 AM',
        returnTime: '11:35 PM',
        fare: '599',
    },
    {
        busType: 'Tata AC Luxury Super Deluxe Pushback Seater (2+2)',
        departure: '7:10 AM',
        returnTime: '11:45 PM',
        fare: '699',
    },
];

const includes = [
    'AC Bus with professional driver',
    'Full Day Delhi Sightseeing',
    'Comfortable pushback seats',
    'All taxes included',
];

const notes = [
    'India Gate, Qutub Minar, Red Fort & more covered.',
    'Entry tickets to monuments are not included.',
    'Meals & refreshments are not included.',
    'Advance booking required to confirm seat.',
    'Payment via GPay / PhonePe / UPI: +91-9278063535',
];

const busPickupOptions = [
    'New Delhi Railway Station Gate Num 2 (Paharganj Side) at 9:15 AM',
    'NDLS Metro (Paharganj) Gate Number 3 at 9:20 AM',
    'Sheela Cinema Paharganj at 9:25 AM',
    'Karol Bagh Metro Station Gate Num 2 at 9:30 AM',
    'R.K.Ashram Marg Metro Station Gate Num 3 at 9:40 AM',
    'Patel Chowk Metro Station Gate Num 1 at 10:00 AM',
    'Birla Temple at 10:20 AM',
    'India Gate at 10:50 AM',
];

const busDropOptions = [
    'New Delhi Railway Station Gate Num 2 Paharganj',
    'NDLS Metro Gate Num 3',
    'Sheela Cinema Paharganj',
    'Karol Bagh Metro Station',
    'R.K.Ashram Marg Metro Station at 7:00 PM',
    'Red Fort at 6:30 PM',
];

const DelhiSightseeingByBus = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedBus, setSelectedBus] = useState(null);
    const navigate = useNavigate();

    const handleBook = (bus) => {
        setSelectedBus(bus);
        setModalOpen(true);
    };

    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-400 py-12 md:py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
                />
                <div className="max-w-5xl mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-2 text-orange-100 font-semibold text-sm tracking-widest uppercase mb-3">
                        <span className="w-8 h-[2px] bg-orange-200" />
                        Bus Tour Package
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-3 leading-tight">
                        Budget Delhi Sightseeing
                        <span className="block text-orange-100 text-2xl md:text-3xl font-bold mt-1">by Bus — Per Person</span>
                    </h1>
                    <p className="text-orange-100 text-base md:text-lg max-w-2xl">
                        Explore Delhi's iconic landmarks in a comfortable AC bus — India Gate, Red Fort, Qutub Minar & more in one day.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">

                {/* Bus Schedule Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                >
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 flex items-center gap-3">
                        <FaBus className="text-orange-400 text-xl" />
                        <h2 className="text-white font-bold text-lg">Bus Schedule & Fare</h2>
                    </div>

                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-orange-50 border-b border-orange-100">
                                    <th className="text-left px-6 py-4 font-bold text-gray-700 w-[40%]">Bus Type</th>
                                    <th className="text-center px-4 py-4 font-bold text-gray-700">
                                        <span className="flex items-center justify-center gap-1"><FaClock className="text-orange-500" /> Departure</span>
                                    </th>
                                    <th className="text-center px-4 py-4 font-bold text-gray-700">
                                        <span className="flex items-center justify-center gap-1"><FaClock className="text-orange-500" /> Return</span>
                                    </th>
                                    <th className="text-center px-4 py-4 font-bold text-gray-700">
                                        <span className="flex items-center justify-center gap-1"><FaRupeeSign className="text-orange-500" /> Fare</span>
                                    </th>
                                    <th className="text-center px-4 py-4 font-bold text-gray-700">Booking</th>
                                </tr>
                            </thead>
                            <tbody>
                                {busSchedule.map((bus, i) => (
                                    <tr key={i} className={`border-b border-gray-100 hover:bg-orange-50/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                        <td className="px-6 py-5">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <FaBus className="text-orange-500 text-sm" />
                                                </div>
                                                <span className="font-semibold text-gray-800 leading-snug">{bus.busType}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-5 text-center">
                                            <span className="inline-block bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-xs">{bus.departure}</span>
                                        </td>
                                        <td className="px-4 py-5 text-center">
                                            <span className="inline-block bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-xs">{bus.returnTime}</span>
                                        </td>
                                        <td className="px-4 py-5 text-center">
                                            <span className="text-orange-600 font-black text-lg">₹{bus.fare}/-</span>
                                            <div className="text-gray-400 text-xs">per person</div>
                                        </td>
                                        <td className="px-4 py-5 text-center">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => handleBook(bus)}
                                                className="bg-gradient-to-r from-orange-600 to-orange-400 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow hover:shadow-md transition-all cursor-pointer"
                                            >
                                                Book Now
                                            </motion.button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden divide-y divide-gray-100">
                        {busSchedule.map((bus, i) => (
                            <div key={i} className="p-5 space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FaBus className="text-orange-500" />
                                    </div>
                                    <p className="font-bold text-gray-800 text-sm leading-snug">{bus.busType}</p>
                                </div>
                                <div className="grid grid-cols-3 gap-2 text-center">
                                    <div className="bg-green-50 rounded-xl p-2">
                                        <div className="text-xs text-gray-500 mb-1">Departure</div>
                                        <div className="font-bold text-green-700 text-sm">{bus.departure}</div>
                                    </div>
                                    <div className="bg-blue-50 rounded-xl p-2">
                                        <div className="text-xs text-gray-500 mb-1">Return</div>
                                        <div className="font-bold text-blue-700 text-sm">{bus.returnTime}</div>
                                    </div>
                                    <div className="bg-orange-50 rounded-xl p-2">
                                        <div className="text-xs text-gray-500 mb-1">Fare</div>
                                        <div className="font-bold text-orange-600 text-sm">₹{bus.fare}/-</div>
                                    </div>
                                </div>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleBook(bus)}
                                    className="w-full bg-gradient-to-r from-orange-600 to-orange-400 text-white py-3 rounded-xl font-bold text-sm shadow cursor-pointer"
                                >
                                    Book Now
                                </motion.button>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Includes & Notes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
                    >
                        <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                            <FaCheckCircle className="text-green-500" /> What's Included
                        </h3>
                        <ul className="space-y-3">
                            {includes.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                        className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
                    >
                        <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                            <FaInfoCircle className="text-orange-500" /> Important Notes
                        </h3>
                        <ul className="space-y-3">
                            {notes.map((note, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                    <span className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full" />
                                    </span>
                                    {note}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Booking Modal */}
            {selectedBus && (
                <BookingModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    pickupOptions={busPickupOptions}
                    dropOptions={busDropOptions}
                    carDetails={{
                        carName: selectedBus.busType,
                        tourTitle: 'Budget Delhi Sightseeing – Bus Tour Per Person',
                        bookingAmount: selectedBus.fare,
                    }}
                />
            )}
        </div>
    );
};

export default DelhiSightseeingByBus;
