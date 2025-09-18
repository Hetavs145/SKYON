import { motion } from "motion/react";
import { Plane, Hotel, MapPin, Car, Star, Clock, IndianRupee } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TripPlannerScreen() {
  const tabs = [
    { id: "flights", label: "Flights", icon: Plane },
    { id: "hotels", label: "Hotels", icon: Hotel },
    { id: "activities", label: "Activities", icon: MapPin },
    { id: "transport", label: "Transport", icon: Car },
  ];

  const tripPlan = {
    flights: [
      {
        id: 1,
        route: "Delhi → Paris",
        airline: "Air France",
        price: "₹45,650",
        duration: "8h 15m",
        departure: "10:30 AM",
        arrival: "6:45 PM",
        safety: 9.2
      }
    ],
    hotels: [
      {
        id: 1,
        name: "SafeStay Inn",
        rating: 4.5,
        price: "₹6,640/night",
        location: "Montmartre",
        safety: 8.8,
        image: "https://images.unsplash.com/photo-1574631034909-0343b5ad92a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyJTIwdHJhdmVsfGVufDF8fHx8MTc1ODA4NjYxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ],
    activities: [
      {
        id: 1,
        name: "Eiffel Tower Visit",
        type: "Sightseeing",
        duration: "2 hours",
        price: "₹2,075",
        safety: 9.0,
        time: "10:00 AM"
      },
      {
        id: 2,
        name: "Louvre Museum",
        type: "Culture",
        duration: "3 hours",
        price: "₹1,494",
        safety: 9.1,
        time: "2:00 PM"
      },
      {
        id: 3,
        name: "Seine River Cruise",
        type: "Leisure",
        duration: "1.5 hours",
        price: "₹1,245",
        safety: 8.9,
        time: "7:00 PM"
      }
    ]
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
            Paris Adventure ✈️
          </h1>
          <p className="text-gray-600">March 15-22, 2024 • 7 days</p>
        </motion.div>

        {/* Trip Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 mb-6 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 rounded-2xl" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold">Total Budget</h2>
                <p className="text-3xl font-bold">₹1,03,509</p>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-80">Safety Score</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">8.9</span>
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm opacity-80">Flights</p>
                <p className="font-semibold">₹45,650</p>
              </div>
              <div>
                <p className="text-sm opacity-80">Hotels</p>
                <p className="font-semibold">₹46,480</p>
              </div>
              <div>
                <p className="text-sm opacity-80">Activities</p>
                <p className="font-semibold">₹11,379</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-2 mb-6 overflow-x-auto pb-2"
        >
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 text-purple-600 font-medium whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Icon size={16} />
                {tab.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Flight Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Plane size={20} className="text-purple-600" />
            Flights
          </h3>
          
          {tripPlan.flights.map((flight) => (
            <motion.div
              key={flight.id}
              className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-4 group"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-800">{flight.route}</h4>
                  <p className="text-sm text-gray-600">{flight.airline}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-purple-600">{flight.price}</p>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Safety {flight.safety}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {flight.duration}
                </div>
                <div>{flight.departure} → {flight.arrival}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hotels Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Hotel size={20} className="text-purple-600" />
            Hotels
          </h3>
          
          {tripPlan.hotels.map((hotel) => (
            <motion.div
              key={hotel.id}
              className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm overflow-hidden group"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="h-32 relative overflow-hidden">
                <ImageWithFallback
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{hotel.name}</h4>
                    <p className="text-sm text-gray-600">{hotel.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-purple-600">{hotel.price}</p>
                    <div className="flex items-center gap-1 text-sm">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      {hotel.rating}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Safety Score {hotel.safety}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <MapPin size={20} className="text-purple-600" />
            Activities
          </h3>
          
          <div className="space-y-3">
            {tripPlan.activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-4 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, x: 4 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-800">{activity.name}</h4>
                      <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                        {activity.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {activity.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <IndianRupee size={14} />
                        {activity.price}
                      </div>
                      <div className="flex items-center gap-1 text-green-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {activity.safety}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-purple-600">{activity.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}