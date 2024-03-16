import DarkModeToggle from "@/components/DarkModeToggle";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Scholars from "@/components/Scholars";
import Services from "@/components/Services";
import { TracingBeam } from "@/components/ui/tracing-beam";



export default function Home() {
  return (
  <main className="bg-slate-950 text-white scroll-py-10">
    <TracingBeam>
      {/* <DarkModeToggle/> */}
    {/* <h1 >Hello world</h1> */}
    <Navbar/>
    <Hero/>
    <Services/>
    <Scholars/>
    {/* <BackgroundBeams>
    </BackgroundBeams> */}
    </TracingBeam>
   
  </main>
  );
}
