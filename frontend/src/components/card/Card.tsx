import React from "react";
import type { CardProps } from "./Card.props";

const Card: React.FC<CardProps> = ({
  children,
  addContent,
  className,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-white shadow-lg rounded-[50px] relative ${className}`}
    >
      <div className=""> {children} </div>
      {addContent && (
        <div className="mt-4 text-sm text-gray-500"> {addContent}</div>
      )}
    </div>
  );
};

export default Card;
