import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { UilGithubAlt, UilLinkedinAlt } from '@iconscout/react-unicons'

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
    <div className="box-intro">
        {/* left name side */}
    <div className="left-intro">
    <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! </span>
          <span>I Am Sabir Ali</span>
          <span style={{fontWeight: "bold", fontStyle: "italic", color: darkMode ? "white" : "var(--gray)" }}>
            
          I am a passionate Full-Stack Web Developer with extensive experience in the MERN stack (MongoDB, Express.js, React, Node.js). With a strong foundation in both front-end and back-end technologies, I specialize in creating dynamic, scalable web applications that deliver high-quality user experiences. Since starting my journey in web development in 2021, I have honed my skills through rigorous training and hands-on projects, including building e-commerce platforms and custom web solutions. I am also committed to continuous learning, staying up-to-date with the latest industry trends, and applying best practices in every project I take on. My goal is to contribute to innovative solutions in a collaborative environment while growing as a developer and exploring new technologies.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a 
      href="https://www.linkedin.com/in/sabir-ali-837501340/" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }} // Optional: removes underline from the link
    >
      <UilLinkedinAlt 
        color="#BB2649" 
      />
    </a>
   <div>
   <a href="https://github.com/sabirsheik"
    target="_blank" 
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', marginLeft: '20px' }}
    >
      <UilGithubAlt
      color="#BB2649"
      />
    </a>
   </div>
    {/* <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" /> */}
        </div>
      </div>
    </div>
      {/* right image side */}
     <div className="right-intro">
     <div className="i-right" >
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
       {/* <img src={boy} style={{visibility:"hidden"}} alt="" /> */}
        {/* animation */}
        <motion.img
          initial={{ left: "-40%" }}
          whileInView={{ left: "-14%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{  left: "84%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Full Stack " text2="Web Developer"  />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "11rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="MERN Stack" text2=" Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
     </div>
    </div>
    </div>
  );
};

export default Intro;
