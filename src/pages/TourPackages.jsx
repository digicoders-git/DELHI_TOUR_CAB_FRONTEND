import { motion } from 'framer-motion';
import { FaStar, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
    tourAgra, tourAgraFatehpur, tourJaipur, tourMathura, tourMathuraVrindavanAgraOneday,
    tourMathuraVrindavanAgra, tourHaridwar, tourRishikesh, tourKhatushyam, tourChandigarh,
    tourMehandipuri, tourChardham, tourDodham, tourJaipurPushkarAjmer, tourJaipurFatehpurAgra,
    tourJammuSrinagar, tourJimCorbett, tourKainchiDham, tourShimlaManali,
    tourFaridabadAgra, tourFaridabadDelhi, tourGhaziabadAgra, tourGhaziabadDelhi,
    tourGhaziabadMathuraVrindavan, tourGurgaonAgra, tourGurgaonDelhi, tourGurgaonMathura,
    tourNoidaMathura, tourNoidaDelhi, tourDelhiLocalSightseeing,
    tourAgraToFatehpur, tourAgraToMathura, tourChandigarhLocal,
    tourDehradunMusoorie, tourSrinagarLocal, tourHaridwarRishikeshLocal, tourJaipurLocal,
} from '../utils/images';

const categories = [
    {
        label: 'Delhi Tours',
        tours: [
            { name: 'OneDay Delhi Local Sightseeing', path: '/tour/delhi-local-sightseeing', image: tourDelhiLocalSightseeing, price: 'Rs.2,200/-' },
            { name: 'Delhi to Agra Same Day Tour', path: '/tour/delhi-to-agra-tour', image: tourAgra, price: 'Rs.6,500/-' },
            { name: 'Delhi to Agra & Fatehpur Sikri Tour', path: '/tour/delhi-to-agra-fatehpur-sikri-tour', image: tourAgraFatehpur, price: 'Rs.7,500/-' },
            { name: 'Delhi to Jaipur Same Day Tour', path: '/tour/delhi-to-jaipur-tour', image: tourJaipur, price: 'Rs.7,500/-' },
            { name: 'Delhi to Mathura Vrindavan', path: '/tour/delhi-to-mathura-vrindavan', image: tourMathura, price: 'Rs.3,500/-' },
            { name: 'Delhi to Mathura Vrindavan Agra Oneday', path: '/tour/delhi-mathura-vrindavan-agra-tour', image: tourMathuraVrindavanAgraOneday, price: 'Rs.7,500/-' },
            { name: 'Delhi to Haridwar Same Day Tour', path: '/tour/delhi-to-haridwar-tour', image: tourHaridwar, price: 'Rs.6,500/-' },
            { name: 'Delhi to Rishikesh Tour', path: '/tour/delhi-to-rishikesh-tour', image: tourRishikesh, price: 'Rs.7,500/-' },
            { name: 'Delhi to Khatu Shyam One Day Tour', path: '/tour/delhi-to-khatu-shyam-one-day-tour', image: tourKhatushyam, price: 'Rs.5,500/-' },
            { name: 'Delhi to Mehandipur Balaji Tour', path: '/tour/delhi-to-mehandipur-balaji-one-day-tour', image: tourMehandipuri, price: 'Rs.6,500/-' },
            { name: 'Delhi to Chandigarh One Day Tour', path: '/tour/delhi-to-chandigarh-one-day-tour', image: tourChandigarh, price: 'Rs.7,500/-' },
            { name: 'Delhi to Kainchi Dham Tour', path: '/tour/delhi-to-kainchi-dham-neem-karoli-baba-tour', image: tourKainchiDham, price: 'Rs.9,500/-' },
            { name: 'Delhi Jaipur Fatehpur Sikri Agra Tour', path: '/tour/delhi-jaipur-fatehpur-sikri-agra-golden-triangle-tour', image: tourJaipurFatehpurAgra, price: 'Rs.12,500/-' },
            { name: 'Delhi Jaipur Pushkar Ajmer Tour', path: '/tour/delhi-jaipur-pushkar-ajmer-tour', image: tourJaipurPushkarAjmer, price: 'Rs.14,500/-' },
            { name: 'Delhi to Jim Corbett Tour', path: '/tour/delhi-to-jim-corbett-tour', image: tourJimCorbett, price: 'Rs.9,500/-' },
            { name: 'Delhi to Do Dham Tour', path: '/tour/delhi-to-do-dham-kedarnath-badrinath-tour', image: tourDodham, price: 'Rs.28,000/-' },
            { name: 'Delhi to Shimla Manali Tour', path: '/tour/delhi-shimla-manali-tour', image: tourShimlaManali, price: 'Rs.22,000/-' },
            { name: 'Delhi to Char Dham Tour', path: '/tour/delhi-to-char-dham-tour', image: tourChardham, price: 'Rs.55,000/-' },
            { name: 'Delhi UP Spiritual Tour', path: '/tour/delhi-comprehensive-up-spiritual-tour', image: tourMathuraVrindavanAgra, price: 'Rs.27,500/-' },
            { name: 'Delhi Kashmir Vaishno Devi Amritsar Tour', path: '/tour/delhi-kashmir-vaishnodevi-amritsar-grand-tour', image: tourJammuSrinagar, price: 'Rs.30,000/-' },
        ],
    },
    {
        label: 'Ghaziabad Tours',
        tours: [
            { name: 'Ghaziabad to Agra Same Day Tour', path: '/tour/ghaziabad-to-agra-same-day-return-tour', image: tourGhaziabadAgra, price: 'Rs.6,500/-' },
            { name: 'Ghaziabad to Mathura Vrindavan One Day Tour', path: '/tour/ghaziabad-to-mathura-vrindavan-oneday-tour', image: tourGhaziabadMathuraVrindavan, price: 'Rs.5,000/-' },
            { name: 'Ghaziabad to Delhi Local Sightseeing', path: '/tour/ghaziabad-to-delhi-local-sightseeing-tour', image: tourGhaziabadDelhi, price: 'Rs.2,500/-' },
        ],
    },
    {
        label: 'Noida Tours',
        tours: [
            { name: 'Noida to Agra Same Day Tour', path: '/tour/noida-greater-noida-to-agra-same-day-return-tour', image: tourGhaziabadAgra, price: 'Rs.6,000/-' },
            { name: 'Noida to Mathura Vrindavan One Day Tour', path: '/tour/noida-greater-noida-to-mathura-one-day-tour', image: tourNoidaMathura, price: 'Rs.5,000/-' },
            { name: 'Noida to Delhi Local Sightseeing', path: '/tour/noida-to-delhi-local-sightseeing-tour', image: tourNoidaDelhi, price: 'Rs.2,500/-' },
        ],
    },
    {
        label: 'Gurgaon Tours',
        tours: [
            { name: 'Gurgaon to Agra Same Day Tour', path: '/tour/gurgaon-to-agra-same-day-return-tour', image: tourGurgaonAgra, price: 'Rs.7,000/-' },
            { name: 'Gurgaon to Mathura Same Day Tour', path: '/tour/gurgaon-to-mathura-same-day-return-tour', image: tourGurgaonMathura, price: 'Rs.5,500/-' },
            { name: 'Gurgaon to Delhi Local Sightseeing', path: '/tour/gurgaon-to-delhi-local-sightseeing-tour', image: tourGurgaonDelhi, price: 'Rs.2,500/-' },
        ],
    },
    {
        label: 'Faridabad Tours',
        tours: [
            { name: 'Faridabad to Agra Same Day Tour', path: '/tour/faridabad-to-agra-tour', image: tourFaridabadAgra, price: 'Rs.6,500/-' },
            { name: 'Faridabad to Delhi Local Sightseeing', path: '/tour/faridabad-to-delhi-local-sightseeing-tour', image: tourFaridabadDelhi, price: 'Rs.2,500/-' },
        ],
    },
    {
        label: 'Local Sightseeing',
        tours: [
            { name: 'Agra Sightseeing by Car', path: '/tour/agra-sightseeing-by-car', image: tourAgraToFatehpur, price: 'Rs.3,500/-' },
            { name: 'Agra to Fatehpur Sikri Tour', path: '/tour/agra-to-fatehpur-sikri-one-day-tour', image: tourAgraToFatehpur, price: 'Rs.2,500/-' },
            { name: 'Agra to Mathura Vrindavan Tour', path: '/tour/agra-to-mathura-vrindavan-tour', image: tourAgraToMathura, price: 'Rs.3,000/-' },
            { name: 'Jaipur Local Sightseeing', path: '/tour/jaipur-local-sightseeing-by-car', image: tourJaipurLocal, price: 'Rs.3,500/-' },
            { name: 'Chandigarh Local Sightseeing', path: '/tour/chandigarh-local-sightseeing-by-car', image: tourChandigarhLocal, price: 'Rs.3,500/-' },
            { name: 'Haridwar Rishikesh Local Sightseeing', path: '/tour/haridwar-rishikesh-local-sightseeing-by-car', image: tourHaridwarRishikeshLocal, price: 'Rs.3,500/-' },
            { name: 'Dehradun Mussoorie Local Sightseeing', path: '/tour/dehradoon-masoorie-local-sightseeing-by-car', image: tourDehradunMusoorie, price: 'Rs.4,000/-' },
            { name: 'Srinagar Sonmarg Gulmarg Sightseeing', path: '/tour/srinagar-sonmarg-gulmarg-local-sightseeing-by-car', image: tourSrinagarLocal, price: 'Rs.5,500/-' },
        ],
    },
];

