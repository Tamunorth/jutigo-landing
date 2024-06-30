import React from "react";

import icon from "../assets/icon.svg";

const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center p-4">
        <img src={icon} className="h-7" alt="logo" />
      </div>
      <div className="h-[1px] bg-gray-300 "></div>
    </>
  );
};

export default Header;
