import React from "react";
import Image from "next/image";
import * as imgs from "../public"
import Link from "next/link";
import Ddm from "./ddm";
import Ddm2 from "./ddm_reunion";
export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900" >
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">

                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/" onClick={() => setNavbarOpen(!navbarOpen)}>               
                          <a

                            className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-white"
                            href="#"
                        >
                            <span className="flex justify-center items-center">
                            <Image src={imgs["logo"]} width={50} height={50}></Image>
                             <span className="px-5 font-light">

                                CVR Alumni
                            </span> 

                            </span>
                        </a>
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center " +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:items-center">
                           <li className="nav-item"

                            onClick={() => setNavbarOpen(!navbarOpen)}
                             >
                                <a
                                className="px-3 py-0 my-2 lg:m-0 flex items-center"
                                    href="#pablo"
                                >
                                    <Ddm2/>
                                    {/* <span className="ml-2">Alumni Engagement</span> */}
                                </a>
                            </li>
                            <li className="nav-item"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                <Link href="/reunion">
                                <a
                                    className="px-3 py-2 my-2 lg:m-0 flex items-center lg:text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Events</span>
                                </a>
                                </Link>
                            </li>
  <li className="nav-item"
                            onClick={() => setNavbarOpen(!navbarOpen)}
  >
      <Link href="/alumni">    
                                <a
                                    className="px-3 py-2 my-2 lg:m-0  flex items-center lg:text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2"> Wall of Fame </span>
                                </a>

       </Link>
                            </li>
                             <li className="nav-item"

                            onClick={() => setNavbarOpen(!navbarOpen)}
                             >
                                <a
                                className="px-3 py-0 my-2 lg:m-0 flex items-center"
                                    href="#pablo"
                                >
                                    <Ddm/>
                                    {/* <span className="ml-2">Alumni Engagement</span> */}
                                </a>
                            </li>
     <li className="nav-item"
                            onClick={() => setNavbarOpen(!navbarOpen)}
     >
        <Link href="/contact"

        >
                                <a
                                    className="px-3 py-2 my-2 lg:m-0 flex items-center lg:text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Contact Us</span>
                                </a>
                                </Link>
                            </li>                          
                          <a href="https://appalumni-4842d.web.app/" target="_blank" rel="noreferrer">
                            <li className="nav-item">
                                <button type="button" className=" my-4 lg:ml-3 lg:my-0 py-2 px-4 bg-gradient-to-r from-blue-300 to-blue-400 hover:from-blue-400 hoever:to-blue-500  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md   rounded-lg ">
                                    Get Involved
                                </button>
                            </li>
                          </a>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}