import CardComponent from "./CardComponent"
import { AiOutlineAlignRight } from "react-icons/ai";

const Section2 = ({ obj }) => {
  return (
    <div
      id="section2"
      className="w-[100%] h-full relative flex md:py-24 pt-10 pb-28 px-10">
      <div className="hidden md:flex absolute -rotate-90 md:mt-[-220px] mt-[-100px] ml-14 z-0 md:text-[180px] text-[100px] text-blue-900"><AiOutlineAlignRight /></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1  items-center justify-center gap-10 z-10 pb-6">
        {/* Card Component */}
        {
          obj && obj.map((card) => (
            <CardComponent card={card} key={card.heading} />
          ))
        }
      </div>
    </div>
  )
}

export default Section2