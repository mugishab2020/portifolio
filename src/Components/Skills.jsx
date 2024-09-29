import React, { useEffect, useState } from 'react';

const Skills = () => {
  const skills = [
    { 
      name: 'C', 
      description: 'I have done one of the projects I consider most challenging in C programming: the Simple Shell project.',
      color: 'bg-red-500'
    },
    { 
      name: 'Python', 
      description: 'I am confident in Python frameworks like Flask, FastAPI, and Django where I can comfortably create RESTful APIs.',
      color: 'bg-yellow-400'
    },
    { 
      name: 'JavaScript', 
      description: 'I am proficient in both JavaScript and its popular frameworks.',
      color: 'bg-yellow-500'
    },
    { 
      name: 'React', 
      description: 'I can efficiently build UI components and complex applications using React.',
      color: 'bg-blue-300'
    },
    { 
      name: 'Express', 
      description: 'I can develop robust RESTful APIs using Express.js.',
      color: 'bg-gray-700'
    },
    { 
      name: 'HTML', 
      description: 'I am skilled at creating web pages using plain HTML.',
      color: 'bg-orange-500'
    },
    { 
      name: 'CSS', 
      description: 'I excel in styling with plain CSS, as well as frameworks like Bootstrap and Tailwind CSS.',
      color: 'bg-blue-400'
    }
  ];

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="bg-gray-900 rounded-xl shadow-lg p-8 max-w-6xl mx-auto text-white">
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white-400">My Skills</h2>
      </div>
      
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className={`transform transition-all duration-500 ease-out ${show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} delay-${index * 200}ms flex items-start border border-gray-700 p-4 rounded-lg shadow-md relative`}
            style={{ transitionDelay: `${index * 200}ms` }} 
          >
            <span className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg ${skill.color}`}></span>
            
           
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-green-400 mb-2 dotted">{skill.name}</h3>
              <p className="text-sm text-gray-300">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
