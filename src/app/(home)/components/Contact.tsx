"use client";
import React, { useState } from "react";

export function Contact() {
  const goldenGradient = "linear-gradient(145deg, #d4af37, #c99700, #b8860b, #c99700, #d4af37)";
  const boxShadow = "inset 0 2px 6px rgba(255,255,255,0.4), inset 0 -3px 6px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.6)";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [message, setMessage] = useState("");

  const getInputStyle = (value: string, isFocused: boolean) => ({
    backgroundColor:"#F7FAFB",
    
    color: "black",
    border: `0.7px solid ${isFocused || value.length > 0 ? "black" : "white"}`,
    transition: "border-color 0.3s",
  });

  const messageStyle = {
    backgroundColor:"#F7FAFB",
    
    color: "black",
    border: "0.7px solid black", // Message border is black by default
  };

  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center py-30 px-6">
      <h2 className="text-6xl mb-12 text-center">Contact</h2>

      <div
        className="max-w-lg w-full rounded-2xl p-8"
        style={{
          border: "2px solid transparent",
          borderRadius: "25px",
          background: `
            linear-gradient(#1f2937, #1f2937) padding-box,
            linear-gradient(145deg, #d4af37, #c99700, #b8860b, #c99700, #d4af37) border-box
          `,
          backgroundClip: "padding-box, border-box",
        }}
      >
        <form className="flex flex-col space-y-6">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setFocusName(true)}
            onBlur={() => setFocusName(false)}
            className="p-4 rounded-lg font-semibold focus:outline-none"
            style={getInputStyle(name, focusName)}
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocusEmail(true)}
            onBlur={() => setFocusEmail(false)}
            className="p-4 rounded-lg font-semibold focus:outline-none"
            style={getInputStyle(email, focusEmail)}
          />

          {/* Message Textarea */}
          <textarea
            placeholder="Your Message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-4 rounded-lg font-semibold focus:outline-none"
            style={messageStyle}
          ></textarea>

         <button
  type="button"
  onClick={() => {
    const mailLink = `mailto:your-email@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage:%0A${message}`;

    window.location.href = mailLink;

    // Clear the fields after click
    setName("");
    setEmail("");
    setMessage("");
  }}
  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-10 rounded-lg transition-colors mx-auto"
>
  Send
</button>


        </form>
      </div>
    </section>
  );
}
