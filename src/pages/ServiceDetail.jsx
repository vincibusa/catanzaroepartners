import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Componente per lo scroll automatico all'inizio della pagina quando si cambia rotta
const ScrollToTop = () => {
  const { serviceId } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);
  
  return null;
};

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Definizione dei servizi con le relative informazioni dettagliate
  const servicesData = {
    'branding': {
      title: 'Branding',
      subtitle: 'Diamo forma e identità al tuo marchio',
      description: 'Il nostro servizio di Branding comprende Naming, Packaging, Registrazione marchi e Grafica Pubblicitaria. Creiamo identità di marca distintive che comunicano i valori della tua azienda in modo efficace e memorabile.',
      image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      benefits: [
        'Identità di marca riconoscibile e distintiva',
        'Coerenza visiva su tutti i touchpoint',
        'Differenziazione dalla concorrenza',
        'Creazione di valore percepito',
        'Costruzione di fiducia e fedeltà'
      ],
      subservices: [
        {
          name: 'Naming',
          description: 'Sviluppiamo nomi distintivi e memorabili per la tua azienda, prodotti o servizi, valutando anche la disponibilità di domini web e verificando che non esistano conflitti con marchi registrati.'
        },
        {
          name: 'Packaging',
          description: 'Progettiamo confezioni che non solo proteggono il prodotto, ma comunicano efficacemente i valori del tuo brand e attirano l\'attenzione del cliente, creando un\'esperienza d\'acquisto memorabile.'
        },
        {
          name: 'Registrazione marchi',
          description: 'Ti supportiamo nel processo di registrazione del marchio a livello nazionale e internazionale, proteggendo la tua identità di marca e il tuo investimento.'
        },
        {
          name: 'Grafica Pubblicitaria',
          description: 'Creiamo materiali grafici di impatto per campagne pubblicitarie, materiali promozionali e comunicazione aziendale, mantenendo coerenza con l\'identità del brand.'
        }
      ]
    },
    'event': {
      title: 'Event',
      subtitle: 'Creiamo eventi che generano valore per i territori',
      description: 'Progettiamo e organizziamo eventi enogastronomici e culturali che creano valore per i territori. Il nostro servizio comprende ideazione, organizzazione, gestione della segreteria e promozione dell\'evento attraverso canali tradizionali e digitali.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
      benefits: [
        'Valorizzazione del patrimonio culturale ed enogastronomico',
        'Creazione di esperienze memorabili',
        'Visibilità per aziende e territori',
        'Networking e creazione di nuove opportunità',
        'Promozione turistica e sviluppo economico'
      ],
      subservices: [
        {
          name: 'Ideazione e organizzazione',
          description: 'Concepiamo e realizziamo eventi originali e coinvolgenti, curando ogni dettaglio dalla pianificazione iniziale all\'esecuzione finale, garantendo un\'esperienza coerente con gli obiettivi prefissati.'
        },
        {
          name: 'Segreteria',
          description: 'Gestiamo tutti gli aspetti amministrativi e organizzativi dell\'evento, dalle iscrizioni al coordinamento di fornitori e partecipanti, garantendo un\'esperienza fluida per tutti gli stakeholder.'
        },
        {
          name: 'Promozione',
          description: 'Sviluppiamo e implementiamo strategie di comunicazione integrate per promuovere l\'evento attraverso canali online e offline, massimizzando la visibilità e incrementando la partecipazione.'
        }
      ]
    },
    'marketing': {
      title: 'Marketing',
      subtitle: 'Strategie di comunicazione integrate e d\'impatto',
      description: 'I nostri servizi di Marketing comprendono gestione dei Social Media, attività di Ufficio Stampa e produzione di contenuti Video e Foto professionali. Sviluppiamo strategie di comunicazione integrate per massimizzare l\'impatto del tuo brand.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      benefits: [
        'Comunicazione efficace con il pubblico target',
        'Costruzione e rafforzamento della brand awareness',
        'Creazione di contenuti di valore',
        'Gestione della reputazione del brand',
        'Maggiore visibilità e raggiungimento di nuovi clienti'
      ],
      subservices: [
        {
          name: 'Social Media',
          description: 'Gestiamo la presenza del tuo brand sui principali social network, creando e pubblicando contenuti coinvolgenti, gestendo la community e analizzando i risultati per ottimizzare costantemente le performance.'
        },
        {
          name: 'Ufficio Stampa',
          description: 'Curiamo le relazioni con i media, elaboriamo comunicati stampa efficaci e sviluppiamo strategie di PR per aumentare la visibilità del tuo brand su testate giornalistiche, blog e altri canali di informazione.'
        },
        {
          name: 'Video',
          description: 'Realizziamo contenuti video professionali per comunicare il tuo brand, dai video corporate ai tutorial, dalle interviste agli spot pubblicitari, curando ogni fase dalla sceneggiatura alla post-produzione.'
        },
        {
          name: 'Foto',
          description: 'Offriamo servizi fotografici professionali per valorizzare i tuoi prodotti, eventi, servizi e spazi, garantendo immagini di alta qualità da utilizzare su siti web, social media e materiali di marketing.'
        }
      ]
    },
    'web-multimedia': {
      title: 'Web e Multimedia',
      subtitle: 'Soluzioni digitali su misura per il tuo business',
      description: 'I nostri servizi Web e Multimedia includono Web design, Hosting, Creazione di App ed E-Commerce. Realizziamo progetti digitali con un\'attenzione particolare al design, all\'esperienza utente e alle performance.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      benefits: [
        'Presenza online efficace e professionale',
        'Navigazione intuitiva e user experience ottimale',
        'Soluzioni scalabili in base alle esigenze aziendali',
        'Performance ottimizzate per conversioni e vendite',
        'Compatibilità con tutti i dispositivi e browser'
      ],
      subservices: [
        {
          name: 'Web design',
          description: 'Progettiamo e sviluppiamo siti web su misura, combinando estetica e funzionalità per creare un\'esperienza utente coinvolgente e intuitiva, ottimizzata per tutti i dispositivi e orientata agli obiettivi di business.'
        },
        {
          name: 'Hosting',
          description: 'Offriamo soluzioni di hosting affidabili e sicure per il tuo sito web, garantendo tempi di caricamento rapidi, protezione dai malware e backup regolari dei dati per assicurare la continuità del tuo business online.'
        },
        {
          name: 'Creazione App',
          description: 'Sviluppiamo applicazioni mobile e web personalizzate per iOS e Android, offrendo soluzioni intuitive e funzionali che rispondono alle specifiche esigenze della tua azienda e dei tuoi utenti.'
        },
        {
          name: 'E-Commerce',
          description: 'Realizziamo piattaforme di e-commerce complete e personalizzate, integrando sistemi di pagamento sicuri, gestione del catalogo prodotti e interfacce intuitive per offrire un\'esperienza d\'acquisto fluida e soddisfacente.'
        }
      ]
    }
  };

  // Recupera i dati del servizio selezionato
  const serviceData = servicesData[serviceId];

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Servizio non trovato</h2>
          <p className="text-gray-600 mb-6">Il servizio che stai cercando non esiste o è stato rimosso.</p>
          <Link to="/servizi">
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full">
              Torna ai servizi
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <div className="pt-24 pb-20">
        {/* Header con sfondo gradiente */}
        <div className="bg-gradient-to-r from-red-900 to-red-600 py-16 mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4">
              <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
                <defs>
                  <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" fill="white" />
                  </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#pattern)" />
              </svg>
            </div>
            <div className="absolute left-0 top-0 transform -translate-x-1/4 -translate-y-1/4 rotate-45">
              <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
                <defs>
                  <pattern id="pattern2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" fill="white" />
                  </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#pattern2)" />
              </svg>
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{serviceData.title}</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">{serviceData.subtitle}</p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-gray-600 mb-8">{serviceData.description}</p>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Benefici</h3>
                <ul className="space-y-2">
                  {serviceData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-96 rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src={serviceData.image}
                alt={serviceData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              I nostri servizi di {serviceData.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {serviceData.subservices.map((subservice, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{subservice.name}</h3>
                  <p className="text-gray-600">{subservice.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sezione contatto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gray-50 rounded-xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Parliamo del tuo progetto</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Sei interessato ai nostri servizi di {serviceData.title.toLowerCase()}? Compila il modulo sottostante e ti contatteremo al più presto.
              </p>
            </div>

            <form className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nome e Cognome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 transition"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Oggetto *
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 transition"
                  defaultValue={`Informazioni sui servizi di ${serviceData.title}`}
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 transition"
                  required
                ></textarea>
              </div>

              <div className="mb-6">
                <div className="flex items-center">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    Acconsento al trattamento dei miei dati personali secondo la{' '}
                    <Link to="/privacy" className="text-red-600 hover:text-red-800">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-medium transition-colors duration-300"
                >
                  Invia Richiesta
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail; 