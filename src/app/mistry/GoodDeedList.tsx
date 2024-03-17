import { Meteors } from "@/components/ui/meteors"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import Link from "next/link"
import GoodDeedCard from "./GoodDeedCard"

const GoodDeedList = () => {
  const words = [
    {
      text: 'Some'
    },
    {
      text: ' Good'
    },
    {
      text: " Deed's"
    },
    {
      text: ' List'
    },
  ]
  return (
    <div className="mt-20 max-w-7xl mx-auto">
      <div>
        <TypewriterEffect words={words}/>
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:mt-20 mt-40    ">
    <GoodDeedCard
    title="Saying Salam"
    paragraph="He who says Assalaamu Alaikum  ten rewards are written down for him, and he who says Assalaamu Alaikum wa rahmatullah  for him twenty rewards are written down and he who says Assalaamu Alaikum wa rahmatullahi wa barakatuh thirty rewards are written down (for him)."
    href="https://www.hadithbd.com/"
    />
    <GoodDeedCard
    title="Removing Harm from the Way"
    paragraph=" Bringing about justice between two is an act of charity.  A good word is a charitable act. Every step you take toward the prayer is a charitable act. And removing a harmful thing from the path is a charitable act. (Recorded in al-Bukhari and Muslim)"
    href="https://ihadis.com/"
    />
    <GoodDeedCard
    title="Visiting the Sick"
    paragraph="If a man visits a sick, it is as if he walks reaping the fruits of Paradise until he sits, and when he sits he is showered in mercy, and if this was in the morning, 70,000 angels pray for him until the evening, and if this was in the evening, 70,000 angels pray for him until the morning. "
    href="https://www.islamicboisomahar.in/"
    />
   
   
    </div>
    </div>
  )
}

export default GoodDeedList