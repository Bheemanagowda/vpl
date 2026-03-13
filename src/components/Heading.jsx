import React from "react";

const Heading = ({ title, className = "", className1 = "" }) => {
  return (
    <div className={`mb-10 ${className}`}>
      <h2 className="text-3xl font-bold text-black">
        {title}
      </h2>

      {/* Line Below Heading */}
      <div className={`w-20 h-1 bg-orange-500 mt-3 rounded ${className1}`}></div>
    </div>
  );
};

export default Heading;