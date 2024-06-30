import React from "react";

function DesignedForItem({ image, title, subtitle }) {
  return (
    <div className="flex flex-col justify-center items-center px-[24px] py-[30px] bg-[#FFF7CA]">
      <p className="font-medium text-xl my-2">{title}</p>
      <p className="text-md font-light text-secondary w-[250px] py-4">
        {subtitle}
      </p>
      <img src={image} alt="" width={300} />
    </div>
  );
}

export default DesignedForItem;
