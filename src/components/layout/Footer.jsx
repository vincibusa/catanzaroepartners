import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Colonna 1 - Informazioni sull'agenzia */}
          <div>
            <h3 className="text-xl font-bold mb-4">Catanzaro & Partners</h3>
            <p className="text-gray-400 mb-4">
              Agenzia di marketing innovativa specializzata in strategie digitali 
              per aiutare le aziende a crescere nel mercato competitivo di oggi.
            </p>
            <div className="flex space-x-4">
              {/* Icone Social */}
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    {social === 'facebook' && <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10zm-10 6.25v-4.167h3.333L16 10.75h-4v-2.5c0-1.04.29-1.75 1.795-1.75H16V3.558C15.541 3.494 14.615 3.375 13.54 3.375c-2.437 0-4.04 1.487-4.04 4.125v2.75H6.667v3.333H9.5v4.667h2.5z"/>}
                    {social === 'twitter' && <path d="M22 5.795a8.48 8.48 0 01-2.43.667 4.23 4.23 0 001.86-2.33 8.53 8.53 0 01-2.7 1.03 4.22 4.22 0 00-7.3 2.89 4.3 4.3 0 00.11.965A12 12 0 013.2 4.595a4.22 4.22 0 001.3 5.64 4.19 4.19 0 01-1.91-.53v.052a4.22 4.22 0 003.38 4.13 4.28 4.28 0 01-1.9.072 4.23 4.23 0 003.94 2.93 8.47 8.47 0 01-5.24 1.8c-.34 0-.68-.02-1.01-.06a11.95 11.95 0 006.5 1.91c7.79 0 12.05-6.46 12.05-12.05 0-.18 0-.37-.01-.55a8.53 8.53 0 002.1-2.18z"/>}
                    {social === 'instagram' && <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153A4.904 4.904 0 012.525 18.55c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.17 1.17 0 100 2.34 1.17 1.17 0 000-2.34z"/>}
                    {social === 'linkedin' && <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zM8.27 18.5v-8.37H5.5v8.37h2.77z"/>}
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Colonna 2 - Link Utili */}
          <div>
            <h3 className="text-xl font-bold mb-4">Link Utili</h3>
            <ul className="space-y-2">
              {['Home', 'Chi Siamo', 'Servizi', 'Portfolio', 'Blog', 'Contatti'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna 3 - Servizi */}
          <div>
            <h3 className="text-xl font-bold mb-4">I Nostri Servizi</h3>
            <ul className="space-y-2">
              {[
                'Strategia Digitale',
                'Branding & Identità',
                'Social Media Marketing',
                'Sviluppo Web',
                'SEO & SEM',
                'Content Marketing'
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/servizi"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna 4 - Contatti */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contattaci</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-gray-400 mr-2 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">
                  Via Roma 123, 00100 Roma, Italia
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-gray-400 mr-2 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">info@catanzaroepartners.it</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-gray-400 mr-2 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400">+39 06 1234567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Catanzaro & Partners. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/termini-condizioni" className="text-gray-400 hover:text-white text-sm">
                Termini e Condizioni
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 