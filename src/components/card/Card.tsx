import React from "react";
import type { CardProps } from "./Card.props";

const Card: React.FC<CardProps> = ({
  title,
  children,
  addContent,
  className,
  onClose,
}) => {
  return (
    <div
      className={`flex flex-col pt-[105px] justify-center items-center bg-white shadow-[0px_6px_24px_-4px_rgba(2,4,33,0.14)] rounded-[50px] p-0 ${className}`}
    >
      <div className="relative flex items-center justify-end w-full">
        <svg
          onClick={onClose}
          className="absolute top-[-52px] right-5 cursor-pointer"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 18.75L6.25 6.25"
            stroke="#212121"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.75 6.25L6.25 18.75"
            stroke="#212121"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h2 className="w-[386px] h-[31px] text-center text-[24px] font-[500] leading-[130%] text-[#232222]">
        {title}
      </h2>
      <div className="mb-4"> {children} </div>
      {addContent && (
        <div className="mt-4 text-sm text-gray-500"> {addContent}</div>
      )}
    </div>
  );
};

export default Card;
