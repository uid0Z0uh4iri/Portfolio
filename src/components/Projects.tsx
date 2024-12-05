import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Mail, Search } from 'lucide-react';

const projectCategories = [
  {
    id: 'web',
    title: 'Web Development',
    icon: Code,
    projects: [
      {
        title: 'E-learning Platform',
        description: 'A comprehensive platform for online learning with course management, student tracking, and interactive content delivery.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
        tech: ['PHP', 'MySQL', 'WordPress', 'JavaScript'],
        link: '#'
      },
      {
        title: 'E-commerce Web Application',
        description: 'Feature-rich e-commerce platform with secure payment processing and inventory management.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
        tech: ['WooCommerce', 'PHP', 'Stripe', 'REST API'],
        link: '#'
      }
    ]
  },
  {
    id: 'mailing',
    title: 'Mailing Systems',
    icon: Mail,
    projects: [
      {
        title: 'Email Campaign Manager',
        description: 'Automated email marketing system with analytics and subscriber management.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
        tech: ['Node.js', 'SendGrid', 'MongoDB', 'Express'],
        link: '#'
      }
    ]
  },
  {
    id: 'scraping',
    title: 'Web Scraping',
    icon: Search,
    projects: [
      {
        title: 'Data Mining Tool',
        description: 'Advanced web scraping solution for real-time data collection and analysis.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        tech: ['Python', 'BeautifulSoup', 'Selenium', 'PostgreSQL'],
        link: '#'
      }
    ]
  }
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('web');

  const activeProjects = projectCategories.find(cat => cat.id === activeCategory)?.projects || [];

  return (
    <section id="projects" className="py-16 bg-gray-900 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="flex justify-center mb-12 space-x-4">
          {projectCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.title}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {activeProjects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}