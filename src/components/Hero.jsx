import React from "react";
import ProfileImage from "../assets/images/profile-img.jpg"
import ProfileImage2 from "../assets/images/profile-img2.png"
// import HeroImg from "../assets/hero-img.png";
import Fade from 'react-reveal/Fade';

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-3 items-center justify-between md:justify-between">
      <Fade left>
        <div className="hero-info pb-5 md:pb-0 col-span-2">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">Muhammed</span> <br />
            Frontend Developer
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js and Tailwind CSS
          </p>

          <div className="text-5xl  flex  gap-16 py-5 mb-10">
                    <a
              href="https://www.linkedin.com/in/muideen-muhammed-jamiu/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiFillLinkedin size={40} />{" "}
            </a>
            <a
              href="https://github.com/muideenjamiu01"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiFillGithub size={40} />{" "}
            </a>
            <a
              href="https://twitter.com/Muideen_M_Jamiu"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
           
           
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>
        </Fade>
        <Fade right delay={4000}>
        <div className="bg-gradient-to-b from-[#7477FF] w-96 h-96 rounded-full flex justify-center items-center">
          <img src={ProfileImage2} alt="profile-image" className="" />
        </div>
        </Fade>
        {/* <div className="hero-img relative bg-gradient-to-b from-[#7477FF] w-[40rem] h-[40rem] rounded-full  flex justify-center items-center">
          <img src={ProfileImage} alt="profile-image" className=" rounded-full" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
