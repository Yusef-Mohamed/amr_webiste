"use client";
import Input from "./ui/Input";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import Textarea from "./ui/TextArea";
import Image from "next/image";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current || "",
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact_form" className="py-12 container">
      <h2 className="text-4xl font-semibold mb-6 text-center">
        Let&apos;s Talk?
      </h2>

      <div className="grid grid-cols-2">
        <form
          ref={form}
          className="space-y-6"
          onSubmit={(e) => {
            sendEmail(e);
          }}
        >
          <Input placeholder="Name" label="Name" name="name" />
          <Input placeholder="Email" label="Email" name="email" />
          <Textarea placeholder="Message" label="Message" name="message" />
          <button
            type="submit"
            className="border-b border-b-primary px-6 py-2 mx-auto block w-fit hover:bg-fadePrimary  transition-all"
          >
            Send
          </button>
        </form>
        <div>
          <div className="max-w-[300px] w-full aspect-square bg-mainText mx-auto relative">
            <Image alt="contact" src="/contact_dark.png" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
