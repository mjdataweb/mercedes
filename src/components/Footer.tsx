import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contactez-nous</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span>123 Avenue des Champs-Élysées, Paris</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>+33 (0)1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>contact@mercedes-benz.fr</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Nouveaux Véhicules</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Occasions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Offres Spéciales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Service & Pièces</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Services Financiers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Solutions Entreprises</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Essai Routier</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Mercedes-Benz. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Conditions d'Utilisation</a>
              <a href="#" className="hover:text-white transition-colors">Paramètres des Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}