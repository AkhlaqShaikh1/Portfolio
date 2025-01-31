import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/moving-border";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20" id="experience">
      <h1 className="heading">
        My
        <span className="text-purple"> Work Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols 1 gap-10">
        {workExperience.map(({ id, className, desc, title, thumbnail }) => (
          <Button
            key={id}
            borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 1000}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-5 md:p-5 lg:p-10 gap-2">
              <Image
                src={thumbnail}
                alt={title}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {title}
                </h1>
                <p className="text-start text-white mt-3 font-semibold">
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
