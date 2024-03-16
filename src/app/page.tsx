import Books from "@/components/Books";
import DarkModeToggle from "@/components/DarkModeToggle";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Scholars from "@/components/Scholars";
import Services from "@/components/Services";
import { TracingBeam } from "@/components/ui/tracing-beam";



export default function Home() {
  return (
  <main className="bg-slate-950 text-white space-y-10">
    <TracingBeam>
      {/* <DarkModeToggle/> */}
    <Navbar/>
    <Hero/>
    <Services/>
    <Scholars/>
    <Books/>
    {/* <BackgroundBeams>
    </BackgroundBeams> */}
    </TracingBeam>
   
  </main>
  );
}
