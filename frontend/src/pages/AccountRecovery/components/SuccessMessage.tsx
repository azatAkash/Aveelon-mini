import { Button } from "@/components";
import { Link } from "react-router-dom";

export function SuccessMessage() {
  return (
    <div className="w-full max-w-lg px-[51px] pt-12 pb-[60px] bg-white rounded-[50px] shadow-lg relative">
      <button className="absolute top-[50px] right-[50px]  text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-black text-[24px] font-medium leading-[1.3] text-center my-[30px]">
        Ваш аккаунт успешно восстановлен{" "}
      </h2>
      <div className="flex justify-center">
        <Link to="/login">
          <Button className="min-w-[150px] max-w-[206px] w-full">Войти</Button>
        </Link>
      </div>
    </div>
  );
}
