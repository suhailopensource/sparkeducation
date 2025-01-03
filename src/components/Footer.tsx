import React from 'react';
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Spark Education</span>
            </div>
            <p className="text-gray-400">
              A proud member of Spark Webservices, dedicated to transforming education through innovative learning solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#internships" className="text-gray-400 hover:text-white transition-colors">Internships</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Vandalur , Chennai</li>

              <li>sparkwebservices2022@gmail.com</li>
              <li>+91 98416 06914</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">

              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <a href='https://www.linkedin.com/company/sparkservice/' target='_blank'  >

                  <Linkedin className="h-6 w-6" />
                </a>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <a href='https://www.instagram.com/spark.solutions.24?igsh=eWQ4ajBsOGx3YzI5' target='_blank'>

                  <Instagram className="h-6 w-6" />
                </a>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Spark Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;