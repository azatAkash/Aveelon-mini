import { Link } from "react-router-dom";

import HomeIcon from "@/assets/svg/House_01.svg";
import MailIcon from "@/assets/svg/Mail.svg";
import MenuIcon from "@/assets/svg/Menu.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-white mt-auto">
      <div
        className="
          hidden md:flex
          w-full
          justify-center
          py-[24px]
        "
      >
        <div
          className="
            w-full
            max-w-[1920px]
            px-[80px]
            flex items-start justify-between
            text-[14px] md:text-[16px] lg:text-[20px]
            leading-[150%]
            text-black
          "
        >
          <div className="flex flex-col gap-2">
            <span className="text-[#868F95]">
              © 2025, Aveelon mini. Все права защищены.
            </span>

            <a href="#" className="hover:underline">
              Корпоративный сайт
            </a>
          </div>

          <div className="flex flex-col gap-2 text-right">
            <a href="#" className="hover:underline">
              Публичная оферта
            </a>

            <a href="#" className="hover:underline">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>

      <div
        className="
          flex md:hidden
          justify-center
          py-4
        "
      >
        <div
          className="
            w-full
            max-w-[375px]
            px-6
            flex items-center justify-between
          "
        >
          <Link to="/" aria-label="Home">
            <img src={HomeIcon} alt="Home" className="w-6 h-6" />
          </Link>

          <Link to="/contact" aria-label="Mail">
            <img src={MailIcon} alt="Mail" className="w-6 h-6" />
          </Link>

          <button type="button" aria-label="Menu">
            <img src={MenuIcon} alt="Menu" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
