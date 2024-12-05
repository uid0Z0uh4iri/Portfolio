import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-16 bg-gray-800 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6 text-gray-300"
        >
          <p className="text-lg leading-relaxed">
            I am Mohamed Zouhairi, a dedicated IT professional with strong skills in programming,
            web development, and network systems. I am driven by challenges and continuously look
            for ways to grow and solve complex problems in the tech industry.
          </p>
          <p className="text-lg leading-relaxed">
            Adaptable, dynamic, and always motivated by new challenges. I enjoy working with the
            latest technologies and collaborating with talented teams to create meaningful solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}