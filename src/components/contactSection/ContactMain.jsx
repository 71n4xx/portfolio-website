import React from "react";
import ButtonComponent from "../ButtonComponent";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

const ContactMain = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAdd, setCopiedAdd] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const form = useRef();
  const phone = "+63 962 729 6552";
  const address = "Pulilan, Bulacan, Philippines";

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (email === "" || name === "" || message === "") {
      console.log("email blank");
      toast.error("Fill out all the textboxes");
    } else {
      emailjs
        .sendForm("service_2lkaak9", "template_noi7k1t", form.current, {
          publicKey: "-PjvfCz7yZlEh8w3B",
        })
        .then(
          () => {
            setEmail("");
            setName("");
            setMessage("");
            console.log("SUCCESS!");
            toast.success("Message Sent!");
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Sending Failed.");
          }
        );
    }
  };

  const handleCopy = ({ text, copysetter }) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        copysetter(true);
        setTimeout(() => copysetter(false), 1500);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };
  return (
    <div className="flex justify-center w-full mt-52 mb-24 lg:px-8 mr-4">
      <div className="max-w-[1300px] w-full flex  lg:flex-row xl:flex-row 2xl:flex-row md:flex-col sm:flex-col justify-between items-center ">
        <div className="flex flex-col gap-6 justify-center items-start w-full md:max-w-[80%] xl:max-w-[50%] sm:max-w-[90%] 2xl:max-w-[50%]  lg:max-w-[50%]">
          <div className="text-yellow font-special font-black text-[3rem]">
            Get in touch
          </div>
          <div className="font-body text-left text-base text-white">
            Feel free to reach out if you would like to collaborate! <br />
            You are just a few clicks away.
          </div>

          <form
            onSubmit={sendEmail}
            className="w-full flex flex-col justify-center items-center gap-4 mt-4"
            ref={form}
          >
            <input
              onChange={handleName}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              className="font-body w-full rounded-full px-8 py-3 "
            />
            <input
              onChange={handleEmail}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="font-body w-full rounded-full px-8 py-3 "
              value={email}
            />
            <textarea
              onChange={handleMessage}
              name="message"
              id="Message"
              placeholder="Message"
              className="font-body w-full rounded-3xl px-8 py-3 h-60"
              value={message}
            ></textarea>
            <ButtonComponent
              label="Send"
              label2="Send"
              clickFunc={() => ({})}
              type="submit"
            />
          </form>
        </div>
        <div className="flex flex-col justify-center items-center gap-12 ">
          <div className="lg:h-80 xl:h-80 2xl:h-80">
            <DotLottieReact
              src="https://lottie.host/4ad24292-fe23-4a98-be1a-d4c1d61e9648/yAQ2pcgB8k.lottie"
              loop
              autoplay
            />
          </div>
          <div className="flex md:flex-col lg:flex-col xl:flex-col 2xl:flex-col justify-center items-center gap-4 sm:flex-row">
            <a
             
              href="mailto:cristinacruzat0531@gmail.com"
            >
              <div className="hover:text-yellow transition-all duration-500 flex justify-start items-center gap-4 text-white font-body ">
                <MdEmail className="text-xl" />
                <div  className="sm:hidden md:block lg:block xl:block 2xl:block ">
                cristinacruzat0531@gmail.com</div>
              </div>
            </a>

            <a
              
              href="https://www.linkedin.com/in/cristina-cruzat-23b315366/"
            >
              <div className="flex justify-start items-center gap-4 text-white font-body hover:text-yellow transition-all duration-500">
                <FaLinkedin className="text-xl" />
                <div className="sm:hidden md:block lg:block xl:block 2xl:block ">
                Cristina Cruzat</div>
              </div>
            </a>

            <a
              
              href="https://github.com/71n4xx"
            >
              <div className="flex justify-start items-center gap-4 text-white font-body hover:text-yellow transition-all duration-500">
                <FaGithub className="text-xl" />
                <div className="sm:hidden md:block lg:block xl:block 2xl:block ">
71n4xx
                </div>
                
              </div>
            </a>

            <div
              onClick={() =>
                handleCopy({ text: phone, copysetter: setCopiedPhone })
              }
            >
              <div className="flex justify-start items-center gap-4 text-white font-body hover:text-yellow cursor-pointer transition-all duration-500">
                <FaPhoneSquareAlt className="text-xl" />
                <div className="sm:hidden md:block lg:block xl:block 2xl:block ">
                  +63 962 729 6552
                </div>

                {copiedPhone && (
                  <span className="ml-2 text-green-400">Copied!</span>
                )}
              </div>
            </div>

            <div
              onClick={() =>
                handleCopy({ text: address, copysetter: setCopiedAdd })
              }
            >
              <div className="flex justify-start items-center gap-4 text-white font-body  hover:text-yellow cursor-pointer transition-all duration-500">
                <FaLocationDot className="text-xl" />
                <div className="sm:hidden md:block lg:block xl:block 2xl:block">
                  Pulilan, Bulacan, Philippines
                </div>
                {copiedAdd && (
                  <span className="ml-2 text-green-400">Copied!</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
