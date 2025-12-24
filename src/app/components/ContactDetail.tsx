"use client";
import { Icon } from "@iconify/react";

const ContactDetail = ({ icon, header, detail }: any) => {
    return (
        <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 bg-accent dark:bg-accent-dark">
                <Icon className="w-5 h-5" icon={icon} />
            </div>
            <div className="text-left">
                <p className="text-xs xs:text-sm text-zinc-600 dark:text-zinc-300">
                    {header}
                </p>
                <p className="text-sm xs:text-base">{detail}</p>
            </div>
        </div>
    );
};

export default ContactDetail;
