import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-500 text-white">
      <div className="md:container md:mx-auto p-4">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold ml-[50px]">aDMe</div>
          <div className="text-[18px] leading-9  font-[700] text-center xl:ml-[500px]">
            A Business Co-pilot
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
