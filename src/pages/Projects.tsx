
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ExternalLink, Github, Globe, ShoppingCart, User, Code, BarChart3 } from 'lucide-react';

const Projects = () => {
  const { primaryColor } = useTheme();

  const projects = [
    {
      title: 'Amazon Clone Page',
      description: 'A responsive front-end web application mimicking Amazon\'s layout with product listings, shopping cart UI, and modern user experience.',
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
      icon: ShoppingCart,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A comprehensive personal portfolio showcasing projects, skills, and experience with modern design and interactive features.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Modern responsive design',
        'Contact form integration',
        'Social media links',
        'Project showcase gallery',
        'Skills and experience sections'
      ],
      github: '#',
      demo: '#',
      icon: User,
      gradient: 'from-teal-600 to-cyan-600'
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
      icon: BarChart3,
      gradient: 'from-indigo-600 to-blue-600'
    }
  ];

  const upcomingProjects = [
    { name: 'Student Performance Prediction Model', progress: 65, tech: 'Python, Machine Learning' },
    { name: 'Real-time Data Dashboard', progress: 40, tech: 'JavaScript, Charts.js' },
    { name: 'E-commerce Backend API', progress: 25, tech: 'Node.js, Database' },
    { name: 'Progressive Web App', progress: 30, tech: 'JavaScript, PWA' },
    { name: 'Data Visualization Tool', progress: 55, tech: 'Python, Matplotlib' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-blue-900 dark:to-teal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold blue-gradient-text mb-6">
            My Projects
          </h1>
          <div className="w-32 h-2 mx-auto rounded-full blue-gradient-bg mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical projects demonstrating skills in web development, data science, and problem-solving
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold blue-gradient-text mb-16 text-center">
            Featured Projects
          </h2>
          <div className="space-y-16">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className={`glass-morphism rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover-lift border border-blue-200/30 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mr-6 animate-glow`}>
                        <Icon size={28} className="text-white" />
                      </div>
                      <h3 className="text-3xl font-bold blue-gradient-text">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                        Key Features:
                      </h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 mt-3 mr-4 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-400">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 text-sm rounded-full glass-morphism border border-blue-200/30 text-gray-700 dark:text-gray-300 hover-lift"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="inline-flex items-center px-6 py-3 rounded-2xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 hover-lift"
                      >
                        <Github size={20} className="mr-2" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className={`inline-flex items-center px-6 py-3 rounded-2xl text-white bg-gradient-to-r ${project.gradient} hover:opacity-90 transition-all duration-300 hover-lift hover-glow`}
                      >
                        <ExternalLink size={20} className="mr-2" />
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
        <div className="mb-20">
          <div className="glass-morphism rounded-3xl p-12 border border-blue-200/30 bg-gradient-to-r from-blue-50/50 to-teal-50/50 dark:from-blue-900/30 dark:to-teal-900/30">
            <h3 className="text-3xl font-bold text-center blue-gradient-text mb-12">
              Project Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Completed Projects', value: '3+', icon: Code, gradient: 'from-blue-500 to-blue-600' },
                { label: 'Technologies Used', value: '8+', icon: Globe, gradient: 'from-teal-500 to-teal-600' },
                { label: 'Lines of Code', value: '5K+', icon: Code, gradient: 'from-cyan-500 to-cyan-600' },
                { label: 'GitHub Commits', value: '50+', icon: Github, gradient: 'from-indigo-500 to-purple-600' },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-glow`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold blue-gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
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
          <h2 className="text-4xl font-bold blue-gradient-text mb-16 text-center">
            Upcoming Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <div
                key={index}
                className="glass-morphism rounded-2xl p-8 border border-blue-200/30 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                    <div
                      className="blue-gradient-bg h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="blue-gradient-text font-semibold">{project.progress}%</span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Technologies: {project.tech}
                </p>
                <p className="text-sm blue-gradient-text font-medium">
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
