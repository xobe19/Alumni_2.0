import React from "react";

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">

                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-white"
                            href="#"
                        >
                            <img src="/logo.png" width={50} height={50} className='inline-block align-middle'></img>
                            <span className="align-middle px-5">

                                CVR Alumni
                            </span>
                        </a>
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
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto sm:items-center">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 my-2 sm:m-0 flex items-center sm:text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2">News and Stories </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 my-2 sm:m-0 flex items-center sm:text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Events</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 my-2 sm:m-0  flex items-center sm:text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Alumni Engagement</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 my-2 sm:m-0  flex items-center sm:text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Illustrious Alumni </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className=" my-4 sm:ml-3 sm:my-0 py-2 px-4 bg-gradient-to-r from-blue-300 to-blue-400 hover:from-blue-400 hoever:to-blue-500  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md   rounded-lg ">
                                    Get Involved
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}