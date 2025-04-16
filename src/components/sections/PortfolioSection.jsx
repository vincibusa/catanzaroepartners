import { useState } from 'react';
import { motion } from 'framer-motion';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Rebrand di Lusso',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      description: 'Restyling completo dell\'identità di marca per un brand di gioielli di lusso.',
    },
    {
      id: 2,
      title: 'E-commerce Fashion',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      description: 'Sviluppo di una piattaforma e-commerce per un brand di moda emergente.',
    },
    {
      id: 3,
      title: 'Campagna Social Food',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      description: 'Strategia social media per un ristorante di alta cucina con risultati eccezionali.',
    },
    {
      id: 4,
      title: 'SEO per E-learning',
      category: 'digital',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      description: 'Ottimizzazione SEO per una piattaforma di corsi online con incremento del 200% del traffico organico.',
    },
    {
      id: 5,
      title: 'Campagna AdWords B2B',
      category: 'digital',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      description: 'Gestione campagne Google Ads per azienda B2B con ROI del 450%.',
    },
    {
      id: 6,
      title: 'App Mobile Fitness',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
      description: 'Sviluppo di app mobile per un brand nel settore fitness con più di 100.000 download.',
    },
    {
      id: 7,
      title: 'Visual Identity Startup',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      description: 'Creazione dell\'identità visiva completa per una startup innovativa nel settore tech.',
    },
    {
      id: 8,
      title: 'Content Strategy Travel',
      category: 'content',
      image: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
      description: 'Strategia di content marketing per un tour operator specializzato in viaggi di lusso.',
    },
  ];

  const filters = [
    { id: 'all', label: 'Tutti' },
    { id: 'branding', label: 'Branding' },
    { id: 'web', label: 'Sviluppo Web' },
    { id: 'digital', label: 'Marketing Digitale' },
    { id: 'social', label: 'Social Media' },
    { id: 'content', label: 'Content' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

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
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            I Nostri Progetti
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-blue-600 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Esplora alcuni dei nostri progetti di successo e scopri come abbiamo aiutato i nostri clienti a raggiungere i loro obiettivi.
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
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Progetti */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="aspect-w-4 aspect-h-3 w-full h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full uppercase">
                  {filters.find(f => f.id === project.category).label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium transition-colors duration-300"
          >
            Vedi tutti i progetti
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 