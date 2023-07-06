import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<any>();

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('service_v3g7n7g', 'template_a47vfrs', form.current, 'P4wbg3RWAkmyNdTMX')
      .then((result:any) => {
          console.log(result.text);
          console.log("mensaje enviado");
      }, (error:any) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="reply_to" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
