
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const { primaryColor } = useTheme();

  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Artificial Intelligence and Data Science',
      institution: 'Vishnu Institute of Technology',
      location: 'Bhimavaram, Andhra Pradesh',
      period: 'Expected Graduation: 2027',
      status: 'Current',
      description: 'Specializing in AI and Data Science with focus on machine learning, data analysis, and software development.',
      icon: GraduationCap
    },
    {
      degree: 'Intermediate (10+2)',
      field: 'Science Stream',
      institution: 'Sri Chaitanya Junior College',
      location: 'Chittoor, Andhra Pradesh',
      period: 'Completed: April 2023',
      percentage: '85.1%',
      description: 'Completed higher secondary education with strong foundation in Mathematics, Physics, and Chemistry.',
      icon: BookOpen
    },
    {
      degree: 'Secondary School (10th Class)',
      field: 'General Education',
      institution: 'Apollo EM High School',
      location: 'Palakollu, Andhra Pradesh',
      period: 'Completed: June 2021',
      percentage: '92%',
      description: 'Completed secondary education with excellent academic performance across all subjects.',
      icon: Award
    }
  ];

  const coursework = [
    'Python Programming',
    'Java Programming',
    'Data Structures',
    'Pandas for Data Analysis',
    'SQL Database Management',
    'Web Technologies (HTML, CSS, JS)',
    'C Programming',
    'Artificial Intelligence Fundamentals',
    'Machine Learning Basics',
    'Statistics and Probability'
  ];

  const certifications = [
    {
      title: 'Python and Pandas',
      provider: 'Kaggle',
      year: '2023',
      description: 'Data manipulation and analysis using Python and Pandas library'
    },
    {
      title: 'Programming in Java',
      provider: 'NPTEL',
      year: '2023',
      description: 'Comprehensive Java programming course covering OOP concepts'
    },
    {
      title: 'HTML and CSS Bootcamp',
      provider: 'LetsUpgrade',
      year: '2023',
      description: 'Front-end web development fundamentals and responsive design'
    }
  ];

  const internships = [
    {
      title: 'Virtual Internship – Data Science',
      company: 'Eduskills',
      duration: 'Short-Term',
      description: [
        'Applied data analysis techniques using Python and Pandas',
        'Worked on datasets for data preprocessing, visualization, and basic modeling',
        'Documented analysis workflows using Jupyter Notebooks'
      ]
    },
    {
      title: 'Virtual Internship – Web Development',
      company: 'Eduskills',
      duration: 'Short-Term',
      description: [
        'Built interactive and responsive web pages using HTML, CSS, and JavaScript',
        'Collaborated on projects via GitHub and practiced version control',
        'Gained exposure to front-end development workflow and best practices'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education & Experience
          </h1>
          <div className="w-24 h-1 mx-auto rounded-full mb-8" style={{ backgroundColor: primaryColor }}></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey and professional experience in AI, Data Science, and Web Development
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Educational Background
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 animate-fade-in"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${primaryColor}20` }}
                    >
                      <Icon size={28} style={{ color: primaryColor }} />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-lg font-medium" style={{ color: primaryColor }}>
                            {edu.field}
                          </p>
                        </div>
                        {(edu.percentage || edu.status) && (
                          <div className="text-right">
                            {edu.percentage && (
                              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {edu.percentage}
                              </div>
                            )}
                            {edu.status && (
                              <div 
                                className="px-3 py-1 rounded-full text-sm font-medium text-white"
                                style={{ backgroundColor: primaryColor }}
                              >
                                {edu.status}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <GraduationCap size={16} className="mr-2" />
                          {edu.institution}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {edu.period}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coursework */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Relevant Coursework
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coursework.map((course, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Internships */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Internship Experience
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {internship.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="font-medium" style={{ color: primaryColor }}>
                      {internship.company}
                    </p>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {internship.duration}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {internship.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div
                        className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                        style={{ backgroundColor: primaryColor }}
                      ></div>
                      <span className="text-gray-600 dark:text-gray-400">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Certifications
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${primaryColor}20` }}
                >
                  <Award size={28} style={{ color: primaryColor }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="font-medium mb-2" style={{ color: primaryColor }}>
                  {cert.provider}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {cert.year}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
