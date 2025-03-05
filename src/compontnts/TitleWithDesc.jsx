import React from "react";

const TitleWithDesc = ({ title, desc }) => {
  return (
    <>
      <div>
        <h2 className="font-bold mb-4">{title}</h2>
        <p className="text-[#8895a0] mt-[8px]">{desc}</p>
      </div>
    </>
  );
};

export default TitleWithDesc;
