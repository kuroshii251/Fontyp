export default function Footer() {
    return (
        <>
            <div className="bg-black p-3  ">
                <div className="grid grid-cols-3 p-5 ">
                    <div className="w-1/2">
                        <div className="">
                            <h1 className="text-white font-semibold text-4xl">
                                Fontyp
                            </h1>
                            <p className="text-white mt-5">
                                Fontyp is a online Stylish Nickname Generator
                                and Fancy Generator. Fontyp converts the
                                regulaar text into different cool fonts,
                                symbols, emoji, and nickname styles.
                            </p>
                        </div>
                    </div>
                    <div className="col w-1/2">
                        <h1 className="text-white">Menu</h1>
                        <ul>
                            <li className="mt-3">
                                <a
                                    href=""
                                    className="text-white  font-semibold"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="" className="text-white">
                                    About
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="" className="text-white">
                                    Features
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col w-1/4">
                        <h1 className="text-white">Resources</h1>
                        <ul>
                            <li className="mt-3">
                                <a href="" className="text-white font-semibold">
                                    Name
                                </a>
                            </li>
                            <li className="mt-3">
                                <a
                                    href=""
                                    className="text-white  font-semibold"
                                >
                                    Keyboard
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="" className="text-white">
                                    Font
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="" className="text-white">
                                    Blog
                                </a>
                            </li>

                            <li className="mt-3">
                                <a href="" className="text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className=""></div>
                </div>
            </div>
        </>
    );
}
