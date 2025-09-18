import { motion } from "motion/react";
import { Home, MapPin, Shield, User } from "lucide-react";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "planner", icon: MapPin, label: "Planner" },
    { id: "safety", icon: Shield, label: "Safety" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-200/50 z-50">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-center p-3 relative"
              whileTap={{ scale: 0.95 }}
              animate={{ scale: isActive ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-teal-400/30 to-purple-500/30 rounded-2xl backdrop-blur-sm border border-purple-200/30"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
              
              <div className={`p-2 rounded-xl transition-colors relative z-10 ${
                isActive 
                  ? "text-purple-600" 
                  : "text-gray-600"
              }`}>
                <Icon size={20} />
              </div>
              
              <span className={`text-xs mt-1 transition-colors relative z-10 ${
                isActive ? "text-purple-600" : "text-gray-500"
              }`}>
                {tab.label}
              </span>
              
              {isActive && (
                <motion.div
                  className="w-1 h-1 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full mt-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}