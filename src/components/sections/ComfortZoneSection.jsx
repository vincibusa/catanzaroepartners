import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ComfortZoneSection = () => {
  // Immagini per la galleria
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1560788784-66eda73bb6b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      alt: 'Cannolo siciliano',
    },
    {
      src: 'https://images.unsplash.com/photo-1621848326784-4ff3df4111a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Sfincione siciliano',
    },
    {
      src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      alt: 'Campo di grano siciliano',
    },
    {
      src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      alt: 'Villa Palagonia',
    },
    {
      src: 'https://images.unsplash.com/photo-1587494036638-e14be2eedbd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      alt: 'Donne Arbëreshë di Piana degli Albanesi',
    },
    {
      src: 'https://images.unsplash.com/photo-1565800489013-c64a874cae1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
      alt: 'Vulcano Etna',
    },
    {
      src: 'https://images.unsplash.com/photo-1572978122938-abcdb18d8c90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Isole Eolie',
    },
  ];

  return (
    <section id="comfort-zone" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            La nostra Comfort Zone
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-red-600 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Siamo amanti della nostra terra e delle sue tradizioni. Tutto ciò che facciamo è per lasciare un credito di fiducia alle nuove generazioni.
          </motion.p>
        </div>

        {/* Galleria di immagini */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={index === 0 ? "col-span-2 row-span-2 relative h-64 md:h-96" : "relative h-40 md:h-48"}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg hover:bg-opacity-10 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Food Concept Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Food Concept</h3>
            <p className="text-gray-600 mb-6">
              Dal 2013 ci occupiamo di progetti di animazione territoriale scoprendo e valorizzando i prodotti tipici che caratterizzano le comunità come Bagheria e Piana degli Albanesi. Per le istituzioni crediamo e produciamo format live marketing, comunicazione e tutto ciò che serve per mettere su un evento di successo.
            </p>
            <Link to="/servizi/event">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full font-medium transition-colors duration-300"
              >
                Scopri i nostri eventi
              </motion.button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1530062845289-9109b2c9c868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
              alt="Food Concept - Evento enogastronomico"
              className="rounded-lg shadow-xl w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
        </div>

        {/* Talent Partner Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Talent Partner - Intrattenimento"
              className="rounded-lg shadow-xl w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Talent Partner</h3>
            <p className="text-gray-600 mb-4">
              Creiamo momenti di intrattenimento innovativi e coinvolgenti con eventi mirati.
            </p>
            <p className="text-gray-600 mb-6">
              La nostra esperienza ci permette di proporre format unici nel loro genere, riusciamo sempre a rendere i nostri clienti soddisfatti dei risultati.
            </p>
            <Link to="/servizi/marketing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full font-medium transition-colors duration-300"
              >
                Scopri i nostri servizi
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Testimonianze e Progetti */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">I nostri progetti</h3>
          
          <div className="relative h-64 md:h-96 mb-8 group overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Sfincione Fest - Evento gastronomico"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-left">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Sfincione Fest</h4>
              <p className="text-white/80 mb-4 max-w-2xl">Un evento che celebra la tradizione gastronomica siciliana, mettendo in risalto uno dei prodotti più amati del territorio.</p>
              <Link to="/contatti">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full font-medium transition-colors duration-300"
                >
                  Scopri di più
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComfortZoneSection; 