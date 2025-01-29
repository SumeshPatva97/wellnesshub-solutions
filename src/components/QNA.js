import React, { useState } from "react";
import { FaPhone ,FaChevronDown } from "react-icons/fa6";

import Accordion from 'react-bootstrap/Accordion';



const QNA = () => {
  const faqs = [
    { question: "What services do you offer?", answer: "We provide a range of healthcare services including general check-ups, emergency care, and specialist consultations." },
    { question: "How can I book an appointment?", answer: "You can book an appointment through our website, mobile app, or by calling our support line." },
    { question: "Do you accept insurance?", answer: "Yes, we accept most major insurance plans. Please contact our support for more details." },
    { question: "What are your operating hours?", answer: "We are open 24/7 for emergency care. Regular consultations are available from 8 AM to 8 PM." },
    { question: "How can I get a prescription refill?", answer: "You can request a prescription refill through our patient portal or by calling your healthcare provider." },
    { question: "Where are you located?", answer: "We are located at 123 Healthcare Street, Cityville. Find us on Google Maps for directions." },
  ];

  return (
    <div className="container " id="FAQ">
      <div className="row grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="col-xs-12 col-md-6">
          <h2 className="text-3xl font-bold text-gray-800">Helping you understand healthcare</h2>
          <p className="text-gray-600 mt-4">
            Here to make your experience as seamless as possible—explore answers to common questions about our services, policies, and patient care.
          </p>
          <div className="FAQ-left">
            <FaPhone className="text-indigo-600" size={32} />
            <div>
              <p className="text-lg font-semibold text-gray-800">We always take care of your smile</p>
              <p className="text-indigo-600 font-bold text-xl">24/7 Emergency</p>
              <p className="text-gray-700">659-888-589</p>
            </div>
          </div>
        </div>

        {/* Right Column - FAQ Section */}
        <div className="col-xs-12 col-md-6">
          <Accordion defaultActiveKey="0">
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default QNA;