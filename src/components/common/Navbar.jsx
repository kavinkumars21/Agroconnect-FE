
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MenuIcon, X, ShoppingCart, User, LogOut, Leaf } from 'lucide-react';
// import { useAuth } from '../../hooks/useAuth';
// import { useCart } from '../../hooks/useCart';
// import Button from './Button';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { user, isAuthenticated, logout } = useAuth();
//   const { totalItems } = useCart();
//   const navigate = useNavigate();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   const getDashboardLink = () => {
//     if (!user) return '/';
//     switch (user.role) {
//       case 'farmer':
//         return '/farmer-dashboard';
//       case 'consumer':
//       case 'business':
//         return '/buyer-dashboard';
//       case 'admin':
//         return '/admin-dashboard';
//       case 'delivery':
//         return '/delivery-dashboard';
//       default:
//         return '/';
//     }
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-40">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex">
//             <div className="flex-shrink-0 flex items-center">
//               <Link to="/" className="flex items-center font-bold text-2xl text-[var(--color-primary-600)]">
//                 <Leaf className="mr-2" size={28} />
//                 <span>AgroConnect</span>
//               </Link>
//             </div>

//             {/* Desktop Nav Links */}
//             <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
//               <Link
//                 to="/"
//                 className="px-3 py-2 rounded-md text-sm font-medium text-[var(--tw-gray-700)] hover:text-[var(--tw-gray-900)] hover:bg-[var(--tw-gray-50)] transition-colors"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/marketplace"
//                 className="px-3 py-2 rounded-md text-sm font-medium text-[var(--tw-gray-700)] hover:text-[var(--tw-gray-900)] hover:bg-[var(--tw-gray-50)] transition-colors"
//               >
//                 Marketplace
//               </Link>
//               {isAuthenticated && (
//                 <Link
//                   to={getDashboardLink()}
//                   className="px-3 py-2 rounded-md text-sm font-medium text-[var(--tw-gray-700)] hover:text-[var(--tw-gray-900)] hover:bg-[var(--tw-gray-50)] transition-colors"
//                 >
//                   Dashboard
//                 </Link>
//               )}
//             </div>
//           </div>

