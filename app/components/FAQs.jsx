'use client'

import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const faqsData = [
  {
    question: 'What types of events do you specialize in?',
    answer:
      'Firstlane specializes in weddings, corporate events, private parties, and large-scale festivals, ensuring a personalized and memorable experience for all attendees.',
  },
  {
    question: 'Do you offer on-site coordination and management?',
    answer:
      'Yes, our team provides comprehensive on-site coordination to ensure smooth execution, managing all logistics so you can relax and enjoy your event.',
  },
  {
    question: 'Can you customize events to fit specific themes or brand guidelines?',
    answer:
      'Absolutely! Firstlanes team excels at tailoring event themes, decorations, and activities to fit your brand and personal preferences, ensuring a unique experience.',
  },
  {
    question: 'Whats included in your event planning packages?',
    answer:
      'Our packages cover everything from venue selection and decoration to vendor management, logistics, and entertainment, all tailored to meet your event needs.',
  },
];

const FAQs = () => {
  return (
    <div className="w-full py-20">
        <div className='text-center'>
            <h className='text-[2.5vh] font-bold'>Frequently Asked Questions</h>
        </div>
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
        {faqsData.map((faq, index) => (
          <Disclosure as="div" key={index} className="p-3" defaultOpen={index === 0}>
            <Disclosure.Button className="group flex w-full items-center justify-between bg-gray-600/40 p-3 px-6 rounded-lg">
              <span className="text-xl font-medium text-white group-hover:text-white/80">
                {faq.question}
              </span>
              <ChevronDownIcon className="w-5 h-5 fill-white/60 group-hover:fill-white/50 group-open:rotate-180" />
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2 text-lg text-center text-white/50">
              {faq.answer}
            </Disclosure.Panel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default FAQs;