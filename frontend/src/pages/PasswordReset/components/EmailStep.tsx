import { Button, Input } from "@/components";
import type React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type EmailForm = {
  email: string;
};

type EmailStepProps = {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
};

export default function EmailStep({ setStep }: EmailStepProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EmailForm>({ mode: "onBlur" });

  const email = watch("email");

  const onSubmit: SubmitHandler<EmailForm> = (data) => {
    console.log(data.email);
    setStep(2);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[626px] px-[86px] pt-12 pb-[60px] bg-white rounded-[50px] shadow-lg relative"
    >
      <button className="absolute top-[30px] right-5 text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h2 className="text-[24px] text-black font-medium text-center my-10 ">
        Восстановление пароля
      </h2>

      <Input
        label="Email"
        value={email} 
        error={typeof errors.email?.message === "string" ? errors.email?.message : undefined}
        {...register("email", {
          required: "Введите email",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Введите корректный email",
          },
        })}
      />

      <p className="text-center text-[14px] text-black my-10 leading-[1.3] font-family-inter">
        Для восстановления пароля введите электронную почту
      </p>

      <div className="flex justify-center">
        <Button>Отправить</Button>
      </div>
    </form>
  );
}