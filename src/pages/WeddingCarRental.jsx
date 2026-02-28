import { motion } from 'framer-motion';
import { FaCar, FaUsers, FaGasPump, FaShieldAlt, FaPhone, FaWhatsapp, FaHeart, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { auddi, ToyotaFortuner, hondaCity, InnovaCrysta, mahindraThar, hundaiVerna, marcdess, kiaCarens, slider5 } from '../utils/images';
import PopularTours from '../components/PopularTours';
import { useEffect, useState } from 'react';
import { initiatePayment, getBookingAmount, sendWhatsAppConfirmation } from '../utils/razorpay';
import BookingModal from '../components/BookingModal';

const WeddingCarRental = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);

    const luxurycarss = [
        {
            name: 'Audi Luxury Sedan',
            image: auddi,
            capacity: '5 Seater',
            fuel: 'Petrol',
            price: 'Price On Request',
            description: 'Experience the ultimate luxury and style with our premium Audi sedan, perfect for grand wedding entries.',
            features: ['Premium Audio', 'Sunroof', 'Leather Seats', 'Automatic'],
            examples: 'Luxury Sedan'
        },
        {
            name: 'Mercedes-Benz',
            image: marcdess,
            capacity: '5 Seater',
            fuel: 'Petrol/Diesel',
            price: 'Price On Request',
            description: 'The epitome of elegance and class. Make your special day unforgettable with a Mercedes-Benz.',
            features: ['Iconic Style', 'Ultra Comfort', 'Climate Control', 'Premium'],
            examples: 'Premium Luxury'
        },
        {
            name: 'Toyota Fortuner',
            image: ToyotaFortuner,
            capacity: '7 Seater',
            fuel: 'Diesel',
            price: 'Price On Request',
            description: 'A majestic presence on the road. Highly popular choice for wedding processions and groom entries.',
            features: ['Majestic Presence', 'Powerful SUV', 'Spacious', 'Premium Interior'],
            examples: 'Luxury SUV'
        },
        {
            name: 'Toyota Innova Crysta',
            image: InnovaCrysta,
            capacity: '7 Seater',
            fuel: 'Diesel',
            price: 'Price On Request',
            description: 'Combining comfort and reliability, the Innova Crysta is the ideal choice for family and guest transport.',
            features: ['Maximum Comfort', 'Spacious Cabin', 'Reliable', 'Dual AC'],
            examples: 'Premium MUV'
        },
        {
            name: 'Mahindra Thar',
            image: mahindraThar,
            capacity: '4 Seater',
            fuel: 'Diesel/Petrol',
            price: 'Price On Request',
            description: 'Add a touch of swag and adventure to your wedding entry with our stylish and iconic Mahindra Thar.',
            features: ['Iconic Design', '4x4 Capability', 'Convertible Option', 'Sporty'],
            examples: 'Lifestyle SUV'
        },
        {
            name: 'Hyundai Verna',
            image: hundaiVerna,
            capacity: '5 Seater',
            fuel: 'Petrol/Diesel',
            price: 'Price On Request',
            description: 'Modern and sophisticated sedan with advanced features, perfect for elegant wedding guest mobility.',
            features: ['Futuristic Design', 'Comfortable', 'Smart Features', 'Sleek Look'],
            examples: 'Executive Sedan'
        },
        {
            name: 'Honda City',
            image: hondaCity,
            capacity: '5 Seater',
            fuel: 'Petrol',
            price: 'Price On Request',
            description: 'An elegant and refined choice for your wedding, offering a smooth ride and premium feel.',
            features: ['Smooth Drive', 'Premium Interiors', 'Sophisticated', 'Efficient'],
            examples: 'Premium Sedan'
        },
        {
            name: 'Kia Carens',
            image: kiaCarens,
            capacity: '7 Seater',
            fuel: 'Petrol/Diesel',
            price: 'Price On Request',
            description: 'Luxury MUV with modern aesthetics and versatile seating, ideal for transporting large wedding groups.',
            features: ['6 Airbags', 'Modern Features', 'Spacious', 'Stylish'],
            examples: 'Premium MUV'
        }
    ];

    const handleWhatsApp = (carssName = '') => {
        const text = carssName ? `Hello, I am interested in renting ${carssName} for Wedding Car Rental.` : 'Hello, I am interested in Wedding Car Rental services.';
        window.open(`https://wa.me/919278063535?text=${encodeURIComponent(text)}`, '_blank');
    };

    const handleCall = () => {
        window.location.href = 'tel:+919278063535';
    };

    const handlePayment = (carName) => {
        setSelectedCar(carName);
        setIsModalOpen(true);
    };

    const handleBookingConfirm = (userDetails) => {
        setIsModalOpen(false);
        initiatePayment(
            selectedCar,
            'Wedding Car Rental',
            userDetails,
            (response, userData) => {
                const bookingAmount = getBookingAmount(selectedCar);
                sendWhatsAppConfirmation(selectedCar, 'Wedding Car Rental', userData, response.razorpay_payment_id, bookingAmount);
                alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
            },
            (error) => {
                console.error('Payment failed:', error);
            }
        );
    };

    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                carDetails={{
                    carName: selectedCar,
                    tourTitle: 'Wedding Car Rental',
                    bookingAmount: selectedCar ? getBookingAmount(selectedCar) : 0
                }}
                onBookingConfirm={handleBookingConfirm}
            />
            {/* Hero Section */}
            <section className="relative w-full h-[300px] sm:h-[500px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden text-white mt-0 sm:mt-0">
                <div className="absolute inset-0 z-0">
                    <img
                        src={slider5}
                        alt="Wedding Car Rental"
                        className="w-full h-full object-cover object-center transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
                </div>

                <div className="relative z-10 max-w-7xl mt-[120px] md:-ml-[600px] px-4 text-center md:mb-[650px] text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-6xl font-bold mb-3 sm:mb-6 text-orange-500 drop-shadow-2xl"
                    >
                        Wedding Car Rental
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl mb-3 sm:mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-bold text-white px-2 italic"
                    >
                        Make Your Special Day More Elegant.
                    </motion.p>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        <button
                            onClick={() => navigate('/book-now')}
                            className="bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg cursor-pointer text-sm sm:text-base"
                        >
                            Book Now
                        </button>
                        <button
                            onClick={() => handleWhatsApp()}
                            className="bg-green-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-green-600 transition-all shadow-lg flex items-center gap-2 cursor-pointer text-sm sm:text-base"
                        >
                            <FaWhatsapp /> Quick Enquiry
                        </button>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 bg-white text-center border-b">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Premium Wedding <span className="text-orange-500">Transportation</span></h2>
                    <p className="text-gray-600 leading-relaxed text-lg italic text-justify">
                        "At Delhi Tour Cab, we specialize in providing luxurious and well-maintained cars for weddings. Whether it's for the groom's entry, the bride's arrival, or guest transportation, our premium fleet ensures a touch of class and sophistication to your celebration."
                    </p>
                </div>
            </section>

            {/* Luxury Fleet Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
                    >
                        Our Exclusive <span className="text-orange-500">Luxury Fleet</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {luxurycarss.map((carss, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-t-4 border-orange-500 flex flex-col"
                            >
                                <div className="relative bg-gray-100 p-0 overflow-hidden h-64 md:h-80">
                                    <img
                                        src={carss.image}
                                        alt={carss.name}
                                        className="w-full h-full object-contain scale-110 hover:scale-125 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5 flex-grow bg-white">
                                    <div className="flex justify-between items-start mb-4 bg-gradient-to-r from-orange-600 to-orange-400 p-3 rounded-xl shadow-inner">
                                        <h3 className="text-sm font-bold text-white flex-1 mr-2 leading-tight uppercase tracking-wide">{carss.name}</h3>
                                        <div className="text-white font-black bg-orange-700/30 px-3 py-1.5 rounded-lg border border-orange-500/50 shadow-sm">{carss.price}</div>
                                    </div>
                                    <p className="text-xs text-zinc-500 mb-2 font-bold uppercase tracking-widest">{carss.examples}</p>
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed text-justify italic">"{carss.description}"</p>

                                    <div className="flex flex-wrap gap-2 justify-center mb-2">
                                        {carss.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase border border-orange-100/50 shadow-sm"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* carssd Action Buttons */}
                                <div className="grid grid-cols-3 gap-3 p-4 bg-gray-50/50 border-t border-gray-100">
                                    <motion.button
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleWhatsApp(carss.name)}
                                        className="bg-green-50 text-green-600 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-green-600 hover:text-white transition-all flex flex-col items-center justify-center cursor-pointer shadow-sm border border-green-100"
                                    >
                                        <FaWhatsapp className="mb-1 text-sm md:text-base" /> Enquiry
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleCall}
                                        className="bg-blue-50 text-blue-600 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all flex flex-col items-center justify-center cursor-pointer shadow-sm border border-blue-100"
                                    >
                                        <FaPhone className="mb-1 text-sm md:text-base" /> Call
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handlePayment(carss.name)}
                                        className="bg-orange-50 text-orange-600 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-orange-500 hover:text-white transition-all flex flex-col items-center justify-center cursor-pointer h-full shadow-sm border border-orange-100"
                                    >
                                        <FaCar className="mb-1 text-sm md:text-base" /> Book Now
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <PopularTours />

            {/* CTA Section */}
            <section className="py-16 bg-orange-500">
                <div className="max-w-4xl mx-auto px-4 text-center text-white">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold mb-6"
                    >
                        Ready to Arrive in Style?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl mb-8 opacity-90"
                    >
                        Contact us today for special wedding packages and customized fleet options.
                    </motion.p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={handleCall}
                            className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                        >
                            <FaPhone /> Get a Quote
                        </button>
                        <button
                            onClick={() => handleWhatsApp()}
                            className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                        >
                            <FaWhatsapp /> Quick Enquiry
                        </button>
                        <button
                            onClick={() => navigate('/book-now')}
                            className="bg-gray-800 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WeddingCarRental;
