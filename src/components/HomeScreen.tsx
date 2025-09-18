import { motion } from "motion/react";
import { Sparkles, Shield, AlertTriangle, Plane, MapPin, Camera } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomeScreenProps {
  onTabChange: (tab: string) => void;
}

export function HomeScreen({ onTabChange }: HomeScreenProps) {
  const destinations = [
    {
      id: 1,
      name: "Paris",
      country: "France",
      safety: 8.2,
      budget: "₹99,600",
      image: "https://images.unsplash.com/photo-1574631034909-0343b5ad92a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyJTIwdHJhdmVsfGVufDF8fHx8MTc1ODA4NjYxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-pink-400 to-purple-600"
    },
    {
      id: 2,
      name: "Bali",
      country: "Indonesia",
      safety: 7.8,
      budget: "₹66,400",
      image: "https://images.unsplash.com/photo-1589632732202-bd154e6e116d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdHJvcGljYWwlMjBiZWFjaCUyMHJlc29ydHxlbnwxfHx8fDE3NTgxMjI4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-teal-400 to-blue-600"
    },
    {
      id: 3,
      name: "Tokyo",
      country: "Japan",
      safety: 9.1,
      budget: "₹1,24,500",
      image: "https://images.unsplash.com/photo-1585085007341-a5aadf6e48e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMG5lb24lMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzU4MDk0MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-purple-400 to-pink-600"
    }
  ];

  const quickActions = [
    {
      id: "plan",
      icon: Sparkles,
      title: "Plan Trip",
      description: "AI-powered planning",
      gradient: "from-teal-400 to-purple-500",
      action: () => onTabChange("planner")
    },
    {
      id: "safety",
      icon: Shield,
      title: "Check Safety",
      description: "Real-time alerts",
      gradient: "from-green-400 to-teal-500",
      action: () => onTabChange("safety")
    },
    {
      id: "sos",
      icon: AlertTriangle,
      title: "SOS",
      description: "Emergency help",
      gradient: "from-red-400 to-pink-500",
      action: () => onTabChange("safety")
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 -left-8 w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full opacity-20"
          animate={{ 
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -180, -360] 
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-6 pb-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.h1 
            className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-teal-600 bg-clip-text text-transparent mb-3"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            SafeTrip ✨
          </motion.h1>
          <p className="text-gray-600 text-lg">Your AI-powered travel companion</p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={action.id}
                onClick={action.action}
                className="relative p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                     style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                
                <div className={`w-12 h-12 bg-gradient-to-br ${action.gradient} rounded-xl flex items-center justify-center mb-2 mx-auto`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-medium text-gray-800 text-sm">{action.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{action.description}</p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Featured Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Featured Destinations</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-purple-600 text-sm font-medium"
            >
              See all
            </motion.button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                className="flex-shrink-0 w-64 sm:w-72 lg:w-80 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-32 overflow-hidden">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${destination.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Shield size={12} className="text-green-600" />
                    <span className="text-xs font-medium text-gray-800">{destination.safety}</span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">{destination.name}</h3>
                      <p className="text-sm text-gray-500">{destination.country}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-purple-600">{destination.budget}</p>
                      <p className="text-xs text-gray-500">avg. budget</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Status Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                <Shield size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Safety Status</h3>
                <p className="text-sm text-green-600">All Clear</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <MapPin size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Next Trip</h3>
                <p className="text-sm text-purple-600">Paris in 5 days</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}