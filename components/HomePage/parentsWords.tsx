// components/ParentsWordsSection.jsx
"use client";

import { useState, useEffect } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Heart, 
  Award, 
  Sparkles,
  ThumbsUp,
  Smile,
  CheckCircle
} from 'lucide-react';

const ParentsWordsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [hovered, setHovered] = useState(false);

  // Parents testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      child: "Aarav Sharma, Grade 5",
      quote: "Nextgen Kids have mastered the right balance of playing and learning environment to foster maximum development, growth, and fun. My son looks forward to school every single day!",
      rating: 5,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      child: "Diya Kumar, Grade 3",
      quote: "The personalized attention and creative curriculum have made a huge difference in my daughter's confidence. She's more curious and engaged than ever before.",
      rating: 5,
      color: "from-emerald-500 to-green-600"
    },
    {
      id: 3,
      name: "Ananya Patel",
      child: "Vihaan Patel, Kindergarten",
      quote: "As a working parent, I appreciate the communication and transparency. The progress reports and regular updates keep me connected to my child's learning journey.",
      rating: 5,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      name: "Suresh Reddy",
      child: "Anika Reddy, Grade 7",
      quote: "The STEM programs and extracurricular activities have helped my daughter discover her passion for science. The facilities and teaching staff are exceptional.",
      rating: 5,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      name: "Meera Singh",
      child: "Kabir Singh, Grade 2",
      quote: "The school's focus on holistic development rather than just academics is what sets it apart. My son has developed social skills and emotional intelligence along with academic growth.",
      rating: 5,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 6,
      name: "Vikram Joshi",
      child: "Myra Joshi, Grade 4",
      quote: "The safety measures and COVID protocols gave us peace of mind. The school handled the pandemic exceptionally well with hybrid learning options.",
      rating: 5,
      color: "from-violet-500 to-purple-600"
    }
  ];

  // Stats about parent satisfaction
  const stats = [
    { value: "98%", label: "Parent Satisfaction", icon: <Heart className="w-5 h-5" /> },
    { value: "4.9/5", label: "Average Rating", icon: <Star className="w-5 h-5" /> },
    { value: "95%", label: "Would Recommend", icon: <ThumbsUp className="w-5 h-5" /> },
    { value: "100%", label: "Feel Welcome", icon: <Smile className="w-5 h-5" /> }
  ];

  // Handle next testimonial
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Handle previous testimonial
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Go to specific testimonial
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  // Auto play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay && !hovered) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, hovered]);

  // Render star ratings
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Parent Words
          </h2>
          
          {/* Decorative Star Separator */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="relative">
              <Star className="w-8 h-8 text-yellow-500 fill-yellow-500 animate-pulse" />
              <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-sm"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
          
          {/* Main Quote */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
              &ldquo;Nextgen Kids have mastered the right balance of playing and learning environment 
              to foster maximum development, growth, and fun.&rdquo;
            </p>
          </div>
        </div>

        
        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
                index === activeIndex ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => goToTestimonial(index)}
            >
              <div className="flex items-start gap-3 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.child}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 line-clamp-3 text-sm">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>

        

        
      </div>
    </section>
  );
};

export default ParentsWordsSection;