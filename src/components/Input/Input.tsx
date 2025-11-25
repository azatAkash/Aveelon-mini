import React, { useState } from "react";
import type { InputProps } from "./Input.props";
import clsx from "clsx";

const Input: React.FC<InputProps> = ({
  error,
  label,
  hint,
  size = "default",
  disabled = false,
  value,
  onChange,
  name,
  onFocus,
  onBlur,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFilled = !!value;

  const isLabelFloating = isFocused || isFilled;

  const isHintVisible = !!hint && !isFilled && isFocused;

  const borderAndErrorClasses = clsx(
    "border",
    "border-input-border",
    {
      "border-[2px] border-primary": error,
    },
    {
      "border-none bg-disabled": disabled,
    },
    {
      "border-[2px] border-input-border": isFocused && !error && !disabled,
    },
    {
      "hover:bg-input-hover": !error && !disabled && !isFocused,
    }
  );

  const inputClasses = clsx(
    "w-full bg-transparent focus:outline-none !font-family-inter",
    "px-[30px] text-[20px] leading-normal",

    isLabelFloating ? "pt-[20px] pb-[10px]" : "py-[14px]",

    error ? "text-primary" : "text-black",

    {
      "text-disabled-inner cursor-not-allowed": disabled,
    }
  );

  const labelClasses = clsx(
    "absolute left-[30px] transition-all duration-200 pointer-events-none !font-family-inter",
    "text-input-border",
    "text-sm leading-none",

    {
      "top-[8px] tracking-tighter": isLabelFloating,
      "top-1/2 -translate-y-1/2": !isLabelFloating,
    },

    {
      "text-primary": error,
      "text-disabled-inner": disabled,
    }
  );

  const hintClasses = clsx(
    "text-[20px] leading-normal",
    "absolute left-[30px] text-input-border opacity-70 transition-opacity duration-200 !font-family-inter",
    "pointer-events-none",

 
    isLabelFloating ? "top-[24px]" : "top-1/2 -translate-y-1/2"
  );

  const errorClasses = "mt-1 text-xs text-primary";

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  return (
    <div className="relative w-full ">
      <div
        className={clsx(
          "relative rounded-[15px] bg-white w-full ",
          borderAndErrorClasses
        )}
      >
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={inputClasses}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={label ? "" : rest.placeholder}
          {...rest}
        />

        {label && (
          <label htmlFor={name} className={labelClasses}>
            {label}
          </label>
        )}

        {isHintVisible && <div className={hintClasses}>{hint}</div>}
      </div>

      {error && <p className={errorClasses}>{error}</p>}
    </div>
  );
};

export { Input };