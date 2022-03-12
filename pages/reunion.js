import { Fragment } from "react/cjs/react.production.min";
import Image from 'next/image';
import * as imgs from "../public";
import rename from "../helper_functions/babel_img_rename";
let dallas_data = ["/dallasinvite.jpg", "/dallas-group.jpg", "/dallas2.jpg"];
let bay_area_data = [
  "/BayArea-Invite.jpeg",
  "/Chairmanca.png",
  "/mahalakshmi.jpeg",
];
let fremont_data = ["/bayarea-2016.jpg"];
let college_reunion_data = [
  "/EEE_AL.png",
  "/ITAlm.png",
  "/ITECE.png",
  "/CVR_AL.png",
  "/CSE_AL.png",
];
export default function Reunion() {
  return (
    <Fragment>
      <div className="text-5xl font-extrabold  text-center  p-5 ">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
          2021 Dallas Reunion&rarr;
        </span>
      </div>
      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2 justify-center items-center">
            {dallas_data.map((data) => {
              return (
                <div className="flex flex-wrap sm:w-1/3" key={data}>
                  <div className="w-full p-1 md:p-2">
                    <Image
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src={imgs[rename(data)]}
                      placeholder="blur"
                    ></Image>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="py-4 flex justify-center">
        <div className="w-10/12 border-t border-gray-300"></div>
      </div>
      <div className="text-5xl font-extrabold text-center   p-5 ">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
          2021 Bay Area Reunion&rarr;
        </span>
      </div>
      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2 justify-center items-center">
            {bay_area_data.map((data) => {
              return (
                <div className="flex flex-wrap sm:w-1/3" key={data}>
                  <div className="w-full p-1 md:p-2">
                    <Image
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src={imgs[rename(data)]}
placeholder="blur"

                    ></Image>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="py-4 flex justify-center">
        <div className="w-10/12 border-t border-gray-300"></div>
      </div>
      <div className="text-5xl font-extrabold text-center   p-5 ">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
          2016 Fremont Reunion&rarr;
        </span>
      </div>

      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2 justify-center items-center">
            {fremont_data.map((data) => {
              return (
                <div className="flex flex-wrap sm:w-1/3" key={data}>
                  <div className="w-full p-1 md:p-2">
                    <Image
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src={imgs[rename(data)]}
                      placeholder="blur"
                    ></Image>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="py-4 flex justify-center">
        <div className="w-10/12 border-t border-gray-300"></div>
      </div>
      <div className="text-5xl font-extrabold text-center   p-5 ">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
          College Reunions &rarr;
        </span>
      </div>
      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2 justify-center items-center">
            {college_reunion_data.map((data) => {
              return (
                <div className="flex flex-wrap sm:w-1/3" key={data}>
                  <div className="w-full p-1 md:p-2">
                    <Image
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src={imgs[rename(data)]}
                      placeholder="blur"
                    ></Image>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
