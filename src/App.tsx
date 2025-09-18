import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BottomNavigation } from "./components/BottomNavigation";
import { TopNavigation } from "./components/TopNavigation";
import { Footer } from "./components/Footer";
import { HomeScreen } from "./components/HomeScreen";
import { TripPlannerScreen } from "./components/TripPlannerScreen";
import { SafetyScreen } from "./components/SafetyScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { useIsMobile } from "./components/ui/use-mobile";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const isMobile = useIsMobile();

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen onTabChange={setActiveTab} />;
      case "planner":
        return <TripPlannerScreen />;
      case "safety":
        return <SafetyScreen />;
      case "profile":
        return <ProfileScreen />;
      default:
        return <HomeScreen onTabChange={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 relative">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-teal-200 to-blue-200 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Top Navigation for Desktop */}
      {!isMobile && (
        <TopNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      )}

      {/* Main Content */}
      <div className={`relative z-10 ${
        isMobile ? 'pb-24' : 'pt-20'
      }`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation for Mobile/Tablet */}
      {isMobile && (
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      )}

      {/* Footer for Desktop */}
      {!isMobile && (
        <Footer />
      )}
    </div>
  );
}