import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80"
          alt="Mercedes-Benz"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">L'Avenir de la Mobilité de Luxe</h1>
          <p className="text-xl md:text-2xl mb-8">Découvrez l'innovation, le luxe et la performance en parfaite harmonie.</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors">
              Explorer les Modèles
              <ChevronRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
              Réserver un Essai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}