import React, { useContext, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const ONE_HOUR = 60 * 60 * 1000; // 1 hour in milliseconds

  const sendEmail = (e) => {
    e.preventDefault();

    // Get form values
    const name = form.current.Name.value.trim();
    const email = form.current.Email.value.trim();
    const message = form.current.message.value.trim();

    // Validation: Check if all fields are filled
    if (!name || !email || !message) {
      toast.warn("Please fill out all fields before submitting.", {
        position: "top-right",
      });
      return; // Stop submission
    }

    // Get current timestamp
    const currentTime = Date.now();

    // Fetch email timestamps from localStorage
    const storedData = localStorage.getItem(email);
    const emailTimestamps = storedData ? JSON.parse(storedData) : [];

    // Filter timestamps to keep only those within the last 1 hour
    const recentTimestamps = emailTimestamps.filter(
      (timestamp) => currentTime - timestamp < ONE_HOUR
    );

    // Check if the user has already sent 2 requests in the last hour
    if (recentTimestamps.length >= 2) {
      toast.error("You can only send 2 requests per hour.", {
        position: "top-right",
        style: { backgroundColor: "red", color: "white" },
      });
      return; // Stop submission
    }

    // Add current timestamp to the array and save it back to localStorage
    recentTimestamps.push(currentTime);
    localStorage.setItem(email, JSON.stringify(recentTimestamps));

    // If validation passes, send email
    emailjs
      .sendForm(
        "Your Services ID",
        "Your Template ID",
        form.current,
        "Your User ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!", {
            position: "top-right",
          });
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            style: { backgroundColor: "red", color: "white" },
          });
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* Toast Container */}
      <ToastContainer />

      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="Name" className="user" placeholder="Name" />
          <input
            type="email"
            name="Email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Submit" className="button" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
