import React from "react";
import Marquee from "./animata/container/marquee";
import { Content } from "@radix-ui/react-accordion";

const HorizontalMarquee = () => {
  return (
    <div className="max-w-[1186px]  mx-auto">
      <div className="storybook-fix relative flex h-full max-h-96 min-h-72 w-full min-w-72 items-center justify-center overflow-hidden rounded  bg-background">
        <Marquee pauseOnHover applyMask repeat={5} >
          <span>
            <div className="w-56 h-72 shadow bg-gray-200 rounded-md">
            Contenu1
            </div>            
          </span>

        </Marquee>
      </div>
    </div>
  );
};

export default HorizontalMarquee;
