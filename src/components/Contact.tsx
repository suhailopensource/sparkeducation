import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-blue-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600">sparkwebservices2022@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">+91 98416 06914</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-gray-600">Vandalur, Chennai</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;