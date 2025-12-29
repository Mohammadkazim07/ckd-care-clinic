import React from 'react';
import Avaward from './assets/1.jpeg';
import issnImage from './assets/issn.jpeg';


const AchievementsSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Section Title */}
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-5xl text-4xl font-medium title-font mb-2 text-white" id="5">
              ACHIEVEMENTS
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="flex flex-wrap -m-4">
          {/* First Card */}
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-lg shadow-xl">
              <img className="h-40 rounded w-full object-cover object-center mb-6 border-4 border-white" src={Avaward} alt="AYURVISHARDA Award" />
              <h2 className="text-lg text-white font-semibold title-font mb-4">AYURVISHARDA AWARD</h2>
            </div>
          </div>

          {/* Second Card */}
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-lg shadow-xl">
            <img className="h-40 rounded w-full object-cover object-center mb-6 border-4 border-white" src={issnImage} alt="ISSN Best Researcher Award" />
              <h2 className="text-lg text-white font-semibold title-font mb-4">ISSN BEST RESEARCHER AWARD</h2>
            </div>
          </div>
          {/* Fourth Card */}
          {/* <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-lg shadow-xl">
              <img className="h-40 rounded w-full object-cover object-center mb-6 border-4 border-white" src="/photo.jpeg" alt="International Researcher Award" />
              <h2 className="text-lg text-white font-semibold title-font mb-4">INTERNATIONAL RESEARCHER AWARD</h2>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
