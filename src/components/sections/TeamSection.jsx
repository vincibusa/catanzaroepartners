import { motion } from 'framer-motion';
import adalberto from '../../assets/images/adalberto.jpeg';
import jessica from '../../assets/images/jessica.jpeg';
import salvo from '../../assets/images/salvo.jpeg';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Adalberto Catanzaro',
      role: 'CEO e Direttore Creativo',
      image: adalberto,
    },
    {
      id: 2,
      name: 'Jessica Ricci',
      role: 'Senior Partner e Lawyer',
      image: jessica,
    },
    {
      id: 3,
      name: 'Salvo Scaduto',
      role: 'Partnering Relationship e Ufficio Stampa',
      image: salvo,
    },
    {
      id: 4,
      name: 'Vincenzo Busalacchi',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    },
    {
      id: 5,
      name: 'Aurora Corso',
      role: 'Account senior e Social Media manager',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    },
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 mb-5"
          >
            Il Nostro Team
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light"
          >
            Conosciamo i professionisti che con passione e competenza lavorano ogni giorno per far crescere il tuo business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg h-[320px] transform transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-full h-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-red-300 font-medium text-sm">{member.role}</p>
                  </div>
                </div>
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
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Sei interessato a unirti al nostro team di esperti appassionati? 
            Siamo sempre alla ricerca di talenti che condividono la nostra visione.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-full text-base font-medium transition-all duration-300 shadow-md"
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