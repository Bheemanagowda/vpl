import React from 'react';
import { IoLocationSharp, IoMailSharp, IoCallSharp } from "react-icons/io5";
import Heading from './Heading';

const Info = () => {
  const contactDetails = [
    {
      icon: <IoLocationSharp className="text-red-600 w-8 h-8" />,
      title: "Our Location",
      detail: "Vanajabhavi, Tq: Yalaburga,\nDistrict: Koppal, Karnataka",
      link: "https://www.google.com/maps/search/Vanajabhavi+Yalaburga+Koppal",
    },
    {
      icon: <IoMailSharp className="text-blue-600 w-8 h-8" />,
      title: "Email Us",
      detail: "vplleague@gmail.com",
      link: "mailto:vplleague@gmail.com",
    },
    {
      icon: <IoCallSharp className="text-green-600 w-8 h-8" />,
      title: "Call Us",
      detail: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXXX",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
       
         <Heading title="Please Reached Us" className="text-center" className1="mx-auto" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactDetails.map((item, index) => (
            <a 
              href={item.link} 
              target="_blank" 
              rel="noreferrer"
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200"
            >
              <div className="mb-5 p-4 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="text-gray-600 font-medium whitespace-pre-line leading-relaxed">
                {item.detail}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;