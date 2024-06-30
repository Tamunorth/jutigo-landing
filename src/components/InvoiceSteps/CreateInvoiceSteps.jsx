import React from "react";

const CreateInvoiceSteps = ({ image, title, subtitle }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-16 ">
      <img src={image} width={48} height={48} className="m-5" alt="" />
      <p className="font-medium text-xl my-2">{title}</p>
      <p className="text-md font-light text-secondary w-[250px]">{subtitle}</p>
    </div>
  );
};

export default CreateInvoiceSteps;
