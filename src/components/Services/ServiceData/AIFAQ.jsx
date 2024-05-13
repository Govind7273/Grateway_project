import React, { useState } from "react";

const AIMLFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "What is AI and ML, and why is it important for businesses?",
      answer:
        "AI (Artificial Intelligence) and ML (Machine Learning) use computer algorithms to simulate human-like intelligence and learn from data. They're important for businesses because they automate tasks, analyze data for insights, personalize experiences, predict outcomes, increase efficiency, provide a competitive edge, and reduce costs.",
    },
    {
      question: "What are the key benefits of using AI and ML?",
      answer:
        "key benefits of using AI and ML include automation, data analysis, personalization, predictive analytics, efficiency, competitive advantage, cost reduction, improved decision-making, scalability, and risk management.",
    },
    {
      question:
        "What are some common challenges associated with implementing AI and ML?",
      answer:
        "Common challenges associated with implementing AI and ML include data quality and quantity, lack of skilled talent, interpretability and bias concerns, integration with existing systems, cost and ROI, security and privacy, model maintenance, regulatory compliance, and cultural resistance.",
    },
    {
      question:
        "How can businesses measure the success of their AI and ML Initiatives?",
      answer:
        "Businesses can measure the success of their AI and ML initiatives through metrics such as accuracy, ROI, customer satisfaction, time savings, business impact, risk reduction, data quality, employee productivity, innovation, competitive advantage, and regulatory compliance.",
    },
  ];

  return (
    <>
      {/* Faq section */}
      <section data-aos="zoom-in" className="w-[100vw] py-10">
        <div className="relative w-full bg-white md:px-6 px-4 pt-10 md:pb-8 pb-4  shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
          <div className="mx-auto md:px-5 px-2">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-extrabold text-blue-700">FAQ</h2>
              <p className="mt-3 text-xl font-bold ">
                Frequently asked questions
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-5">
                  <details className="group">
                    <summary
                      onClick={() => toggleFAQ(index)}
                      className="flex cursor-pointer list-none items-center justify-between font-medium"
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`transition ${
                          openIndex === index ? "group-open:rotate-180" : ""
                        }`}
                      >
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    {openIndex === index && (
                      <p className="group-open:animate-fadeIn mt-3 text-gray1">
                        {faq.answer}
                      </p>
                    )}
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIMLFaq;
