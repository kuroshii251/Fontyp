export default function Footer() {
    return (
        <>
            <div className="bg-black p-3">
                <div className="lg:flex block space-between space-y-5 p-5 ">
                    <div className="w-1/2">
                        <div className="">
                            <h1 className="text-white font-semibold text-3xl">
                                Fontyp
                            </h1>
                            <p className="text-white mt-5 w-auto">
                                Fontyp is a online Stylish Name Generator. Fontyp
                        converts the text into different fonts, symbols, emoji,
                        and name styles.
                            </p>
                        </div>
                    </div>
                 

                    <div className="col w-1/4 mt-8">
                        <h1 className="text-white font-semibold">Menu</h1>
                        <ul>
                            <li className="mt-3">
                                <a href="/nickname-converter" className="text-white">
                                    Nickname
                                </a>
                            </li>
                            <li className="mt-3">
                                <a
                                    href="/custom-nickname"
                                    className="text-white"
                                >
                                    Custom
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="/font" className="text-white">
                                    Font
                                </a>
                            </li>

                            <li className="mt-3">
                                <a href="/contact" className="text-white">
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
