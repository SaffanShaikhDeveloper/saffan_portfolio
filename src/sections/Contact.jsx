import React from "react";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const port = process.env.PORT || 5000;
  //Contact Form logic
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await axios.post("https://saffan-portfolio-server.onrender.com/send-email", formData);
      setStatus("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("Failed to send email.");
    }
  };
  return (
    <section className="relative flex itmes-center c-space section-spacing">
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-clo items-start w-full gap-5 mb-10">
          <h2 className="text-heading"> Let's Talk</h2>
          <p className="text-normal text-neutral-400">
            Wheather You are looking to build Software, imporve your existing
            platform, or bring a unique idea to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            Send
            <p>{status}</p>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
