// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Leaf, Truck, ShoppingBag, TrendingUp, Check, Users } from 'lucide-react';
// import Button from '../components/common/Button';
// import Card from '../components/common/Card';
// import '../index.css';

// const HomePage = () => {
//   return (
//     <div className="animate-fade-in">
// <section className="relative h-screen w-full overflow-hidden text-white flex items-center justify-center">
//   {/* Background container */}
//   <div className="absolute inset-0 z-0">
//     <img
//       src="https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
//       alt="Farm background"
//       className="w-full h-full object-cover blur-sm scale-105"
//     />
//     <div className="absolute inset-0 bg-black opacity-60" />
//   </div>

//   {/* Foreground content */}
//   <div className="relative z-10 text-center px-6 max-w-3xl">
//     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//     Fresh From Farms to You  Direct and Fair
//     </h1>
//     <p className="text-xl md:text-2xl mb-8">
//       AgroConnect helps farmers sell directly to consumers and businesses, eliminating middlemen and supporting local agriculture.
//     </p>
//     <div className="flex flex-col sm:flex-row justify-center gap-4">
//       <Link to="/marketplace">
//         <Button size="lg" className="w-full sm:w-auto">
//           Shop Marketplace
//         </Button>
//       </Link>
//       <Link to="/auth?mode=register&role=farmer">
//                 <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white hover:bg-white/20">
//                   Join as Farmer
//                 </Button>
//       </Link>
//     </div>
//   </div>
// </section>




//       {/* Features Section */}
//       <section className="py-16 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How AgroConnect Works</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our platform creates a direct bridge between farmers and buyers, making fresh produce more accessible to everyone.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center p-6 transition-all duration-300 transform hover:translate-y-[-8px]">
//               <div className="inline-flex items-center justify-center p-4 bg-primary-100 text-primary-600 rounded-full mb-4">
//                 <Leaf size={28} />
//               </div>
//               <h3 className="text-xl font-semibold mb-3 text-gray-900">Farmers List Crops</h3>
//               <p className="text-gray-600">
//                 Farmers can easily list their available crops, set prices, and manage their inventory in real-time.
//               </p>
//             </div>
            
//             <div className="text-center p-6 transition-all duration-300 transform hover:translate-y-[-8px]">
//               <div className="inline-flex items-center justify-center p-4 bg-primary-100 text-primary-600 rounded-full mb-4">
//                 <ShoppingBag size={28} />
//               </div>
//               <h3 className="text-xl font-semibold mb-3 text-gray-900">Buyers Shop Directly</h3>
//               <p className="text-gray-600">
//                 Consumers and businesses browse, filter, and purchase directly from local farmers at fair prices.
//               </p>
//             </div>
            
//             <div className="text-center p-6 transition-all duration-300 transform hover:translate-y-[-8px]">
//               <div className="inline-flex items-center justify-center p-4 bg-primary-100 text-primary-600 rounded-full mb-4">
//                 <Truck size={28} />
//               </div>
//               <h3 className="text-xl font-semibold mb-3 text-gray-900">Efficient Delivery</h3>
//               <p className="text-gray-600">
//                 Our delivery network ensures fresh produce reaches buyers quickly, maintaining quality and freshness.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>


//       <section className="relative py-20 bg-gradient-to-r from-green-50 to-blue-50 overflow-hidden">
//   {/* Decorative background SVG */}
//   <div className="absolute inset-0">
//     <svg className="w-full h-full opacity-10" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
//       <defs>
//         <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//           <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5" />
//         </pattern>
//       </defs>
//       <rect width="100%" height="100%" fill="url(#grid)" />
//     </svg>
//   </div>

