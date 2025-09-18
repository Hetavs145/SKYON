import { motion } from "motion/react";
import { Heart, Shield, Globe, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Globe, label: "Website", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
    { icon: Phone, label: "Support", href: "#" },
  ];

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Trip Planning", href: "#" },
        { label: "Safety Features", href: "#" },
        { label: "Emergency SOS", href: "#" },
        { label: "Guardian Network", href: "#" },
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Safety Guidelines", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Emergency Contacts", href: "#" },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Safety Terms", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 border-t border-gray-700/50 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                <Shield size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
                  SafeTrip
                </h3>
                <p className="text-sm text-gray-400">Travel + Safety</p>
              </div>
            </motion.div>
            
            <motion.p
              className="text-gray-300 mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Your AI-powered travel companion that prioritizes your safety while exploring the world. 
              Plan smarter, travel safer, and stay connected with your loved ones.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="w-10 h-10 bg-gray-800/70 backdrop-blur-sm border border-gray-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-purple-400 hover:border-purple-400 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * sectionIndex }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * linkIndex }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span>Made with</span>
            <Heart size={16} className="text-pink-400 fill-current" />
            <span>for safer travels</span>
          </div>
          
          <div className="text-sm text-gray-400">
            © 2024 SafeTrip. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}