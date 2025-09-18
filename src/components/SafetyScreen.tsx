import { motion } from "motion/react";
import { Shield, AlertTriangle, Phone, MapPin, Clock, TrendingUp, Bell, Zap } from "lucide-react";
import { Progress } from "./ui/progress";

export function SafetyScreen() {
  const safetyAlerts = [
    {
      id: 1,
      type: "warning",
      title: "Scam Alert",
      message: "Fake taxi scam reported at Gare du Nord",
      location: "Paris, France",
      time: "2 hours ago",
      severity: "medium"
    },
    {
      id: 2,
      type: "danger",
      title: "Road Closure",
      message: "Unsafe road conditions at Pont Neuf",
      location: "Paris, France", 
      time: "4 hours ago",
      severity: "high"
    },
    {
      id: 3,
      type: "info",
      title: "Safety Tip",
      message: "Stay in well-lit areas after 9 PM",
      location: "Montmartre",
      time: "1 day ago",
      severity: "low"
    }
  ];

  const safetyMetrics = [
    { label: "Location Safety", value: 87, color: "from-green-400 to-emerald-500" },
    { label: "Transport Safety", value: 92, color: "from-blue-400 to-cyan-500" },
    { label: "Health Safety", value: 95, color: "from-purple-400 to-indigo-500" },
    { label: "Crime Rate", value: 31, color: "from-orange-400 to-red-500" }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "from-red-400 to-pink-500";
      case "medium": return "from-orange-400 to-yellow-500";
      case "low": return "from-blue-400 to-cyan-500";
      default: return "from-gray-400 to-gray-500";
    }
  };

  const getSeverityIcon = (type: string) => {
    switch (type) {
      case "danger": return AlertTriangle;
      case "warning": return Bell;
      case "info": return Shield;
      default: return Bell;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 pt-6 pb-8">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-teal-600 bg-clip-text text-transparent mb-2">
            Safety Dashboard 🛡️
          </h1>
          <p className="text-gray-600">Real-time safety monitoring for Paris</p>
        </motion.div>

        {/* Overall Safety Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-6 mb-6 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 rounded-2xl" />
          <div className="relative z-10 text-center">
            <motion.div
              className="w-24 h-24 mx-auto mb-4 relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="white"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - 0.87) }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">87</span>
              </div>
            </motion.div>
            <h2 className="text-xl font-semibold mb-1">Safety Score</h2>
            <p className="text-sm opacity-90">You're in a relatively safe area</p>
          </div>
        </motion.div>

        {/* Safety Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        >
          {safetyMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-800 text-sm">{metric.label}</h3>
                <span className="text-lg font-bold text-gray-800">{metric.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className={`h-2 bg-gradient-to-r ${metric.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.value}%` }}
                  transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Emergency Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          <motion.button
            className="bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-2xl p-4 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={{ 
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative z-10 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Zap size={24} className="text-white" />
              </div>
              <h3 className="font-semibold">SOS Alert</h3>
              <p className="text-sm opacity-90">Emergency help</p>
            </div>
          </motion.button>

          <motion.button
            className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white rounded-2xl p-4 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="font-semibold">Fake Call</h3>
              <p className="text-sm opacity-90">Quick escape</p>
            </div>
          </motion.button>
        </motion.div>

        {/* Safety Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Bell size={20} className="text-purple-600" />
              Safety Alerts
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-purple-600 text-sm font-medium"
            >
              View all
            </motion.button>
          </div>

          <div className="space-y-3">
            {safetyAlerts.map((alert, index) => {
              const Icon = getSeverityIcon(alert.type);
              return (
                <motion.div
                  key={alert.id}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${getSeverityColor(alert.severity)} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-800">{alert.title}</h3>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock size={12} />
                          {alert.time}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">{alert.message}</p>
                      
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin size={12} />
                        {alert.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 gap-4"
        >
          <motion.button
            className="bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-2xl p-4 flex items-center justify-between group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Shield size={24} className="text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">View Safe Hotels</h3>
                <p className="text-sm opacity-90">Verified accommodations nearby</p>
              </div>
            </div>
            <TrendingUp size={20} className="text-white group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}