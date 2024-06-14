import React from "react";

const FDP = () => {
  const FDP_Features = [
    {
      id: 1,
      title: "Customized Training Modules",
      description:
        "Tailored programs covering modern teaching, advanced research techniques, and professional skills.",
    },
    {
      id: 2,
      title: "Expert-Led Workshops and Seminars",
      description:
        "Workshops and seminars by industry experts, providing practical insights and knowledge.",
    },
    {
      id: 3,
      title: "Cutting-Edge Technology Integration",
      description:
        "Equip faculty with the latest digital tools and platforms for effective teaching.",
    },
    {
      id: 4,
      title: "Research and Publication Support",
      description:
        "Comprehensive support for research, publishing, and grant writing.",
    },
    {
      id: 5,
      title: "Continuous Professional Development",
      description:
        "Ongoing learning opportunities like online courses, webinars, and mentorship programs.",
    },
    {
      id: 6,
      title: "Holistic Personal Growth",
      description:
        "Workshops on stress management, work-life balance, and ethical practices, emphasizing inclusivity.",
    },
  ];

  return (
    <main className="py-8">
      <div className="flex items-center flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl px-2">
          Faculty Development Program (FDP)
        </h2>

        <p className=" max-w-screen-lg text-gray-500 md:block px-4">
          At Greateway, we are dedicated to fostering academic excellence
          through our meticulously designed Faculty Development Programs (FDP).
          Our programs are tailored to enhance the teaching, research, and
          professional skills of faculty members, ensuring they are
          well-equipped to inspire and educate the next generation of leaders.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="flex flex-col md:flex-row">
          {/* <!-- can help image --> */}
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <img
              className=" md:w-full mx-auto"
              src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="can_help_banner"
            />
          </div>
          {/* <!-- end can help image --> */}

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mx-2">
            {FDP_Features.map((feat) => {
              return (
                <div key={feat?.id} className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-blue-900 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-4">
                      {feat?.title}
                    </h3>
                    <p className="text-sm">{feat?.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FDP;
