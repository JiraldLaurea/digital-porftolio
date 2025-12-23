"use client";
import { Icon } from "@iconify/react";
import React from "react";

const ContactDetail = ({ icon, header, detail }: any) => {
    return (
        <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-accent dark:bg-accent-dark">
                <Icon width={20} height={20} icon={icon} />
            </div>
            <div className="text-left">
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    {header}
                </p>
                <p className="">{detail}</p>
            </div>
        </div>
    );
};

export default ContactDetail;
