
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Home, User, BookOpen, Briefcase, Contact, Sun, Moon, Palette, Menu, X } from 'lucide-react';

const Navigation = () => {
  const { theme, toggleTheme, primaryColor, setPrimaryColor } = useTheme();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { section: 'home', label: 'Home', icon: Home },
    { section: 'about', label: 'About', icon: User },
    { section: 'education', label: 'Education', icon: BookOpen },
    { section: 'projects', label: 'Projects', icon: Briefcase },
    { section: 'contact', label: 'Contact', icon: Contact },
  ];

  const colorOptions = [
    '#8b5cf6', '#ec4899', '#6366f1', '#f59e0b', '#10b981', '#ef4444', '#06b6d4', '#84cc16'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">SD</span>
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">Sri Datta</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ section, label, icon: Icon }) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105"
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Theme Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            
            <div className="relative">
              <button
                onClick={() => setShowColorPicker(!showColorPicker)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Palette size={18} />
              </button>
              
              {showColorPicker && (
                <div className="absolute right-0 mt-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-4 gap-2">
                    {colorOptions.map((color) => (
                      <button
                        key={color}
                        onClick={() => {
                          setPrimaryColor(color);
                          setShowColorPicker(false);
                        }}
                        className={`w-8 h-8 rounded-full border-2 hover:scale-110 transition-transform ${
                          primaryColor === color ? 'border-gray-400' : 'border-gray-200'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            {navItems.map(({ section, label, icon: Icon }) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
