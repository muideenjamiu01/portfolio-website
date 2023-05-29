import React from "react";
import Roll from "react-reveal/Roll";
import Zoom from "react-reveal/Zoom";
import ProfileImage from "../assets/images/profile-img.jpg";

function About() {
  return (
    <section className="bg-secondery text-white px-5 py-24" id="about">
      <div className="container mx-auto w-full">
        <div className="about-info">
          <Zoom>
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
              About Me
            </h2>
          </Zoom>
          <Roll>
            <div>
              <p className="pb-5">
                Hi, My Name Is Muhammed Jamiu everyone calls me Muhammed. I am a
                Frontend Developer. I build beautiful web Applications and
                websites
              </p>
              <p className="pb-5">
                I am proficient in Frontend skills like of Javascript, ReactJs,
                Next.js, Vue.js, Nuxt.js, Tailwind, CSS, Sass, Redux, Vuex,
                Jira, Git, and Typescript..
              </p>
            </div>
          </Roll>
        </div>

        {/* <div className="about-img">
          <img
            src={ProfileImage}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div> */}
      </div>
    </section>
  );
}

export default About;
