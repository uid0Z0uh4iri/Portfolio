import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen pt-20 pb-16 bg-gray-900 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Hello! I am{' '}
              <span className="text-blue-500">Mohamed Zouhairi</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed mb-8"
            >
              A passionate Full Stack Developer and IT Consultant with expertise in web development,
              networks, and system administration.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-6 text-gray-300"
            >
              <p className="text-lg leading-relaxed">
                I am a dedicated IT professional with strong skills in programming,
                web development, and network systems. I am driven by challenges and continuously look
                for ways to grow and solve complex problems in the tech industry.
              </p>
              <p className="text-lg leading-relaxed">
                Adaptable, dynamic, and always motivated by new challenges. I enjoy working with the
                latest technologies and collaborating with talented teams to create meaningful solutions.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-blue-500 rounded-2xl transform rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600"
                alt="Mohamed Zouhairi"
                className="relative z-10 rounded-2xl shadow-2xl w-full transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}