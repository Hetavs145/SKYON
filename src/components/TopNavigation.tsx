import { motion } from "motion/react";
import { Home, MapPin, Shield, User } from "lucide-react";

interface TopNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TopNavigation({ activeTab, onTabChange }: TopNavigationProps) {
  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "planner", icon: MapPin, label: "Trip Planner" },
    { id: "safety", icon: Shield, label: "Safety" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-teal-600 bg-clip-text text-transparent">
                SafeTrip
              </h1>
              <p className="text-xs text-gray-500">Travel + Safety</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className="relative flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabDesktop"
                      className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-purple-500/20 rounded-xl backdrop-blur-sm border border-purple-200/30"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                  
                  <div className={`transition-colors relative z-10 ${
                    isActive 
                      ? "text-purple-600" 
                      : "text-gray-600 hover:text-purple-500"
                  }`}>
                    <Icon size={20} />
                  </div>
                  
                  <span className={`transition-colors relative z-10 font-medium ${
                    isActive ? "text-purple-600" : "text-gray-700 hover:text-purple-500"
                  }`}>
                    {tab.label}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* User Avatar */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
              HS
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}