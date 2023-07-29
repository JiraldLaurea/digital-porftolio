"use client";
import React from "react";
import Wrapper from "./Wrapper";
import { Icon } from "@iconify/react";
import ContactDetail from "./ContactDetail";

const Contact = () => {
    return (
        <Wrapper id="contact" title="Contact" subtitle="Let's talk" last>
            <div className="flex flex-col items-center">
                <div>
                    <div className="mb-12 space-y-6">
                        <ContactDetail
                            icon="ic:outline-phone-iphone"
                            header="Phone"
                            detail="09942340078"
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
                        >
                            <Icon
                                width={45}
                                height={45}
                                icon="mdi:linkedin"
                                className="cursor-pointer "
                            />
                        </a>
                        <a
                            href="https://github.com/JiraldLaurea"
                            target="_blank"
                        >
                            <Icon
                                width={45}
                                height={45}
                                icon="mdi:github"
                                className="cursor-pointer"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Contact;
