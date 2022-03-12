import { Fragment } from "react/cjs/react.production.min";
import aixcellence_data from "../../data/aixcellence";
import Image from "next/image";
import * as imgs from "../../public";
import rename from "../../helper_functions/babel_img_rename";
export default function Bos() {
  return (
    <Fragment>
      <div className="text-5xl font-extrabold flex items-center justify-center py-5">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-center">
          Product Exhibits By Alumni &rarr;
        </span>
      </div>
      <div className=" p-5 lg:w-11/12 mx-auto">
        {aixcellence_data.map((data, indx) => {
          return (
            <div
              className={
                "flex my-7 justify-center" +
                (indx & 1 ? " lg:justify-end" : " lg:justify-start")
              }
              key={data.name}
            >
              <div className="bg-white font-semibold sm:text-lg p-10 border-l-gray-900 border-l-4">
                {data.name} ({data.date})
              </div>
              <div className="sm:p-10 p-5 text-white bg-black rounded-r-lg sm:text-xl font-bold">
                {data.topic}
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-4 flex justify-center">
        <div className="w-10/12 border-t border-gray-300"></div>
      </div>
      <div className="text-5xl font-extrabold flex items-center justify-center py-5 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
          Aixcellence: Flyers &rarr;
        </span>
      </div>
      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2 justify-center items-center">
            {[0, 0, 0, 0].map((_, indx) => {
              return (
                <div className="flex flex-wrap md:w-1/2" key={indx}>
                  <div className="w-full p-1 md:p-2">
                    <Image
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg transition-all"
                      src={imgs[rename(`/AIxcellence-${indx + 1}.jpg`)]}
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
