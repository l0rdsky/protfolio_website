import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12">
          {/*text*/}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              AKASH <span>PAWAR</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary
            font-semibold uppercase leading-1">
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                   "Blogger",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <div className="flex max-w-max gap-x-6 items-center mb-12">
                <button className="btn btn-lg">Contact me</button>
                <a href="#" className="text-gradient btn-link">My Portfolio</a> 
              </div>
              <div className="flex text-[20px] gap-x-6 mx-auto max-w-max" >
                <a href="#"><FaLinkedin/></a>
                <a href="#"><FaGithub/></a>
                <a href="#"><FaTwitter/></a>
              </div>
          </div>
            {/*image*/}
          <div>
            <img src={Image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
