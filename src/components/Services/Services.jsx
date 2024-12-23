import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./Sabir Cv.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
 
      <div className="services" id="services">
     {/* <div className="services-box"> */}
       {/* left side */}

     <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
        As a creative full-stack web developer with over three years + of experience, I specialize in crafting innovative, scalable, and high-performing web solutions using the MERN stack (MongoDB, Express.js, React, Node.js). My expertise lies in delivering dynamic applications and seamless user experiences tailored to meet specific client goals. From designing modern interfaces to building robust server-side architectures, I ensure every project embodies functionality, efficiency, and visual appeal.

I excel in developing custom web applications that integrate responsive design with powerful backend systems. By leveraging React for intuitive user interfaces and Node.js for efficient server-side logic, I create solutions that are both user-friendly and technically sound. My e-commerce platforms are secure, optimized for performance, and designed to provide exceptional shopping experiences.

Beyond development, I offer comprehensive web maintenance services, including performance optimization, feature upgrades, and database management. I also assist clients in streamlining workflows through API development and third-party integrations, enhancing application functionality and business efficiency.

Dedicated to quality and client satisfaction, I adopt a collaborative approach to ensure each solution aligns with the client’s vision and business needs. Whether it’s building from scratch or optimizing an existing platform, I am committed to delivering exceptional results that drive success.
        </span>
        {/* CV Download Button */}
        <a href={Resume} download >
          <button className="button s-button" style={{width:'11rem', height:'2.5rem' , fontWeight:'bolder'}}>Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
  
           {/* right */}
     <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Web Applications"}
             
            detail={"Mastering the MERN Stack: Build Modern Web Applications"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Full Stack Web Developer"}
            detail={
              "HTML, CSS, TailwindCss, BootStrap, JavaScript, React, Node.js, MongoDB, Express.js, Next.js and more."
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"SEO & Marketing"}
            detail={
              "Improve your website's visibility on search engines with SEO strategies."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
     {/* </div> */}
    </div>

  );
};

export default Services;
