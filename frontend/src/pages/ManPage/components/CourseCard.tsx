// src/components/card/CourseCard.tsx
import React from "react";

import HeartIcon from "@/assets/svg/main/Heart_01.svg";
import IconButton from "@/assets/svg/main/Icon_buttons.svg";

type CourseCardProps = {
  title: string;
  reviewsCount: number;
  price: string;
  duration: string;
  bonusLabel?: string;
  discountLabel?: string;
  onFavoriteToggle?: () => void;
  onClick?: () => void;
};

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  reviewsCount,
  price,
  duration,
  bonusLabel = "1000 бонусов",
  discountLabel = "Скидка 15%",
  onFavoriteToggle,
  onClick,
}) => {
  return (
    <div
      className="
        rounded-[12px]
        max-w-[450px]
        bg-white
        shadow-sm
        overflow-hidden
        flex flex-col
      "
    >
      <div className="relative bg-[#C4C4C4] h-[200px]">
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="px-3 py-1 rounded-full bg-white text-[13px] leading-[130%]">
            {bonusLabel}
          </span>
          <span className="px-3 py-1 rounded-full bg-white text-[13px] leading-[130%]">
            {discountLabel}
          </span>
        </div>

        <button
          type="button"
          onClick={onFavoriteToggle}
          className="
            absolute top-3 right-3
            w-9 h-9
            rounded-full bg-white
            flex items-center justify-center
          "
        >
          <img src={HeartIcon} alt="favorite" className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-[#F9F9F9] px-5 py-5 flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-[18px] leading-[130%] font-medium text-black">
            {title}
          </h3>
          <span className="text-[13px] text-[#868F95]">
            Отзывы {reviewsCount}
          </span>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div className="flex flex-col gap-[2px]">
            <span className="text-[16px] font-semibold tracking-[0.03em]">
              {price}
            </span>
            <span className="text-[13px] text-[#868F95]">{duration}</span>
          </div>

          <button
            type="button"
            onClick={onClick}
            className="
              w-10 h-10
              rounded-full
              bg-[#D33734]
              flex items-center justify-center
            "
          >
            <img src={IconButton} alt="open" className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
};
