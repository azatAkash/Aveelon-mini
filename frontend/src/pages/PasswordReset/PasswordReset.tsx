import { useState } from "react";
import { NewPasswordStep } from "./components";
import { EmailStepUI, OtpStepUI } from "@/components";

export default function PasswordReset() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      {step === 1 && (
        <EmailStepUI
          title="Восстановление пароля"
          description="Введите вашу почту для восстановления пароля"
          onSubmit={() => {
            setStep(2);
          }}
        />
      )}
      {step === 2 && (
        <OtpStepUI
          title="На вашу почту test@mail.com отправлен код подтверждения"
          buttonText="Зарегистрироваться"
          onSubmit={() => {
            setStep(3)
          }}
          onResend={() => console.log("resend")}
        />
      )}
      {step === 3 && <NewPasswordStep />}
    </div>
  );
}
