import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F8F1ED] border-t border-[#633328]/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#633328] rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-serif text-xl italic">W</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[#4A2016] font-bold text-lg tracking-tight"> Wedding Car</span>
                <span className="text-[#4A2016]/70 text-[9px] uppercase tracking-[0.2em] mt-1 font-medium">Booking System</span>
              </div>
            </div>
            <p className="text-[#4A2016]/80 text-sm leading-relaxed mt-2">
              Providing premium luxury and vintage cars to make your wedding day as royal and memorable as you've always dreamed.
            </p>
            <div className="flex gap-4 mt-2">
              <Facebook className="w-5 h-5 text-[#633328] cursor-pointer hover:scale-110 transition-transform" />
              <Instagram className="w-5 h-5 text-[#633328] cursor-pointer hover:scale-110 transition-transform" />
              <Twitter className="w-5 h-5 text-[#633328] cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#4A2016] font-bold text-lg mb-6 font-serif">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-[#4A2016]/80 text-sm font-medium">
              <li><a href="#" className="hover:text-[#9E624C] transition-colors">Browse Cars</a></li>
              <li><a href="#" className="hover:text-[#9E624C] transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-[#9E624C] transition-colors">About Us</a></li>
              <li><a href="weddingguide" className="hover:text-[#9E624C] transition-colors">Booking Guide</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[#4A2016] font-bold text-lg mb-6 font-serif">Support</h4>
            <ul className="flex flex-col gap-3 text-[#4A2016]/80 text-sm font-medium">
              <li><a href="#" className="hover:text-[#9E624C] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#9E624C] transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#9E624C] transition-colors">Help Center</a></li>
              <li><a href="contact" className="hover:text-[#9E624C] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#4A2016] font-bold text-lg mb-6 font-serif">Get in Touch</h4>
            <ul className="flex flex-col gap-4 text-[#4A2016]/80 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#633328]" />
                <span>123 Luxury Way, Royal Estate, NY</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#633328]" />
                <span>+91 761 702 8000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#633328]" />
                <span>info@weddingcar.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#633328]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#4A2016]/60 text-xs uppercase tracking-widest font-medium">
          <p>© 2026  Wedding Car Booking System. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-[#4A2016]">Sitemap</span>
            <span className="cursor-pointer hover:text-[#4A2016]">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;