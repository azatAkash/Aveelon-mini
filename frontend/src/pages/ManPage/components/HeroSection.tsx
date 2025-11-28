import StartImage from "@/assets/svg/main/startImage.svg";

const HeroSection = () => {
  return (
    <section
      className="
        margin
        w-full
        bg-white
        
        rounded-[24px]
        px-16 

        flex flex-col md:flex-row
        items-center justify-between
        gap-8
      "
    >
      <div className="max-w-[480px]">
        <h1 className="text-[28px] md:text-[32px] font-semibold leading-[120%]">
          Aveelon <span className="text-[var(--color-primary)]">mini</span>
        </h1>

        <p className="mt-4 text-[16px] leading-[150%] text-[#2C2C2C]">
          Платформа для обучения, где собраны все ваши курсы, модули и задания
        </p>
      </div>

      <div className="relative">
        <img
          src={StartImage}
          alt="Student with laptop"
          className="
            w-[200px]
            sm:w-[260px]
            md:w-[300px]
            lg:w-[360px]
            object-contain
          "
        />
      </div>
    </section>
  );
};

export default HeroSection;
