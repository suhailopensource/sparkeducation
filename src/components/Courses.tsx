import React from 'react';
import { Clock, BarChart, Users } from 'lucide-react';
import { SiStatuspal } from "react-icons/si";


const courses = [
  {
    title: 'Web Development Fundamentals',
    duration: '10 days',
    level: 'Intermediate',
    status: 'Active',
    description: 'Learn the basics of HTML, CSS, and JavaScript.',
    link: "https://docs.google.com/forms/d/e/1FAIpQLSebla7mH8QSy87BcwNPt0LivukMuENjGjFkJ7JU5Fy9Bd9YiQ/viewform",
    curriculum: "https://drive.google.com/file/d/11wnFU6bbkmd2vmesdh8B6d_wFk1MkIqc/view?usp=drivesdk"
  },
  {
    title: 'Advanced React Development',
    duration: '3 weeks',
    level: 'Intermediate',
    status: 'Coming Soon',
    description: 'Master React.js and modern frontend development.',
  },
  {
    title: 'Full Stack Development',
    duration: '5 weeks',
    level: 'Advanced',
    status: 'Coming Soon',
    description: 'Build complete web applications from frontend to backend.',
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
    <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
      {
        course?.link ? (

          <a href={course.link} target='_blank'>
            Enroll Now
          </a>
        ) : (
          <div >
            Coming Soon! Stay Tuned.
          </div>
        )
      }
    </button>
    {
      course?.curriculum &&
      <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors mt-2">
        {
          course?.curriculum ? (

            <a href={course?.curriculum} target='_blank'>
              Course Curriculum
            </a>
          ) : (
            <div >
              Coming Soon! Stay Tuned.
            </div>
          )
        }
      </button>
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