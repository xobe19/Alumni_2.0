import { Fragment } from "react/cjs/react.production.min";
import Image from "next/image";
import * as imgs from "../public";
import rename from "../helper_functions/babel_img_rename";
export default function Contact() {
    return <Fragment>

        <div className="bg-white overflow-hidden relative lg:flex lg:items-center mx-5">
            <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-4xl sm:text-7xl font-extrabold text-black">
                    <span className="block ">
                        Stay a part of our Community!
                    </span>
                </h2>
                <p className="text-md mt-4 text-gray-400 text-2xl">
                    Join the CVR Alumni Association and help craft our next batch of global leaders.
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <button type="button" className="py-2 px-4  bg-gradient-to-r from-blue-300 to-blue-400 hover:from-blue-400 hoever:to-blue-500  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md   rounded-lg ">
                            Register &rarr;
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-8 p-8 lg:p-24">
                <Image src={imgs[rename("/college-overview.jpg")]} className="rounded-lg w-1/2" alt="Tree" placeholder="blur"/>
                <div>
                    <Image src={imgs[rename("/college_overview_2.jpg")]} className="rounded-lg mb-8" alt="Tree" placeholder="blur"/>
                    <Image src={imgs[rename("/cricket_ground.png")]} className="rounded-lg" alt="Tree" placeholder="blur"/>
                </div>
            </div>
        </div>

        <div className="py-4 flex justify-center">
            <div className="w-10/12 border-t border-gray-300"></div>
        </div>
        <div className="container mx-auto px-6 p-6 bg-white ">
            <div className="mb-16 text-left">
                <h2 className="text-5xl  font-extrabold tracking-wide sm:text-6xl">
                    Ways you can give back &rarr;
                </h2>

            </div>
            <div className="flex flex-wrap my-12 ">
                <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                    <div className="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-blue-300" viewBox="0 0 20 20" >
                            <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                        </svg>
                        <div className="ml-4 text-4xl font-semibold">
                            Be a speaker
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 text-md">
                        Speak at one of our events <a href="#" className="underline text-blue-300 hover:text-blue-400 visited:text-blue-300">now</a>                     </p>
                </div>
                <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                    <div className="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-blue-300" viewBox="0 0 20 20" >
                            <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <div className="ml-4 text-4xl font-semibold">
                            Be a Mentor
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 text-md">
                        Help <a href="#" className="underline text-blue-300 hover:text-blue-400 visited:text-blue-300">mentor</a> our students
                    </p>
                </div>
                <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3  p-8">
                    <div className="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-blue-300" viewBox="0 0 20 20" fill="blue">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                        <div className="ml-4 text-4xl font-semibold">
                            Recruit
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 text-md">
                        Interested in recruiting from our campus? <a href="#" className="underline text-blue-300 hover:text-blue-400 visited:text-blue-300" >Click here</a>
                    </p>
                </div>
                <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                    <div className="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-blue-300" viewBox="0 0 20 20" >
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        <div className="ml-4 text-4xl font-semibold">
                            FDP&apos;s
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 text-md">
                        Conduct a <a href="#" className="underline text-blue-300 hover:text-blue-400 visited:text-blue-300" >FDP</a> at our college
                    </p>
                </div>
                <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                    <div className="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-blue-300" viewBox="0 0 20 20" >
                            <path d="M13 7H7v6h6V7z" />
                            <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                        </svg>
                        <div className="ml-4 text-4xl font-semibold">
                            Conduct a workshop
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 text-md">
                        Give a workshop on any relevant topic <a href="#" className="underline text-blue-300 hover:text-blue-400 visited:text-blue-300" > here</a>
                    </p>
                </div>

                <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                    <div className="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-blue-300" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        <div className="ml-4 text-4xl font-semibold">
                            MOU
                        </div>
                    </div>
                    <p className="leading-loose text-gray-500 text-md">
                        Click here to  <a href="#" className="underline text-blue-300 hover:text-blue-400 visited:text-blue-300" >reach us</a>
                    </p>
                </div>

            </div>

            <div className="text-5xl md:text-6xl font-extrabold">
                <span>Contact Us &rarr; </span>
            </div>
            <div className="text-xl text-gray-500 mt-10">
                <span>
                    You can reach out to us at the following <a href="#" className="underline text-blue-300 hover:text-blue-400 visited:text-blue-300">link</a>
                </span>
            </div>

        </div>

    </Fragment>
}