import { data } from "autoprefixer";
import { Fragment } from "react/cjs/react.production.min";
import fdp_data from "../../data/fdp";
export default function Fdp() {
  return (
    <Fragment>
      <div className="text-5xl font-extrabold flex items-center justify-center py-5 break-words">
        <span className="px-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
          FDP&apos;s conducted by the Alumni &rarr;
        </span>
      </div>
      <div className=" p-5 lg:w-7/12 mx-auto overflow-hidden">
        {fdp_data.map((data, indx) => {
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
    </Fragment>
  );
}
