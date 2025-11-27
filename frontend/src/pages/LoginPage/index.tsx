import { Card } from "@/components/card";
import { Input } from "@/components/Input";
import { Button } from "@/components/ui";
import { useForm, type SubmitHandler, type FieldValues } from "react-hook-form";
import { useState } from "react";

export const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FieldValues>({
    mode: "onChange",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAnyFieldFilled = !!email || !!password;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { email, password } = data;

    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
      email
    );
    if (!isValidEmail) {
      setError("email", {
        type: "manual",
        message: "Please enter a valid email.",
      });
      return;
    }

    console.log("Logging in with", email, password);

    setTimeout(() => {
      alert("Successfully logged in!");
    }, 500);
  };

  const getErrorMessage = (fieldName: string) => {
    return (errors[fieldName]?.message as string) || "";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card title="Вход">
        <form
          className="flex flex-col gap-[30px] items-center p-[105px_120px_100px_120px] relative box-border"
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
          <h2 className="text-[24px] text-black font-medium text-center leading-[130%]">
            Вход
          </h2>
          <div className="flex flex-col gap-[20px] items-center">
            <Input
              label="Введите телефон или email"
              {...register("email", {
                required: "Email is required",
                onChange: (e) => setEmail(e.target.value),
              })}
              error={getErrorMessage("email")}
            />
            <Input
              label="Пароль"
              {...register("password", {
                required: "Password is required",
                 onChange: (e) => setPassword(e.target.value),
              })}
              variant="password"
              error={getErrorMessage("password")}
            />
          </div>

          <Button
            className=" w-[108px] h-[56px] pt-[10px] pr-[24px] pb-[10px] pl-[24px] gap-[10px] opacity-100 rounded-[15px]"
            type="submit"
            disabled={!isAnyFieldFilled}
          >
            Войти
          </Button>

          <div className="flex flex-col gap-[20px]">
            <div className="text-center">
              <a
                href="#"
                className="font-inter font-normal text-[23px] leading-[140%] tracking-[0%] p-0 m-0 text-[var(--color-primary)]"
              >
                Забыли пароль?
              </a>
            </div>
            <div className="flex items-center text-[#868F95] font-inter font-normal text-[20px] leading-[150%]">
              Ещё нет аккаунта? /{" "}
              <a href="/sign-up" className="text-[var(--color-primary)]">
                Зарегистрироваться
              </a>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
