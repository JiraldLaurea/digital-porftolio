"use client";

import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import ContactDetail from "./ContactDetail";
import Wrapper from "./Wrapper";
import SendMessageForm from "./SendMessageForm";

const Contact = () => {
    return (
        <Wrapper
            id="contact"
            title="Contact"
            subtitle="Let's work together"
            isAlternate
            isContact
        >
            <div className="grid gap-8 lg:grid-cols-2">
                {/* Send Message Form */}
                <SendMessageForm />

                {/* Contact Details */}
                <div className="w-full">
                    <div className="p-6 border sm:p-8 bg-primary4 rounded-3xl dark:border-zinc-700 dark:bg-primary4-dark">
                        <h3 className="mb-6 text-xl font-medium">
                            Contact information
                        </h3>

                        <div className="space-y-8">
                            <ContactDetail
                                Icon={MdPhoneIphone}
                                header="Phone"
                                detail="09614073159"
                            />
                            <ContactDetail
                                Icon={IoMdMail}
                                header="Email"
                                detail="jiraldcalusay@gmail.com"
                            />
                            <ContactDetail
                                Icon={FaLocationDot}
                                header="Location"
                                detail="Makati, Metro Manila, Philippines"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Contact;
