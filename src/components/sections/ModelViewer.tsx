import React from 'react';
import { motion } from 'framer-motion';

export default function ModelViewer() {
  return (
    <section className="h-screen bg-gradient-to-b from-gray-900 to-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Découvrez l'Excellence</h2>
          <p className="text-gray-400">Explorez la nouvelle collection Mercedes-Benz</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8"
              alt="Mercedes EQS"
              className="w-full h-[300px] object-cover"
            />
            <div className="bg-black/80 p-6">
              <h3 className="text-xl font-bold text-white mb-2">La Nouvelle EQS</h3>
              <p className="text-gray-300">Découvrez l'avenir de la mobilité électrique</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888"
              alt="Mercedes AMG"
              className="w-full h-[300px] object-cover"
            />
            <div className="bg-black/80 p-6">
              <h3 className="text-xl font-bold text-white mb-2">Performance AMG</h3>
              <p className="text-gray-300">Libérez l'excellence pure de la conduite</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}