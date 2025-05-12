
// import React from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Leaf,
//   Mail,
//   Phone,
//   MapPin,
//   Facebook,
//   Twitter,
//   Instagram,
// } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     { icon: <Facebook size={20} />, href: '#' },
//     { icon: <Twitter size={20} />, href: '#' },
//     { icon: <Instagram size={20} />, href: '#' },
//   ];

//   const quickLinks = [
//     { label: 'Home', to: '/' },
//     { label: 'Marketplace', to: '/marketplace' },
//     { label: 'Become a Farmer', to: '/auth?mode=register&role=farmer' },
//     { label: 'Business Account', to: '/auth?mode=register&role=business' },
//     { label: 'About Us', to: '/about' },
//   ];

//   const supportLinks = [
//     { label: 'FAQ', to: '/faq' },
//     { label: 'Contact Us', to: '/contact' },
//     { label: 'Privacy Policy', to: '/privacy' },
//     { label: 'Terms of Service', to: '/terms' },
//     { label: 'Shipping Information', to: '/shipping' },
//   ];

//   const legalLinks = [
//     { label: 'Privacy', to: '/privacy' },
//     { label: 'Terms', to: '/terms' },
//     { label: 'Cookies', to: '/cookies' },
//   ];

//   return (
//     <footer className="bg-gray-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand & Social */}
//           <div>
//             <Link to="/" className="flex items-center text-primary-400 font-bold text-2xl mb-4">
//               <Leaf className="mr-2" size={28} />
//               AgroConnect
//             </Link>
//             <p className="text-gray-400 mb-4">
//               Connecting farmers directly with buyers, eliminating middlemen and supporting local agriculture.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((link, idx) => (
//                 <a key={idx} href={link.href} className="text-gray-400 hover:text-primary-400 transition-colors">
//                   {link.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {quickLinks.map(({ label, to }) => (
//                 <li key={to}>
//                   <Link to={to} className="text-gray-400 hover:text-primary-400 transition-colors">
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Help & Support */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
//             <ul className="space-y-2">
//               {supportLinks.map(({ label, to }) => (
//                 <li key={to}>
//                   <Link to={to} className="text-gray-400 hover:text-primary-400 transition-colors">
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <MapPin size={18} className="text-primary-400 mt-1 mr-2" />
//                 <span className="text-gray-400">123 Farm Road, Portland, OR 97214, United States</span>
//               </li>
//               <li className="flex items-center">
//                 <Phone size={18} className="text-primary-400 mr-2" />
//                 <span className="text-gray-400">(555) 123-4567</span>
//               </li>
//               <li className="flex items-center">
//                 <Mail size={18} className="text-primary-400 mr-2" />
//                 <span className="text-gray-400">support@agroconnect.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400 text-sm mb-4 md:mb-0">
//             &copy; {currentYear} AgroConnect. All rights reserved.
//           </p>
//           <div className="flex space-x-6 text-sm text-gray-400">
//             {legalLinks.map(({ label, to }) => (
//               <Link key={to} to={to} className="hover:text-primary-400 transition-colors">
//                 {label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' },
    { icon: <Youtube size={20} />, href: '#' },
  ];

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Marketplace', to: '/marketplace' },
    { label: 'Farmer Signup', to: '/auth?mode=register&role=farmer' },
    { label: 'Business Signup', to: '/auth?mode=register&role=business' },
  ];

  const supportLinks = [
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Social */}
          <div>
            <Link to="/" className="flex items-center text-green-400 font-bold text-2xl mb-4">
              <Leaf className="mr-2" size={28} />
              AgroConnect
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering Indian farmers and buyers through a connected marketplace.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, idx) => (
                <a key={idx} href={link.href} className="text-gray-400 hover:text-green-400 transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 hover:text-green-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 hover:text-green-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="text-green-400 mr-2" />
                <span className="text-gray-400">AgroConnect HQ, Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-green-400 mr-2" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-green-400 mr-2" />
                <span className="text-gray-400">support@agroconnect.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} AgroConnect. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-green-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-green-400 transition-colors">Terms</Link>
            <Link to="/cookies" className="hover:text-green-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

