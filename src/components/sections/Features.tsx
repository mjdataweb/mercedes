import React from 'react';
import { Shield, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: 'Sécurité Avant Tout',
    description: 'Systèmes d\'assistance à la conduite avancés et fonctionnalités de sécurité innovantes pour vous protéger.'
  },
  {
    icon: Zap,
    title: 'Intelligence Électrique',
    description: 'Motorisations électriques de pointe offrant des performances durables sans compromis.'
  },
  {
    icon: Award,
    title: 'Luxe Redéfini',
    description: 'L\'excellence artisanale rencontre la technologie moderne pour une expérience de conduite inégalée.'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            L'Innovation Rencontre l'Excellence
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}