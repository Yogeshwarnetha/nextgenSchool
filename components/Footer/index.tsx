// components/Footer.jsx
"use client";

import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Linkedin,
  ChevronRight,
  Send,
  Globe,
  Heart,
  Award,
  Shield,
  Users,
  ArrowUpRight,
  Home,
  BookOpen,
  Calendar,
  Image as ImageIcon
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredBranch, setHoveredBranch] = useState<number | null>(null);

  // Branches data
  const branches = [
    {
      id: 1,
      name: "KPHB 6th Phase",
      address: "Plot.No.572, KPHB 6TH PHASE, Hyderabad-500072, Telangana",
      phones: ["040 23151455", "7799222060"],
      mapLink: "https://goo.gl/maps/eAecd15qdwvrnRTo9",
      timing: "Mon-Sat: 8:00 AM - 6:00 PM",
      color: "bg-gradient-to-br from-blue-50 to-indigo-100"
    },
    {
      id: 2,
      name: "Bachupally",
      address: "Plot No.118, LAHARI GREEN PARK, OPP: Vasavi Urban Road, Bowrampet Village, Hyderabad",
      phones: ["7794069823"],
      mapLink: "https://maps.app.goo.gl/ZVrToNGpiaqKm9bz5",
      timing: "Mon-Sat: 8:00 AM - 6:00 PM",
      color: "bg-gradient-to-br from-emerald-50 to-green-100"
    },
    {
      id: 3,
      name: "Pragathi Nagar 1",
      address: "Plot.No.593, Behind State Bank of India, Pragati Nagar, Hyderabad 500090",
      phones: ["8096338374"],
      mapLink: "https://goo.gl/maps/BXVgan3a2Ndp2Lho9",
      timing: "Mon-Sat: 8:00 AM - 6:00 PM",
      color: "bg-gradient-to-br from-purple-50 to-pink-100"
    },
    {
      id: 4,
      name: "Pragathi Nagar 2",
      address: "H.NO. 8-74, Near ALEAP Junction, Apuroopa Colony, Hyderabad-500090, Telangana",
      phones: ["8977532289", "9347034833"],
      mapLink: "https://goo.gl/maps/31wgaUPkWv8FVL6x9",
      timing: "Mon-Sat: 8:00 AM - 6:00 PM",
      color: "bg-gradient-to-br from-amber-50 to-orange-100"
    }
  ];

  // Quick links
  const quickLinks = [
    { name: "About Us", href: "/about", icon: <Users className="w-4 h-4" /> },
    { name: "Gallery", href: "/gallery", icon: <ImageIcon className="w-4 h-4" /> },
    { name: "Contact Us", href: "/contact", icon: <Phone className="w-4 h-4" /> },
  ];

  // Social media links
  const socialLinks = [
    { platform: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/profile.php?id=100093395811724", color: "hover:bg-blue-100 text-blue-600" },
    { platform: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/nextgenkidsschool/?hl=en", color: "hover:bg-pink-100 text-pink-600" },
    { platform: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/Nextgen_School", color: "hover:bg-sky-100 text-sky-600" },
    { platform: "YouTube", icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/@nextgenkidsindia", color: "hover:bg-red-100 text-red-600" },
    { platform: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#", color: "hover:bg-blue-100 text-blue-700" }
  ];

  // Newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert(`Thank you for subscribing with ${email}`);
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 text-gray-800 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Section - School Info & Quick Links */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/school new Logo.png"
                  alt="NextGen Schools Logo"
                  className="h-24 w-24 object-contain"
                />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">NextGen Schools</h2>
                </div>
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                A premier educational institution dedicated to nurturing young minds through innovative teaching methods and holistic development.
              </p>
            </div>

            {/* Accreditation Badges */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full">
                <Shield className="w-3 h-3 text-blue-600" />
                <span className="text-xs text-blue-700 font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
                <Award className="w-3 h-3 text-green-600" />
                <span className="text-xs text-green-700 font-medium">CBSE Affiliated</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-gray-900 flex items-center gap-2">
              <span>Quick Links</span>
              <ChevronRight className="w-4 h-4" />
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors py-1"
                >
                  <div className="w-5 h-5 flex items-center justify-center text-gray-400 group-hover:text-blue-600">
                    {link.icon}
                  </div>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Branches Quick Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-gray-900 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Our Locations</span>
            </h3>
            <div className="space-y-4">
              {branches.slice(0, 2).map((branch) => (
                <div key={branch.id} className="group">
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 hover:text-blue-600 transition-colors"
                  >
                    <MapPin className="w-4 h-4 mt-1 text-gray-400 group-hover:text-blue-600" />
                    <div>
                      <p className="font-medium text-sm">{branch.name}</p>
                      <p className="text-xs text-gray-500">{branch.phones[0]}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-gray-900">Stay Updated</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Subscribe to our newsletter for updates on admissions, events, and educational insights.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? (
                  'Subscribing...'
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Branches Detailed Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Our Branches</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>All branches open Mon-Sat: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className={`group relative overflow-hidden rounded-xl border border-gray-200 p-5 transition-all duration-300 hover:shadow-lg hover:border-blue-200 ${
                  hoveredBranch === branch.id ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                } ${branch.color}`}
                onMouseEnter={() => setHoveredBranch(branch.id)}
                onMouseLeave={() => setHoveredBranch(null)}
              >
                {/* Content */}
                <div className="relative">
                  {/* Branch Name & Map Link */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-gray-900">{branch.name}</h4>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-gray-600">Open Now</span>
                      </div>
                    </div>
                    <a
                      href={branch.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors"
                      aria-label={`View ${branch.name} on Google Maps`}
                    >
                      <Globe className="w-4 h-4 text-gray-600" />
                    </a>
                  </div>
                  
                  {/* Address */}
                  <div className="mb-3">
                    <p className="text-sm text-gray-600">{branch.address}</p>
                  </div>
                  
                  {/* Contact Numbers */}
                  <div className="space-y-1.5 mb-3">
                    {branch.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors group/phone"
                      >
                        <Phone className="w-3.5 h-3.5 text-gray-400 group-hover/phone:text-blue-600" />
                        <span>{phone}</span>
                      </a>
                    ))}
                  </div>
                  
                  {/* Timing */}
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{branch.timing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Connect With Us</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Follow us on social media for updates, events, and educational content.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-2.5 bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:scale-105 ${social.color}`}
                  aria-label={`Follow us on ${social.platform}`}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* General Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:info@nextgenschools.com" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    info@nextgenschools.com
                  </a>
                </div>
              </div>
              
             
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-600">
              © {new Date().getFullYear()} NextGen Schools. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Made with <Heart className="w-3.5 h-3.5 inline mx-1 text-red-400" /> for education
            </p>
          </div>
          
          {/* Policies */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-300">•</span>
            <a href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
            <span className="text-gray-300">•</span>
            <a href="/sitemap" className="text-gray-600 hover:text-blue-600 transition-colors">
              Sitemap
            </a>
            <span className="text-gray-300">•</span>
            <a href="/faq" className="text-gray-600 hover:text-blue-600 transition-colors">
              FAQ
            </a>
          </div>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center gap-2 text-sm"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUpRight className="w-3.5 h-3.5 rotate-90" />
          </button>
        </div>
      </div>

      {/* Light Wave Decoration */}
      <div className="overflow-hidden bg-gray-50">
        <svg 
          className="w-full h-8 text-white" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35,6.36,119.13-6.25C750.77,46.92,816.34,14,888.41,4.19,943.53-3.61,1001.06,5.6,1057.59,24.24C1098.86,40.18,1145.34,56.12,1200,58.34V0Z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;