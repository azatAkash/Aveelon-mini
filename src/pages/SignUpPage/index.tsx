import { Card } from "@/components/card";
import React, { useState } from "react";
import { Input } from "@/components/Input";
import { Button } from "@/components/ui";

export const SignUpPage: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (!name || !phone || !email || !password || !repeatPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== repeatPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!agree) {
      setError("You must accept the privacy policy.");
      return;
    }

    console.log("Registration:", { name, phone, email, password });
    alert("Registration successful!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-20">
      <Card title="Регистрация">
        <div className="flex flex-col gap-[20px] items-center p-[30px_55px_40px_53px]">
          <div className="flex flex-col gap-[20px] w-[518px]">
            <Input
              label="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={error && !name ? "Required" : ""}
            />

            <Input
              label="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={error && !phone ? "Required" : ""}
            />

            <Input
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error && !email ? "Required" : ""}
            />

            <Input
              label="Пароль"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={error && !password ? "Required" : ""}
            />

            <Input
              label="Повторите пароль"
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              error={error && !repeatPassword ? "Required" : ""}
            />
          </div>

          <div className="flex flex-col items-center gap-[30px]">
            <div className="flex items-center gap-2 w-full text-[16px]">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="w-[18px] h-[18px]"
              />
              <span className="text-black font-inter text-[18px] leading-[140%]">
                Я ознакомился (-ась) с{" "}
                <a href="#" className="text-[var(--color-primary)] underline">
                  политикой конфиденциальности
                </a>
              </span>
            </div>

            {error && (
              <p className="text-[var(--color-primary)] text-[16px]">{error}</p>
            )}
            <div className="flex flex-col items-center gap-[52px]">
              <Button
                className={`w-[200px] h-[56px] rounded-[15px] text-[18px]`}
                onClick={handleRegister}
              >
                Продолжить
              </Button>

              <div className="text-center text-[20px] text-[#868F95] leading-[150%]">
                У вас есть аккаунт?{" "}
                <a href="#" className="text-[var(--color-primary)]">
                  Авторизоваться
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
