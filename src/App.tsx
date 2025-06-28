"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload } from "react-icons/fi"; // Feather icon
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import SkillsSection from "./components/Skills";
import { FaReact, FaNodeJs } from "react-icons/fa";
import AnimatedText from "./components/AnimatedText";
// import ProjectExperienceCard from "./components/Experience";
import {
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiFirebase,

  SiClerk,
} from "react-icons/si";
import EducationSection from "./components/Education";
import ProjectExperienceSection from "./components/ProjectsSection";

function App() {
  const [isOpen, setIsOpen] = useState(false);
    const toggleForm = () => setIsOpen(!isOpen);
 const form = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_i286ral",    
        "template_mvndeql",    
        form.current!,{
 publicKey:
        "NipRBu2crJUznV34G" 
        }
           
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
          setIsOpen(false);
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Failed to send message. " + error.text);
        }
      );
    // alert("Form submitted!");
    // setIsOpen(false);
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/myresume.pdf";      // File path in public/
    link.download = "myresume.pdf";   // Name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
    {/* <AnimatedText text={"Hello, I'm Mayank Kumar"} speed={50} /> */}
      <div className="  w-[100%] m-0 md:relative ">
        <div className="w-full  grid grid-cols-1 md:relative md:grid-cols-10 m-0">
          <div className=" lg:fixed justify-center items-center  md:w-[45%] h-screen  border-gray-50 p-5 lg:p-6   flex flex-col  min-w-[300px] max-w-[800px]">
            <div className="flex flex-col w-[90%] p-2 md:p-1   gap-3 md:w-[50%] text-start ">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=" profile img"
                className=" w-20 h-20 md:w-40 md:h-40 rounded-full border-3 justify-start border-white"
              />
              <h1 className="text-xl sm:text-2xl flex-wrap md:text-4xl font-bold text-green-500">
                <AnimatedText text={"Mayank Kumar"} speed={50} />
              </h1>
              <h1 className="md:text-xl text-md text-gray-400 ">
               <AnimatedText text={"Full Stack Developer"} speed={50} />
              </h1>
              <p className="text-sm md:text-lg text-gray-500">
                📍Jaipur,Rajsthan
              </p>
              <p className="text-sm flex-wrap md:text-lg text-gray-400">
                Building Real World Projects with
              </p>
              <div className="flex gap-4 text-4xl text-blue-500">
                <FaReact title="React" />
                <FaNodeJs title="Node.js" />
                <SiPostgresql title="PostgreSQL" />
                <SiExpress title="Express" />
                <SiNextdotjs title="Next.js" />
                <SiFirebase title="Firebase" />
                <SiClerk title="clerk" />
                {/* <SiTypescript title="TypeScript" /> */}
              </div>
              <div className="flex gap-2 w-[100%] text-start items-center justify-between">
                <button onClick={handleDownload} className= "bg-blue-500 text-white w-[40%] h-[9vh] md:h-[7vh] m-0 md:w-[50%] rounded p-0 ">
                  <FiDownload className="inline-block mr-2 items-center mb-1" />
                  Resume
                </button>
                <div>
                  <a href="https://github.com/mayankgit22" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="inline-block text-2xl text-gray-500 mr-4 hover:shadow-xl cursor-pointer hover:bg-white hover:rounded-full transition-all duration-250" />
                  </a>
                  <a href="https://www.linkedin.com/in/mayank-kumar-123456789/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="inline-block text-2xl text-gray-500 mr-4 hover:shadow-xl cursor-pointer hover:bg-white hover:rounded-sm transition-all duration-250" />
                  </a>
                  <a href="mailto:mayankrajxxxxx5@gmail.com" target="_blank" rel="noopener noreferrer">
                    <HiOutlineMail className="inline-block text-2xl text-gray-500 mr-4 hover:shadow-xl cursor-pointer hover:bg-white hover:rounded-full transition-all duration-250" />
                  </a>
                </div>
              </div>
              <div>
                <h1 className=" text-gray-300 text-lg md:text-2xl font-semibold">
                  Want to work together?
                </h1>
                <button         onClick={toggleForm} className="text-sm mt-2">Any Message</button>
              </div>
            </div>
          </div>
          <div className=" md:col-span-6  lg:ml-[70%] scroll-smooth w-full md:w-[90%] md:p-10 p-8  min-h-screen min-w-[300px] max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-2 mb-3">
              <h1 className="text-xl md:text-3xl font-bold text-gray-100 mb-3 ">
                About Me
              </h1>
              <p className="text-md text-gray-300 md:text-lg mb-3">
                I'm a 19-year-old fresher Full Stack Developer with a knack for
                building products that make a difference. My expertise spans
                both frontend and backend technologies, enabling me to craft
                comprehensive solutions from the ground up. Throughout my
                career, I've been deeply involved in the startup ecosystem. I've
                had the privilege of working on a wide range of projects, from
                small-scale startups to large-scale enterprises.{" "}
              </p>
            </div>
      
              <SkillsSection />
            {/* </div> */}
           <EducationSection/>
            <ProjectExperienceSection/>
           
          </div>
        </div>
      </div>
      <AnimatePresence>
 {isOpen && (
         <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
           <motion.div
              className="bg-white w-[90%] sm:w-[60%] md:w-[40%] p-6 rounded-2xl shadow-xl relative text-black"
              initial={{ scale: 0.7, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.6, y: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
            <h2 className="text-lg font-bold mb-4">Leave a Message here</h2>
            <form onSubmit={handleSubmit} ref={form} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full border px-3 py-2 rounded text-black"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full border px-3 py-2 rounded text-black"
                required
              />
              <textarea name="user_message" id="" className="w-full border px-3 py-2 rounded text-black" required></textarea>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded w-full"
              >
                Done
              </button>
            </form>

            {/* Close Button */}
            <button
              onClick={toggleForm}
              className="absolute top-2 right-3 text-xl text-white hover:text-gray-500"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
      
    </>
  );
}

export default App;
