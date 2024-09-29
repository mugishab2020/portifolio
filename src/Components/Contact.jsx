import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setSubmitted(true);
    // Here you can add your form submission logic, e.g., sending data to an API.
  };

  return (
    <section className="bg-gray-900 py-16 px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Me</h2>

        {submitted ? (
          <div className="text-center text-green-400 text-2xl">
            Thank you for your message! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-white text-sm font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-white text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-white text-sm font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="5"
              ></textarea>
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-8 rounded-md transition duration-300 hover:bg-green-600"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-10">
          <h3 className="text-xl text-white font-semibold text-center">You can also find me on</h3>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-green-500 text-2xl hover:text-green-400">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-green-500 text-2xl hover:text-green-400">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-green-500 text-2xl hover:text-green-400">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
