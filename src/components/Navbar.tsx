import React, { useState } from 'react';
import { Menu, X, Car, Moon, Sun } from 'lucide-react';

export default function Navbar({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Car className="h-8 w-8" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#models" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">Modèles</a>
                <a href="#innovation" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">Innovation</a>
                <a href="#stories" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">Actualités</a>
                <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-gray-200"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
            <a href="#models" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">Modèles</a>
            <a href="#innovation" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">Innovation</a>
            <a href="#stories" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">Actualités</a>
            <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}