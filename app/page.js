import Hero from "./components/Hero";
import CWith from "./components/CWith";
import ResponsiveCards from "./components/ResponsiveCards";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";

export default function Home() {
  return (
    <div className="px-3 md:px-10 bg-black " >
      <Hero />
      <ResponsiveCards />
      <CWith />
      <Testimonials />
      <FAQs />
    </div>
  );
}
