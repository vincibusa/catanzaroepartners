import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      id: 'branding',
      title: 'Branding',
      description: 'Realizziamo l\'identità visiva della tua azienda creando un marchio distintivo e riconoscibile.',
      icon: (
        <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      longDescription: 'Il nostro servizio di Branding comprende Naming, Packaging, Registrazione marchi e Grafica Pubblicitaria. Creiamo identità di marca distintive che comunicano i valori della tua azienda in modo efficace e memorabile.',
      subservices: [
        'Naming',
        'Packaging', 
        'Registrazione marchi', 
        'Grafica Pubblicitaria'
      ]
    },
    {
      id: 'event',
      title: 'Event',
      description: 'Progettiamo e realizziamo eventi enogastronomici e culturali che generano valore aggiunto per i territori.',
      icon: (
        <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      longDescription: 'Progettiamo e organizziamo eventi enogastronomici e culturali che creano valore per i territori. Il nostro servizio comprende ideazione, organizzazione, gestione della segreteria e promozione dell\'evento attraverso canali tradizionali e digitali.',
      subservices: [
        'Ideazione e organizzazione',
        'Segreteria',
        'Promozione'
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing',
      description: 'Sviluppiamo strategie di comunicazione istituzionale e d\'impresa con approccio integrato tra web marketing e event project.',
      icon: (
        <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      longDescription: 'I nostri servizi di Marketing comprendono gestione dei Social Media, attività di Ufficio Stampa e produzione di contenuti Video e Foto professionali. Sviluppiamo strategie di comunicazione integrate per massimizzare l\'impatto del tuo brand.',
      subservices: [
        'Social Media',
        'Ufficio Stampa',
        'Video',
        'Foto'
      ]
    },
    {
      id: 'web-multimedia',
      title: 'Web e Multimedia',
      description: 'Progettiamo e sviluppiamo soluzioni digitali su misura, dai siti web alle applicazioni mobile ed e-commerce.',
      icon: (
        <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      longDescription: 'I nostri servizi Web e Multimedia includono Web design, Hosting, Creazione di App ed E-Commerce. Realizziamo progetti digitali con un\'attenzione particolare al design, all\'esperienza utente e alle performance.',
      subservices: [
        'Web design',
        'Hosting',
        'Creazione App',
        'E-Commerce'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="servizi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            I NOSTRI SERVIZI
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
            Dagli eventi ad una campagna marketing unica nel suo genere. I nostri punti di forza sono la comunicazione istituzionale e d'impresa attraverso lo sviluppo di un planing integrato tra web marketing e event project.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center md:justify-start">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <ul className="grid grid-cols-2 gap-2">
                  {service.subservices.map((subservice, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {subservice}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link to={`/servizi/${service.id}`}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center mt-2 text-red-600 font-medium cursor-pointer"
                >
                  Scopri di più
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Link to="/contatti">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-medium transition-colors duration-300"
            >
              Parliamo del tuo progetto
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 