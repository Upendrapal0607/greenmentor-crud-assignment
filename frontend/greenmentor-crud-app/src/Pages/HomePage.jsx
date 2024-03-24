import React from "react";

export const HomePage = () => {
  return (
    <div className="flex flex-col  w-full min-h-screen bg-gray-100">
      <h1 className="text-center text-4xl font-bold text-gray-800 mt-16">
        Welcome to Green Mentor Task Application.
      </h1>
      <h1 className=" text-center text-4xl font-bold text-green-800 mt-16">
        Hello Admin,
      </h1>
      <p className=" text-center text-4xl font-bold text-gray-400 mt-4">
        This is your task application
      </p>
      <p className=" text-center text-4xl font-bold text-gray-400 mt-4">
        Create your task here on{" "}
        <span className="text-green-500">Green mentor app</span> and enjoy it...
      </p>
      <img
        className="m-auto text-gray-100 text-4xl font-bold bg-gray-500 hover:bg-gray-700 hover:text-white 
        block px-3 py-2 rounded-md mt-[2rem] sm:mt-[5rem]"
        src="https://greenmentors.in/wp-content/uploads/2022/12/pic-organization.jpg"
        alt=""
      />
    </div>
  );
};
