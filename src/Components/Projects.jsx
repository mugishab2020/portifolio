import React, { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Simple Shell',
      description: 'A custom shell implemented in C that mimics the behavior of a Unix shell.',
      link: 'https://github.com/jarxlim/simple_shell',
      techStack: ['C', 'Linux', 'Unix'],
    },
    {
      title: 'E-Commerce Web App',
      description: 'A full-stack Django-based e-commerce platform with user authentication, product management, and order tracking.',
      link: '#',
      techStack: ['Django', 'TailwindCSS', 'MySQL'],
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills and projects, built with React and TailwindCSS.',
      link: 'https://github.com/the-1Riddle/empowerHer/tree/main/frontend/src/components',
      techStack: ['React', 'TailwindCSS', 'JavaScript'],
    },
    {
      title: 'Empowerher',
      description: 'Empowerher is the Vue and python project that helps the female environment to face the issues related to the sexual harracement ',
      link: '#',
      techStack: ['Vue', 'CSS', 'fastAPI'],
    }
  ];

  // State to track which project is visible
  const [visibleProjects, setVisibleProjects] = useState([]);

  const projectRefs = useRef([]); // To reference each project card

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prevVisibleProjects) => [
              ...prevVisibleProjects,
              entry.target.dataset.index,
            ]);
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((project, index) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gray-900 py-16 px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8">My Projects</h2>
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`bg-gray-800 rounded-lg shadow-lg p-6 transform transition duration-500 ease-in-out 
                ${visibleProjects.includes(index.toString()) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h3 className="text-2xl font-semibold text-green-400 mb-2 mr-10">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap space-x-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-700 text-white py-1 px-2 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block text-green-500 hover:text-green-400 underline transition duration-300"
                target={project.link}
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects
