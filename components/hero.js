import { Fragment } from "react/cjs/react.production.min";
import * as imgs from "../public"
import Image from "next/image";
import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
const Hero = ({
  listUser = [
    {
      name: "Alumni",
      number: "12000",
      icon: "/heroicons_sm-user.svg",
    },
    {
      name: "Countries",
      number: "30",
      icon: "/gridicons_location.svg",
    },
    {
      name: "Entrepreneurs",
      number: "50",
      icon: "/bx_bxs-server.svg",
    },
  ],
}) => {
  return (
    <div className="max-w-screen-xl  px-8 xl:px-16 mx-auto" id="about">
      <div className="flex py-6 md:py-16 justify-center flex-wrap sm:flex-nowrap">
      
        <div className="w-full justify-center items-center hidden md:flex">
          <div className="w-full ">
            <Image
              src={imgs["together"]}
              alt="logo"
              quality={100}
              layout="intrinsic"
            />
          </div>
        </div>
  <div className=" flex flex-col justify-center items-start  sm:row-start-1">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-black-600 leading-normal text-left md:text-right w-full">
            Welcome to 
          </h1>
<strong className="text-4xl lg:text-5xl xl:text-6xl  text-black-600 sm:leading-normal sm:font-bold md:text-right">CVR Alumni Network </strong>
    <div className="w-full justify-center items-center md:hidden flex">
          <div className="w-full ">
            <Image
              src={imgs["together"]}
              alt="logo"
              quality={100}
              layout="intrinsic"
            />
          </div>
        </div>
          <div className="flex justify-end w-full py-10">
            <a href="https://appalumni-4842d.web.app/" target="_blank" rel="noreferrer">
          <ButtonPrimary>Get Started </ButtonPrimary>
            </a>
          </div>
        </div>
      </div>
      <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={listUsers.name}
            >
              <div className="flex mx-auto w-full sm:w-auto">
                <div className="flex items-center justify-center bg-blue-100 w-12 h-12 mr-6 rounded-full ">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;