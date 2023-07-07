import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./styles.module.scss";
import { TextField } from "@mui/material";

export default function Contact() {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v3g7n7g",
        "template_a47vfrs",
        form.current,
        "P4wbg3RWAkmyNdTMX"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          console.log("mensaje enviado");
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.text}>Get in touch with me</div>

        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.formRow}>
            <div className={styles.inputdata}>
              <label>Name</label>
              <TextField
                id="standard-basic"
                name="from_name"
                label="Enter your name"
                variant="standard"
              />
            </div>
            <div className={styles.inputdata}>
              <label>Email</label>
              <TextField
                id="standard-basic"
                name="reply_to"
                label="Enter your email"
                variant="standard"
              />
            </div>
            <div className={styles.inputdata}>
              <label>Message</label>
              <TextField
                id="standard-basic"
                name="message"
                multiline
                label="Write your message"
                variant="standard"
              />
            </div>
          </div>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
