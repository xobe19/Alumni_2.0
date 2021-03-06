import { Fragment } from "react/cjs/react.production.min";
import Image from "next/image";
import * as imgs from "../../public";
import rename from "../../helper_functions/babel_img_rename";
export default function Mou() {
  return (
    <Fragment>
      <div className="text-5xl font-extrabold flex items-center justify-center py-5">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
          MoU&apos;s &rarr;
        </span>
      </div>

      <div className="p-5 bg-gray-100 flex flex-wrap min-h-screen items-start justify-center md:justify-start">
        <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer mb-5 md:mr-10 md:mb-0">
          <a href="#" className="w-full block">
            <Image
              alt="blog photo"
              src={imgs[rename("/mdx.png")]}
              className=" w-full object-cover"
            />
            <div className="bg-white  w-full p-4">
              <p className="text-indigo-500 text-md font-medium">
                Fragma Data Systems
              </p>
              <p className="text-gray-800 text-xl font-medium mb-2">
                MoU with Fragma Data Systems
              </p>
              <p className="text-gray-400  font-light text-md">
                CVR College of Engineering had signed MoU with Fragma
                Datasystems, Bangalore, on 26 June 2021 in the presence of Prof.
                Nayanathara K Sattiraju, Principal, CVRCE and Mr. Varun Reddy,
                Co-Founder and CEO, Fragma Datasystems, and Alumnus, CSE. This
                MoU caters to offering Consultancy Projects, collaboration in
                Research, Knowledge Transfer to the faculty on AI, Big Data
                Ecosystems, and Cloud Computing.
              </p>
            </div>
          </a>
        </div>
        <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer">
          <a href="#" className="w-full block h-full">
            <Image
              alt="blog photo"
              src={imgs[rename("/mdx_mou.png")]}
              className=" w-full object-cover transition-all"
              placeholder="blur"
            />
            <div className="bg-white  w-full p-4">
              <p className="text-indigo-500 text-md font-medium">
                MDX University
              </p>
              <p className="text-gray-800 text-xl font-medium mb-2">
                MoU with MDX University
              </p>
              <p className="text-gray-400  font-light text-md">
                Dr David Windridge and Dr Santosh Tirunagri have joined the
                online MoU signing cermony executed between MDX university, UK
                and CVR College of Engineering on 25 June 2021. Under this MoU,
                both the institutions work on a mutually congruent set of
                objectives and collaborate on Scientific Research and
                Publications.
              </p>
            </div>
          </a>
        </div>
      </div>
    </Fragment>
  );
}
