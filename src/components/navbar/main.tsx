import { useState } from "react";

export default function Navbar() {
    const [hamburgerBar, setHamburger] = useState(false);
    return (
        <>
            <nav className="p-7 flex justify-center bg-white justify-between flex-wrap p-7">
                <div className="lg:flex items-center flex-shrink-0 text-black mr-5 space-x-5">
                    <a href="/" className="text-black font-semibold">Fontyp</a>
                </div>
                <div className="lg:hidden block">
                    <button onClick={() => setHamburger(!hamburgerBar)}>
                        Home
                    </button>
                </div>
                <div className={`w-full lg:flex lg:items-center lg:w-auto`}>
                    <a
                        href="/nickname-converter"
                        className="block text-black mt-4 hover:bg-gray-800 p-3 lg:w-30 w-full lg:text-center hover:text-white  text-start w-full rounded-xl lg:inline-block  lg:mt-0 text-black"
                    >
                        Nickname
                    </a>
                    <a
                        href="/custom-nickname"
                        className="block text-black mt-4 hover:bg-gray-800 p-3 lg:w-30 w-full lg:text-center  hover:text-white text-start w-full rounded-xl lg:inline-block  lg:mt-0 text-black"
                    >
                        Custom
                    </a>
                    <a
                        href="/font"
                        className="block text-black mt-4 hover:bg-gray-800 p-3 lg:w-30 w-full lg:text-center  hover:text-white text-start w-full rounded-xl lg:inline-block  lg:mt-0 text-black"
                    >
                        Font
                    </a>
                    <a
                        href="/contact"
                        className="block text-black mt-4 hover:bg-gray-800 hover:text-white p-3 lg:w-30 w-full lg:text-center  text-start w-full rounded-xl lg:inline-block  lg:mt-0 text-black"
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </>
    );
}
