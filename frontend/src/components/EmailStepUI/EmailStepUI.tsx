import { Button, Input } from "@/components";
import { useForm, useWatch } from "react-hook-form";

type EmailStepUIProps = {
  title: string;
  description: string;
  onSubmit: (email: string) => void;
};

export function EmailStepUI({
  title,
  description,
  onSubmit,
}: EmailStepUIProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{ email: string }>({ mode: "onBlur" });

  const email = useWatch({ control, name: "email" });

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data.email))}
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-[24px] font-medium text-center my-10">{title}</h2>

      <Input
        label="Email"
        value={email}
        error={errors.email?.message}
        {...register("email", {
          required: "Введите email",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Введите корректный email",
          },
        })}
      />

      <p className="text-center text-[14px] my-10 font-family-inter">{description}</p>

      <div className="flex justify-center">
        <Button>Отправить</Button>
      </div>
    </form>
  );
}

export default { EmailStepUI };
