"use client";
import React from "react";
import Wrapper from "./Wrapper";

import ContactDetail from "./ContactDetail";

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
                    icon="ic:outline-phone-iphone"
                    header="Phone"
                    detail="09614073159"
                />
                <ContactDetail
                    icon="ic:baseline-email"
                    header="Email"
                    detail="jiraldlaurea@gmail.com"
                />
                <ContactDetail
                    icon="mdi:location"
                    header="Location"
                    detail="Makati, Metro Manila, Philippines"
                />
            </div>
        </Wrapper>
    );
};

export default Contact;
