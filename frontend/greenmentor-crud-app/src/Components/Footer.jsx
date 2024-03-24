import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <FaFacebookSquare />
            </a>
            <a href="#" className="ml-6 text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <FaSquareTwitter />
            </a>
            <a href="#" className="ml-6 text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              {" "}
              Help : greenmentor@gmail.com
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; Copyright 2024 greenmentor. All rights reserved | Design by
              : greenmentor.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
