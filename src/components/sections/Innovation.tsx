import React from 'react';
import { motion } from 'framer-motion';

export default function Innovation() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80"
              alt="Mercedes-Benz Innovation"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Conduire vers l'Avenir</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Notre engagement envers l'innovation nous pousse à repousser les limites du possible dans la technologie automobile.
              Des groupes motopropulseurs électriques révolutionnaires aux capacités de conduite autonome avancées, nous façonnons
              l'avenir de la mobilité.
            </p>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li className="flex items-center space-x-3">
                <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                <span>Systèmes d'Assistance à la Conduite Avancés</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                <span>Intelligence Électrique</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                <span>Technologie Voiture Connectée</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}