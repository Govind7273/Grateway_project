import Stars from "./Stars";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Harhal Kharche",
      message:"Greatway Software is not just a workplace; it's a community where your ideas are heard, your skills are honed. Proud to be a part of a company that not only excels in its industry but also cares deeply about its most valuable asset.",
      stars: 5,
    },
    ,
    {
      id: 2,
      name: "Pankaj Bhagat",
      message: "Working at Greatway Software has been a rewarding experience. The dynamic work environment, focus on learning, and collaborative spirit make it an excellent place for professional growth. While there are areas for improvement",
      stars: 5,
    },
    {
      id: 3,
      name: "Prashik kambale",
      message:"My experience at Greatway Software India Pvt.Ltd was outstanding, thanks to its innovative culture, focus on employee development, and excellent work-life balance. Grateful for the enriching opportunities.",
      stars: 5,
    },
    {
      id: 4,
      name: "Shantanu Arvindekar",
      message: "Serving DevOps role at Greatway Software, thanks to its cooperative culture, focus on employee development, and excellent work balance. Grateful for the enriching opportunities and collaborative environment.",
      stars: 5,
    },
    {
      id: 5,
      name: "Amol",
      message:"Greatway Software fosters a vibrant company culture that values innovation. The work environment is dynamic, encouraging employees to bring their best ideas to the table, provides services in web development, Software development.",
      stars: 5,
    },
    {
      id: 6,
      name: "Vishnu Jadhav",
      message:"Greatway Software is recognized foe its good work culture and job stability. The organization provided me numerous opportunities to learn new things , to enhance my existing knowledge. That is all I felt.",
      stars: 5,
    },
  ];

  return (
    <main className="bg-gray-700 p-5">
      <div className="flex p-5 justify-center text-white">
        <h1 className="text-4xl font-black">Review's</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 bg-gray-700 p-6">
        {reviews.map((review) => {
          return (
            <div
              key={review.id}
              className="flex max-w-md flex-col overflow-hidden rounded-lg shadow-xl transition transform hover:scale-105 ease-in-out duration-300"
            >
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <Stars />
                <blockquote className="flex-1">
                  <p className="text-lg leading-relaxed text-gray-900">
                    “{review.message}”
                  </p>
                </blockquote>

                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="text-base font-bold text-gray-900">
                      {review.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Testimonials;
