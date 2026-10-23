export default function Footer() {
    return (
        <>
            <div className="bg-black p-3  ">
                <div className="flex space-between space-y-5 p-5 ">
                    <div className="w-1/2">
                        <div className="">
                            <h1 className="text-white font-semibold text-4xl">
                                Fontyp
                            </h1>
                            <p className="text-white mt-5">
                                Fontyp is a online Stylish Name Generator. Fontyp
                        converts the text into different fonts, symbols, emoji,
                        and name styles.
                            </p>
                        </div>
                    </div>
                 

                    <div className="col w-1/4 mt-5">
                        <h1 className="text-white">Resources</h1>
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
