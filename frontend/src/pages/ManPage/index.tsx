import { CourseCard } from "./components/CourseCard";
import HeroSection from "./components/HeroSection";

const mockCourses = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: "Математика - физика",
  reviewsCount: 22,
  price: "3 768 AED",
  duration: "6 месяцев",
}));

export const MainPage: React.FC = () => {
  return (
    <div className="h-full mx-auto px-4 md:px-8 lg:px-[80px] pt-10 pb-16 flex flex-col">
      <HeroSection />

      <section className="mt-12 flex-1 overflow-y-auto">
        <h2 className="text-[26px] md:text-[30px] font-semibold text-center mb-8">
          Курсы
        </h2>

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-4 pr-4">
          {mockCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              reviewsCount={course.reviewsCount}
              price={course.price}
              duration={course.duration}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainPage;
