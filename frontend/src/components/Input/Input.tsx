import React, { useState } from "react";
import type { InputProps } from "./Input.props";
import clsx from "clsx";
import EyeOn from "@/assets/svg/eye-on.svg";
import EyeOff from "@/assets/svg/eye-off.svg";

const Input: React.FC<InputProps> = ({
  error,
  label,
  hint,
  variant = "default",
  disabled = false,
  value,
  onChange,
  name,
  onFocus,
  onBlur,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isFilled = value !== undefined && value !== null && value !== "";

  const isCodeVariant = variant === "code";
  const isPassword = variant === "password";
 const isLabelFloating = !isCodeVariant && (isFocused || isFilled)
  const isHintVisible = !isCodeVariant && !!hint && !isFilled && isFocused;

  const borderAndErrorClasses = clsx(
    "rounded-[15px]",
    {
      "w-[70px] h-[70px]": isCodeVariant,
      "w-full": !isCodeVariant,
    },
    {
      "bg-white": !isCodeVariant,
      "bg-disabled": isCodeVariant,
    },
    isCodeVariant && {
      "border-[2px] border-primary": error,
      "border-none": !error,
    },
    !isCodeVariant && {
      "border border-input-border": !error && !isFocused,
      "border-[2px] border-primary": error,
      "border-[1px] border-input-border": !error && isFocused && !disabled,
      "border-none": disabled,
      "hover:bg-input-hover": !error && !disabled && !isFocused,
    }
  );
  const inputClasses = clsx(
    " input-field w-full bg-transparent focus:outline-none !font-family-inter ",

    {
      "text-center text-[32px] font-semibold h-full": isCodeVariant,
      "px-[30px] text-[20px] leading-normal": !isCodeVariant,
      "pt-[20px] pb-[10px]": !isCodeVariant && isLabelFloating,
      "py-[14px]": !isCodeVariant && !isLabelFloating,
      "pr-[70px]": isPassword && !isCodeVariant,
    },

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

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const inputType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : rest.type || "text";

  return (
    <div className="relative w-full ">
      <div
        className={clsx(
          "relative rounded-[15px] w-full",
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
          type={inputType}
          {...rest}
        />

        {label && (
          <label htmlFor={name} className={labelClasses}>
            {label}
          </label>
        )}

        {isHintVisible && <div className={hintClasses}>{hint}</div>}

        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            disabled={disabled}
            className={clsx(
              "absolute right-[20px] top-1/2 -translate-y-1/2 p-2",
              "cursor-pointer disabled:cursor-not-allowed"
            )}
            aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
          >
            {showPassword ? (
              <img src={EyeOff} alt="Скрыть" className="w-6 h-6" />
            ) : (
              <img src={EyeOn} alt="Показать" className="w-6 h-6" />
            )}
          </button>
        )}
      </div>

      {error && !isCodeVariant && <p className={errorClasses}>{error}</p>}
    </div>
  );
};

export { Input };
