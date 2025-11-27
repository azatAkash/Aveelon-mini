import { Button, Input } from "@/components";
import { useState, useEffect } from "react";

type OtpStepUIProps = {
  title: string;
  onSubmit: (code: string) => void;
  onResend: () => void;
  buttonText?: string;
  email?: string;
};

export function OtpStepUI({
  title,
  onSubmit,
  onResend,
  buttonText = "Продолжить",
  email,
}: OtpStepUIProps) {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState("");

  const canResend = timer === 0;
  const isComplete = code.every((d) => d !== "");

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const v = e.target.value;
    if (/^\d?$/.test(v)) {
      const updated = [...code];
      updated[idx] = v;
      setCode(updated);
      if (error) setError("");
      if (v && idx < 3) {
        const next = document.getElementById(`code-${idx + 1}`);
        next?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace" && !code[idx] && idx > 0) {
      const prev = document.getElementById(`code-${idx - 1}`);
      prev?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isComplete) onSubmit(code.join(""));
    else setError("Введите код полностью");
  };

  const handleResendClick = () => {
    setTimer(30);
    setError("");
    setCode(["", "", "", ""]);
    onResend();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[626px] px-[86px] pt-10 pb-[60px] bg-white rounded-[50px] shadow-lg relative"
    >
      <h2 className="text-[28px] text-black font-medium leading-[1.3] text-center mb-10">
        {title.replace("{email}", email ?? "")}
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
          onClick={handleResendClick}
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
        <Button disabled={!isComplete}>{buttonText}</Button>
      </div>
    </form>
  );
}

export default { OtpStepUI };
