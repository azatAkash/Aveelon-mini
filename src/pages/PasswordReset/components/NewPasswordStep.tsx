import { Button, Input } from "@/components";
import { useForm, Controller } from "react-hook-form";

export default function NewPasswordStep() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<{ password: string; confirm: string }>();

  const onSubmit = (data: { password: string; confirm: string }) => {
    console.log("Пароль принят:", data.password);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[626px] px-[86px] pt-10 pb-[60px] bg-white rounded-[50px] shadow-lg relative"
    >
      <h2 className="text-[24px] text-black font-medium text-center my-10">
        Восстановление пароля
      </h2>

      <div className="flex flex-col gap-5 mb-10">
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Введите пароль",
            minLength: { value: 6, message: "Минимум 6 символов" },
          }}
          render={({ field }) => (
            <Input
              variant="password"
              label="Введите Пароль"
              {...field}
              error={errors.password?.message}
            />
          )}
        />

        <Controller
          name="confirm"
          control={control}
          rules={{
            required: "Повторите пароль",
            validate: (val) =>
              val === getValues("password") || "Пароли не совпадают",
          }}
          render={({ field }) => (
            <Input
              variant="password"
              label="Повторите Пароль"
              {...field}
              error={errors.confirm?.message}
            />
          )}
        />
      </div>

      <div className="flex justify-center">
        <Button type="submit">Продолжить</Button>
      </div>
    </form>
  );
}