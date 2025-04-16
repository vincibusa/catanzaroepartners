import { motion } from 'framer-motion';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Marco Catanzaro',
      role: 'CEO & Fondatore',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      description: 'Con oltre 15 anni di esperienza nel marketing digitale, Marco ha fondato l\'agenzia con l\'obiettivo di offrire strategie innovative e risultati concreti.',
      socials: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 2,
      name: 'Laura Bianchi',
      role: 'Direttore Creativo',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      description: 'Laura trasforma le idee in progetti visivi straordinari. La sua esperienza nel design e nella strategia creativa è fondamentale per il successo dei nostri clienti.',
      socials: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 3,
      name: 'Alessandro Rossi',
      role: 'Head of Digital Strategy',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      description: 'Alessandro è specializzato nell\'ottimizzazione delle strategie digitali. La sua profonda conoscenza di SEO, SEM e analytics guida le nostre campagne verso risultati eccezionali.',
      socials: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 4,
      name: 'Giulia Marino',
      role: 'Social Media Manager',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      description: 'Giulia ha un talento naturale per creare contenuti coinvolgenti che generano interazione e conversioni sui canali social dei nostri clienti.',
      socials: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 5,
      name: 'Matteo Ferrari',
      role: 'Web Developer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      description: 'Matteo è il nostro esperto di sviluppo web, con una solida esperienza nella creazione di siti e applicazioni responsive, performanti e user-friendly.',
      socials: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 6,
      name: 'Sofia Esposito',
      role: 'Content Marketing Specialist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      description: 'Sofia ha un dono per le parole. La sua capacità di creare contenuti persuasivi e informativi è essenziale per costruire l\'autorità dei brand che seguiamo.',
      socials: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Il Nostro Team
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
            Conosciamo i professionisti che con passione e competenza lavorano ogni giorno per far crescere il tuo business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <div className="flex space-x-4 mb-4">
                      {Object.entries(member.socials).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-400 transition-colors duration-300"
                        >
                          <span className="sr-only">{platform}</span>
                          {platform === 'linkedin' ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zM8.27 18.5v-8.37H5.5v8.37h2.77z" />
                            </svg>
                          ) : platform === 'twitter' ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22 5.795a8.48 8.48 0 01-2.43.667 4.23 4.23 0 001.86-2.33 8.53 8.53 0 01-2.7 1.03 4.22 4.22 0 00-7.3 2.89 4.3 4.3 0 00.11.965A12 12 0 013.2 4.595a4.22 4.22 0 001.3 5.64 4.19 4.19 0 01-1.91-.53v.052a4.22 4.22 0 003.38 4.13 4.28 4.28 0 01-1.9.072 4.23 4.23 0 003.94 2.93 8.47 8.47 0 01-5.24 1.8c-.34 0-.68-.02-1.01-.06a11.95 11.95 0 006.5 1.91c7.79 0 12.05-6.46 12.05-12.05 0-.18 0-.37-.01-.55a8.53 8.53 0 002.1-2.18z" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153A4.904 4.904 0 012.525 18.55c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.17 1.17 0 100 2.34 1.17 1.17 0 000-2.34z" />
                            </svg>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Sei interessato a unirti al nostro team di esperti appassionati? 
            Siamo sempre alla ricerca di talenti che condividono la nostra visione.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium transition-colors duration-300"
            onClick={() => {
              const contactSection = document.getElementById('contatti');
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Lavora con noi
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection; 