import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/1.jpeg';
import img2 from '../../assets/images/2.jpeg';
import img3 from '../../assets/images/3.jpeg';
import img4 from '../../assets/images/4.jpeg';
import img5 from '../../assets/images/5.jpeg';
import img6 from '../../assets/images/6.jpeg';
import img7 from '../../assets/images/7.jpeg';
import img8 from '../../assets/images/8.jpeg';

const ComfortZoneSection = () => {
  // Immagini per la galleria
  const galleryImages = [
    {
      src: img1,
      alt: 'Vista panoramica di un villaggio costiero con montagna vulcanica',
    },
    {
      src: img3,
      alt: 'Sfincione siciliano, specialità gastronomica',
    },
    {
      src: img2,
      alt: 'Vigneti siciliani con Etna sullo sfondo',
    },
    {
      src: img4,
      alt: 'Porto con barche e case sulla costa',
    },
    {
      src: img5,
      alt: 'Donne in costume tradizionale siciliano',
    },
    {
      src: img7,
      alt: 'Villa Palagonia, architettura storica',
    },
    {
      src: img8,
      alt: 'Cannolo siciliano, dolce tipico',
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
              src={img3}
              alt="Food Concept - Sfincione siciliano"
              className="rounded-lg shadow-xl w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
        </div>

       
      </div>
    </section>
  );
};

export default ComfortZoneSection; 