import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Lumora?",
      answer:
        "Lumora is an AI-powered evidence investigation platform that helps users investigate claims, images, and videos by exploring relevant information and evidence.",
    },
    {
      question: "Can Lumora analyze images and videos?",
      answer:
        "Yes. Lumora is designed to support text claims, images, and videos so users can investigate different types of information they encounter online.",
    },
    {
      question: "Does Lumora simply say whether something is true or fake?",
      answer:
        "No. Lumora goes beyond a simple true-or-fake answer. It provides evidence, sources, reasoning, and a credibility score to help users understand the result.",
    },
    {
      question: "Where does the evidence come from?",
      answer:
        "Lumora investigates relevant information from available sources and presents the supporting evidence and source information to help users understand the investigation.",
    },
    {
      question: "Who can use Lumora?",
      answer:
        "Lumora is designed for social media users, students, researchers, and anyone who wants to understand whether information they encounter online is credible.",
    },
  ];

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="faq">

      <div className="faq-header">

        <p className="section-tag">
          💭 Questions & Answers
        </p>

        <h2>
          Curious About Lumora?
        </h2>

        <p className="section-description">
          Here are some answers to common questions
          about how Lumora works.
        </p>

      </div>

      <div className="faq-container">

        {faqs.map((faq, index) => (

          <div
            className={`faq-item ${
              openIndex === index ? "open" : ""
            }`}
            key={faq.question}
          >

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >

              <span>
                {faq.question}
              </span>

              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>

            </button>

            {openIndex === index && (

              <div className="faq-answer">

                <p>
                  {faq.answer}
                </p>

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;