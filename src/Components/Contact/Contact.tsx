import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./styles.module.scss";
import { Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef<any>();

  const notify = () =>
    toast.success("Thanks for you interest!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const sendEmail = (e: any) => {
    e.preventDefault();

    // emailjs
    // .sendForm(
    //   "service_v3g7n7g",
    //   "template_a47vfrs",
    //   form.current,
    //   "P4wbg3RWAkmyNdTMX"
    // )
    notify();

    new Promise(() => console.log("hola")).then(
      (result: any) => {
        notify();
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
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          <div className={styles.formRow}>
            <div className={styles.inputdata}>
              <label>Name</label>
              <TextField
                id="standard-basic"
                name="from_name"
                placeholder="Enter your name"
                variant="standard"
                required
              />
            </div>
            <div className={styles.inputdata}>
              <label>Email</label>
              <TextField
                id="standard-basic"
                name="reply_to"
                placeholder="Enter your email"
                variant="standard"
                required
              />
            </div>
            <div className={styles.inputdata}>
              <label>Message</label>
              <TextField
                id="standard-basic"
                name="message"
                multiline
                minRows="4"
                placeholder="Write your message"
                variant="standard"
                required
                sx={{
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
              />
            </div>
          </div>
          <Button type="submit" value="Send" variant="contained">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
