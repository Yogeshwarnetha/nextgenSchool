// components/UpcomingEvents.jsx
"use client";

import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, ExternalLink, ChevronRight, Star, Trophy } from 'lucide-react';
import Image from 'next/image';

type Event = {
  id: number;
  event_name: string;
  description: string;
  image_url: string;
  date: string;
  time: string;
  location: string;
};

const UpcomingEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  // Dummy events data (replace with API call)
  const dummyEvents = [
    {
      id: 1,
      event_name: "Annual Science Fair 2024",
      description: "Join us for our spectacular Annual Science Fair showcasing innovative projects from students across all grades. This year's theme is 'Sustainable Solutions for Tomorrow'. Students will present their research on renewable energy, environmental conservation, and technological innovations.",
      image_url: "",
      date: "2024-04-15",
      time: "9:00 AM - 4:00 PM",
      location: "School Auditorium & Science Block",
      
    },
    {
      id: 2,
      event_name: "Sports Day Championship",
      description: "Experience the thrill of competition at our Annual Sports Day featuring track events, team sports, and special performances. Open to parents and alumni. Medals and trophies will be awarded to winners across various age categories.",
      image_url: "/api/placeholder/400/300",
      date: "2024-04-22",
      time: "8:00 AM - 6:00 PM",
      location: "School Sports Ground",
      
    },
    {
      id: 3,
      event_name: "Cultural Fest - Harmony 2024",
      description: "A celebration of diversity through music, dance, drama, and art performances by students. This year's cultural fest includes international cuisine stalls, art exhibitions, and talent shows. Special guest performances by professional artists.",
      image_url: "/api/placeholder/400/300",
      date: "2024-05-05",
      time: "10:00 AM - 8:00 PM",
      location: "School Campus & Amphitheater",
      
    },
    {
      id: 4,
      event_name: "Parent-Teacher Conference",
      description: "Opportunity for parents to meet with teachers and discuss student progress, academic performance, and development goals. Individual appointments available throughout the day. Refreshments will be served.",
      image_url: "/api/placeholder/400/300",
      date: "2024-04-10",
      time: "2:00 PM - 6:00 PM",
      location: "School Conference Hall",
      
    },
    {
      id: 5,
      event_name: "STEM Workshop Series",
      description: "Hands-on workshops in robotics, coding, and AI for students grades 6-12. Conducted by industry experts and alumni working in tech fields. Limited seats available, registration required.",
      image_url: "/api/placeholder/400/300",
      date: "2024-04-18",
      time: "10:00 AM - 2:00 PM",
      location: "Computer Lab & Robotics Center",
      
    },
    {
      id: 6,
      event_name: "Art Exhibition & Auction",
      description: "Showcase of student artwork including paintings, sculptures, and digital art. Select pieces will be auctioned to raise funds for the school art program. Open to public with free admission.",
      image_url: "/api/placeholder/400/300",
      date: "2024-05-12",
      time: "11:00 AM - 7:00 PM",
      location: "School Art Gallery",
      
    }
  ];

  // Simulate API call
  useEffect(() => {
    setTimeout(() => {
      setEvents(dummyEvents);
      setLoading(false);
    }, 1000);
  }, []);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full mb-4">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">WHAT&apos;S HAPPENING</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Be a part of some of the most exciting events taking place at Bright Future Academy
          </p>
        </div>

        {loading ? (
          // Loading Skeleton
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3 h-48 bg-gray-200 rounded-xl"></div>
                  <div className="flex-1 space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Events Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(0, 3).map((event) => (
              <div 
                key={event.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2 'ring-2 ring-yellow-400' : ''}`}
              >
                <div className="flex flex-col items-center p-6">
                  {/* Circular Event Image */}
                  <div className="relative w-32 h-32 mb-4">
                    <img
                      src={event.image_url}
                      alt={event.event_name}
                      className="w-32 h-32 object-cover rounded-full border-4 border-blue-200 shadow-lg"
                    />
                   
                  </div>
                  {/* Event Header */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    {event.event_name}
                  </h3>
                  {/* Event Details */}
                  <div className="flex flex-wrap justify-center gap-3 mb-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  {/* Event Description */}
                  <p className="text-gray-600 text-center mb-4 line-clamp-3">
                    {event.description}
                  </p>
                 
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto">
            <span>View All Events</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div> */}

        
      </div>
    </section>
  );
};

export default UpcomingEvents;