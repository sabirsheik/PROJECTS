import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react"; // React Swiper components
import { Pagination } from "swiper/modules"; // Correct import for Swiper modules

import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination"; // Pagination styles

import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      img: profilePic2,
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      img: profilePic3,
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      img: profilePic4,
      review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur t-blur2"
          style={{ background: "skyblue" }}
        ></div>
      </div>
      <Swiper
        modules={[Pagination]} // Attach Pagination module
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt="" />
              <span>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
