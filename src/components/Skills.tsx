import { Code2, Globe, Network, Briefcase, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: ['C', 'Java', 'PHP', 'MySQL'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    skills: ['WordPress', 'WooCommerce', 'Shopify', 'Joomla'],
  },
  {
    icon: Network,
    title: 'Network & System Administration',
    skills: ['LAN', 'HTTP', 'DNS', 'VPN', 'SMTP', 'Firewall', 'Ubuntu', 'Red Hat'],
  },
  {
    icon: Briefcase,
    title: 'Project Management & Design',
    skills: ['UML', 'Merise', 'Agile (Scrum)', 'Eclipse', 'StarUML', 'VS Code', 'Adobe Photoshop'],
  },
  {
    icon: Languages,
    title: 'Languages',
    skills: ['Arabic (Native)', 'French (Fluent)', 'English (Fluent)'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="py-16 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform"
            >
              <div className="flex items-center gap-4 mb-4">
                <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-600 dark:text-gray-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}