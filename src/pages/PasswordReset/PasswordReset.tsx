import { useState } from "react";
import { CodeStep, EmailStep, NewPasswordStep } from "./components";

export default function PasswordReset() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      {step === 1 && <EmailStep />}
      {step === 2 && <CodeStep />}
      {step === 3 && <NewPasswordStep />}
    </div>
  );
}