"use client";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import ContactDetail from "./ContactDetail";
import Wrapper from "./Wrapper";

const Contact = () => {
    return (
        <Wrapper
            id="contact"
            title="Contact"
            subtitle="Let's work together"
            isAlternate
            isContact
        >
            <div className="space-y-8">
                <ContactDetail
                    Icon={MdPhoneIphone}
                    header="Phone"
                    detail="09614073159"
                />
                <ContactDetail
                    Icon={IoMdMail}
                    header="Email"
                    detail="jiraldlaurea@gmail.com"
                />
                <ContactDetail
                    Icon={FaLocationDot}
                    header="Location"
                    detail="Makati, Metro Manila, Philippines"
                />
            </div>
        </Wrapper>
    );
};

export default Contact;
