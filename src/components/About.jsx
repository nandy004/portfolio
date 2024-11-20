import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cards = [
  {
    title: 'Frontend',
    List: ['HTML', 'CSS', 'JavaScript', 'ReactJs', 'TailwindCSS'],
  },
  {
    title: 'Tech stacks',
    List: ['Python', 'Java'],
  },
  {
    title: 'Tools',
    List: ['Tableau', 'Excel', 'PowerBi'],
  },
  {
    title: 'Database',
    List: ['MYSQL'],
  },
];

const Aout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <div className="text-center m-5">
        <p className="text-[#2bbcca] font-bold text-3xl" data-aos="fade-up">
          About Me
        </p>
      </div>
      <div className="flex flex-col lg:flex-row"> {/* Responsive adjustment */}
        <div
          className="bg-purple-200 mx-4 lg:ml-32 p-5 text-center text-gray-600 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 max-w-full lg:max-w-[500px] lg:mr-10 mt-5 lg:mt-10 grid"
          data-aos="fade-right"
        >
          <h2 className="text-center text-gray-700 text-2xl font-bold">
            My Introduction
          </h2>
          <p className="text-gray-700 text-base lg:text-lg">
            I am well-versed in HTML, CSS, and JavaScript, along with other cutting-edge frameworks and libraries, 
            which allow me to implement interactive features. Additionally, I have experience working with content 
            management systems (CMS) like WordPress.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 lg:mt-10 mx-4"> {/* Responsive grid */}
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-2"
              data-aos="fade-left"
              data-aos-delay={index * 100}
            >
              <span className="text-slate-700 font-bold text-xl lg:text-2xl mt-5 mb-2 block">
                {card.title}
              </span>
              <ul className="gap-y-2 grid">
                {card.List.map((item, i) => (
                  <li
                    key={i}
                    className="rounded-md p-1 text-sm lg:text-base text-white bg-sky-500"
                    data-aos="fade-left"
                    data-aos-delay={i * 100}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Aout;
