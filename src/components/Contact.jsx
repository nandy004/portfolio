import React, { useEffect } from 'react';
import Link from 'next/link';
import { FiCornerRightDown } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsSendFill } from "react-icons/bs";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <div className="mb-10" data-aos="fade-up">
        <div>
          <p className="text-[#2bbcca] text-center m-5 font-bold text-3xl">Get in touch</p>
        </div>

        {/* Desktop and Mobile Responsive Layout */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center gap-10 px-4 lg:px-0">
          {/* Find Me Card */}
          <div className="bg-purple-200 p-5 text-center hover:bg-[#2bbcca] hover:text-white text-gray-600 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 w-full max-w-[400px] lg:ml-32 lg:mr-10 lg:mt-10">
            <h2 className="mt-10 flex items-center justify-center text-gray-700 text-2xl font-bold group-hover:text-white">
              Find Me <FiCornerRightDown className="ml-3" />
            </h2>
            <div className="justify-center grid mt-8">
              <p className="flex items-center text-lg group-hover:text-white">
                <Link href="mailto:enandhini73@gmail.com" className="flex items-center">
                  <CiMail className="mr-2 text-lg" /> Email: enandhini73@gmail.com
                </Link>
              </p>
              <p className="flex items-center text-lg mt-2 group-hover:text-white">
                <Link href="mailto:enandhini73@gmail.com" className="flex items-center">
                  <IoMdCall className="mr-2 text-lg ml-10" /> Tel: +91 8825566705
                </Link>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 w-full max-w-[900px] lg:mt-10 ">
            <div className="flex flex-col sm:flex-row gap-5 mb-4">
              <div className="flex-grow">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2bbcca]"
                />
              </div>
              <div className="flex-grow">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2bbcca]"
                />
              </div>
            </div>

            <div className="mb-4">
              <textarea
                id="message"
                placeholder="Message"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2bbcca] h-[120px]"
              ></textarea>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="rounded-2xl border-2 p-2 bg-sky-200 hover:bg-[#2bbcca] hover:text-white text-gray-600 font-bold flex items-center">
                <p className="mr-2">Send</p>
                <BsSendFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
