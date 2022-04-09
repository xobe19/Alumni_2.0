import { Fragment, useState } from "react";
import data from "../data/wallOfFame";
import Image from "next/image";
import * as imgs from "../public";
import rename from "../helper_functions/babel_img_rename";

console.log(rename(data[0].imageUrl))
export default function WallOfFame() {
let [currentIndices, setCurrentIndices] = useState([0,1,2]);
let dat = [];
for(let i = currentIndices[0]; i <= Math.min(data.length-1, currentIndices[2]); i++) {
  dat.push(data[i]);
}
function canNext() {
return !(currentIndices.includes(data.length-1));
}
function canPrev() {
return !(currentIndices.includes(0));
}

function moveNext() {
  setCurrentIndices(currentIndices.map((e) =>e+3));
}
function movePrev() {
  setCurrentIndices(currentIndices.map((e)=>e-3));
}


  return (
    <Fragment>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            WALL OF FAME
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 mx-auto">
            Achievements of the Alumni
          </h1>
        </div>
      </div>
      <div className="flex  w-full justify-center items-center bg-gray-100">
           {canPrev() ? 

<button onClick={() => movePrev()} className="h-6 border-2 border-solid border-gray-200 px-4 py-12 flex justify-center items-center text-xl hover:text-white hover:bg-black transition-all"><i class="fa-solid fa-angle-left"></i></button>
:
<></>
   } 

      <div className="w-10/12 bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            className="lg:flex md:flex sm:flex items-center  flex-wrap justify-around"
          >
            {dat.map((data) => {
              return (
                <div
                  role="listitem"
                  key={data.imageUrl}
                  className=" w-full mx-0 my-24 sm:w-1/3  relative sm:mt-16 sm:mb-32 sm:mx-5   "
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32 rounded-full overflow-hidden">
                        <Image
                          src={imgs[rename(data.imageUrl)]}
                          alt="Display Picture of Andres Berlin"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md transition-all"
                          placeholder="blur"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16 pb-6">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        {data.name}
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        {data.primary}
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        {data.secondary}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    
{canNext() ? 

<button onClick={() => moveNext()} className="h-6 border-2 border-solid border-gray-200 px-4 py-12 flex justify-center items-center text-xl hover:text-white hover:bg-black transition-all"><i class="fa-solid fa-angle-right"></i></button>
:
<></>
   } 
      </div>
      <div>
    

 
      </div>
    </Fragment>
  );
}
