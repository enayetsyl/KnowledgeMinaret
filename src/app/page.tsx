import Books from "@/components/Books";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Quran from "@/components/Quran";
import Scholars from "@/components/Scholars";
import Services from "@/components/Services";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white ">
      <TracingBeam>
        <Navbar />
        <Hero />
        <Services />
        <Scholars />
        <Books />
        <Quran />
      </TracingBeam>
      <Footer />
    </main>
  );
}
