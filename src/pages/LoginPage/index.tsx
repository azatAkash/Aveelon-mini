import { Card } from "@/components/card";
// LoginScreen.tsx
import React, { useState } from "react";
import { Input } from "@/components/Input";
import { Button } from "@/components/ui";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setError("");

    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
      email
    );
    if (!isValidEmail) {
      setError("Please enter a valid email.");
      return;
    }

    console.log("Logging in with", email, password);

    setTimeout(() => {
      alert("Successfully logged in!");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card title="Вход">
        <div className="flex flex-col gap-[30px] items-center p-[30px_105px_90px_105px] ">
          <div className="flex flex-col gap-[20px]">
            <Input
              className="px-20 py-5"
              label="Введите телефон или email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error && !email ? "Email is required" : ""}
            />
            <Input
              className="px-20 py-5"
              label="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              error={error && !password ? "Password is required" : ""}
            />
          </div>
          <Button
            className=" w-[108px] h-[56px] pt-[10px] pr-[24px] pb-[10px] pl-[24px] gap-[10px] opacity-100 rounded-[15px]"
            onClick={handleLogin}
          >
            Войти
          </Button>

          <div className="flex flex-col gap-[20px]">
            <div className="mt-2 text-center p-0 m-0">
              <a
                href="#"
                className="font-inter font-normal text-[23px] leading-[140%] tracking-[0%] p-0 m-0 text-[var(--color-primary)]"
              >
                Забыли пароль?
              </a>
            </div>
            <div className="flex items-center text-[#868F95] font-inter font-normal text-[20px] leading-[150%]">
              Ещё нет аккаунта? /{" "}
              <a href="#" className="text-[var(--color-primary)]">
                Зарегистрироваться
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
