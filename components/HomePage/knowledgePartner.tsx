// components/KnowledgePartner.jsx
"use client";

import { useState } from 'react';
import { BookOpen, Globe, Award, CheckCircle, ExternalLink, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const KnowledgePartner = () => {
  const [hoverEffect, setHoverEffect] = useState(false);
  
  // Sample image - replace with your actual image import
  const KnowledgeImg = "/Cambrige.png";
  
  // Cambridge partnership features
  const features = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      text: "World-class educational resources"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      text: "Global standard curriculum"
    },
    {
      icon: <Award className="w-5 h-5" />,
      text: "Internationally recognized materials"
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      text: "Teacher training and support"
    }
  ];

  return (
    <section className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile Enroll Now Button - Only visible on mobile */}
        <div className="lg:hidden flex justify-center mb-8">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            <span className="text-lg">Enroll Now</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            
            {/* Left Side - Image */}
            <div className="relative group">
              <div className={`relative overflow-hidden rounded-xl border-4 ${hoverEffect ? 'border-blue-200' : 'border-gray-100'} transition-all duration-500 p-4 bg-gradient-to-br from-blue-50 to-indigo-50`}>
                {/* Main Image */}
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden flex items-center justify-center bg-white">
                  <Image
                    src={KnowledgeImg}
                    alt="Cambridge Knowledge Partner Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                  />
                </div>
                {/* Badge */}
               
                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-blue-100 rounded-full opacity-50"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-100 rounded-full opacity-50"></div>
              </div>
              {/* Image Caption */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500 italic">Cambridge University Press Partnership</p>
              </div>
            </div>

            {/* Right Side - Description */}
            <div className="flex flex-col justify-center">
              {/* Heading */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full mb-4">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">GLOBAL PARTNERSHIP</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Cambridge Knowledge Partner
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a proud Cambridge Knowledge Partner, we provide learning materials from the world&apos;s 
                  leading educational publisher. Cambridge University Press offers a range of educational 
                  resources and services for teachers and students to achieve global standards of learning.
                </p>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Partnership Benefits:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                      onMouseEnter={() => setHoverEffect(true)}
                      onMouseLeave={() => setHoverEffect(false)}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        {feature.icon}
                      </div>
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

             

              {/* Desktop Enroll Now Button - Only visible on desktop */}
              <div className="hidden lg:block">
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/admissionform"
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                  >
                    <span>Enroll Now</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button 
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300"
                    onClick={() => window.open('https://www.cambridge.org', '_blank')}
                  >
                    Learn More About Cambridge
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default KnowledgePartner;