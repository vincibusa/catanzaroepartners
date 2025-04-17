import { useState } from 'react';
import { motion } from 'framer-motion';

// Importo le immagini dei partner
import potenzano from '../../assets/partner/potenzano-1024x683.jpg';
import sergioRusso from '../../assets/partner/sergio russo.jpg';
import tonyLoCoco from '../../assets/partner/tony-lo coco.jpeg';
import trapaniMartinez from '../../assets/partner/Trapani-Panificio-Martinez-2.jpg';
import arena from '../../assets/partner/arena.jpg';
import garganoPizza from '../../assets/partner/gargano pizza.jpg';
import chifari from '../../assets/partner/pierangelo_chifari_sigep2019_07_web.jpg';
import salvoTerruso from '../../assets/partner/Salvo terruso.webp';
import seby from '../../assets/partner/Seby-e1738258141375.png.webp';
import fiasconaro from '../../assets/partner/Nicola-Fiasconaro-kYgC-U33009306723223zE-656x492@Corriere-Web-Sezioni.jpg';
import ninoFerreri from '../../assets/partner/Nino Ferreri.jpg';
import lucianoMarco from '../../assets/partner/Luciano-Di-Marco.jpeg';
import danieleVaccarella from '../../assets/partner/Daniele-Vaccarella.jpg.webp';
import giusiBattaglia from '../../assets/partner/Giusi_Battaglia.jpeg';
import cappello from '../../assets/partner/Cappellop-800x800.jpeg';
import andyLuotto from '../../assets/partner/Andy Luotto.jpeg';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const partners = [
    {
      id: 1,
      name: 'Tony Lo Coco',
      category: 'chef',
      image: tonyLoCoco,
      description: 'Chef stellato, ristorante "I Pupi"',
    },
    {
      id: 2,
      name: 'Pierangelo Chifari',
      category: 'bakery',
      image: chifari,
      description: 'Maestro panificatore, Panificio Chifari',
    },
    {
      id: 3,
      name: 'Nicola Fiasconaro',
      category: 'pasticceria',
      image: fiasconaro,
      description: 'Maestro pasticcere, Fiasconaro',
    },
    {
      id: 4,
      name: 'Sergio Russo',
      category: 'chef',
      image: sergioRusso,
      description: 'Chef rinomato ed esperto di cucina siciliana',
    },
    {
      id: 5,
      name: 'Nino Ferreri',
      category: 'chef',
      image: ninoFerreri,
      description: 'Chef stellato, ristorante "Limu"',
    },
    {
      id: 6,
      name: 'Panificio Martinez',
      category: 'bakery',
      image: trapaniMartinez,
      description: 'Storico panificio trapanese',
    },
    {
      id: 7,
      name: 'Salvo Terruso',
      category: 'chef',
      image: salvoTerruso,
      description: 'Chef e consulente gastronomico',
    },
    {
      id: 8,
      name: 'Potenzano',
      category: 'pasticceria',
      image: potenzano,
      description: 'Maestro pasticcere, specialità siciliane',
    },
    {
      id: 9,
      name: 'Arena',
      category: 'food',
      image: arena,
      description: 'Azienda specializzata in prodotti tipici siciliani',
    },
    {
      id: 10,
      name: 'Gargano Pizza',
      category: 'pizzeria',
      image: garganoPizza,
      description: 'Maestro pizzaiolo, innovazione nella tradizione',
    },
    {
      id: 11,
      name: 'Sebastiano Tringali',
      category: 'chef',
      image: seby,
      description: 'Chef e consulente gastronomico',
    },
    {
      id: 12,
      name: 'Luciano Di Marco',
      category: 'bakery',
      image: lucianoMarco,
      description: 'Maestro panificatore e ricercatore',
    },
    {
      id: 13,
      name: 'Daniele Vaccarella',
      category: 'chef',
      image: danieleVaccarella,
      description: 'Chef creativo e innovatore',
    },
    {
      id: 14,
      name: 'Giusi Battaglia',
      category: 'food',
      image: giusiBattaglia,
      description: 'Esperta di cucina siciliana e conduttrice TV',
    },
    {
      id: 15,
      name: 'Cappello',
      category: 'chef',
      image: cappello,
      description: 'Chef stellato, cucina d\'autore',
    },
    {
      id: 16,
      name: 'Andy Luotto',
      category: 'chef',
      image: andyLuotto,
      description: 'Chef, attore e personaggio televisivo',
    },
  ];

  const filters = [
    { id: 'all', label: 'Tutti' },
    { id: 'chef', label: 'Chef' },
    { id: 'bakery', label: 'Panificazione' },
    { id: 'pasticceria', label: 'Pasticceria' },
    { id: 'pizzeria', label: 'Pizzeria' },
    { id: 'food', label: 'Food' },
  ];

  const filteredPartners = activeFilter === 'all'
    ? partners
    : partners.filter(partner => partner.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="talent-partner" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            I Nostri Talent Partner
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
            Creiamo momenti di intrattenimento innovativi e coinvolgenti grazie alla collaborazione con i migliori talenti del panorama enogastronomico siciliano. La nostra esperienza ci permette di proporre format unici nel loro genere.
          </motion.p>
        </div>

        {/* Filtri */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === filter.id
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Partner */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredPartners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg shadow-md bg-white"
            >
              <div className="aspect-w-4 aspect-h-3 w-full h-64">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold mb-1">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-2">{partner.description}</p>
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs rounded-full uppercase">
                  {filters.find(f => f.id === partner.category).label}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-gray-900 font-bold">{partner.name}</h3>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-medium transition-colors duration-300"
          >
            Collabora con noi
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 