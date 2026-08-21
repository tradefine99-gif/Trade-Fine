import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer: "We offer flexible MOQ depending on the product type and customization requirements. Generally, our MOQs are designed to accommodate both scaling startups and established international brands."
    },
    {
      question: "Do you provide OEM & ODM manufacturing?",
      answer: "Yes. We specialize in OEM (Original Equipment Manufacturing), ODM (Original Design Manufacturing), and full private label manufacturing solutions tailored for international sports brands."
    },
    {
      question: "Can I request custom designs?",
      answer: "Absolutely. Our expert design and sampling team can manufacture products strictly according to your tech packs, sketches, or physical specifications."
    },
    {
      question: "Which countries do you export to?",
      answer: "We export worldwide including North America, Europe, the Middle East, Australia and many other international markets, ensuring all products meet regional compliance standards."
    },
    {
      question: "How long does production take?",
      answer: "Production time depends on order size and customization complexity but typically ranges from 3–8 weeks after final sample approval and deposit receipt."
    },
    {
      question: "How can I request a quotation?",
      answer: "Simply complete the Request a Quote form on our website, or contact our sales department directly through WhatsApp or email for a priority response."
    }
  ];

  return (
    <section id="faq" className="bg-[#080D16] min-h-screen font-sans selection:bg-orange-500/30 py-28 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto lg:px-12">
        
        {/* HEADER */}
        <motion.div 
          className="text-center mb-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-orange-500 font-bold tracking-widest text-sm uppercase inline-block mb-8">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Everything You Need to Know
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Find detailed information regarding our international B2B manufacturing processes, 
            OEM/ODM services, and global export logistics.
          </p>
        </motion.div>

        {/* FAQ ACCORDION */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`
                group rounded-2xl transition-all duration-500 border
                ${activeIndex === index 
                  ? 'bg-white/10 border-orange-500/50 shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)]' 
                  : 'bg-white/5 border-white/10 hover:border-orange-500/30 hover:shadow-[0_0_20px_-10px_rgba(249,115,22,0.1)]'}
                backdrop-blur-md
              `}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
              >
                <span className={`text-lg font-semibold transition-colors duration-300 ${activeIndex === index ? 'text-orange-400' : 'text-white/90 group-hover:text-white'}`}>
                  {item.question}
                </span>
                <motion.div 
                  className={`
                    flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500
                    ${activeIndex === index ? 'bg-orange-500' : 'bg-white/10 group-hover:bg-white/20'}
                  `}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                >
                  {activeIndex === index ? (
                    <Minus className="w-4 h-4 text-white" />
                  ) : (
                    <Plus className="w-4 h-4 text-white" />
                  )}
                </motion.div>
              </button>

              {/* SMOOTH TRANSITION WRAPPER */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed text-base border-t border-white/5 pt-4 mt-2">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center">
            <div className="flex -space-x-2 mb-4">
               {/* Decorative Avatar Placeholders */}
               {[1, 2, 3].map((i) => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-[#080D16] bg-gray-800 flex items-center justify-center">
                   <HelpCircle className="w-5 h-5 text-gray-500" />
                 </div>
               ))}
            </div>
            <p className="text-white font-medium text-xl mb-2">Still have questions?</p>
            <p className="text-gray-400 text-base mb-8">Can't find the answer you're looking for? Please chat to our friendly team.</p>
            
            <a
              href="https://wa.me/923316131936"
              target="_blank"
              rel="noopener noreferrer"
              className="
              relative group overflow-hidden px-8 py-4 rounded-xl
              bg-gradient-to-r from-orange-600 to-orange-400
              text-white font-bold tracking-wide
              transition-all duration-300 transform
              hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]
              active:scale-95
              flex items-center gap-2
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 focus-visible:outline-offset-2
            ">
              <MessageCircle className="w-5 h-5" />
              <span>Contact Our Team</span>
              
              {/* Button Shine Effect */}
              <div className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;