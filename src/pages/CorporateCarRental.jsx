import { motion } from 'framer-motion';
import { FaBuilding, FaUsers, FaCalendarAlt, FaShieldAlt, FaClock, FaHeadset, FaCheckCircle, FaPhone, FaWhatsapp, FaGasPump, FaCar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { slider1, drizer, innova, hondacity, verna, fortuner, ertiga, kiacarnival, toyotavellfire, defender, breeza, wagonr } from '../utils/images';
import PopularTours from '../components/PopularTours';
import { useEffect } from 'react';
import { initiatePayment } from '../utils/razorpay';

const CorporateCarRental = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const corporatecarss = [
    {
      name: 'Maruti Suzuki WagonR',
      image: wagonr,
      capacity: '5 Seater',
      fuel: 'Petrol/CNG',
      basePrice: '₹1,800',
      extraKm: '₹14/km',
      extraHr: '₹200/hr',
      nightCharge: '₹300',
      description: 'Budget-friendly hatchback with surprisingly spacious interiors for short city hops.',
      features: ['8hr & 80km', 'AC', 'Music System', 'Spacious']
    },
    {
      name: 'Maruti Suzuki Swift Dzire',
      image: drizer,
      capacity: '5 Seater',
      fuel: 'Petrol/CNG',
      basePrice: '₹2,000',
      extraKm: '₹16/km',
      extraHr: '₹200/hr',
      nightCharge: '₹300',
      description: 'Ideal for cost-effective daily employee commutes and airport transfers.',
      features: ['8hr & 80km', 'AC', 'Music System', 'Fuel Efficient']
    },
    {
      name: 'Maruti Suzuki Vitara Brezza',
      image: breeza,
      capacity: '5 Seater',
      fuel: 'Petrol',
      basePrice: '₹2,200',
      extraKm: '₹16/km',
      extraHr: '₹200/hr',
      nightCharge: '₹300',
      description: 'Sporty and compact SUV, perfect for navigating city traffic with ease.',
      features: ['8hr & 80km', 'AC', 'Music System', 'SUV']
    },
    {
      name: 'Maruti Suzuki Ertiga',
      image: ertiga,
      capacity: '7 Seater',
      fuel: 'Petrol/CNG',
      basePrice: '₹2,500',
      extraKm: '₹18/km',
      extraHr: '₹200/hr',
      nightCharge: '₹300',
      description: 'Budget-friendly 7-seater, perfect for family reunions or group city travel.',
      features: ['8hr & 80km', 'AC Vents', 'Flexible Seats', 'Economy']
    },
    {
      name: 'Toyota Innova Crysta',
      image: innova,
      capacity: '7 Seater',
      fuel: 'Diesel',
      basePrice: '₹3,500',
      extraKm: '₹22/km',
      extraHr: '₹200/hr',
      nightCharge: '₹300',
      description: 'The gold standard for corporate travel. Spacious, comfortable, and highly reliable.',
      features: ['8hr & 80km', 'Rear AC', 'Large Boot', 'Spacious']
    },
    {
      name: 'Honda City',
      image: hondacity,
      capacity: '5 Seater',
      fuel: 'Petrol',
      basePrice: '₹4,500',
      extraKm: '₹35/km',
      extraHr: '₹400/hr',
      nightCharge: '₹500',
      description: 'Perfect executive sedan for business meetings and city commutes.',
      features: ['8hr & 80km', 'AC', 'Music System', 'Premium']
    },
    {
      name: 'Hyundai Verna',
      image: verna,
      capacity: '5 Seater',
      fuel: 'Petrol/Diesel',
      basePrice: '₹4,500',
      extraKm: '₹35/km',
      extraHr: '₹400/hr',
      nightCharge: '₹500',
      description: 'Sleek design with advanced features for a premium city tour experience.',
      features: ['8hr & 80km', 'AC', 'Music System', 'Premium']
    },
    {
      name: 'Toyota Fortuner',
      image: fortuner,
      capacity: '7 Seater',
      fuel: 'Diesel',
      basePrice: '₹7,500',
      extraKm: '₹45/km',
      extraHr: '₹500/hr',
      nightCharge: '₹500',
      description: 'Make a powerful impression. Premium luxury SUV for senior executives.',
      features: ['8hr & 80km', '4x4', 'Leather Seats', 'Status']
    },
    {
      name: 'Kia Carnival',
      image: kiacarnival,
      capacity: '7 Seater',
      fuel: 'Diesel',
      basePrice: '₹8,500',
      extraKm: '₹65/km',
      extraHr: '₹600/hr',
      nightCharge: '₹600',
      description: 'Ultra-luxurious MUV with advanced features for premium executive travel and comfort.',
      features: ['8hr & 80km', 'Captain Seats', 'Dual Sunroof', 'VIP Look']
    },
    {
      name: 'Land Rover Defender',
      image: defender,
      capacity: '7 Seater',
      fuel: 'Diesel',
      basePrice: '₹9,500',
      extraKm: '₹90/km',
      extraHr: '₹800/hr',
      nightCharge: '₹700',
      description: 'Assertive and capable. Perfect for high-profile executive site visits and off-road mobility.',
      features: ['8hr & 80km', '4x4', 'Luxury', 'Premium']
    },
    {
      name: 'Toyota Vellfire',
      image: toyotavellfire,
      capacity: '13 Seater',
      fuel: 'Petrol Hybrid',
      basePrice: '₹10,500',
      extraKm: '₹105/km',
      extraHr: '₹1,000/hr',
      nightCharge: '₹800',
      description: 'The pinnacle of luxury corporate mobility with ottoman seats and lounge experience.',
      features: ['8hr & 80km', 'Executive Seats', 'Hybrid', 'Ultra Luxury']
    }
  ];

  const features = [
    {
      icon: <FaBuilding />,
      title: 'Executive Vehicles',
      description: 'Premium sedans and SUVs for corporate travel'
    },
    {
      icon: <FaUsers />,
      title: 'Professional Chauffeurs',
      description: 'Well-trained, uniformed drivers with corporate etiquette'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Flexible Booking',
      description: 'Easy online booking with advance scheduling options'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Fully Insured',
      description: 'Comprehensive insurance coverage for peace of mind'
    },
    {
      icon: <FaClock />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and assistance'
    },
    {
      icon: <FaHeadset />,
      title: 'Account Management',
      description: 'Dedicated account manager for corporate clients'
    }
  ];

  const handleWhatsApp = (carssName = '') => {
    const text = carssName ? `Hello, I am interested in renting ${carssName} for Corporate Car Rental.` : 'Hello, I am interested in Corporate Car Rental services.';
    window.open(`https://wa.me/919278063535?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919278063535';
  };

  const handlePayment = (carName) => {
    initiatePayment(
      carName,
      'Corporate Car Rental',
      (response) => {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        const text = `Payment Successful! Booking confirmed for ${carName} - Corporate Car Rental. Payment ID: ${response.razorpay_payment_id}`;
        window.open(`https://wa.me/919278063535?text=${encodeURIComponent(text)}`, '_blank');
      },
      (error) => {
        console.error('Payment failed:', error);
      }
    );
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-screen h-[300px] sm:h-[500px] md:h-[700px] lg:h-[850px] flex items-center justify-center overflow-hidden text-white mt-0 sm:mt-0">
        <div className="absolute inset-0 z-0">
          <img
            src={slider1}
            alt="Corporate Car Rental"
            className="w-full h-full object-cover object-center transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mt-[150px] mx-auto px-4 md:mb-[600px] md:-ml-[0px]  text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-bold mb-2 sm:mb-6 text-orange-500 drop-shadow-2xl"
          >
            Corporate Car Rental
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl mb-3 sm:mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-bold px-2"
          >
            Premium Business Travel By Cab
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button
              onClick={() => navigate('/book-now')}
              className="bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg cursor-pointer text-sm sm:text-base"
            >
              Custom Quote
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

      {/* Corporate Fleet Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Our <span className="text-orange-500">Corporate Fleet</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {corporatecarss.map((carss, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="relative bg-gray-100 p-0 overflow-hidden h-64 md:h-80">
                  <img
                    src={carss.image}
                    alt={carss.name}
                    className="w-full h-full object-contain scale-110 hover:scale-125 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex-grow bg-white">
                  <div className="flex justify-between items-start mb-4 bg-gradient-to-r from-orange-600 to-orange-400 p-3 rounded-xl shadow-inner">
                    <h3 className="text-sm font-bold text-white flex-1 mr-2 leading-tight uppercase tracking-wide">{carss.name}</h3>
                    <div className="text-white font-black bg-orange-700/30 px-3 py-1.5 rounded-lg border border-orange-500/50 shadow-sm">{carss.basePrice}</div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed text-justify">{carss.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center text-gray-700 text-sm font-medium bg-gray-50 p-2 rounded-lg">
                      <FaUsers className="mr-2 text-orange-500" />
                      {carss.capacity}
                    </div>
                    <div className="flex items-center text-gray-700 text-sm font-medium bg-gray-50 p-2 rounded-lg">
                      <FaGasPump className="mr-2 text-orange-500" />
                      {carss.fuel}
                    </div>
                  </div>

                  {/* Pricing Details */}
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-3 rounded-lg mb-4 border border-orange-100">
                    <div className="flex flex-col gap-1 text-lef text-xs">
                      <div className="flex gap-4">
                        <span className="text-gray-600 font-medium">8 hr & 80 km</span>
                        <span className="text-orange-600 font-bold">{carss.basePrice}</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-gray-600 font-medium">Extra km:</span>
                        <span className="text-orange-600 font-bold">{carss.extraKm}</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-gray-600 font-medium">Extra hrs:</span>
                        <span className="text-orange-600 font-bold">{carss.extraHr}</span>
                      </div>
                      <div className="flex gap-4 col-span-2">
                        <span className="text-gray-600 font-medium">Driver Night Charges (10 pm - 6 am):</span>
                        <span className="text-orange-600 font-bold">{carss.nightCharge}</span>
                      </div>
                      <div className="flex gap-4 col-span-2 pt-2 border-t border-orange-200">
                        <span className="text-gray-600 font-medium">Toll tax,State tax & Parking Extra as per applicable:</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-2">
                    <div className="flex flex-wrap gap-2">
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

      {/* Footer CTA */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-6"
          >
            Simplifying Corporate Travel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 opacity-90"
          >
            Customized packages, priority support, and premium vehicles for your business.
          </motion.p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleCall}
              className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              <FaPhone /> Call Now
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

export default CorporateCarRental;