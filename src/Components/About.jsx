import React from 'react';
import './styles/About.css'; // Import custom CSS
import myImage from '../public/images/me1.jpg'; // Update the path to your image

const About = () => {
  return (
    <section className="bg-gray-900 rounded-xl text-white py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Personal Information */}
          <div className="ml-10">
            <h3 className="text-3xl font-bold mb-6 italic boldcl">PERSONAL INFORMATION</h3>
            <ul>
              <li className="mb-2 fade-in" style={{ animationDelay: '0.1s' }}><strong>Name:</strong> Edson Mugisha</li>
              <li className="mb-2 fade-in" style={{ animationDelay: '0.3s' }}><strong>Nationality:</strong> Rwandan</li>
              <li className="mb-2 fade-in" style={{ animationDelay: '0.4s' }}><strong>Address:</strong> Kigali-Rwanda</li>
              <li className="mb-2 fade-in" style={{ animationDelay: '0.5s' }}><strong>Phone:</strong> <a href="tel:0788282329" className="text-green-200">0788282329</a></li>
              <li className="mb-2 fade-in" style={{ animationDelay: '0.6s' }}><strong>Email:</strong> <a href="mailto:mugishab2020@gmail.com" className="text-blue-400">mugishab2020@gmail.com</a></li>
              <li className="mb-2 fade-in" style={{ animationDelay: '0.7s' }}><strong>Languages:</strong> Kinyarwanda, English</li>
            </ul>
            <a 
              href="mycv.pdf" 
              download 
              className="text-white bg-green-900 mt-8 py-2 px-4 rounded-full font-bold hover:bg-white hover:text-black fade-in inline-block" 
              style={{ animationDelay: '1s'}}
            >
              Download my CV
            </a>
          </div>

          {/* Right Side: Image */}
          <div className="flex items-center justify-center">
            <img src={myImage} alt="About Me" className="w-64 h-64 rounded-full border-4 border-green-500 fade-in" style={{ animationDelay: '1.3s'}} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
