import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { agra, jaipur, delhi, haridwar, rishikesh, mathura, delhiKhatushyam, khatushyam, tourHaridwar, tourDelhiLocalSightseeing, tourAgra, tourMathura, tourJaipur, tourKhatushyam } from '../utils/images';

const PopularTours = () => {
    const navigate = useNavigate();

    const tours = [
        { name: 'OneDay Delhi Sightseeing Tour', path: '/tour/delhi-local-sightseeing', image: tourDelhiLocalSightseeing, price: '₹2,200/-' },

        { name: 'Delhi to Agra Same Day Tour', path: '/tour/delhi-to-agra-tour', image: tourAgra, price: ' ₹6,500/-' },
        
        { name: 'Delhi to Mathura Vrindavan', path: '/tour/delhi-to-mathura-vrindavan', image: tourMathura, price: '₹7,500/-' },

        { name: 'Delhi to Jaipur Same Day Return Tour', path: '/tour/delhi-to-jaipur-tour', image: tourJaipur  , price: ' ₹7500/' },

        { name: 'Delhi to Haridwar Same Day Tour', path: '/tour/delhi-to-haridwar-tour', image: tourHaridwar, price: '₹6,500' },

        { name: 'Delhi Khatushyam Ji Tour', path: '/tour/delhi-to-khatu-shyam-one-day-tour', image: tourKhatushyam, price: '₹5,500' },
    ];

    const agraItems = Array(6).fill('Same Day Delhi to Agra Tour by Bus – Per Person');
    const delhiItems = Array(6).fill('Budget Delhi Sightseeing – Bus Tour Per Person');

    return (
        <section className="py-16 bg-white border-t border-gray-100">
            {/* Marquee Banner */}
            <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 overflow-hidden shadow-md mb-10">
                {/* Row 1: Left to Right — clickable */}
                <div className="overflow-hidden py-2 border-b border-orange-400">
                    <div
                        className="flex gap-12 whitespace-nowrap cursor-pointer"
                        style={{ animation: 'marqueeLeft 20s linear infinite' }}
                        onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
                        onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
                        onClick={() => { navigate('/tour/delhi-to-agra-by-bus'); window.scrollTo(0, 0); }}
                    >
                        {agraItems.map((item, i) => (
                            <span key={i} className="text-white font-semibold text-sm md:text-base tracking-wide select-none hover:text-orange-200 transition-colors">
                                ✦ {item}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Row 2: Right to Left */}
                <div className="overflow-hidden py-2">
                    <div
                        className="flex gap-12 whitespace-nowrap cursor-pointer"
                        style={{ animation: 'marqueeRight 20s linear infinite' }}
                        onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
                        onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
                        onClick={() => { navigate('/tour/budget-delhi-sightseeing-by-bus'); window.scrollTo(0, 0); }}
                    >
                        {delhiItems.map((item, i) => (
                            <span key={i} className="text-orange-100 font-semibold text-sm md:text-base tracking-wide select-none hover:text-white transition-colors">
                                ★ {item}
                            </span>
                        ))}
                    </div>
                </div>
                <style>{`
                    @keyframes marqueeLeft {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes marqueeRight {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                `}</style>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div className="text-center mx-auto">
                        <h2 className="text-3xl font-bold mx-auto text-gray-800 mb-2">
                            Popular <span className="text-orange-500">Our Top Tour Packages</span>
                        </h2>
                        <p className="text-gray-600">Discover handpicked destinations around Delhi with our premium cab services.</p>
                    </div>
                    <button
                        onClick={() => navigate('/tour-packages')}
                        className="text-orange-500 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                        View All Packages →
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.map((tour, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg cursor-pointer group border border-gray-100"
                            onClick={() => {
                                navigate(tour.path);
                                window.scrollTo(0, 0);
                            }}
                        >
                            <div className="relative">
                                <img
                                    src={tour.image}
                                    alt={tour.name}
                                    className="w-full block"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">{tour.name}</h3>
                                <div className="flex items-center text-sm text-orange-500 mb-4 font-bold uppercase tracking-wider">
                                    Full Day • AC Cab • Guided
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center text-yellow-500">
                                            {[...Array(5)].map((_, i) => <FaStar key={i} className="text-xs mr-1" />)}
                                            <span className="text-gray-400 text-xs ml-1">(4.9)</span>
                                        </div>
                                        <span className="text-gray-800 font-bold text-lg">{tour.price}</span>
                                    </div>
                                    <span className="text-orange-500 font-bold text-sm">Explore Tour →</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularTours;
