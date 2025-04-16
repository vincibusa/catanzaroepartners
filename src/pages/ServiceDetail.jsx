import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// ScrollToTop component per gestire lo scroll automatico
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  // Simula il caricamento del servizio da un database
  useEffect(() => {
    const services = [
      {
        id: 'strategia-digitale',
        title: 'Strategia Digitale',
        description: 'Sviluppiamo strategie di marketing digitale personalizzate per raggiungere gli obiettivi di business dei nostri clienti.',
        longDescription: 'La nostra strategia digitale è un approccio completo che analizza il mercato, la concorrenza e il pubblico target per creare un piano d\'azione personalizzato. Utilizziamo strumenti avanzati di analisi per identificare opportunità e ottimizzare le performance, garantendo un ROI misurabile e costante crescita nel tempo.',
        benefits: [
          'Analisi approfondita del mercato e della concorrenza',
          'Definizione di obiettivi misurabili e KPI',
          'Pianificazione strategica multichannel',
          'Ottimizzazione continua basata sui dati',
          'Reportistica dettagliata e trasparente'
        ],
        icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
      },
      {
        id: 'branding-identita',
        title: 'Branding & Identità',
        description: 'Creiamo identità di marca distintive che comunicano i valori e la missione dell\'azienda in modo efficace.',
        longDescription: 'Il nostro servizio di Branding & Identità va oltre la semplice creazione di un logo. Definiamo un\'identità completa che rispecchia l\'essenza del tuo business, i suoi valori e obiettivi. Sviluppiamo una brand identity coerente attraverso tutti i touchpoint, dal logo ai colori, dalla tipografia al tone of voice, creando un\'esperienza memorabile per i tuoi clienti.',
        benefits: [
          'Analisi di posizionamento e differenziazione',
          'Sviluppo di logo e visual identity',
          'Definizione di palette colori e tipografia',
          'Creazione di linee guida di brand',
          'Design di materiali di comunicazione coerenti'
        ],
        icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
      },
      {
        id: 'social-media-marketing',
        title: 'Social Media Marketing',
        description: 'Gestiamo la presenza sui social media, creando contenuti coinvolgenti e campagne che generano interazione e conversioni.',
        longDescription: 'Il nostro servizio di Social Media Marketing è progettato per costruire una presenza significativa sui social network rilevanti per il tuo pubblico. Creiamo strategie personalizzate, produciamo contenuti di qualità e sviluppiamo campagne pubblicitarie mirate. Monitoriamo costantemente le performance, ottimizzando le attività per massimizzare engagement, crescita della community e conversioni.',
        benefits: [
          'Analisi e creazione strategia social',
          'Gestione completa dei profili aziendali',
          'Produzione di contenuti originali e coinvolgenti',
          'Pianificazione editoriale mensile',
          'Gestione campagne pubblicitarie sui social media'
        ],
        icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
      },
      {
        id: 'sviluppo-web',
        title: 'Sviluppo Web',
        description: 'Progettiamo e sviluppiamo siti web e applicazioni responsive, con un\'attenzione particolare all\'esperienza utente.',
        longDescription: 'Il nostro servizio di Sviluppo Web offre soluzioni digitali all\'avanguardia, pensate per soddisfare le esigenze specifiche del tuo business. Realizziamo siti web responsive, e-commerce e applicazioni web con un\'attenzione particolare al design, all\'usabilità e alle performance. Utilizziamo le tecnologie più moderne per garantire sicurezza, velocità e scalabilità dei tuoi progetti digitali.',
        benefits: [
          'Design UX/UI centrato sull\'utente',
          'Sviluppo di siti web e applicazioni responsive',
          'Piattaforme e-commerce performanti',
          'Integrazione con CMS e sistemi gestionali',
          'Ottimizzazione per velocità e performance'
        ],
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      },
      {
        id: 'seo-sem',
        title: 'SEO & SEM',
        description: 'Ottimizziamo la visibilità online attraverso strategie di SEO e campagne pubblicitarie mirate su motori di ricerca.',
        longDescription: 'I nostri servizi di SEO e SEM sono progettati per massimizzare la tua visibilità sui motori di ricerca. Per la SEO, realizziamo audit completi, ottimizziamo contenuti e struttura del sito, e implementiamo strategie di link building per migliorare il posizionamento organico. Per il SEM, creiamo e gestiamo campagne Google Ads altamente mirate, ottimizzando costantemente budget e performance.',
        benefits: [
          'Audit SEO tecnico e analisi competitiva',
          'Ottimizzazione on-page e off-page',
          'Strategie di link building etico',
          'Creazione e gestione campagne Google Ads',
          'Ottimizzazione continua basata su dati'
        ],
        icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
      },
      {
        id: 'content-marketing',
        title: 'Content Marketing',
        description: 'Creiamo contenuti di valore che attirano e fidelizzano il pubblico, posizionando il brand come autorità nel settore.',
        longDescription: 'Il nostro servizio di Content Marketing si focalizza sulla creazione e distribuzione di contenuti rilevanti e di valore per il tuo pubblico target. Sviluppiamo strategie editoriali complete, produciamo contenuti di alta qualità (blog, white paper, case study, video) e li distribuiamo attraverso i canali più efficaci. L\'obiettivo è attrarre, coinvolgere e convertire il pubblico, posizionando il tuo brand come punto di riferimento nel settore.',
        benefits: [
          'Sviluppo strategia editoriale',
          'Creazione di contenuti di valore',
          'Ottimizzazione SEO dei contenuti',
          'Distribuzione multichannel',
          'Analisi performance e ottimizzazione'
        ],
        icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
      },
    ];

    const foundService = services.find(s => s.id === serviceId);
    setService(foundService);
  }, [serviceId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In un'implementazione reale, qui si invierebbe il form a un endpoint di backend
    console.log('Form submitted:', formData);
    alert(`Grazie per il tuo interesse nel nostro servizio di ${service?.title}! Ti contatteremo presto.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  if (!service) {
    return (
      <>
        <ScrollToTop />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-24 h-24 text-red-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Servizio non trovato</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">Il servizio che stai cercando non è disponibile o potrebbe essere stato spostato.</p>
              <Link to="/servizi">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-medium transition-colors duration-300 shadow-md"
                >
                  Torna ai nostri servizi
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ScrollToTop />
      <div className="pt-20 pb-20">
        {/* Header del Servizio */}
        <div className="bg-gradient-to-r from-red-900 to-red-950 text-white py-24 relative overflow-hidden">
          {/* Pattern decorativo */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 rounded-full bg-white text-red-600 flex items-center justify-center mb-6 shadow-xl"
              >
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                </svg>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-4 text-shadow"
              >
                {service.title}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-24 h-1 bg-white mb-6"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl max-w-3xl"
              >
                {service.description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8"
              >
                <a href="#contact-form" className="bg-white text-red-600 hover:bg-gray-100 py-3 px-8 rounded-full font-medium transition-colors duration-300 shadow-lg inline-block">
                  Richiedi subito questo servizio
                </a>
              </motion.div>
            </div>
          </div>
          
          {/* Forme decorative */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-red-800 opacity-50"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-red-800 opacity-30"
          />
        </div>
        
        {/* Descrizione Dettagliata */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-2 order-2 md:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-red-600 w-2 h-12 mr-4 rounded-full hidden md:block"></span>
                  In cosa consiste il nostro servizio
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {service.longDescription}
                </p>
                
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-600 shadow-sm mb-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Perché scegliere il nostro servizio?
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="bg-red-600 rounded-full p-1 text-white mr-3 flex-shrink-0 mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <Link to="/servizi">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center text-red-600 hover:text-red-700"
                    >
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                      </svg>
                      Torna ai servizi
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 md:order-2"
              >
                <div className="sticky top-24 bg-white rounded-xl shadow-xl overflow-hidden">
                  <div className="bg-red-950 p-4 text-white">
                    <h3 className="text-lg font-bold">Servizi correlati</h3>
                  </div>
                  <div className="p-4 space-y-2">
                    {['strategia-digitale', 'branding-identita', 'social-media-marketing', 'sviluppo-web', 'seo-sem', 'content-marketing']
                      .filter(id => id !== service.id)
                      .slice(0, 3)
                      .map(id => {
                        const relatedService = [
                          { id: 'strategia-digitale', title: 'Strategia Digitale' },
                          { id: 'branding-identita', title: 'Branding & Identità' },
                          { id: 'social-media-marketing', title: 'Social Media Marketing' },
                          { id: 'sviluppo-web', title: 'Sviluppo Web' },
                          { id: 'seo-sem', title: 'SEO & SEM' },
                          { id: 'content-marketing', title: 'Content Marketing' }
                        ].find(s => s.id === id);
                        
                        return (
                          <Link key={id} to={`/servizi/${id}`}>
                            <div className="border border-gray-200 rounded p-3 hover:bg-gray-50 transition-colors">
                              <p className="font-medium text-gray-800">{relatedService.title}</p>
                            </div>
                          </Link>
                        );
                      })
                    }
                  </div>
                  <div className="bg-gray-50 p-4">
                    <a
                      href="#contact-form"
                      className="block w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 text-center"
                    >
                      Contattaci
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Form di contatto */}
          <div id="contact-form" className="max-w-4xl mx-auto mt-16 pt-8 scroll-mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-white rounded-xl p-8 md:p-10 shadow-xl"
            >
              {/* Elemento decorativo */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 to-red-800 rounded-t-xl"></div>
              
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Interessato a questo servizio?</h2>
                <p className="text-lg text-gray-700">
                  Compila il modulo sottostante e ti contatteremo per discutere di come possiamo aiutarti con il nostro servizio di <span className="font-semibold text-red-600">{service.title}</span>.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Nome e cognome <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      placeholder="La tua email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      placeholder="Il tuo numero di telefono"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                      Azienda
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      placeholder="La tua azienda"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Messaggio <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none transition-all"
                    placeholder={`Descrivi come possiamo aiutarti con il servizio di ${service.title}...`}
                  ></textarea>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded transition-all"
                    />
                    <label htmlFor="privacy" className="ml-3 text-gray-700">
                      Acconsento al trattamento dei dati personali secondo la{' '}
                      <Link to="/privacy-policy" className="text-red-600 hover:underline font-medium">
                        Privacy Policy
                      </Link>
                      <span className="text-red-600">*</span>
                    </label>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-medium transition-colors duration-300 shadow-md flex items-center justify-center"
                >
                  <span className="mr-2">Richiedi informazioni</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail; 