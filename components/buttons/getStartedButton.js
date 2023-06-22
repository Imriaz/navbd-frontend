import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const GetStartedButton = ({ isDarkMode, url }) => {
  return (
    <button
      className={`get-started ${
        isDarkMode ? "get-started-bg-dark" : "get-started-bg"
      } `}
    >
      <Link href={`${url}`}>
        <span className="center-align">
          <h1 className="get-started-title">Get Started</h1>
          <FaArrowRight
            size={15}
            className={` ${
              isDarkMode ? "get-started-arrow-dark" : "get-started-arrow"
            } `}
          />
        </span>
      </Link>
    </button>
  );
};

export default GetStartedButton;
