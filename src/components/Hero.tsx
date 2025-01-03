import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 h-screen">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Empowering Learning,<br />Transforming Future&apos;s
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join Spark Education to unlock your potential and embark on a journey of continuous learning and growth.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSebla7mH8QSy87BcwNPt0LivukMuENjGjFkJ7JU5Fy9Bd9YiQ/viewform" className=''>

              Get Started
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;