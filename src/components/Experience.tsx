import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Freelance IT Consultant',
    company: 'Self-employed',
    period: '2022 - Present',
    description: 'Developed and maintained websites, integrated payment systems, and enhanced e-commerce platforms.',
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'YouCode Nador',
    period: '2024 - Present',
    description: 'Gaining experience with front-end and back-end development using JavaScript, ReactJS, and Node.js.',
  },
  {
    title: 'Web Development Intern',
    company: 'BT Agency',
    period: 'June 2021 - July 2021',
    description: 'Contributed to the development of an e-commerce platform using WordPress, PHP, and MySQL.',
  },
  {
    title: 'Database Design Intern',
    company: 'Ecole Supérieure de Technologie de Salé',
    period: 'July 2020 - September 2020',
    description: "Designed a database for managing a law firm's client and case information.",
  },
  {
    title: 'Intern in Networks and Telecommunications',
    company: 'Faculty of Sciences Rabat',
    period: '2021 - 2022',
    description: 'Gained hands-on experience in network management, system administration, and security protocols.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-900 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Professional Experience
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative pl-8 pb-8 border-l-2 border-blue-400 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-400 rounded-full" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}