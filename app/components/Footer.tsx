import { socialMedia } from "@/data";
import Image from "next/image";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 " id="contact">
      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> idea to real
          <span className="text-purple"> world?</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us today and let&apos;s discuss how we can make an{" "}
          <span className="text-purple">impact</span>
        </p>
        <div className="w-full mt-8">
          <ContactForm />
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="COMS Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright Coms Advance Engineering, 2026. All rights reserved.
          </p>
        </div>
        <div className="flex items-center md:gap-3 gap-6 mt-2">
          {socialMedia.map((item) => (
            <a href={item.link} target="_blank" key={item.id}>
              <div
                key={item.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <Image
                  src={item.img}
                  key={item.id}
                  alt={item.id.toString()}
                  width={20}
                  height={20}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
