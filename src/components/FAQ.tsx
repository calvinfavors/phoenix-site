import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What Is the Average Timeline for Completing a Construction Project With Phoenix Construction, Inc.?',
      answer:
        'Project timelines vary depending on the scope and complexity of the work. A bathroom remodel typically takes 2-4 weeks, kitchen remodels 4-8 weeks, and custom home construction 6-12 months. During our initial consultation, we provide a detailed timeline specific to your project, and we commit to meeting agreed-upon deadlines while maintaining our high standards of quality.',
    },
    {
      question: 'Does Phoenix Construction, Inc. Offer Any Specialized Services or Expertise in Sustainable or Eco-Friendly Construction Practices?',
      answer:
        'Yes, we are committed to sustainable building practices. We offer eco-friendly options including energy-efficient materials, sustainable sourcing, water-saving fixtures, and green building techniques. Our team stays updated on the latest environmentally responsible construction methods and can help you make choices that reduce your environmental impact while maintaining quality and aesthetics.',
    },
    {
      question: 'Are There Any Additional Fees or Hidden Costs That Clients Should Be Aware of When Working With Phoenix Construction, Inc.?',
      answer:
        'Transparency is one of our core values. We provide detailed, itemized estimates upfront that include all anticipated costs. Any potential additional expenses are clearly communicated before work begins. If unexpected issues arise during the project, we discuss them with you immediately and get approval before proceeding with any work that would affect the budget.',
    },
    {
      question: 'Does Phoenix Construction, Inc. Provide Any Warranties or Guarantees on Their Workmanship or Materials Used in Construction Projects?',
      answer:
        'Absolutely. We stand behind our work with comprehensive warranties. Our workmanship is guaranteed, and we use high-quality materials that come with manufacturer warranties. The specific terms vary by project type, but we ensure all warranties are clearly outlined in your contract. We are committed to your satisfaction and will address any issues promptly and professionally.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our services and processes
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`text-red-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="tel:6784634893"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
