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
        <div
          className="flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12"
        >
          {/*text*/}
          <div className="flex-1 text-center m-auto font-secondary lg:text-left">
            <motion.h1
            initial={{y:50,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.3,duration:1,type:"spring",stiffness:150}}
            className="text-[50px] gap-x-5 font-bold leading-[0.8] mb-4 lg:text-[90px]"
            >
              AKASH <span>PAWAR</span>
            </motion.h1>
            <motion.div
            initial={{y:50,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.5,duration:1,type:"spring",stiffness:150}}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary
            font-semibold uppercase leading-1"
            >
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
            </motion.div>
            <motion.p
            initial={{y:50,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.6,duration:1,type:"spring",stiffness:150}} 
            className="mb-8 max-w-lg ">
              My name is Akash Pawar, I am a Full Stack Web Developer and Web
              Designer. An Open Source enthusiast and a Computer Science student
              from India.
            </motion.p>
            <motion.div 
               initial={{y:50,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.7,duration:1,type:"spring",stiffness:150}} 
            className="flex mx-auto max-w-max gap-x-6 items-center mb-12">
              <button className="btn  btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            <motion.div
               initial={{y:50,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.8,duration:1,type:"spring",stiffness:150}}  
            className="flex text-[20px] gap-x-6 mx-auto max-w-max">
              <a href="https://www.linkedin.com/in/akash-pawar-516a74234/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/l0rdsky">
                <FaGithub />
              </a>
              <a href="https://twitter.com/l0rdsky34">
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          {/*image*/}
          <motion.div
             initial={{y:-100,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:0.6,duration:2,type:"spring",stiffness:100}} 
           className="hidden lg:flex flex-1]">
            <img src={Image} alt="My_image"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
