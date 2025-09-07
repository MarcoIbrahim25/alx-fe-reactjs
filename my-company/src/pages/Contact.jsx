import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    // ممكن فيما بعد تضيف إرسال فعلي عبر API
    setFormData({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    maxWidth: 520,
    margin: "10px 0",
    padding: "10px 12px",
    border: "1px solid #d1d5db",
    borderRadius: 8,
    outline: "none",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          style={{ ...inputStyle, resize: "vertical" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 16px",
            borderRadius: 8,
            border: "none",
            backgroundColor: "#2563eb",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
