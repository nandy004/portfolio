import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiCornerRightDown } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsSendFill } from "react-icons/bs";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
    });
  }, []);

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('Sending...');

    // Use your EmailJS service ID, template ID, and user ID here
    emailjs.sendForm('service_55aq7w4', 'template_y77kdxl', e.target, 'inqDGbJuLUx4QNyKt')
      .then((result) => {
        console.log(result.text);
        setStatusMessage('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        setStatusMessage('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
          <form onSubmit={handleSubmit} className="p-6 w-full max-w-[900px] lg:mt-10">
            <div className="flex flex-col sm:flex-row gap-5 mb-4">
              <div className="flex-grow">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2bbcca]"
                  required
                />
              </div>
              <div className="flex-grow">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2bbcca]"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2bbcca] h-[120px]"
                required
              ></textarea>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button type="submit" className="rounded-2xl border-2 p-2 bg-sky-200 hover:bg-[#2bbcca] hover:text-white text-gray-600 font-bold flex items-center" disabled={isSubmitting}>
                <p className="mr-2">{isSubmitting ? 'Sending...' : 'Send'}</p>
                <BsSendFill />
              </button>
            </div>
            {statusMessage && <p className="text-center mt-4 text-lg">{statusMessage}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
