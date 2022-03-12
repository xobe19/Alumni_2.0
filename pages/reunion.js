import { Fragment } from "react/cjs/react.production.min";
let dallas_data = ['/dallasinvite.jpg', '/dallas-group.jpg', '/dallas2.jpg'];
let bay_area_data = ['/BayArea-Invite.jpeg', '/Chairmanca.png', '/mahalakshmi.jpeg'];
let fremont_data = ['/bayarea-2016.jpg'];
let college_reunion_data = ['/EEE_AL.png', '/ITAlm.png', '/ITECE.png', '/CVR_AL.png', '/CSE_AL.png'];
export default function Reunion() {
    return <Fragment>
<div class="text-5xl font-extrabold  text-center  p-5 ">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
       2021 Dallas Reunion&rarr; 
  </span>
</div>
<section class="overflow-hidden text-gray-700 ">
  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2 justify-center items-center">
        {dallas_data.map((data) => {
            return    <div class="flex flex-wrap sm:w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={data}>
                </img>
        </div>
      </div>

        })}
        
    </div>
  </div>
</section>
  <div className="py-4 flex justify-center">
            <div className="w-10/12 border-t border-gray-300"></div>
        </div>
<div class="text-5xl font-extrabold text-center   p-5 ">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
       2021 Bay Area Reunion&rarr; 
  </span>
</div>
<section class="overflow-hidden text-gray-700 ">
  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2 justify-center items-center">
        {bay_area_data.map((data) => {
            return    <div class="flex flex-wrap sm:w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={data}>
                </img>
        </div>
      </div>

        })}
        
    </div>
  </div>
</section>
 <div className="py-4 flex justify-center">
            <div className="w-10/12 border-t border-gray-300"></div>
        </div>
<div class="text-5xl font-extrabold text-center   p-5 ">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
       2016 Fremont Reunion&rarr; 
  </span>
</div>

<section class="overflow-hidden text-gray-700 ">
  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2 justify-center items-center">
        {fremont_data.map((data) => {
            return    <div class="flex flex-wrap sm:w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={data}>
                </img>
        </div>
      </div>

        })}
        
    </div>
  </div>
</section>
 <div className="py-4 flex justify-center">
            <div className="w-10/12 border-t border-gray-300"></div>
        </div>
<div class="text-5xl font-extrabold text-center   p-5 ">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
       College Reunions &rarr; 
  </span>
</div>
<section class="overflow-hidden text-gray-700 ">
  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2 justify-center items-center">
        {college_reunion_data.map((data) => {
            return    <div class="flex flex-wrap sm:w-1/3">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={data}>
                </img>
        </div>
      </div>

        })}
        
    </div>
  </div>
</section>


    </Fragment>
}