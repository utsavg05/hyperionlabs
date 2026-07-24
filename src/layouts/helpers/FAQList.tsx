import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What does Hyperion Labs build?",
    answer:
      "Hyperion Labs builds enterprise software for inventory, order and delivery management, warehouses, fleets, and rentals—systems designed to run real operational workflows with clarity and control.",
  },
  {
    question: "Who is Hyperion Labs designed for?",
    answer:
      "We work with operators in logistics and supply chain, manufacturing, retail and e-commerce, fleet and transportation, warehousing and distribution, and equipment rentals who need durable systems at scale.",
  },
  {
    question: "Can Hyperion integrate with our existing stack?",
    answer:
      "Yes. Hyperion is built to fit into modern operational environments and can connect with ERPs, commerce platforms, and other systems through structured integrations and data exchanges. We’ll map the right approach during discovery.",
  },
  {
    question: "How long does a typical implementation take?",
    answer:
      "Timelines depend on scope, locations, and process complexity. Many teams start with a focused rollout for one product surface—such as inventory or fulfillment—then expand. We’ll share a clear plan after understanding your operations.",
  },
  {
    question: "Do you support multi-location and multi-warehouse operations?",
    answer:
      "Absolutely. Multi-node visibility, transfers, and location-level control are core to how Hyperion is designed—so stock, orders, and execution stay consistent across DCs, stores, dark stores, and field sites.",
  },
  {
    question: "Is Hyperion a good fit for fleet and rental businesses?",
    answer:
      "Yes. Our fleet and rental products are built for asset utilization, route and assignment control, availability calendars, contracts, and check-in/out workflows—not generic CRM-style tooling.",
  },
  {
    question: "How do you approach security and data ownership?",
    answer:
      "Your operational data remains yours. We follow enterprise security practices, access controls, and deployment patterns appropriate for production operations environments. Details are shared as part of onboarding.",
  },
  {
    question: "What support do we get after go-live?",
    answer:
      "We partner through rollout and beyond—with onboarding, operational guidance, and ongoing product support so your teams can adopt confidently and keep improving after launch.",
  },
];

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`faq-item${isOpen ? " is-open" : ""}`}
          >
            <button
              type="button"
              className="faq-trigger"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              id={`faq-trigger-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="faq-question">{item.question}</span>
              <span className="faq-icon" aria-hidden="true">
                <span className="faq-icon-h" />
                <span className="faq-icon-v" />
              </span>
            </button>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              className="faq-panel"
            >
              <div className="faq-panel-inner">
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
