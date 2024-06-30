import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center my-[64px] lg:my-[124px] text-center">
      <p className="text-[36px] leading-[44px] font-semibold lg:text-[60px] lg:leading-[72px]  ">
        The solution to all your <br />
        <span className="text-primary">invoicing</span> problems
      </p>
      <p className="text-secondary text-lg py-2 lg:text-xl lg:py-7">
        Be the first to get notified about jutigo when we launch!
      </p>
      <div className="flex gap-2 justify-center">
        <input
          type="email"
          // value={text}
          // onChange={handleChange}
          placeholder="Enter your email"
          className="text-field border border-secondary-light rounded-lg px-5 py-3 sm: w-full lg:w-[472px] focus:outline-none"
        />

        <button className="bg-primary rounded-lg px-7 w-auto text-white whitespace-nowrap">
          Join the waitlist
        </button>
      </div>
    </div>
  );
};

export default Hero;
