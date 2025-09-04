import AboutUs from "./components/aboutUs";
import Benefits from "./components/Benifits";
import ChooseSegments from "./components/ChooseSegment";
import Hero from "./components/Hero";
import RepresentativeLevels from "./components/ReresentativeBenifits";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-yellow-900 font-sans">
      {/* Hero Section */}
      <Hero />
      {/* <AboutUs /> */}
      <Benefits />
      <RepresentativeLevels />
      <ChooseSegments />


    </main>
  );
}
