import Stars from "./Stars";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Harhal Kharche",
      message:
        "Greatway Software is not just a workplace; it's a community where your ideas are heard, your skills are honed. Proud to be a part of a company that not only excels in its industry but also cares deeply about its most valuable asset.",
      stars: 5,
    },
    ,
    {
      id: 2,
      name: "Pankaj Bhagat",
      message:
        "Working at Greatway Software has been a rewarding experience. The dynamic work environment, focus on learning, and collaborative spirit make it an excellent place for professional growth. While there are areas for improvement",
      stars: 5,
    },
    {
      id: 3,
      name: "Prashik kambale",
      message:
        "My experience at Greatway Software India Pvt.Ltd was outstanding, thanks to its innovative culture, focus on employee development, and excellent work-life balance. Grateful for the enriching opportunities.",
      stars: 5,
    },
    {
      id: 4,
      name: "Shantanu Arvindekar",
      message:
        "Serving DevOps role at Greatway Software, thanks to its cooperative culture, focus on employee development, and excellent work balance. Grateful for the enriching opportunities and collaborative environment.",
      stars: 5,
    },
    {
      id: 5,
      name: "Amol",
      message:
        "Greatway Software fosters a vibrant company culture that values innovation. The work environment is dynamic, encouraging employees to bring their best ideas to the table, provides services in web development, Software development.",
      stars: 5,
    },
    {
      id: 6,
      name: "Vishnu Jadhav",
      message:
        "Greatway Software is recognized foe its good work culture and job stability. The organization provided me numerous opportunities to learn new things , to enhance my existing knowledge. That is all I felt.",
      stars: 5,
    },
  ];

  return (
    <main className="bg-gray-700 p-5 flex flex-col justify-center items-center min-h-lvh">
      <div className="flex p-5 justify-center text-white">
        <h1 className="text-4xl font-black">Review's</h1>
      </div>
      <div className="container flex flex-wrap justify-center items-center gap-5 bg-gray-700 p-6">
        {reviews.map((review) => (
          <div className="box" key={review.id}>
            <div className="body">
              <div className="front gap-10 rounded-tr-[53px] bg-[rgba(255,_255,_255,_0.06)] p-4">
                <h1 className="text-[2.5rem] font-bold text-violet-500 text-center">
                  {review.name}
                </h1>
                <Stars />
              </div>
              <div className="back flex justify-center items-center flex-col">
                <div className="">
                  <p className="text-sm">{review.message}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Testimonials;
