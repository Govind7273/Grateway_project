import CardComponent from "./CardComponent"

const Section2 = ({obj}) => {
  return (
    <div className="w-[100%] relative bg-[#333] flex flex-col justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#d1c2ed"
        fillOpacity="1"
        d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,85.3C672,96,768,160,864,181.3C960,203,1056,181,1152,192C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
    <div className="w-[92%] z-10 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 pt-[-80px] pb-6 gap-10 justify-center">
      {/* add the cards data by using the map to the array format */}
      {/* Card Component */}
      {
       obj && obj.map((card)=>(
        <CardComponent card={card} key={card.heading}/>
       ))
      }
      {/* <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent /> */}
    </div>
    <div className="left-0 top-[40%] absolute w-[300px] h-[300px] md:w-[410px] md:h-[410px] rounded-[87%_13%_48%_52%_/_70%_32%_68%_30%] z-0 bg-[#4158D0] bg-[linear-gradient(43deg,_#4158D0_0%,_#C850C0_46%,_#FFCC70_100%)] "></div>
  </div>
  )
}

export default Section2