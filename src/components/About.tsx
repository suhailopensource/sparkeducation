import React from 'react';
import { Award, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Spark Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            As Spark Education, we're dedicated to providing quality education
            and transforming careers through innovative learning solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
            <p className="text-gray-600">
              Industry-leading curriculum designed by experts with real-world experience.
            </p>
          </div>
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from professionals with years of industry experience.
            </p>
          </div>
          <div className="text-center p-6">
            <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Community</h3>
            <p className="text-gray-600">
              Join a diverse community of learners from around the world.
            </p>
          </div>
        </div>
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Part of Spark Webservices</h3>
              <p className="text-gray-600">
                As a member of the Spark Webservices family, we leverage industry expertise
                and cutting-edge technology to deliver exceptional learning experiences.
              </p>
              <a
                href="https://sparkwebservices.netlify.app/"
                target='_blank'
                className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn more about Spark Webservices →
              </a>
            </div>
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;