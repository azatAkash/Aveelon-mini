import { Button, Input } from "@/components";

export default function EmailStep() {
  return (
    
    <div className="w-full max-w-[626px] px-[86px] pt-12 pb-[60px] bg-white rounded-[50px] shadow-lg relative">
      <button className="absolute top-[30px] right-[20px] text-black">
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

      <h2 className="text-[24px] text-black font-medium text-center my-10 ">
        Восстановление пароля
      </h2>

     
      <Input placeholder="Введите email" name="email" />

      <p className="text-center text-[14px] text-black my-10 leading-[1.3] font-family-inter">
        Для восстановления пароля введите электронную почту
      </p>

      <div className="flex justify-center">
        <Button>Отправить</Button>
      </div>
    </div>
  );
}
