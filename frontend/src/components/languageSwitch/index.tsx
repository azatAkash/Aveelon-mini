import { useTranslation } from "react-i18next";
import { useState } from "react";
import Vector from "@/assets/svg/Vector.svg";

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "ru", label: "Ру" },
    { code: "en", label: "En" },
  ];

  const current =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const handleChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center gap-[6px] cursor-pointer select-none"
        onClick={() => setIsOpen((o) => !o)}
      >
        <span className="text-[16px] leading-[140%] text-black">
          {current.label}
        </span>

        <img
          src={Vector}
          alt="arrow"
          className={`w-[10px] h-[6px] transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded-[8px] shadow-md py-2 z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleChange(lang.code)}
              className="
                px-4 py-1 w-full text-left
                text-[14px] leading-[140%]
                hover:bg-gray-100
              "
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