const TourCard = ({ tour, index }) => {
    const navigate = useNavigate();
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer group border border-gray-100"
            onClick={() => { navigate(tour.path); window.scrollTo(0, 0); }}
        >
            <div className="w-full">
                <img src={tour.image} alt={tour.name} className="w-full h-auto" />
            </div>
            <div className="p-4">
                <h3 className="text-base font-bold text-gray-800 mb-1 group-hover:text-orange-500 transition-colors leading-snug">{tour.name}</h3>
                <div className="text-xs text-orange-500 font-bold uppercase tracking-wider mb-3">AC Cab · All Inclusive</div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <div>
                        <div className="flex items-center text-yellow-400 mb-0.5">
                            {[...Array(5)].map((_, i) => <FaStar key={i} className="text-xs" />)}
                            <span className="text-gray-400 text-xs ml-1">(4.9)</span>
                        </div>
                        <span className="text-gray-800 font-bold">Starting {tour.price}</span>
                    </div>
                    <span className="text-orange-500 font-bold text-sm">Book Now</span>
                </div>
            </div>
        </motion.div>
    );
};

const TourPackages = () => {
    const navigate = useNavigate();
    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            <div className="bg-white border-b border-gray-100 py-8 md:py-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50 to-transparent" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-orange-600 font-bold text-sm tracking-widest uppercase mb-3">
                            <span className="w-8 h-[2px] bg-orange-500" />
                            Delhi Tour Cab
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
                            Tour <span className="text-orange-500">Packages</span>
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl">
                            Explore our handpicked tour packages from Delhi and NCR — all-inclusive, comfortable, and hassle-free.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 space-y-14">
                {categories.map((cat) => (
                    <section key={cat.label}>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-1 h-8 bg-orange-500 rounded-full" />
                            <h2 className="text-2xl font-black text-gray-900">{cat.label}</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                            {cat.tours.map((tour, i) => (
                                <TourCard key={tour.path} tour={tour} index={i} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <section className="py-16 bg-gradient-to-r from-orange-600 to-yellow-500 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Can't Find Your Tour?
                    </motion.h2>
                    <p className="text-lg mb-8 opacity-90">Call or WhatsApp us for a custom tour package tailored to your needs.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = 'tel:+919278063535'}
                            className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2 cursor-pointer"
                        >
                            <FaPhone /> Call Now
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            onClick={() => window.open('https://wa.me/919278063535?text=Hello, I need help with a tour package.', '_blank')}
                            className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition-colors shadow-lg flex items-center gap-2 cursor-pointer"
                        >
                            <FaWhatsapp /> WhatsApp
                        </motion.button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TourPackages;
