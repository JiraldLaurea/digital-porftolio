"use client";
import React from "react";
import Wrapper from "./Wrapper";
import { Icon } from "@iconify/react";
import ContactDetail from "./ContactDetail";

const Contact = () => {
    return (
        <Wrapper
            id="contact"
            title="Contact"
            subtitle="Let's work together."
            last
        >
            <div className="flex flex-col items-center">
                <div>
                    <div className="mb-12 space-y-8">
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
                            detail="Santa Barbara, Iloilo"
                        />
                    </div>
                    <div className="flex items-center justify-center space-x-8">
                        <a
                            href="https://www.linkedin.com/in/jirald-calusay-064b09220"
                            target="_blank"
                            className="flex items-center"
                        >
                            <Icon
                                icon="mdi:linkedin"
                                className="w-10 h-10 cursor-pointer"
                            />
                            <p>LinkedIn</p>
                        </a>
                        <a
                            href="https://github.com/JiraldLaurea"
                            target="_blank"
                            className="flex items-center"
                        >
                            <Icon
                                width={40}
                                height={40}
                                icon="mdi:github"
                                className="cursor-pointer"
                            />
                            <p>Github</p>
                        </a>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Contact;
