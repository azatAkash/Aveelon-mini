import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSwitch from "@/components/languageSwitch";

import Logo from "@/assets/svg/header/Logo.svg";
import Profile from "@/assets/svg/header/Icon_profile.svg";

type HeaderProps = {
  isAuthenticated?: boolean;
};

const Header: React.FC<HeaderProps> = ({ isAuthenticated = false }) => {
  const { t } = useTranslation();

  return (
    <header className="w-full bg-white">
      <div
        className="
          mx-auto w-full
          flex items-center justify-between
          h-[56px] sm:h-[64px] md:h-[72px] lg:h-[80px]  
          px-4 sm:px-6 md:px-10 lg:px-[80px]      
          max-w-[1920px]
        "
      >
        <div className="flex items-center">
          <Link to="/" aria-label="Go to home">
            <img
              src={Logo}
              alt="Aveelon mini"
              className="
        h-[24px] w-auto          
        sm:h-[28px]
        md:h-[36px]
        lg:h-[48px]
        cursor-pointer
      "
            />
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          {!isAuthenticated && (
            <Link to="/login" aria-label="Go to login">
              <button
                type="button"
                className="
                
                items-center justify-center
                h-[40px] lg:h-[48px]
                px-[20px] lg:px-[24px]
                rounded-[15px]
                border border-[var(--color-primary)]
                text-[14px] md:text-[15px] lg:text-[16px]
                leading-[140%]
                text-[var(--color-primary)]
                hover:bg-[rgba(255,81,81,0.04)]
                transition
                cursor-pointer
              "
              >
                {t("header.login", "Войти")}
              </button>
            </Link>
          )}

          <LanguageSwitch />

          {isAuthenticated && (
            <img
              src={Profile}
              alt="profile icon"
              className="
              h-[36px] w-auto          
              sm:h-[28px]
              md:h-[36px]
              lg:h-[48px]       
              cursor-pointer   
            "
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
