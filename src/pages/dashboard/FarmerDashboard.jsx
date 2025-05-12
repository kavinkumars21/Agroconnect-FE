import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingBasket, 
  Truck, 
  BarChart2, 
  Settings, 
  PlusCircle, 
  Search,
  Filter,
  Leaf,
  Edit3,
  Trash2,
  ChevronDown,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  Bell,
  Package,
  Sun,
  Cloud,
  CloudRain,
  Droplets
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import { mockCrops } from '../../data/mockData';

// Analytics Component
const Analytics = () => {
  return (
    <div className="space-y-6">
      {/* Header with Quick Actions */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Farm Dashboard</h2>
          <p className="text-gray-600 mt-1">Welcome back! Here's your farm's overview.</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            <Calendar className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white transform hover:scale-105 transition-transform">
          <div className="flex items-center">
            <div className="p-3 bg-white/20 rounded-lg">
              <DollarSign className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-white/80 text-sm">Monthly Revenue</p>
              <h3 className="text-2xl font-bold">$12,426</h3>
              <p className="text-white/80 text-sm flex items-center mt-1">
                <TrendingUp className="h-4 w-4 mr-1" />
                +15.3% from last month
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white transform hover:scale-105 transition-transform">
          <div className="flex items-center">
            <div className="p-3 bg-white/20 rounded-lg">
              <Package className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-white/80 text-sm">Active Orders</p>
              <h3 className="text-2xl font-bold">38</h3>
              <p className="text-white/80 text-sm flex items-center mt-1">
                <TrendingUp className="h-4 w-4 mr-1" />
                +8.4% from last week
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white transform hover:scale-105 transition-transform">
          <div className="flex items-center">
            <div className="p-3 bg-white/20 rounded-lg">
              <Users className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-white/80 text-sm">Total Customers</p>
              <h3 className="text-2xl font-bold">1,249</h3>
              <p className="text-white/80 text-sm flex items-center mt-1">
                <TrendingUp className="h-4 w-4 mr-1" />
                +12.7% from last month
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white transform hover:scale-105 transition-transform">
          <div className="flex items-center">
            <div className="p-3 bg-white/20 rounded-lg">
              <ShoppingBasket className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-white/80 text-sm">Active Products</p>
              <h3 className="text-2xl font-bold">24</h3>
              <p className="text-white/80 text-sm flex items-center mt-1">
                <Leaf className="h-4 w-4 mr-1" />
                18 Organic Products
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders Table */}
        <Card className="lg:col-span-2 p-6 overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
            <Button variant="outline" size="sm">View All Orders</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-123</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">John Smith</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Organic Tomatoes (5 lbs)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$24.99</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Delivered
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-124</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sarah Johnson</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mixed Vegetables (10 lbs)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$45.50</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Processing
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Weather and Tasks Card */}
        <div className="space-y-6">
          {/* Weather Forecast */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Weather Forecast</h3>
            <div className="grid grid-cols-5 gap-4">
              {[
                { day: 'Mon', icon: Sun, temp: 75, weather: 'Sunny' },
                { day: 'Tue', icon: Cloud, temp: 72, weather: 'Cloudy' },
                { day: 'Wed', icon: CloudRain, temp: 68, weather: 'Rain' },
                { day: 'Thu', icon: Sun, temp: 71, weather: 'Sunny' },
                { day: 'Fri', icon: Droplets, temp: 69, weather: 'Humid' }
              ].map((day, index) => (
                <div key={day.day} className="text-center">
                  <p className="text-sm font-medium text-gray-600">{day.day}</p>
                  <div className="my-2">
                    <day.icon className={`h-8 w-8 mx-auto ${
                      index === 0 ? 'text-yellow-500' : 'text-gray-400'
                    }`} />
                  </div>
                  <p className="text-sm font-bold text-gray-900">{day.temp}°F</p>
                  <p className="text-xs text-gray-500">{day.weather}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Tasks List */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Today's Tasks</h3>
              <Button variant="outline" size="sm">Add Task</Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <input type="checkbox" className="h-4 w-4 text-green-600 rounded border-gray-300" />
                <span className="ml-3 text-sm text-gray-900">Harvest tomatoes (Greenhouse 1)</span>
                <span className="ml-auto text-xs text-gray-500">9:00 AM</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <input type="checkbox" className="h-4 w-4 text-green-600 rounded border-gray-300" />
                <span className="ml-3 text-sm text-gray-900">Water new seedlings</span>
                <span className="ml-auto text-xs text-gray-500">11:00 AM</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <input type="checkbox" className="h-4 w-4 text-green-600 rounded border-gray-300" />
                <span className="ml-3 text-sm text-gray-900">Prepare soil for new planting</span>
                <span className="ml-auto text-xs text-gray-500">2:00 PM</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Main FarmerDashboard Component
const FarmerDashboard = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const menuItems = [
    { 
      path: '/farmer-dashboard', 
      label: 'Dashboard', 
      icon: <LayoutDashboard className="h-5 w-5" /> 
    },
    { 
      path: '/farmer-dashboard/crops', 
      label: 'My Crops', 
      icon: <ShoppingBasket className="h-5 w-5" /> 
    },
    { 
      path: '/farmer-dashboard/orders', 
      label: 'Orders', 
      icon: <Truck className="h-5 w-5" /> 
    },
    { 
      path: '/farmer-dashboard/analytics', 
      label: 'Analytics', 
      icon: <BarChart2 className="h-5 w-5" /> 
    },
    { 
      path: '/farmer-dashboard/settings', 
      label: 'Settings', 
      icon: <Settings className="h-5 w-5" /> 
    },
  ];
  
  const isActive = (path) => {
    if (path === '/farmer-dashboard' && location.pathname === '/farmer-dashboard') {
      return true;
    }
    return location.pathname.startsWith(path) && path !== '/farmer-dashboard';
  };
  
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside
        className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          fixed md:static
          inset-y-0
          left-0
          w-64
          bg-white
          border-r
          border-gray-200
          transition-transform
          duration-300
          ease-in-out
          z-30
          flex
          flex-col
        `}
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold">
              {user?.name?.charAt(0) || 'F'}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{user?.name || 'Farmer'}</h3>
              <p className="text-sm text-gray-500">{user?.location || 'Location not set'}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-green-50 text-green-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="px-4 py-3 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-800 flex items-center">
              <Leaf className="h-4 w-4 mr-2" />
              Organic Certified
            </h4>
            <p className="text-xs text-green-600 mt-1">
              Valid until June 2024
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-20 left-4 z-40 bg-white rounded-full p-2 shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <ChevronDown className="h-6 w-6 text-gray-700" />
        ) : (
          <LayoutDashboard className="h-6 w-6 text-gray-700" />
        )}
      </button>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <Routes>
          <Route path="/" element={<Analytics />} />
          <Route path="/crops" element={<div>Crops List (Coming soon)</div>} />
          <Route path="/add-crop" element={<div>Add Crop (Coming soon)</div>} />
          <Route path="/edit-crop/:id" element={<div>Edit Crop (Coming soon)</div>} />
          <Route path="/orders" element={<div>Orders (Coming soon)</div>} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<div>Settings (Coming soon)</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default FarmerDashboard;

// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Link, useLocation } from 'react-router-dom';
// import { 
//   LayoutDashboard, 
//   ShoppingBasket, 
//   Truck, 
//   BarChart2, 
//   Settings, 
//   PlusCircle, 
//   Search,
//   Filter,
//   Leaf,
//   Edit3,
//   Trash2,
//   ChevronDown
// } from 'lucide-react';
// import { useAuth } from '../../hooks/useAuth';
// import Button from '../../components/common/Button';
// import Card from '../../components/common/Card';
// import { mockCrops } from '../../data/mockData';

// // Internal components for the farmer dashboard
// const CropsList = () => {
//   const { user } = useAuth();
//   const [crops, setCrops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [showFilters, setShowFilters] = useState(false);
  
//   useEffect(() => {
//     // For demo, we'll filter mockCrops by farmerId
//     // In a real app, this would be an API call to get the farmer's crops
//     const farmerCrops = mockCrops.filter(crop => 
//       crop.farmerName === user?.name || 
//       crop.farmerId === user?.id
//     );
//     setCrops(farmerCrops);
//   }, [user]);
  
//   const filteredCrops = crops.filter(crop => {
//     // Apply search filter
//     const matchesSearch = crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          crop.description?.toLowerCase().includes(searchTerm.toLowerCase());
    
//     // Apply status filter
//     let matchesStatus = true;
//     if (filterStatus === 'active') {
//       matchesStatus = crop.quantity > 0;
//     } else if (filterStatus === 'sold-out') {
//       matchesStatus = crop.quantity === 0;
//     }
    
//     return matchesSearch && matchesStatus;
//   });
  
//   const handleDeleteCrop = (cropId) => {
//     setCrops(crops.filter(crop => crop.id !== cropId));
//   };
  
//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-gray-900">My Crops</h2>
//         <Link to="/farmer-dashboard/add-crop">
//           <Button className="flex items-center">
//             <PlusCircle size={18} className="mr-2" />
//             Add New Crop
//           </Button>
//         </Link>
//       </div>
      
//       {/* Search and filters */}
//       <Card className="p-4">
//         <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
//           <div className="relative flex-grow">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <Search className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search your crops..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
//             />
//           </div>
          
//           <Button 
//             variant="outline" 
//             onClick={() => setShowFilters(!showFilters)}
//             className="whitespace-nowrap"
//           >
//             <Filter className="h-5 w-5 mr-2" />
//             Filters {showFilters ? '▾' : '▸'}
//           </Button>
//         </div>
        
//         {showFilters && (
//           <div className="pt-2 border-t border-gray-200 animate-slide-up">
//             <div className="flex flex-wrap gap-2">
//               <button
//                 className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
//                   filterStatus === 'all' 
//                     ? 'bg-primary-100 text-primary-800' 
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//                 onClick={() => setFilterStatus('all')}
//               >
//                 All Crops
//               </button>
//               <button
//                 className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
//                   filterStatus === 'active' 
//                     ? 'bg-green-100 text-green-800' 
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//                 onClick={() => setFilterStatus('active')}
//               >
//                 In Stock
//               </button>
//               <button
//                 className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
//                   filterStatus === 'sold-out' 
//                     ? 'bg-red-100 text-red-800' 
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//                 onClick={() => setFilterStatus('sold-out')}
//               >
//                 Sold Out
//               </button>
//             </div>
//           </div>
//         )}
//       </Card>
      
//       {/* Crops list */}
//       {filteredCrops.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//           {filteredCrops.map((crop) => (
//             <Card key={crop.id} className="overflow-hidden hover:shadow-md transition-shadow">
//               <div className="relative h-48">
//                 <img
//                   src={crop.image}
//                   alt={crop.name}
//                   className="w-full h-full object-cover"
//                 />
//                 {crop.isOrganic && (
//                   <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
//                     <Leaf className="h-3 w-3 mr-1" />
//                     Organic
//                   </div>
//                 )}
//               </div>
//               <div className="p-4">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-lg font-semibold text-gray-900">{crop.name}</h3>
//                   <span className="text-lg font-bold text-primary-600">${crop.price.toFixed(2)}/lb</span>
//                 </div>
                
//                 <div className="flex items-center mb-3">
//                   <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
//                     crop.quantity > 0 
//                       ? 'bg-green-100 text-green-800' 
//                       : 'bg-red-100 text-red-800'
//                   }`}>
//                     {crop.quantity > 0 ? `${crop.quantity} lbs in stock` : 'Sold Out'}
//                   </span>
//                 </div>
                
//                 <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
//                   <Link to={`/farmer-dashboard/edit-crop/${crop.id}`} className="flex-1">
//                     <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
//                       <Edit3 size={16} className="mr-1" />
//                       Edit
//                     </Button>
//                   </Link>
//                   <Button 
//                     variant="outline" 
//                     size="sm" 
//                     className="flex-1 text-red-600 border-red-600 hover:bg-red-50 flex items-center justify-center"
//                     onClick={() => handleDeleteCrop(crop.id)}
//                   >
//                     <Trash2 size={16} className="mr-1" />
//                     Delete
//                   </Button>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-12 bg-white rounded-lg shadow">
//           <ShoppingBasket size={48} className="mx-auto text-gray-400 mb-4" />
//           <h3 className="text-xl font-medium text-gray-900 mb-2">No crops found</h3>
//           <p className="text-gray-600 mb-6">
//             {searchTerm || filterStatus !== 'all' 
//               ? "No crops match your search criteria. Try adjusting your filters."
//               : "You haven't added any crops yet. Start by adding your first crop."}
//           </p>
//           {!searchTerm && filterStatus === 'all' && (
//             <Link to="/farmer-dashboard/add-crop">
//               <Button className="flex items-center mx-auto">
//                 <PlusCircle size={18} className="mr-2" />
//                 Add New Crop
//               </Button>
//             </Link>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// const AddCrop = () => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Crop</h2>
//       <Card className="p-6">
//         <form className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="cropName" className="block text-sm font-medium text-gray-700 mb-1">
//                 Crop Name
//               </label>
//               <input
//                 id="cropName"
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//                 placeholder="e.g., Organic Tomatoes"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
//                 Price per lb ($)
//               </label>
//               <input
//                 id="price"
//                 type="number"
//                 min="0"
//                 step="0.01"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//                 placeholder="0.00"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
//                 Quantity Available (lbs)
//               </label>
//               <input
//                 id="quantity"
//                 type="number"
//                 min="0"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//                 placeholder="0"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
//                 Farm Location
//               </label>
//               <input
//                 id="location"
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//                 placeholder="City, State"
//               />
//             </div>
//           </div>
          
//           <div>
//             <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
//               Description
//             </label>
//             <textarea
//               id="description"
//               rows={3}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//               placeholder="Describe your crop, its quality, and any special features..."
//             ></textarea>
//           </div>
          
//           <div>
//             <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
//               Upload Image
//             </label>
//             <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//               <div className="space-y-1 text-center">
//                 <svg
//                   className="mx-auto h-12 w-12 text-gray-400"
//                   stroke="currentColor"
//                   fill="none"
//                   viewBox="0 0 48 48"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 <div className="flex text-sm text-gray-600">
//                   <label
//                     htmlFor="file-upload"
//                     className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
//                   >
//                     <span>Upload a file</span>
//                     <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                   </label>
//                   <p className="pl-1">or drag and drop</p>
//                 </div>
//                 <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex items-center">
//             <input
//               id="organic"
//               type="checkbox"
//               className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//             />
//             <label htmlFor="organic" className="ml-2 block text-sm text-gray-900">
//               This crop is certified organic
//             </label>
//           </div>
          
//           <div className="flex justify-end space-x-3">
//             <Link to="/farmer-dashboard">
//               <Button variant="outline">Cancel</Button>
//             </Link>
//             <Button type="submit">Add Crop</Button>
//           </div>
//         </form>
//       </Card>
//     </div>
//   );
// };

// const Orders = () => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-gray-900 mb-6">Orders</h2>
//       <Card className="p-6">
//         <div className="space-y-6">
//           <div className="flex justify-between items-center">
//             <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
//             <div className="flex items-center">
//               <span className="mr-2 text-sm text-gray-500">Filter by</span>
//               <select className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
//                 <option value="all">All Orders</option>
//                 <option value="pending">Pending</option>
//                 <option value="processing">Processing</option>
//                 <option value="shipped">Shipped</option>
//                 <option value="delivered">Delivered</option>
//               </select>
//             </div>
//           </div>
          
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Order ID
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Buyer
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Items
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Total
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Date
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {/* Sample order rows */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-123</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">John Smith</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Organic Tomatoes (5 lbs)</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$19.95</td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
//                       Processing
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Aug 15, 2023</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                     <Button variant="outline" size="sm">View Details</Button>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-122</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Jane Cooper</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Organic Kale (2 lbs), Bell Peppers (3 lbs)</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$15.75</td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
//                       Delivered
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Aug 12, 2023</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                     <Button variant="outline" size="sm">View Details</Button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// };

// const Analytics = () => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <Card className="p-6">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-primary-100 text-primary-600">
//               <ShoppingBasket size={24} />
//             </div>
//             <div className="ml-5">
//               <p className="text-gray-500 text-sm">Total Sales</p>
//               <h3 className="text-2xl font-bold text-gray-900">$1,243.00</h3>
//               <p className="text-green-600 text-sm flex items-center">
//                 <span className="text-xs mr-1">▲</span> 8% from last month
//               </p>
//             </div>
//           </div>
//         </Card>
        
//         <Card className="p-6">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-secondary-100 text-secondary-600">
//               <BarChart2 size={24} />
//             </div>
//             <div className="ml-5">
//               <p className="text-gray-500 text-sm">Total Orders</p>
//               <h3 className="text-2xl font-bold text-gray-900">38</h3>
//               <p className="text-green-600 text-sm flex items-center">
//                 <span className="text-xs mr-1">▲</span> 12% from last month
//               </p>
//             </div>
//           </div>
//         </Card>
        
//         <Card className="p-6">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-accent-100 text-accent-600">
//               <Truck size={24} />
//             </div>
//             <div className="ml-5">
//               <p className="text-gray-500 text-sm">Pending Deliveries</p>
//               <h3 className="text-2xl font-bold text-gray-900">7</h3>
//               <p className="text-gray-500 text-sm">All on schedule</p>
//             </div>
//           </div>
//         </Card>
//       </div>
      
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Card className="p-6">
//           <h3 className="text-lg font-medium text-gray-900 mb-4">Top Selling Crops</h3>
//           <div className="space-y-4">
//             <div className="flex items-center">
//               <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
//                 <img 
//                   src="https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
//                   alt="Tomatoes" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="ml-4 flex-grow">
//                 <div className="flex justify-between">
//                   <p className="font-medium text-gray-900">Organic Tomatoes</p>
//                   <p className="font-medium text-gray-900">$395.92</p>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
//                   <div className="bg-primary-600 h-2.5 rounded-full" style={{width: '70%'}}></div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="flex items-center">
//               <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
//                 <img 
//                   src="https://images.pexels.com/photos/51372/kale-vegetables-brassica-oleracea-var-sabellica-51372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
//                   alt="Kale" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="ml-4 flex-grow">
//                 <div className="flex justify-between">
//                   <p className="font-medium text-gray-900">Organic Kale</p>
//                   <p className="font-medium text-gray-900">$270.00</p>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
//                   <div className="bg-primary-600 h-2.5 rounded-full" style={{width: '55%'}}></div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="flex items-center">
//               <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
//                 <img 
//                   src="https://images.pexels.com/photos/768093/pexels-photo-768093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
//                   alt="Bell Peppers" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="ml-4 flex-grow">
//                 <div className="flex justify-between">
//                   <p className="font-medium text-gray-900">Bell Peppers</p>
//                   <p className="font-medium text-gray-900">$157.50</p>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
//                   <div className="bg-primary-600 h-2.5 rounded-full" style={{width: '40%'}}></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Card>
        
//         <Card className="p-6">
//           <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
//           <div className="space-y-4">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
//                   <ShoppingBasket size={16} />
//                 </div>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-900">New order received</p>
//                 <p className="text-sm text-gray-500">Order #ORD-123 from John Smith</p>
//                 <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
//               </div>
//             </div>
            
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
//                   <Truck size={16} />
//                 </div>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-900">Order shipped</p>
//                 <p className="text-sm text-gray-500">Order #ORD-121 to Emily Davis</p>
//                 <p className="text-xs text-gray-400 mt-1">Yesterday at 3:45 PM</p>
//               </div>
//             </div>
            
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
//                   <PlusCircle size={16} />
//                 </div>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-900">New crop listed</p>
//                 <p className="text-sm text-gray-500">You added "Organic Spinach" to your inventory</p>
//                 <p className="text-xs text-gray-400 mt-1">Yesterday at 11:20 AM</p>
//               </div>
//             </div>
            
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
//                   <Leaf size={16} />
//                 </div>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-900">Organic certification approved</p>
//                 <p className="text-sm text-gray-500">Your application for organic certification has been approved</p>
//                 <p className="text-xs text-gray-400 mt-1">2 days ago</p>
//               </div>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// // Main Farmer Dashboard component
// const FarmerDashboard = () => {
//   const location = useLocation();
//   const { user } = useAuth();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
//   const menuItems = [
//     { 
//       path: '/farmer-dashboard', 
//       label: 'Dashboard', 
//       icon: <LayoutDashboard className="h-5 w-5" /> 
//     },
//     { 
//       path: '/farmer-dashboard/crops', 
//       label: 'My Crops', 
//       icon: <ShoppingBasket className="h-5 w-5" /> 
//     },
//     { 
//       path: '/farmer-dashboard/orders', 
//       label: 'Orders', 
//       icon: <Truck className="h-5 w-5" /> 
//     },
//     { 
//       path: '/farmer-dashboard/analytics', 
//       label: 'Analytics', 
//       icon: <BarChart2 className="h-5 w-5" /> 
//     },
//     { 
//       path: '/farmer-dashboard/settings', 
//       label: 'Settings', 
//       icon: <Settings className="h-5 w-5" /> 
//     },
//   ];
  
//   // Determine if the current path matches a menu item
//   const isActive = (path) => {
//     if (path === '/farmer-dashboard' && location.pathname === '/farmer-dashboard') {
//       return true;
//     }
//     return location.pathname.startsWith(path) && path !== '/farmer-dashboard';
//   };
  
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <button
//         className="md:hidden fixed top-20 left-4 z-30 bg-white rounded-full p-2 shadow-md"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? (
//           <ChevronDown className="h-6 w-6 text-gray-700" />
//         ) : (
//           <LayoutDashboard className="h-6 w-6 text-gray-700" />
//         )}
//       </button>
      
//       {/* Sidebar */}
//       <aside
//         className={`${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } md:translate-x-0 fixed z-20 top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out md:sticky`}
//       >
//         <div className="flex flex-col h-full">
//           <div className="p-4 border-b border-gray-200">
//             <div className="flex items-center space-x-3">
//               <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">
//                 {user?.name?.charAt(0) || 'F'}
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900">{user?.name || 'Farmer'}</h3>
//                 <p className="text-sm text-gray-500">{user?.location || 'Location not set'}</p>
//               </div>
//             </div>
//           </div>
//           <nav className="flex-1 overflow-y-auto p-4">
//             <ul className="space-y-1">
//               {menuItems.map((item) => (
//                 <li key={item.path}>
//                   <Link
//                     to={item.path}
//                     className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
//                       isActive(item.path)
//                         ? 'bg-primary-50 text-primary-700'
//                         : 'text-gray-700 hover:bg-gray-100'
//                     }`}
//                     onClick={() => setIsSidebarOpen(false)}
//                   >
//                     {item.icon}
//                     <span className="ml-3">{item.label}</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//           <div className="p-4 border-t border-gray-200">
//             <div className="px-4 py-3 bg-primary-50 rounded-lg">
//               <h4 className="font-medium text-primary-800 flex items-center">
//                 <Leaf className="h-4 w-4 mr-2" />
//                 Organic Certified
//               </h4>
//               <p className="text-xs text-primary-600 mt-1">
//                 Your organic certification is valid until June 2024
//               </p>
//             </div>
//           </div>
//         </div>
//       </aside>
      
//       {/* Main content */}
//       <div className={`md:ml-64 p-4 sm:p-6 lg:p-8 transition-all duration-300 ease-in-out`}>
//         <Routes>
//           <Route path="/" element={<Analytics />} />
//           <Route path="/crops" element={<CropsList />} />
//           <Route path="/add-crop" element={<AddCrop />} />
//           <Route path="/edit-crop/:id" element={<AddCrop />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/analytics" element={<Analytics />} />
//           <Route path="/settings" element={<p>Settings page (Coming soon)</p>} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default FarmerDashboard;