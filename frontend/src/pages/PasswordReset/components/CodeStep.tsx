import { Button, Input } from "@/components";
import { useState, useEffect } from "react";

type CodeStepProps = {
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
};

export default function CodeStep({ setStep }: CodeStepProps) {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const canResend = timer === 0;

  const [error, setError] = useState("");

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const val = e.target.value;

    if (/^\d?$/.test(val)) {
      const newCode = [...code];
      newCode[index] = val;
      setCode(newCode);

      if (error) setError("");

      if (val && index < 3) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleResend = () => {
    setTimer(30);
    setError("");
    setCode(["", "", "", ""]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const isCodeComplete = code.every((digit) => digit !== "");

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[626px] px-[86px] pt-10 pb-[60px] bg-white rounded-[50px] shadow-lg relative"
    >
      <button type="button" className="absolute top-[30px] right-5 text-black">
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

      <h2 className="text-[28px] text-black font-medium leading-[1.3] text-center mb-10">
        На вашу электронную почту test@gmail.com отправлен код подтверждения
      </h2>

      <div className="flex justify-between gap-10 my-6 px-7">
        {code.map((num, idx) => (
          <Input
            key={idx}
            id={`code-${idx}`}
            variant="code"
            value={num}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            name={`code-${idx}`}
            maxLength={1}
            error={error ? " " : undefined}
          />
        ))}
      </div>

      {error && (
        <p className="text-[14px] font-normal font-family-inter leading-[1.3] text-primary text-center mb-2">
          {error}
        </p>
      )}

      {!canResend && !error && (
        <p className="text-[14px] font-normal font-family-inter leading-[1.3] text-input-border text-center mb-2">
          Запросить код повторно можно через {timer} секунд
        </p>
      )}

      {(canResend || error) && (
        <button
          type="button"
          onClick={handleResend}
          className={`font-family-inter leading-[1.3] underline text-center text-black block mx-auto mb-2 ${
            error ? "text-[14px] font-normal" : "text-[20px] font-normal"
          }`}
        >
          Отправить код повторно
        </button>
      )}

      {!canResend && !error && (
        <p className="text-[14px] font-normal font-family-inter leading-[1.3] text-primary text-center mb-6">
          Нужна помощь?
        </p>
      )}

      {(canResend || error) && <div className="mb-6"></div>}

      <div className="flex justify-center">
        <Button disabled={!isCodeComplete}>Зарегистрироваться</Button>
      </div>
    </form>
  );
}
