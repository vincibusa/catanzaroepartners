import { motion } from 'framer-motion';

const AboutSection = () => {
  const values = [
    {
      title: 'Innovazione',
      description: 'Ricerchiamo costantemente nuove soluzioni e approcci creativi per affrontare le sfide di marketing.',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Eccellenza',
      description: 'Ci impegniamo a fornire servizi di alta qualità che superino le aspettative dei nostri clienti.',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Collaborazione',
      description: 'Crediamo nel potere della collaborazione e lavoriamo a stretto contatto con i nostri clienti.',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="chi-siamo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Chi Siamo
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
            Siamo un team di professionisti appassionati e creativi pronti a trasformare la tua presenza digitale.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">La Nostra Storia</h3>
            <p className="text-gray-600 mb-6">
              Catanzaro & Partners nasce nel 2015 dalla visione di un gruppo di professionisti che credevano in un approccio diverso al marketing. Abbiamo iniziato come una piccola agenzia specializzata in strategie digitali, e in pochi anni siamo cresciuti fino a diventare un punto di riferimento nel settore.
            </p>
            <p className="text-gray-600 mb-6">
              La nostra missione è semplice ma ambiziosa: aiutare le aziende a crescere attraverso strategie di marketing innovative e misurabili. Crediamo fermamente che ogni brand abbia una storia unica da raccontare, e noi siamo qui per aiutarti a farla emergere e a trasformarla in risultati concreti.
            </p>
            <div className="flex space-x-2">
              <span className="text-blue-600 font-medium">15+</span>
              <span className="text-gray-600">Anni di esperienza</span>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-blue-600 font-medium">300+</span>
              <span className="text-gray-600">Clienti soddisfatti</span>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-blue-600 font-medium">25+</span>
              <span className="text-gray-600">Team di esperti</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-96"
          >
            <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-blue-600 rounded-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Team di Catanzaro & Partners"
              className="absolute bottom-0 left-0 w-4/5 h-4/5 object-cover rounded-lg shadow-xl z-10"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 