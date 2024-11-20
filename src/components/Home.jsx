import Link from 'next/link';
import React, { useEffect } from 'react';
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import Image from 'next/image';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    gsap.to(".photo", {
      y: 10,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 50,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#efede6] px-6 py-12 md:flex-row md:justify-between md:px-20 md:py-24">
      <div className="space-y-8 text-center md:text-left">
        <p className="max-w-max rounded-sm bg-[#c0a631] p-2 text-xl text-white mx-auto md:mx-0" data-aos="fade-up">
          Nandhini Erusagoundar
        </p>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 justify-center md:justify-start" data-aos="fade-up">
          <p className="text-4xl text-gray-700">I&apos;m</p>
          <p className="text-4xl text-blue-400">Developer</p>
        </div>
        <p className="text-gray-700 text-xl max-w-[630px] mx-auto md:mx-0" data-aos="fade-up">
          Experienced frontend developer with a passion for creating visually
          stunning and user-friendly websites.
        </p>
        <div className="text-3xl flex justify-center md:justify-start gap-4" data-aos="fade-up">
          <Link href="https://www.linkedin.com/in/nandhini-e-13825a239"><CiLinkedin /></Link>
          <Link href="https://github.com/nandy004"><FaGithub /></Link>
          <Link href="mailto:enandhini73@gmail.com"><CiMail /></Link>
          <Link href="./"><IoIosGlobe /></Link>
        </div>
      </div>

      <div className="mt-10 md:mt-0 flex justify-center">
        <Image
          src="/images/Nandy.jpg"
          width={300}
          height={300}
          className="photo rounded-full w-64 h-64 md:w-96 md:h-96"
          alt="Nandhini's Photo"
        />
      </div>
    </div>
  );
};

export default Home;
