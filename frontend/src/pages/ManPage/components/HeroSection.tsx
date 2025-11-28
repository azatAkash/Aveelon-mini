import StartImage from "@/assets/svg/main/startImage.svg";

const HeroSection = () => {
  return (
    <section
      className="
        w-full
        bg-white
        
        rounded-[24px]
        px-6 py-10

        flex flex-col md:flex-row
        items-center justify-between
        gap-8
      "
    >
      {/* ЛЕВАЯ ЧАСТЬ */}
      <div className="max-w-[480px]">
        <h1 className="text-[28px] md:text-[32px] font-semibold leading-[120%]">
          Aveelon <span className="text-[var(--color-primary)]">mini</span>
        </h1>

        <p className="mt-4 text-[16px] leading-[150%] text-[#2C2C2C]">
          Платформа для обучения, где собраны все ваши курсы, модули и задания
        </p>
      </div>

      {/* ПРАВАЯ ЧАСТЬ */}
      <div className="relative">
        <img
          src={StartImage}
          alt="Student with laptop"
          className="
            w-[260px]
            sm:w-[300px]
            md:w-[360px]
            lg:w-[420px]
            object-contain
          "
        />
      </div>
    </section>
  );
};

export default HeroSection;
