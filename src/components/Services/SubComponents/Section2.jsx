import CardComponent from "./CardComponent"

const Section2 = ({obj}) => {
  return (
    <div className="w-[100%] relative bg-[#333] py-10 px-4 flex flex-col justify-center items-center">
    
    <div className="w-[92%] z-10 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 pt-[-80px] pb-6 gap-10 justify-center">
      {/* Card Component */}
      {
       obj && obj.map((card)=>(
        <CardComponent card={card} key={card.heading}/>
       ))
      }
    </div>
    <div className="left-0 top-[20%] absolute w-[300px] h-[300px] md:w-[410px] md:h-[410px] rounded-[87%_13%_48%_52%_/_70%_32%_68%_30%] z-0 bg-[#4158D0] bg-[linear-gradient(43deg,_#4158D0_0%,_#C850C0_46%,_#FFCC70_100%)] "></div>
  </div>
  )
}

export default Section2