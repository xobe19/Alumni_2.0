import { Fragment } from "react/cjs/react.production.min";
import bos_data from "../../data/bos_iqac";
export default function Bos() {
  return (
    <Fragment>
      <div className="text-5xl font-extrabold flex items-center justify-center py-5">
        <span className="px-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-center">
          Alumni in BoS &amp; IQAC →
        </span>
      </div>
      <div className=" p-5 lg:w-2/3 mx-auto">
        {bos_data.map((data, indx) => {
          return (
            <div
              className={
                "flex my-7 justify-center" +
                (indx & 1 ? " lg:justify-start" : " lg:justify-start")
              }
              key={data.name}
            >
              <div className="bg-white font-semibold sm:text-xl p-10 border-l-gray-900 border-l-4">
                {data.name}
              </div>
              <div className="p-10 text-white bg-black rounded-r-lg sm:text-2xl font-bold">
                {data.body}
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