//   {/* Content */}
//   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="text-center mb-16">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//         Here’s How AgroConnect Delivers More Than Just Produce.
//       </h2>
//       <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
//         A win-win for growers and buyers alike—simpler, smarter, and fresher.
//       </p>
//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//       {[
//         {
//           title: "No Middlemen, More Moolah",
//           desc: "Farmers keep more of their hard-earned cash by selling directly to buyers—no extra hands in the pot.",
//           icon: (
//             <svg className="w-10 h-10 animate-bounce text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 2 3 3 3 5m0-8c1.657 0 3 1.343 3 3 0 2-3 3-3 5m0 0v1m0-16v1m8 8h1M4 12H3m15.364-6.364l.707.707M5.636 5.636l-.707.707m12.728 12.728l.707-.707M5.636 18.364l-.707-.707" />
//             </svg>
//           ),
//         },
//         {
//           title: "Straight from Soil to Supper",
//           desc: "Fresher than your ex’s excuses—produce comes straight from the field to your fork.",
//           icon: (
//             <svg className="w-10 h-10 animate-pulse text-green-500" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2C10 6 6 8 6 13a6 6 0 0012 0c0-5-4-7-6-11z" />
//             </svg>
//           ),
//         },
//         {
//           title: "Bulk Buys, Big Wins",
//           desc: "Restaurants and grocers can score sweet deals on bulk orders—directly from the farm.",
//           icon: (
//             <svg className="w-10 h-10 animate-spin-slow text-yellow-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4z" />
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 9h16M9 4v16" />
//             </svg>
//           ),
//         },
//         {
//           title: "Think Global, Eat Local",
//           desc: "Every purchase supports local farms and shrinks your carbon footprint. Tastes good, feels better.",
//           icon: (
//             <svg className="w-10 h-10 animate-wiggle text-blue-500" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v1H8a1 1 0 000 2h1v1a1 1 0 102 0V9h1a1 1 0 100-2h-1V6z" clipRule="evenodd" />
//             </svg>
//           ),
//         },
//       ].map((item, i) => (
//         <div key={i} className="flex items-start space-x-4">
//           <div>{item.icon}</div>
//           <div>
//             <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
//             <p className="mt-2 text-gray-600">{item.desc}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Custom animations */}
//   <style jsx>{`
//     @keyframes wiggle {
//       0%, 100% { transform: rotate(-3deg); }
//       50% { transform: rotate(3deg); }
//     }
//     .animate-wiggle {
//       animation: wiggle 1s infinite;
//     }
//     .animate-spin-slow {
//       animation: spin 5s linear infinite;
//     }
//   `}</style>
// </section>




//       {/* User Types CTA Section */}
//       <section className="py-16 md:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Join AgroConnect Today</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Whether you're a farmer looking to sell your produce or a buyer seeking fresh, local food, AgroConnect has something for you.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <Card className="p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center p-3 bg-primary-100 text-primary-600 rounded-full mb-4">
//                   <Leaf size={24} />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">For Farmers</h3>
//                 <p className="text-gray-600 mb-6">
//                   List your crops, set your prices, and connect directly with consumers and businesses.
//                 </p>
//                 <Link to="/auth?mode=register&role=farmer">
//                   <Button variant="outline" className="w-full">Join as Farmer</Button>
//                 </Link>
//               </div>
//             </Card>
            
//             <Card className="p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center p-3 bg-secondary-100 text-secondary-600 rounded-full mb-4">
//                   <Users size={24} />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">For Consumers</h3>
//                 <p className="text-gray-600 mb-6">
//                   Buy fresh, local produce directly from farms in your area at fair prices.
//                 </p>
//                 <Link to="/auth?mode=register&role=consumer">
//                   <Button variant="outline" className="w-full">Join as Consumer</Button>
//                 </Link>
//               </div>
//             </Card>
            
//             <Card className="p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center p-3 bg-accent-100 text-accent-600 rounded-full mb-4">
//                   <TrendingUp size={24} />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">For Businesses</h3>
//                 <p className="text-gray-600 mb-6">
//                   Source fresh ingredients in bulk directly from farms with negotiation options.
//                 </p>
//                 <Link to="/auth?mode=register&role=business">
//                   <Button variant="outline" className="w-full">Join as Business</Button>
//                 </Link>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </section>
//       {/* Final CTA */}
//       <section className="py-16 md:py-20 bg-primary-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform How You Buy and Sell Produce?</h2>
//           <p className="text-xl mb-8 max-w-3xl mx-auto">
//             Join thousands of farmers and buyers already using AgroConnect to revolutionize agricultural commerce.
//           </p>
//           <div className="flex justify-center gap-4 flex-col sm:flex-row max-w-md mx-auto">
//             <Link to="/marketplace">
//               <Button size="lg" className="w-full sm:w-auto bg-white text-primary-600 hover:bg-gray-100">
//                 Explore Marketplace
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;import React from 'react';
// import React from 'react';


import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ShoppingBag, Truck, Check, Users, TrendingUp } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import homepageImage from '../assets/homepageimage.jpeg';

