import { data } from "autoprefixer";
import { Fragment } from "react/cjs/react.production.min";
import tech_talks_data from "../../data/tech_talks";
import image_gal_data from "../../data/image_gallery";
import Image from "next/image";
import * as imgs from "../../public";
import rename from "../../helper_functions/babel_img_rename";
export default function Bos() {
  return (
    <Fragment>
      <div className="text-5xl font-extrabold flex items-center justify-center py-5">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
          Tech Talks &rarr;
        </span>
      </div>
      <div className=" p-5 lg:w-7/12 mx-auto">
        {tech_talks_data.map((data, indx) => {
          return (
            <div
              className={
                "flex my-7 justify-start" +
                (indx & 1 ? " lg:justify-start" : " lg:justify-start")
              }
              key={data.name}
            >
              <div className="bg-white font-semibold sm:text-lg p-10 border-l-gray-900 border-l-4">
                {data.name} ({data.date})
              </div>
              <div className="p-10 text-white bg-black rounded-r-lg sm:text-xl font-bold">
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
          Alumni Interaction Gallery &rarr;
        </span>
      </div>
      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2 justify-center items-center">
            {image_gal_data.map((data) => {
              return (
                <div className="flex flex-wrap sm:w-1/3" key={data.imageUrl}>
                  <div className="w-full p-1 md:p-2 rounded-lg overflow-hidden">
                    <Image
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg transition-all"
                      src={imgs[rename(data.imageUrl)]}
                      width={500}
                      height={300}
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
