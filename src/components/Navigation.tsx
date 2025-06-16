
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Home, User, BookOpen, Briefcase, Contact, Sun, Moon, Palette, Menu, X } from 'lucide-react';

const Navigation = () => {
  const { theme, toggleTheme, primaryColor, setPrimaryColor } = useTheme();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { section: 'home', label: 'Home' },
    { section: 'projects', label: 'Projects' },
    { section: 'about', label: 'About' },
    { section: 'contact', label: 'Contact' },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span className="font-bold text-xl text-gray-900">LucaDCz.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ section, label }) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Theme Controls */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              
              <div className="relative">
                <button
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Palette size={18} />
                </button>
                
                {showColorPicker && (
                  <div className="absolute right-0 mt-2 p-3 bg-white rounded-lg shadow-lg border border-gray-200">
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
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navItems.map(({ section, label }) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-purple-600 font-medium transition-colors"
              >
                {label}
              </button>
            ))}
            
            <div className="flex items-center justify-between px-3 py-2 mt-4 border-t border-gray-100">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              
              <button
                onClick={() => setShowColorPicker(!showColorPicker)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Palette size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
