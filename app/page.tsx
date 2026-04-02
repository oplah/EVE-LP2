import Image from "next/image";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import ChatFeature from "./components/ChatFeature";
import GoalFeature from "./components/GoalFeature";
import LearningFeature from "./components/LearningFeature";
import SmallFeatures from "./components/SmallFeatures";
import MemberStories from "./components/MemberStories";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="features">
      <Navigation />
      <Hero />
      <About />
      <ChatFeature />
      <GoalFeature />
      <LearningFeature />
      {/* Bridge image — equally between Learn deeper and Every detail sections */}
      <div className="bg-white py-10 md:py-14 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Image
            src="/img-everydetail.png"
            alt="Every detail, designed for you"
            width={1000}
            height={560}
            className="rounded-3xl w-full object-cover"
          />
        </div>
      </div>
      <SmallFeatures />
      <MemberStories />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
