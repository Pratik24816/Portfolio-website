import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const formData = {
      name,
      email,
      message,
    };

    try {
      // Sending data to the backend
      const response = await fetch("http://localhost:4000/api/messages/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");
        // Clear form
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full px-6 py-16 text-gray-200">
      <h1 className="bg-gradient-to-l from-blue-900 to-blue-300 bg-clip-text text-4xl font-bold text-center mb-8 text-transparent">
        Contact Me
      </h1>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-300">
            Let’s Connect!
          </h2>
          <p className="text-gray-400 mt-2">
            Email me at:{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-blue-400 font-medium hover:underline"
            >
              prajapatipm16@gmail.com
            </a>
          </p>
        </div>

        
        <form
          className="rounded-lg p-6 border border-gray-700"
          onSubmit={handleSubmit}
        >
         
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-400 font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-400 font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-400 font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            ></textarea>
          </div>

         
          <div className="text-center">
            <button
              type="submit"
              className={`px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
