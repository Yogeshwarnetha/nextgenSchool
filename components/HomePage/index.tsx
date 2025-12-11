"use client";

import AboutUsSection from './About';
import HomepageCarousel from './carousel';
import KnowledgePartner from './knowledgePartner';
import ParentsWordsSection from './parentsWords';
import UpcomingEvents from './upCommingEvents';

const Homepage = () => {
   return(
    <div>
        <HomepageCarousel/>
        <KnowledgePartner/>
        <UpcomingEvents/>
        <AboutUsSection/>
        <ParentsWordsSection/>
    </div>
   )
};

export default Homepage;