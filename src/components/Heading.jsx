import React from "react";

const Heading = ({
  title,
  className = "",
  className1 = "",
  color = "bg-orange-500",
  textColor = "text-black",
}) => {
  return (
    <div className={`mb-10 ${className}`}>
      <h2 className={`text-3xl font-bold ${textColor}`}>
        {title}
      </h2>

      {/* Line Below Heading */}
      <div className={`w-20 h-1 mt-3 rounded ${color} ${className1}`}></div>
    </div>
  );
};

export default Heading;