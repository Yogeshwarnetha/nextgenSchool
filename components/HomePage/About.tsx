// components/AboutUsSection.jsx
"use client";

import { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Users, 
  Award, 
  Heart, 
  BookOpen, 
  Globe, 
  Shield, 
  Home, 
  Sparkles, 
  ChevronRight,
  CheckCircle,
  Star,
  Target,
  Lightbulb,
  Palette,
  Bus,
  Dumbbell,
  Music,
  TabletSmartphone,
  Trees
} from 'lucide-react';

const AboutUsSection = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  // Color scheme from your CSS
  const colors = {
    primary: '#3B395E',
    secondary: '#FF7162',
    accent1: '#F37F8C',
    accent2: '#ADCB69',
    white: '#FFFFFF'
  };

  // About us main content
  const aboutContent = {
    heading: "About NextGen Schools",
    tagline: "Play. Think. Explore. Learn.",
    description: "NextGen Schools is a modern international educational institution that aims to uncover the unique gift of every child and nurture their abilities. We understand the importance of good early childhood education and employ a research-based creative curriculum that develops a student's cognitive skills in a joyful exploratory learning environment.",
    imageUrl: "/SchoolImage.webp",
    features: [
      "Activity Based Class Rooms",
      "Dedicated Teaching Team",
      "Creative Writing Programs",
      "Quality Curriculum Lessons",
      "Friendly Learning Environment",
      "Healthy Meals Program"
    ]
  };

  // Why NextGen section
  const whyNextGen = {
    title: "Why NextGen Schools?",
    subtitle: "A Foundation Built on Creativity and Care",
    description: "At NextGen, we believe learning should be a joyful exploration. Our research-based, creative curriculum is designed to uncover the unique gift in every child, fostering not just academic skills but also social-emotional growth in a caring, tech-enabled environment. We are committed to creating responsible, curious, and confident citizens of tomorrow.",
    logoUrl: "/SchoolImage.webp"
  };

  // Facilities data
  const facilities = [
    {
      icon: <Trees className="w-6 h-6" />,
      label: "Spacious Green Campus",
      description: "Beautiful, expansive campus with green spaces for outdoor learning and play"
    },
    {
      icon: <TabletSmartphone className="w-6 h-6" />,
      label: "Smart Digital Classrooms",
      description: "Technology-integrated classrooms with interactive whiteboards and digital tools"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      label: "Secured & Safe Campus",
      description: "24/7 security surveillance, controlled access, and emergency response systems"
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      label: "Sports & Athletics Facilities",
      description: "Modern sports complex with courts, fields, and equipment for various sports"
    },
    {
      icon: <Music className="w-6 h-6" />,
      label: "Performing Arts Studios",
      description: "Dedicated spaces for music, dance, drama, and visual arts"
    },
    {
      icon: <Bus className="w-6 h-6" />,
      label: "Safe School Transport",
      description: "GPS-enabled buses with trained drivers and attendants for safe commuting"
    }
  ];

  // Stats for the school
  const stats = [
    { value: "15+", label: "Years of Excellence", icon: <Award className="w-8 h-8" /> },
    { value: "2000+", label: "Happy Students", icon: <Users className="w-8 h-8" /> },
    { value: "150+", label: "Qualified Staff", icon: <GraduationCap className="w-8 h-8" /> },
    { value: "100%", label: "Parent Satisfaction", icon: <Heart className="w-8 h-8" /> }
  ];

  return (
    <>
      {/* Main About Us Section */}
      <section className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          
          {/* About Us Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-3xl font-bold" style={{ color: colors.primary }}>About</span>
              <span className="text-3xl font-bold" style={{ color: colors.secondary }}>Us</span>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3B395E] to-[#FF7162] mx-auto rounded-full mb-6"></div>
          </div>

          {/* Main Content - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Left Side - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={aboutContent.imageUrl}
                  alt="NextGen Schools Campus"
                  className="w-full aspect-[4/3] object-cover"
                />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full" style={{ backgroundColor: colors.accent2, opacity: 0.3 }}></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full" style={{ backgroundColor: colors.accent1, opacity: 0.3 }}></div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 right-8 bg-white rounded-2xl shadow-xl p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.primary }}>
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Since 2009</p>
                      <p className="text-xs text-gray-500">15 Years Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {aboutContent.heading}
              </h1>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: `${colors.secondary}15` }}>
                <span className="text-lg font-semibold" style={{ color: colors.secondary }}>
                  {aboutContent.tagline}
                </span>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {aboutContent.description}
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {aboutContent.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.secondary }}>
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-md text-center">
                    <div className="flex justify-center mb-2" style={{ color: colors.primary }}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold" style={{ color: colors.primary }}>{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why NextGen Section */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Text */}
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <Target className="w-6 h-6" style={{ color: colors.primary }} />
                  <h2 className="text-2xl md:text-3xl font-bold" style={{ color: colors.primary }}>
                    {whyNextGen.title}
                  </h2>
                </div>
                
                <h3 className="text-xl font-semibold mb-4" style={{ color: colors.secondary }}>
                  {whyNextGen.subtitle}
                </h3>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {whyNextGen.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" 
                    style={{ backgroundColor: colors.secondary }}>
                    Learn More
                  </button>
                  <button className="px-6 py-3 rounded-full font-semibold border-2 hover:bg-gray-50 transition-all duration-300" 
                    style={{ borderColor: colors.primary, color: colors.primary }}>
                    View Our Philosophy
                  </button>
                </div>
              </div>

              {/* Right Side - Logo/Image */}
              <div className="relative">
                <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-6xl mb-4">✨</div>
                      <div className="text-2xl font-bold mb-2" style={{ color: colors.primary }}>NextGen</div>
                      <div className="text-lg font-semibold" style={{ color: colors.secondary }}>Schools</div>
                    </div>
                  </div>
                  
                  {/* Decorative Dots */}
                  <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full" style={{ backgroundColor: colors.accent2 }}></div>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full" style={{ backgroundColor: colors.accent1 }}></div>
                  <div className="absolute top-1/2 -right-4 w-4 h-4 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Facilities Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.primary }}>
              An Environment Built for Exploration
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              NextGen Schools provides a spacious and inspiring learning environment designed to nurture curiosity and support holistic development. Our modern campus is equipped with state-of-the-art facilities for a variety of academic, artistic, and athletic pursuits.
            </p>

            {/* Facilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${colors.primary}15`, color: colors.primary }}>
                    {facility.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{facility.label}</h4>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Mission Section */}
          <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Vision Section */}
              <div className="p-8 md:p-12 relative overflow-hidden" style={{ backgroundColor: colors.primary }}>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.accent1 }}>
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-white">Our</span>
                      <span className="text-2xl font-bold ml-2" style={{ color: colors.accent1 }}>Vision</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-200 text-lg leading-relaxed mb-6">
To nurture a generation of children who are inspired to do significant things in life.
                With a strong foundation in experiential learning, we encourage children to be
                  curious and learn through fun-filled exploration of their surroundings.                  </p>
                  
                  <div className="flex items-center gap-2 text-white">
                    <ChevronRight className="w-5 h-5" />
                    <span className="font-semibold">Inspiring Excellence</span>
                  </div>
                </div>
                
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-white"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mission Section */}
              <div className="p-8 md:p-12 relative overflow-hidden" style={{ backgroundColor: colors.white }}>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.accent2 }}>
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-2xl font-bold" style={{ color: colors.primary }}>Our</span>
                      <span className="text-2xl font-bold ml-2" style={{ color: colors.accent2 }}>Mission</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    To create responsible citizens of tomorrow through world-class preschool education.
                  We foster a joyful environment that promotes play-based learning to support unique qualities and our advanced curriculum aids children to explore their interests and become experts in their chosen fields.
                
 </p>
                  
                  <div className="flex items-center gap-2" style={{ color: colors.primary }}>
                    <ChevronRight className="w-5 h-5" />
                    <span className="font-semibold">Building Future Leaders</span>
                  </div>
                </div>
                
                {/* Background Pattern */}
                <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;