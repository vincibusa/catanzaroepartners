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
            className="w-20 h-1 bg-red-600 mx-auto mb-6"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-[280px]"
            >
              <div className="relative w-full h-[200px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-1/3">
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-center">
                <h3 className="text-base font-bold text-gray-900 mb-1 truncate">{member.name}</h3>
                <p className="text-red-600 text-sm font-medium truncate">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-sm md:text-base">
            Sei interessato a unirti al nostro team di esperti appassionati? 
            Siamo sempre alla ricerca di talenti che condividono la nostra visione.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full text-sm font-medium transition-colors duration-300"
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