import { Helmet } from "react-helmet-async";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-[10px] shadow-lg shadow-violet-500">
      <img src={image} alt={title} className="mb-4 rounded-t-[10px]" />
      <h2 className="text-xl font-semibold mb-4 px-6">{title}</h2>
      <p className="text-gray-700 mb-4 px-6">{description}</p>
    </div>
  );
};
const ServicesStaffing = ({Meta_Data}) => {
  const { Title, Description, Link } = Meta_Data;

  return (
    <>
    <Helmet>
        <title>{Title}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Link} />
      </Helmet>

    <section className="w-[100vw] relative overflow-x-hidden pt-0 bg-black">
      {/* First Section */}
      <div className="w-full relative flex flex-wrap justify-center items-center bg-gray-100 min-h-screen">
        <span className="absolute w-[200px]  h-[100px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-violet-600 to-cyan-300 md:top-32 top-14 right-10 md:left-10 rounded-[10px] md:rounded-[0%_100%_31%_69%_/_46%_42%_58%_54%] flex justify-center items-center font-headingFont text-[5rem] z-10">
          &#x1F3C6;
        </span>
        {/* Left */}
        <div className="absolute md:bottom-0 bottom-10 z-10 w-4/5 md:w-3/5 lg:w-2/5 p-8 bg-white shadow-lg rounded-[10px]">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
            IT Staffing Services
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            "Transform your IT landscape with our bespoke staffing solutions. We
            meticulously match your needs with top-notch talent, ensuring
            seamless project execution. Let us elevate your workforce, driving
            innovation and success in a rapidly evolving technological
            landscape."
          </p>
        </div>

        {/* Right */}
        <img
          className=" absolute right-0  md:w-1/2 md:h-[80vh] h-full w-full   object-cover"
          src="https://img.freepik.com/free-photo/programming-background-concept_23-2150170134.jpg?t=st=1709556007~exp=1709559607~hmac=ae084e82d4402819764b413586cde32cedbe659f6adc3250f3df6d0d21ce2732&w=740"
          alt="IT Staffing Image"
        />
      </div>

      {/* second section */}
      <div className="bg-gray-100  min-h-screen py-20">
        <div className="container mx-auto">
          <h1 className="text-[3rem] text-violet-900 text-center font-bold font-headingFont mb-8 capitalize">
            What we offers in IT staffing?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Temporary Staffing"
              description="Quickly fill short-term positions with skilled IT professionals."
              image="https://img.freepik.com/free-photo/man-holding-clipboard-work-with-join-our-team-message_23-2148985541.jpg?t=st=1709555241~exp=1709558841~hmac=d10aa0118ec5eb19a15160af1f52a2ca57f6eed895f6c8f4b00d3e9a37f73d6c&w=740"
            />
            <ServiceCard
              title="Permanent Placement"
              description="Find the right IT talent for your organization's long-term needs."
              image="https://img.freepik.com/free-photo/young-men-working-office_23-2147785027.jpg?t=st=1709555308~exp=1709558908~hmac=27ecd7f293dab3baa5f23fb9156b6b45c6e21794b5439349ded6d5d77c91801e&w=740"
            />
            <ServiceCard
              title="Contract-to-Hire"
              description="Assess candidates before making a permanent commitment."
              image="https://img.freepik.com/free-photo/handshake-close-up-executives_1098-1384.jpg?t=st=1709555582~exp=1709559182~hmac=2b756d7c65b07477db97270b96938277db02e65ecf3c85b1314969cbf38896ea&w=740"
            />
          </div>
        </div>
      </div>


      {/* Third Section */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 border-b border-slate-400 bg-gray-200">
           {/* left */}
           <div className="col-span-2 flex flex-col justify-center px-10 gap-5">
            <h1 className="text-3xl font-headingFont font-bold text-violet-700">Executive Search</h1>
            <p className="text-md font-navlistFont text-violet-700">We assist in identifying and recruiting senior-level executives and leaders who possess the expertise and vision to drive your organization forward. Our executive search services focus on finding exceptional talent that aligns with your strategic goals.</p>
           </div>

           {/* Right */}
           <div className="col-span-1 p-8">
              <img src="https://img.freepik.com/free-photo/man-sits-dark-room-front-blank-laptop-screen_169016-48879.jpg?t=st=1709558796~exp=1709562396~hmac=77e756c610e7e0de1bc30619b6380b2064c82a7dec915af251efc9bc118eaad6&w=740" alt="" />
           </div>
      </div>

     
{/* Fourth section */}
<div className="grid md:grid-cols-2 grid-cols-1 gap-8 bg-gray-200">
           {/* left */}
           <div className="col-span-1 p-8">
              <img src="https://img.freepik.com/free-photo/smart-businesswoman-working-her-laptop_23-2148452634.jpg?t=st=1709558988~exp=1709562588~hmac=88111036d9f0476f616313d4daac176c2275550f41dbd5158b46172a33d40aea&w=740" alt="" />
           </div>
          

           {/* Right */}
           <div className="col-span-1 flex flex-col justify-center px-10 gap-5">
            <h1 className="text-3xl font-headingFont font-bold text-violet-700">Managed Services</h1>
            <p className="text-md font-navlistFont text-violet-700">We offer managed staffing solutions to handle the entire staffing process, from recruitment and onboarding to performance management and retention. Our managed services ensure a streamlined and efficient staffing experience for your organization.</p>
           </div>
      </div>
    </section>
    </>
  );
};

export default ServicesStaffing;
