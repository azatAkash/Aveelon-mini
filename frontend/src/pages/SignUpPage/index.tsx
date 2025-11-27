import { Card } from "@/components/card";
import { Input } from "@/components/Input";
import { Button } from "@/components/ui";
import { useForm, type SubmitHandler, type FieldValues } from "react-hook-form";
import { useState } from "react";

export const SignUpPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FieldValues>();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const isFormReady = !!name && !!phone && !!email && agree;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { name, phone, email, password, repeatPassword, agree } = data;

    if (password !== repeatPassword) {
      setError("repeatPassword", {
        type: "manual",
        message: "Пароли не совпадают.",
      });
      return;
    }

    if (!agree) {
      setError("agree", {
        type: "manual",
        message: "Вы должны принять политику конфиденциальности.",
      });
      return;
    }

    console.log("Registration:", { name, phone, email, password });
    alert("Регистрация успешна!");
  };

  const getErrorMessage = (fieldName: string) => {
    return (errors[fieldName]?.message as string) || "";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card title="Регистрация">
        <form
          className="flex flex-col gap-[20px] items-center p-[65px_53px_45px_55px] relative box-border"
          onSubmit={handleSubmit(onSubmit)}
        >
          <button type="button" className="absolute top-10 right-5 text-black">
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
          <h2 className="text-[24px] text-black font-medium text-center leading-[130%] pb-[20px]">
            Регистрация
          </h2>

          <div className="flex flex-col gap-[20px] w-[518px]">
            <Input
              label="Имя"
              {...register("name", {
                required: "Имя обязательно для заполнения",
                onChange: (e) => setName(e.target.value),
              })}
              error={getErrorMessage("name")}
            />

            <Input
              label="Телефон"
              {...register("phone", {
                required: "Телефон обязателен для заполнения",
                onChange: (e) => setPhone(e.target.value),
              })}
              error={getErrorMessage("phone")}
            />

            <Input
              label="Email"
              {...register("email", {
                required: "Email обязателен для заполнения",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Введите корректный email",
                },
                onChange: (e) => setEmail(e.target.value),
              })}
              error={getErrorMessage("email")}
            />

            <Input
              label="Пароль"
              type="password"
              {...register("password", {
                required: "Пароль обязателен для заполнения",
              })}
              error={getErrorMessage("password")}
              variant="password"
            />

            <Input
              label="Повторите пароль"
              type="password"
              variant="password"
              {...register("repeatPassword", {
                required: "Повторите пароль",
              })}
              error={getErrorMessage("repeatPassword")}
            />
          </div>

          <div className="flex flex-col items-center gap-[30px]">
            <div className="flex items-center gap-2 w-full text-[16px]">
              <input
                type="checkbox"
                {...register("agree", {
                  required: "Вы должны принять политику конфиденциальности",
                  onChange: (e) => setAgree(e.target.checked),
                })}
                className="w-[18px] h-[18px]"
              />
              <span className="text-black font-inter text-[14px] leading-[140%]">
                Я ознакомился (-ась) с{" "}
                <a href="#" className="text-[var(--color-primary)] underline">
                  политикой конфиденциальности
                </a>
              </span>
            </div>

            {errors.agree && (
              <p className="text-[var(--color-primary)] text-[16px]">
                {String(errors.agree.message)}
              </p>
            )}

            {errors.password && (
              <p className="text-[var(--color-primary)] text-[16px]">
                {String(errors.password.message)}
              </p>
            )}

            <div className="flex flex-col items-center gap-[52px]">
              <Button
                className={`w-[200px] h-[56px] rounded-[15px] text-[18px]`}
                type="submit"
                disabled={!isFormReady}
              >
                Продолжить
              </Button>

              <div className="text-center text-[20px] text-[#868F95] leading-[150%]">
                У вас есть аккаунт?{" "}
                <a href="/login" className="text-[var(--color-primary)]">
                  Авторизоваться
                </a>
              </div>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignUpPage;
