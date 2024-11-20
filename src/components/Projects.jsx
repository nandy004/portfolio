import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cards = [
  {
    title: 'E-Sketch',
    description:
      'The e-sketch project is a digital tool designed to transform any image into a hand-drawn sketch-like representation, simulating the work of a skilled artist. Users can upload an image, and e-sketch analyzes and interprets its details to create a realistic, stylized sketch effect. The application captures intricate lines, shading, and textures, giving each input a unique and artistic touch, ideal for creating illustrations, enhancing photos, or simply experimenting with artistic transformations in a digital medium.',
  },
  {
    title: 'Smart Parking Solutions',
    description:
      'The Smart Parking Solution project enables users to check parking availability and book a parking slot remotely before heading out. This system offers real-time updates on available parking spaces, allowing users to view and reserve a slot from the convenience of their home. With features for user registration, slot monitoring, and booking, the solution improves parking efficiency, reduces time spent searching for spaces, and ensures a hassle-free parking experience. Ideal for busy urban areas, the project aims to streamline parking management and enhance convenience for drivers.',
  },
  {
    title: 'AI-Spam Classifier',
    description:
      'The AI Spam Classifier is a machine learning project aimed at accurately distinguishing between spam (unwanted, junk emails) and non-spam (legitimate) emails. The project leverages natural language processing (NLP) techniques and machine learning algorithms to analyze and classify email content based on certain features that are commonly associated with spam, such as specific keywords, patterns, sender information, and more.',
  },
  {
    title: 'Onefold Website',
    description:
      'The Onefold Website project is a multi-page website created using HTML, CSS, and JavaScript, featuring a seamless and interactive user experience with page routing functionality. Designed to provide users with a structured navigation flow, this website employs JavaScript to dynamically route between pages without the need for page reloads, enhancing performance and responsiveness. With clean, styled layouts using CSS and interactive elements powered by JavaScript, the Onefold website exemplifies a cohesive and user-friendly design ideal for showcasing content or services effectively.',
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <div>
        <p className="text-[#2bbcca] text-center m-5 font-bold text-3xl">Projects</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mx-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-purple-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-up"
          >
            <p className="text-slate-700 font-bold text-center text-xl lg:text-2xl mt-4 mb-2">
              {card.title}
            </p>
            <p className="text-sm lg:text-base text-center mt-2 text-gray-700">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
