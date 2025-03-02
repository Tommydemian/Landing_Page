"use client";

import { useState } from "react";
import { Container } from "../../layout/ui/Container";
import { SectionHeading } from "../../shared/SectionHeading";
import { Codepen } from "lucide-react";
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleCheckbox = (key: keyof typeof formData.reasons) => {
        setFormData((prev) => ({
            ...prev,
            reasons: { ...prev.reasons, [key]: !prev.reasons[key] },
        }));
    };

    const submitForm = () => {
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
                    logo={<Codepen size={30} />}
                    buttonText="Start Project"
                    buttonLink="/contact"
                />

                <div className="my-10 flex flex-col items-center gap-5 px-5 md:gap-10 md:px-0">
                    <div className="flex w-full flex-col gap-5 md:w-2/3 md:flex-row md:gap-10">
                        <div className="flex w-full flex-col rounded-lg bg-[#1e1e1e] p-5 md:w-1/2">
                            <label htmlFor="fullName" className="text-white">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="Type here"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full border-gray-600 border-b bg-[#1e1e1e] py-1 text-gray-400 placeholder-gray-500 focus:border-gray-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex w-full flex-col rounded-lg bg-[#1e1e1e] p-5 md:w-1/2">
                            <label htmlFor="email" className="text-white">
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Type here"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full border-gray-600 border-b bg-[#1e1e1e] py-1 text-gray-400 placeholder-gray-500 focus:border-gray-400 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="w-full rounded-lg bg-[#1e1e1e] p-5 md:w-2/3">
                        <label className="mb-4 block font-semibold text-lg text-white">
                            Why are you contacting us?
                        </label>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                                    onChange={() => toggleCheckbox(key as keyof typeof formData.reasons)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-full rounded-lg bg-[#1e1e1e] p-5 md:w-2/3">
                        <label htmlFor="message" className="text-white">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={6}
                            placeholder="Type here"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full resize-none border-gray-600 border-b bg-[#1e1e1e] py-1 text-gray-400 placeholder-gray-500 focus:border-gray-400 focus:outline-none"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={() => submitForm()}
                        className="button-base flex rounded-lg bg-accent px-5 py-5 text-black"
                    >
                        Submit
                    </button>
                </div>
            </Container>
        </section>
    );
};
