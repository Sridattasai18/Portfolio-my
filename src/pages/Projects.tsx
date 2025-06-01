
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ExternalLink, Github, Globe, ShoppingCart, User, Code } from 'lucide-react';

const Projects = () => {
  const { primaryColor } = useTheme();

  const projects = [
    {
      title: 'Amazon Clone Page',
      description: 'A responsive front-end web application mimicking Amazon\'s layout with product listings, shopping cart UI, and basic user flow.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Responsive design for all devices',
        'Product listing with grid layout',
        'Shopping cart interface',
        'User-friendly navigation',
        'Interactive product cards'
      ],
      github: '#',
      demo: '#',
      icon: ShoppingCart
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A comprehensive personal portfolio showcasing projects, skills, and experience with modern design and interactive features.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      features: [
        'Modern responsive design',
        'Contact form integration',
        'Social media links',
        'Project showcase gallery',
        'Skills and experience sections'
      ],
      github: '#',
      demo: '#',
      icon: User
    },
    {
      title: 'Data Analysis Project',
      description: 'A comprehensive data analysis project using Python and Pandas for data preprocessing, visualization, and insights generation.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['Python', 'Pandas', 'Jupyter', 'SQL'],
      features: [
        'Data cleaning and preprocessing',
        'Statistical analysis',
        'Data visualization',
        'Insights and recommendations',
        'Jupyter notebook documentation'
      ],
      github: '#',
      demo: '#',
      icon: Code
    }
  ];

  const upcomingProjects = [
    'Machine Learning Model for Student Performance Prediction',
    'Real-time Chat Application with React and Socket.io',
    'E-commerce Backend API with Node.js',
    'Data Dashboard with Interactive Charts',
    'Mobile-First Progressive Web App'
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <div className="w-24 h-1 mx-auto rounded-full mb-8" style={{ backgroundColor: primaryColor }}></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating skills in web development, data science, and problem-solving
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Featured Projects
          </h2>
          <div className="space-y-12">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex`}
                >
                  <div className="lg:w-1/2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                        style={{ backgroundColor: `${primaryColor}20` }}
                      >
                        <Icon size={24} style={{ color: primaryColor }} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div
                              className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                              style={{ backgroundColor: primaryColor }}
                            ></div>
                            <span className="text-gray-600 dark:text-gray-400 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="inline-flex items-center px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                      >
                        <Github size={18} className="mr-2" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className="inline-flex items-center px-4 py-2 rounded-lg text-white transition-all duration-200 hover:scale-105"
                        style={{ backgroundColor: primaryColor }}
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Stats */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Project Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Completed Projects', value: '3+', icon: Code },
                { label: 'Technologies Used', value: '8+', icon: Globe },
                { label: 'Lines of Code', value: '5K+', icon: Code },
                { label: 'GitHub Commits', value: '50+', icon: Github },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${primaryColor}20` }}
                    >
                      <Icon size={24} style={{ color: primaryColor }} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Upcoming Projects */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Upcoming Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div
                  className="w-full h-2 rounded-full mb-4"
                  style={{ backgroundColor: `${primaryColor}20` }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ 
                      backgroundColor: primaryColor,
                      width: `${Math.random() * 60 + 20}%`
                    }}
                  ></div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {project}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  In Development
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
