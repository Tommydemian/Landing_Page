"use client";

import { useState } from "react";
import { Container } from "../../layout/ui/Container";
import { SectionHeading } from "../../shared/SectionHeading";
import Checkbox from "../../layout/ui/Checkbox";

export const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    reasons: {
      webDesign: false,
      collaboration: false,
      mobileApp: false,
      others: false,
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleCheckbox = (key: keyof typeof formData.reasons) => {
    setFormData((prev) => ({
      ...prev,
      reasons: { ...prev.reasons, [key]: !prev.reasons[key] },
    }));
  };

  const submitForm = () => {
    console.log(formData);
    setFormData({
      fullName: "",
      email: "",
      message: "",
      reasons: {
        webDesign: false,
        collaboration: false,
        mobileApp: false,
        others: false,
      },
    });
  };

  return (
    <section>
      <Container className="my-section">
        <SectionHeading
          headingText="Thank you for your Interest in SquareUp."
          subheadingText="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
          n={4}
          logo="/logo.svg"
          buttonText="Start Project"
          buttonLink="/contact"
        />

        <div className="my-10 flex flex-col items-center md:gap-10 gap-5 md:px-0 px-5">
          <div className="flex md:flex-row flex-col md:gap-10 gap-5 w-full md:w-2/3">
            <div className="bg-[#1e1e1e] rounded-lg flex flex-col md:w-1/2 w-full p-5">
              <label className="text-white">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Type here"
                value={formData.fullName}
                onChange={handleInputChange}
                className="bg-[#1e1e1e] text-gray-400 border-b border-gray-600 focus:outline-none focus:border-gray-400 placeholder-gray-500 py-1 w-full"
              />
            </div>

            <div className="bg-[#1e1e1e] rounded-lg flex flex-col md:w-1/2 w-full p-5">
              <label className="text-white">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Type here"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-[#1e1e1e] text-gray-400 border-b border-gray-600 focus:outline-none focus:border-gray-400 placeholder-gray-500 py-1 w-full"
              />
            </div>
          </div>

          <div className="md:w-2/3 w-full bg-[#1e1e1e] p-5 rounded-lg">
            <label className="text-white font-semibold text-lg block mb-4">
              Why are you contacting us?
            </label>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {[
                {
                  key: "webDesign" as keyof typeof formData.reasons,
                  label: "Web Design",
                },
                {
                  key: "collaboration" as keyof typeof formData.reasons,
                  label: "Collaboration",
                },
                {
                  key: "mobileApp" as keyof typeof formData.reasons,
                  label: "Mobile App Design",
                },
                {
                  key: "others" as keyof typeof formData.reasons,
                  label: "Others",
                },
              ].map(({ key, label }) => (
                <Checkbox
                  key={key}
                  label={label}
                  checked={formData.reasons[key]}
                  onChange={() =>
                    toggleCheckbox(key as keyof typeof formData.reasons)
                  }
                />
              ))}
            </div>
          </div>

          <div className="md:w-2/3 w-full bg-[#1e1e1e] p-5 rounded-lg">
            <label className="text-white">Message</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Type here"
              value={formData.message}
              onChange={handleInputChange}
              className="bg-[#1e1e1e] text-gray-400 border-b border-gray-600 focus:outline-none focus:border-gray-400 placeholder-gray-500 py-1 w-full resize-none"
            />
          </div>

          <button
            onClick={() => submitForm()}
            className="bg-accent text-black button-base rounded-lg px-5 py-5 flex"
          >
            Submit
          </button>
        </div>
      </Container>
    </section>
  );
};
