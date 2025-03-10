import React from 'react';
import { Clock, BarChart, Users } from 'lucide-react';
import { SiStatuspal } from "react-icons/si";


const courses = [
  {
    title: 'Web Development Fundamentals',
    duration: '25 days - Batch Starts on 15th march',
    level: 'Intermediate',
    status: 'Active',
    description: 'Learn the basics to advanced of HTML, CSS, and JavaScript.',
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeaL_4B12AA1RMYx9V3206_d8al8Dl6J1Y0C6bejoK1ovsmiQ/viewform",
    curriculum: "https://drive.google.com/file/d/1Ipw5yq_GIetBnyK0dVwOWxwneqdstk2C/view?usp=sharing"
  },
  {
    title: 'Basics To Advanced React Development',
    duration: '25 days - Batch Starts on 15th march',
    level: 'Intermediate',
    status: 'Active',
    description: 'Master React.js and modern frontend development.',
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeaL_4B12AA1RMYx9V3206_d8al8Dl6J1Y0C6bejoK1ovsmiQ/viewform",
    curriculum: "https://drive.google.com/file/d/1lvRWA1zwnql5ZC1l8v2Spz0jNJvKl5Ri/view?usp=sharing"
  },
  {
    title: 'Agentic AI Bootcamp',
    duration: '10 days - Batch Starts on 15th march',
    level: 'Anyone',
    status: 'Active',
    description: 'Dive into the future of Artificial Intelligence – explore Agentic AI and build cutting-edge solutions in this high-impact bootcamp.',
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeaL_4B12AA1RMYx9V3206_d8al8Dl6J1Y0C6bejoK1ovsmiQ/viewform",
    curriculum: "https://drive.google.com/file/d/1oUvjknl7PlHv1fmrr-s4Y3cvM3DzRQ07/view?usp=sharing"
  },
];

const CourseCard = ({ course }: { course: any }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1">
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{course.title}</h3>
    <div className="space-y-2 mb-4">
      <div className="flex items-center text-gray-600">
        <Clock className="w-4 h-4 mr-2" />
        <span>{course.duration}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <BarChart className="w-4 h-4 mr-2" />
        <span>{course.level}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <SiStatuspal className="w-4 h-4 mr-2" />
        <span>{course.status}</span>
      </div>
    </div>
    <p className="text-gray-600 mb-4">{course.description}</p>

    {
      course?.link ? (
        <a href={course.link} target='_blank'>
          <button className="text-center w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
            Enroll Now
          </button>
        </a>
      ) : (
        <button className="text-center w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
          Coming Soon! Stay Tuned.
        </button>
      )
    }

    {
      course?.curriculum && (
        <a href={course.curriculum} target='_blank' className="w-full">
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mt-2">
            Course Curriculum
          </button>
        </a>
      )
    }
  </div>
);

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;