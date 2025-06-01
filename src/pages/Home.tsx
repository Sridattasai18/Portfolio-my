
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowRight, Download, Github, Briefcase, Contact } from 'lucide-react';

const Home = () => {
  const { primaryColor } = useTheme();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sri Datta Sai
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8">
                AI & Data Science Student
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Motivated B.Tech student specializing in Artificial Intelligence and Data Science, 
                with hands-on experience in data science and front-end web development. 
                Passionate about applying technical skills to solve real-world challenges.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: primaryColor }}
                >
                  <Briefcase size={20} className="mr-2" />
                  View My Work
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                >
                  <Contact size={20} className="mr-2" />
                  Get In Touch
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative w-80 h-80 mx-auto">
                <div 
                  className="absolute inset-0 rounded-full opacity-20 animate-pulse"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Sri Datta Sai Vithal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years of Study', value: '3+' },
              { label: 'Projects Completed', value: '5+' },
              { label: 'Internships', value: '2' },
              { label: 'Technical Skills', value: '10+' },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2" style={{ color: primaryColor }}>
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Core Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Python', 'Java', 'JavaScript', 'SQL', 'React', 'Pandas'
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <div className="text-gray-900 dark:text-white font-medium">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            I'm always excited to work on new projects and collaborate with fellow developers and data enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/Sridattasai18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: primaryColor }}
            >
              <Github size={20} className="mr-2" />
              View GitHub
            </a>
            <button className="inline-flex items-center px-6 py-3 border-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500">
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
