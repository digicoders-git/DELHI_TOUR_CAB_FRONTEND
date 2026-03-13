import { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import ReactCountryFlag from 'react-country-flag';

const countries = [
  { name: 'India', code: '+91', iso: 'IN' },
  { name: 'United States', code: '+1', iso: 'US' },
  { name: 'United Kingdom', code: '+44', iso: 'GB' },
  { name: 'Canada', code: '+1', iso: 'CA' },
  { name: 'Australia', code: '+61', iso: 'AU' },
  { name: 'Germany', code: '+49', iso: 'DE' },
  { name: 'France', code: '+33', iso: 'FR' },
  { name: 'Japan', code: '+81', iso: 'JP' },
  { name: 'China', code: '+86', iso: 'CN' },
  { name: 'Singapore', code: '+65', iso: 'SG' },
  { name: 'UAE', code: '+971', iso: 'AE' },
  { name: 'Saudi Arabia', code: '+966', iso: 'SA' },
  { name: 'Pakistan', code: '+92', iso: 'PK' },
  { name: 'Bangladesh', code: '+880', iso: 'BD' },
  { name: 'Nepal', code: '+977', iso: 'NP' },
  { name: 'Sri Lanka', code: '+94', iso: 'LK' },
  { name: 'Afghanistan', code: '+93', iso: 'AF' },
  { name: 'Albania', code: '+355', iso: 'AL' },
  { name: 'Algeria', code: '+213', iso: 'DZ' },
  { name: 'Argentina', code: '+54', iso: 'AR' },
  { name: 'Austria', code: '+43', iso: 'AT' },
  { name: 'Bahrain', code: '+973', iso: 'BH' },
  { name: 'Belgium', code: '+32', iso: 'BE' },
  { name: 'Brazil', code: '+55', iso: 'BR' },
  { name: 'Bhutan', code: '+975', iso: 'BT' },
  { name: 'Denmark', code: '+45', iso: 'DK' },
  { name: 'Egypt', code: '+20', iso: 'EG' },
  { name: 'Finland', code: '+358', iso: 'FI' },
  { name: 'Greece', code: '+30', iso: 'GR' },
  { name: 'Hong Kong', code: '+852', iso: 'HK' },
  { name: 'Indonesia', code: '+62', iso: 'ID' },
  { name: 'Iran', code: '+98', iso: 'IR' },
  { name: 'Iraq', code: '+964', iso: 'IQ' },
  { name: 'Ireland', code: '+353', iso: 'IE' },
  { name: 'Israel', code: '+972', iso: 'IL' },
  { name: 'Italy', code: '+39', iso: 'IT' },
  { name: 'Jordan', code: '+962', iso: 'JO' },
  { name: 'Kenya', code: '+254', iso: 'KE' },
  { name: 'Kuwait', code: '+965', iso: 'KW' },
  { name: 'Malaysia', code: '+60', iso: 'MY' },
  { name: 'Maldives', code: '+960', iso: 'MV' },
  { name: 'Mexico', code: '+52', iso: 'MX' },
  { name: 'Myanmar', code: '+95', iso: 'MM' },
  { name: 'Netherlands', code: '+31', iso: 'NL' },
  { name: 'New Zealand', code: '+64', iso: 'NZ' },
  { name: 'Nigeria', code: '+234', iso: 'NG' },
  { name: 'Norway', code: '+47', iso: 'NO' },
  { name: 'Oman', code: '+968', iso: 'OM' },
  { name: 'Philippines', code: '+63', iso: 'PH' },
  { name: 'Poland', code: '+48', iso: 'PL' },
  { name: 'Portugal', code: '+351', iso: 'PT' },
  { name: 'Qatar', code: '+974', iso: 'QA' },
  { name: 'Russia', code: '+7', iso: 'RU' },
  { name: 'South Africa', code: '+27', iso: 'ZA' },
  { name: 'South Korea', code: '+82', iso: 'KR' },
  { name: 'Spain', code: '+34', iso: 'ES' },
  { name: 'Sweden', code: '+46', iso: 'SE' },
  { name: 'Switzerland', code: '+41', iso: 'CH' },
  { name: 'Taiwan', code: '+886', iso: 'TW' },
  { name: 'Thailand', code: '+66', iso: 'TH' },
  { name: 'Turkey', code: '+90', iso: 'TR' },
  { name: 'Ukraine', code: '+380', iso: 'UA' },
  { name: 'Vietnam', code: '+84', iso: 'VN' }
];

const PhoneInput = ({ value, onChange, required = false, placeholder = "Enter phone number", name = "phone" }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCountries = countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.code.includes(search)
  );

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearch('');
  };

  const handleCodeInput = (e) => {
    const input = e.target.value;
    setSearch(input);
    
    if (input.startsWith('+')) {
      const matchedCountry = countries.find(c => c.code === input);
      if (matchedCountry) {
        setSelectedCountry(matchedCountry);
        setSearch('');
        setIsOpen(false);
      }
    }
  };

  return (
    <div className="flex gap-2">
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl hover:border-orange-300 transition-all min-w-[120px]"
        >
          <ReactCountryFlag
            countryCode={selectedCountry.iso}
            svg
            style={{ width: '1.5em', height: '1.5em', borderRadius: '50%' }}
          />
          <span className="font-semibold text-gray-700">{selectedCountry.code}</span>
          <FaChevronDown className={`text-gray-400 text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-72 bg-white border-2 border-gray-200 rounded-xl shadow-xl z-50 max-h-80 overflow-hidden">
            <div className="p-3 border-b sticky top-0 bg-white">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={handleCodeInput}
                  placeholder="Search country or code..."
                  className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none text-sm"
                  autoFocus
                />
              </div>
            </div>
            <div className="overflow-y-auto max-h-60">
              {filteredCountries.map((country) => (
                <button
                  key={country.code + country.name}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-orange-50 transition-colors text-left"
                >
                  <ReactCountryFlag
                    countryCode={country.iso}
                    svg
                    style={{ width: '1.5em', height: '1.5em', borderRadius: '50%' }}
                  />
                  <span className="flex-1 font-medium text-gray-700">{country.name}</span>
                  <span className="text-sm text-gray-500 font-semibold">{country.code}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <input
        type="tel"
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="flex-1 px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default PhoneInput;