const HomePage = () => {
  return (
    <div>

      {/* Hero Section */}
      {/* <section
        className="w-full h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4 "
        style={{
          backgroundImage: `url(${homepageImage})`,
          color: 'white',
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Fresh From Farms to You</h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
          Buy fresh, direct, and fair—support local farmers and eat better.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link to="/marketplace">
            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full text-lg">
              Shop Marketplace
            </button>
          </Link>
          <Link to="/auth?mode=register&role=farmer">
            <button className="border border-white hover:bg-white hover:text-green-700 text-white font-semibold py-3 px-6 rounded-full text-lg">
              Join as Farmer
            </button>
          </Link>
        </div>
      </section> */}
      <section className="relative w-full h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
  {/* Background Image with Opacity */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage: `url(${homepageImage})`,
      opacity: 0.4,
    }}
  ></div>

  {/* Optional dark overlay */}
  <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

  {/* Text and Buttons */}
  <div className="relative z-10 text-white">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
      Fresh From Farms to You
    </h1>
    <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto drop-shadow">
      Buy fresh, direct, and fair—support local farmers and eat better.
    </p>
    <div className="flex gap-4 flex-wrap justify-center">
      <Link to="/marketplace">
        <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full text-lg shadow-md">
          Shop Marketplace
        </button>
      </Link>
      <Link to="/auth?mode=register&role=farmer">
        <button className="border border-white hover:bg-white hover:text-green-700 text-white font-semibold py-3 px-6 rounded-full text-lg shadow-md">
          Join as Farmer
        </button>
      </Link>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">How AgroConnect Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform creates a direct bridge between farmers and buyers, making fresh produce more accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard icon={<Leaf size={28} />} title="Farmers List Crops" text="Farmers can easily list their available crops, set prices, and manage their inventory in real-time." />
            <FeatureCard icon={<ShoppingBag size={28} />} title="Buyers Shop Directly" text="Consumers and businesses browse, filter, and purchase directly from local farmers at fair prices." />
            <FeatureCard icon={<Truck size={28} />} title="Efficient Delivery" text="Our delivery network ensures fresh produce reaches buyers quickly, maintaining quality and freshness." />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<section className="py-16 md:py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Why choose AgroConnect?</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Our platform offers unique advantages for both farmers and buyers
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <BenefitBlock
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h2l.4 2M7 10h2l.4 2M11 10h2l.4 2M15 10h2l.4 2M19 10h2l.4 2M6 6h.01M6 6a2 2 0 012-2h8a2 2 0 012 2v6H6V6z" /></svg>}
        title="Better Prices for Farmers"
        text="Farmers earn more by selling directly, without middlemen taking a cut of their profits."
      />
      <BenefitBlock
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" /></svg>}
        title="Fresher Produce for Consumers"
        text="By shortening the supply chain, produce reaches consumers faster and fresher."
      />
      <BenefitBlock
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-6-8h6m2-4a2 2 0 012 2v14l-4-4H7a2 2 0 01-2-2V6a2 2 0 012-2h10z" /></svg>}
        title="Bulk Orders for Businesses"
        text="Restaurants and grocers can negotiate bulk prices directly with farmers."
      />
      <BenefitBlock
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
        title="Support Local Agriculture"
        text="Help sustain local farming communities and reduce environmental impact."
      />
    </div>
  </div>
</section>

      {/* User Types Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Join AgroConnect Today</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a farmer looking to sell your produce or a buyer seeking fresh, local food, AgroConnect has something for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UserCard icon={<Leaf size={24} />} title="For Farmers" text="List your crops, set your prices, and connect directly with consumers and businesses." link="/auth?mode=register&role=farmer" />
            <UserCard icon={<Users size={24} />} title="For Consumers" text="Buy fresh, local produce directly from farms in your area at fair prices." link="/auth?mode=register&role=consumer" />
            <UserCard icon={<TrendingUp size={24} />} title="For Businesses" text="Source fresh ingredients in bulk directly from farms with negotiation options." link="/auth?mode=register&role=business" />
          </div>
        </div>
      </section>

    </div>
  );
};

// Reusable components
const FeatureCard = ({ icon, title, text }) => (
  <div className="text-center p-6 hover:-translate-y-2 transition duration-300">
    <div className="inline-flex items-center justify-center p-4 bg-green-100 text-green-700 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);
const BenefitBlock = ({ icon, title, text }) => (
  <div className="flex items-start gap-4 bg-white shadow-sm p-6 rounded-lg hover:shadow-md transition">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{text}</p>
    </div>
  </div>
);


const BenefitItem = ({ text, subtext }) => (
  <div className="flex items-start">
    <Check className="h-6 w-6 text-green-700 mt-1" />
    <div className="ml-3">
      <h3 className="text-lg font-semibold text-gray-900">{text}</h3>
      <p className="mt-2 text-gray-600">{subtext}</p>
    </div>
  </div>
);

const UserCard = ({ icon, title, text, link }) => (
  <Card className="p-6 hover:shadow-xl transition duration-300 border border-gray-100">
    <div className="text-center">
      <div className="inline-flex items-center justify-center p-3 bg-gray-100 text-green-700 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6">{text}</p>
      <Link to={link}>
        <Button variant="outline" className="w-full">Join as {title.split(" ")[1]}</Button>
      </Link>
    </div>
  </Card>
);

export default HomePage;
