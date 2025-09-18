import { motion } from "motion/react";
import { User, Shield, MapPin, Phone, Settings, Award, Heart, Zap, Camera, Bell } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProfileScreen() {
  const userStats = [
    { label: "Trips Completed", value: "12", icon: MapPin },
    { label: "Safety Score", value: "94%", icon: Shield },
    { label: "Countries Visited", value: "8", icon: Award },
    { label: "Safety Checks", value: "47", icon: Heart },
  ];

  const guardians = [
    {
      id: 1,
      name: "Priya Shah",
      relation: "Mother",
      status: "active",
      image: "https://images.unsplash.com/photo-1652148555073-4b1d2ecd664c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBzYWZldHklMjBndWFyZGlhbiUyMHBlcnNvbnxlbnwxfHx8fDE3NTgxMjI4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      name: "Arjun Patel",
      relation: "Best Friend",
      status: "active",
      image: "https://images.unsplash.com/photo-1652148555073-4b1d2ecd664c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBzYWZldHklMjBndWFyZGlhbiUyMHBlcnNvbnxlbnwxfHx8fDE3NTgxMjI4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const achievements = [
    { id: 1, title: "Safety Explorer", description: "Completed 10 safe trips", icon: "🏆", unlocked: true },
    { id: 2, title: "Guardian Angel", description: "Helped 5 travelers in need", icon: "👼", unlocked: true },
    { id: 3, title: "World Traveler", description: "Visit 10 countries", icon: "🌍", unlocked: false },
    { id: 4, title: "Safety Ambassador", description: "Perfect safety score for 30 days", icon: "🎖️", unlocked: false },
  ];

  const recentActivity = [
    { id: 1, action: "Safety check-in", location: "Eiffel Tower", time: "2 hours ago" },
    { id: 2, action: "Emergency contact updated", location: "Paris", time: "1 day ago" },
    { id: 3, action: "Trip completed", location: "London", time: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 pt-6 pb-8">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            className="w-24 h-24 mx-auto mb-4 relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              HS
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-xs text-white">✓</span>
            </div>
          </motion.div>
          
          <h1 className="text-2xl font-bold text-gray-800">Hetav Shah</h1>
          <p className="text-gray-600">Verified SafeTrip Traveler</p>
          
          <motion.div
            className="flex items-center justify-center gap-2 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-600 font-medium">Currently Safe in Paris</span>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        >
          {userStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-4 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Icon size={20} className="text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Emergency Contacts / Guardians */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Shield size={20} className="text-purple-600" />
              My Guardians
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-purple-600 text-sm font-medium"
            >
              Add Guardian
            </motion.button>
          </div>

          <div className="space-y-3">
            {guardians.map((guardian, index) => (
              <motion.div
                key={guardian.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-4 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {guardian.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{guardian.name}</h3>
                  <p className="text-sm text-gray-600">{guardian.relation}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <motion.button
                    className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Phone size={16} className="text-purple-600" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Award size={20} className="text-purple-600" />
            Achievements
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className={`p-4 rounded-2xl border text-center transition-all ${
                  achievement.unlocked
                    ? "bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-200"
                    : "bg-white/50 border-gray-200"
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: achievement.unlocked ? 1.05 : 1.02 }}
              >
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <h3 className={`font-semibold text-sm ${achievement.unlocked ? "text-orange-800" : "text-gray-500"}`}>
                  {achievement.title}
                </h3>
                <p className={`text-xs ${achievement.unlocked ? "text-orange-600" : "text-gray-400"}`}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Zap size={20} className="text-purple-600" />
            Recent Activity
          </h2>

          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={activity.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">{activity.action}</h3>
                    <p className="text-xs text-gray-600">{activity.location}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-3"
        >
          {[
            { icon: Settings, label: "App Settings", description: "Notifications, privacy, etc." },
            { icon: Bell, label: "Safety Alerts", description: "Manage alert preferences" },
            { icon: Camera, label: "Profile Photo", description: "Update your profile picture" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.label}
                className="w-full bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-4 flex items-center gap-3 text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <Icon size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.label}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}