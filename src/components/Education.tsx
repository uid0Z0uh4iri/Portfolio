import { motion } from 'framer-motion';

const education = [
  {
    school: 'YouCode Nador',
    degree: 'Full Stack Developer Program',
    period: '2024 - Present',
  },
  {
    school: 'Faculty of Sciences Rabat',
    degree: 'Professional License in Networks and Telecommunications',
    period: '2021 - 2022',
  },
  {
    school: 'Ecole Supérieure de Technologie de Salé',
    degree: 'DUT in Network and System Administration',
    period: '2019 - 2021',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

export function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Education
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {edu.school}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">{edu.degree}</p>
              <p className="text-gray-500 dark:text-gray-400">{edu.period}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}