//           {/* Desktop Right */}
//           <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
//             {isAuthenticated ? (
//               <>
//                 {(user?.role === 'consumer' || user?.role === 'business') && (
//                   <Link to="/cart" className="relative p-2 rounded-full bg-[var(--tw-gray-50)] text-[var(--tw-gray-700)] hover:bg-[var(--tw-gray-100)] transition-colors">
//                     <ShoppingCart size={20} />
//                     {totalItems > 0 && (
//                       <span className="absolute top-0 right-0 -mt-1 -mr-1 px-1.5 py-0.5 bg-[var(--color-primary-600)] rounded-full text-xs text-white">
//                         {totalItems}
//                       </span>
//                     )}
//                   </Link>
//                 )}
//                 <Link to="/profile" className="p-2 rounded-full bg-[var(--tw-gray-50)] text-[var(--tw-gray-700)] hover:bg-[var(--tw-gray-100)] transition-colors">
//                   <User size={20} />
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="p-2 rounded-full bg-[var(--tw-gray-50)] text-[var(--tw-gray-700)] hover:bg-[var(--tw-gray-100)] transition-colors"
//                 >
//                   <LogOut size={20} />
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/auth?mode=login">
//                   <Button variant="outline" size="sm">
//                     Log In
//                   </Button>
//                 </Link>
//                 <Link to="/auth?mode=register">
//                   <Button size="sm">Sign Up</Button>
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex items-center sm:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-[var(--tw-gray-700)] hover:text-[var(--tw-gray-900)] hover:bg-[var(--tw-gray-100)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-primary-500)]"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       {isMenuOpen && (
//         <div className="sm:hidden bg-white animate-fade-in">
//           <div className="pt-2 pb-3 space-y-1">
//             <Link
//               to="/"
//               className="block px-3 py-2 rounded-md text-base font-medium text-[var(--tw-gray-700)] hover:text-[var(--tw-gray-900)] hover:bg-[var(--tw-gray-50)]"
//               onClick={toggleMenu}
//             >
//               Home
//             </Link>
//             <Link
//               to="/marketplace"
//               className="block px-3 py-2 rounded-md text-base font-medium text-[var(--tw-gray-700)] hover:text-[var(--tw-gray-900)] hover:bg-[var(--tw-gray-50)]"
//               onClick={toggleMenu}
//             >
//               Marketplace
//             </Link>
//             {isAuthenticated && (
//               <Link
//                 to={getDashboardLink()}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-[var(--tw-gray-700)] hover:text-[var(--tw-gray-900)] hover:bg-[var(--tw-gray-50)]"
//                 onClick={toggleMenu}
//               >
//                 Dashboard
//               </Link>
//             )}
//           </div>
//           <div className="pt-4 pb-3 border-t border-[var(--tw-gray-200)]">
//             {isAuthenticated ? (
//               <div className="space-y-1">
//                 <Link
//                   to="/profile"
//                   className="block px-3 py-2 rounded-md text-base font-medium text-[var(--tw-gray-700)] hover:text-[var(--tw-gray-900)] hover:bg-[var(--tw-gray-50)]"
//                   onClick={toggleMenu}
//                 >
//                   Profile
//                 </Link>
//                 {(user?.role === 'consumer' || user?.role === 'business') && (
//                   <Link
//                     to="/cart"
//                     className="block px-3 py-2 rounded-md text-base font-medium text-[var(--tw-gray-700)] hover:text-[var(--tw-gray-900)] hover:bg-[var(--tw-gray-50)]"
//                     onClick={toggleMenu}
//                   >
//                     Cart {totalItems > 0 && `(${totalItems})`}
//                   </Link>
//                 )}
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     toggleMenu();
//                   }}
//                   className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[var(--tw-gray-700)] hover:text-[var(--tw-gray-900)] hover:bg-[var(--tw-gray-50)]"
//                 >
//                   Log Out
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-1 px-3">
//                 <Link to="/auth?mode=login" onClick={toggleMenu}>
//                   <Button variant="outline" className="w-full mb-2">
//                     Log In
//                   </Button>
//                 </Link>
//                 <Link to="/auth?mode=register" onClick={toggleMenu}>
//                   <Button className="w-full">Sign Up</Button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuIcon, X, ShoppingCart, User, LogOut, Leaf } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardLink = () => {
    if (!user) return '/';
    switch (user.role) {
      case 'farmer':
        return '/farmer-dashboard';
      case 'consumer':
      case 'business':
        return '/buyer-dashboard';
      case 'admin':
        return '/admin-dashboard';
      case 'delivery':
        return '/delivery-dashboard';
      default:
        return '/';
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side: Logo + Nav */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center font-bold text-2xl text-green-700 hover:text-green-800 transition">
              <Leaf className="mr-2" size={28} />
              AgroConnect
            </Link>

            {/* Desktop Nav Links aligned left */}
            <div className="hidden sm:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-green-700 transition font-medium">
                Home
              </Link>
              <Link to="/marketplace" className="text-gray-700 hover:text-green-700 transition font-medium">
                Marketplace
              </Link>
              {isAuthenticated && (
                <Link to={getDashboardLink()} className="text-gray-700 hover:text-green-700 transition font-medium">
                  Dashboard
                </Link>
              )}
            </div>
          </div>

          {/* Right side: Auth/Cart/Profile */}
          <div className="hidden sm:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {(user?.role === 'consumer' || user?.role === 'business') && (
                  <Link to="/cart" className="relative p-2 rounded-full bg-green-50 hover:bg-green-100 transition text-green-700">
                    <ShoppingCart size={20} />
                    {totalItems > 0 && (
                      <span className="absolute top-0 right-0 -mt-1 -mr-1 px-1.5 py-0.5 bg-green-600 rounded-full text-xs text-white">
                        {totalItems}
                      </span>
                    )}
                  </Link>
                )}
                <Link to="/profile" className="p-2 rounded-full bg-green-50 hover:bg-green-100 text-green-700 transition">
                  <User size={20} />
                </Link>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-full bg-green-50 hover:bg-green-100 text-green-700 transition"
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <>
                <Link to="/auth?mode=login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-600 text-green-700 hover:bg-green-50 focus:ring-2 focus:ring-green-400"
                  >
                    Log In
                  </Button>
                </Link>
                <Link to="/auth?mode=register">
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white focus:ring-2 focus:ring-green-400"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t border-green-100 animate-fade-in px-4 pb-4">
          <div className="space-y-2 mt-4">
            <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-green-700 font-medium">
              Home
            </Link>
            <Link to="/marketplace" onClick={toggleMenu} className="block text-gray-700 hover:text-green-700 font-medium">
              Marketplace
            </Link>
            {isAuthenticated && (
              <Link to={getDashboardLink()} onClick={toggleMenu} className="block text-gray-700 hover:text-green-700 font-medium">
                Dashboard
              </Link>
            )}
          </div>

          <div className="mt-4 border-t border-green-100 pt-4 space-y-2">
            {isAuthenticated ? (
              <>
                <Link to="/profile" onClick={toggleMenu} className="block text-gray-700 hover:text-green-700 font-medium">
                  Profile
                </Link>
                {(user?.role === 'consumer' || user?.role === 'business') && (
                  <Link to="/cart" onClick={toggleMenu} className="block text-gray-700 hover:text-green-700 font-medium">
                    Cart {totalItems > 0 && `(${totalItems})`}
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="block w-full text-left text-gray-700 hover:text-green-700 font-medium"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link to="/auth?mode=login" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50 focus:ring-2 focus:ring-green-400">
                    Log In
                  </Button>
                </Link>
                <Link to="/auth?mode=register" onClick={toggleMenu}>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white focus:ring-2 focus:ring-green-400">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
