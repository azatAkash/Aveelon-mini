import { useState } from "react"

import { EmailStepUI, OtpStepUI } from "@/components";
import { SuccessMessage } from "./components/SuccessMessage";

export default function AccountRecovery(){
    const [step, setStep] = useState<1|2|3|4>(1);
    return(
        <div className="min-h-screen flex items-center justify-center">
            {
                step === 1 && (
                    <EmailStepUI title="Восстановление аккаунта" description="Для восстановления аккаунта введите почту"  onSubmit={() =>{
                        setStep(2)
                    }}/>
                )
            }
            {
                step === 2 && (
                    <OtpStepUI title="На вашу почту test@mail.com отправлен код подтверждения" buttonText="Продолжить" onSubmit={() =>{
                        setStep(3)
                    }}
                    onResend={() =>console.log("resend")}
                    />
                )
            }
            {
                step === 3 && (
                    <SuccessMessage/>
                )
            }
        </div>
    )
}