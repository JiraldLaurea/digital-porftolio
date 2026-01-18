"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const SendMessageForm = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
            );

            toast.success("Message sent successfully!");

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex-none w-full dark:border-zinc-700">
            <h3 className="mb-6 text-xl font-medium">Send a message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex space-x-5">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border rounded-md outline-none dark:border-zinc-700 dark:bg-primary1-dark focus:ring-2 focus:ring-primary "
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border rounded-md outline-none dark:border-zinc-700 dark:bg-primary1-dark focus:ring-2 focus:ring-primary "
                    />
                </div>

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border rounded-md outline-none dark:border-zinc-700 dark:bg-primary1-dark focus:ring-2 focus:ring-primary "
                />

                <textarea
                    name="message"
                    placeholder="Message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border rounded-md outline-none resize-none dark:border-zinc-700 dark:bg-primary1-dark focus:ring-2 focus:ring-primary "
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 text-white transition rounded-md bg-accent dark:bg-accent-dark bg-primary hover:bg-accent-hovered dark:hover:bg-accent-hovered-dark"
                >
                    {loading ? "Sending..." : "Send message"}
                </button>
            </form>
        </div>
    );
};

export default SendMessageForm;
