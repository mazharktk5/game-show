import Benefits from "./components/Benifits";
import ChooseSegments from "./components/ChooseSegment";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 font-sans">
      {/* Hero Section */}
      <Hero />
      <ChooseSegments />
      <Benefits />


    </main>
  );
}
