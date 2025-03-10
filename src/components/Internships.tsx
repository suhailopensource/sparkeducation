import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const internships = [
  {
    title: 'Frontend Developer Intern',
    duration: '3 months',
    location: 'Remote',
    description: 'Work on real-world projects using React and modern web technologies.',
    link: "https://docs.google.com/forms/d/e/1FAIpQLSebla7mH8QSy87BcwNPt0LivukMuENjGjFkJ7JU5Fy9Bd9YiQ/viewform"
  },
  {
    title: 'Backend Developer Intern',
    duration: '6 months',
    location: 'Hybrid',
    description: 'Develop scalable backend solutions and APIs using Node.js.',
  },
  {
    title: 'UI/UX Design Intern',
    duration: '4 months',
    location: 'On-site',
    description: 'Create beautiful and intuitive user interfaces for web applications.',
  },
];

const InternshipCard = ({ internship }: { internship: any }) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{internship.title}</h3>
    <div className="space-y-2 mb-4">
      <div className="flex items-center text-gray-600">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{internship.duration}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{internship.location}</span>
      </div>
    </div>
    <p className="text-gray-600 mb-4">{internship.description}</p>
    <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
      {
        internship.link ? (

          <a href={internship.link} target='_blank'>
            Apply Now
          </a>
        ) : (
          <div >
            Coming Soon! Stay Tuned.
          </div>
        )
      }
    </button>
  </div>
);

const Internships = () => {
  return (
    <section id="internships" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Internship Opportunities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Gain hands-on experience and kickstart your career with our internship programs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <InternshipCard key={index} internship={internship} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;