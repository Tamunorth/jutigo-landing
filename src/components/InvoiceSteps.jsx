import React from "react";
import create from "../assets/create_icon.svg";
import getPaid from "../assets/get_paid_icon.svg";
import send from "../assets/send_icon.svg";
import CreateInvoiceSteps from "./InvoiceSteps/CreateInvoiceSteps";

const InvoiceSteps = () => {
  return (
    <div className="flex flex-col justify-center items-center my-[64px] lg:my-[277px] text-cente">
      <p className="font-semibold text-2xl lg:text-4xl">
        Create your invoice in three easy steps
      </p>
      <p className="text-secondary text-lg xl:text-xl py-2 lg:py-7 mb-5">
        Streamline your invoicing process and get paid on time, every time
      </p>

      <div className="  lg:flex justify-center w-full gap-5">
        <CreateInvoiceSteps
          image={create}
          title={"Create"}
          subtitle="  Craft a professional invoice with all the essential details of your
            business"
        />
        <CreateInvoiceSteps
          image={send}
          title={"Send"}
          subtitle="Send your invoice via email, or any preferred messaging platform"
        />
        <CreateInvoiceSteps
          image={getPaid}
          title={"Get Paid"}
          subtitle="Secure your payment on time and get paid quickly"
        />
      </div>
    </div>
  );
};

export default InvoiceSteps;
