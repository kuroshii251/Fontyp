export default function Feature() {
    return (
        <>
            <div className="col pb-10" id="features">
                <div className="">
                    <h1 className="text-4xl font-bold text-center">Features</h1>
                    <div className="grid lg:grid-cols-3 grid-cols-1 lg:space-y-2 mx-auto space-y-5 items-center justify-center place-content-center place-items-center pt-20 ">
                        <div className="p-3 shadow-black h-80 rounded-md w-100  shadow-sm">
                            <div className="flex flex-col items-center justify-center">
                                <i className="fa-solid fa-pen-to-square text-5xl mt-10 mx-auto text-center text-black"></i>
                                <h1 className="text-center text-2xl pt-10 font-semibold">
                                    Nickname Template
                                </h1>
                                <p className="text-center pt-5 text-lg">
                                    You can styling your nickname by the
                                    nickname template
                                </p>
                                <a href="/nickname-converter" className="p-3 rounded-xl w-50 bg-black text-center text-white mt-3 font-semibold">Start</a>
                            </div>
                        </div>
                        <div className="p-3 shadow-black rounded-md h-80 w-100  shadow-sm">
                            <div className="flex flex-col items-center justify-center">
                                <i
                                    className="fa-regular text-5xl text-center pt-10 flex items-center mx-auto fa-face-grin"
                                    style={{ color: "black" }}
                                ></i>
                                <h1 className="text-center text-2xl font-bold pt-10">
                                    Custom
                                </h1>
                                <p className="text-center text-lg pt-5">
                                    You can create your own fancy text
                                </p>
                         <a href="/custom-nickname" className="p-3 rounded-xl w-50 bg-black text-center text-white mt-10 font-semibold">Start</a>

                            </div>
                        </div>
                        <div className="p-3 shadow-black rounded-md h-80 w-100  shadow-sm">
                            <div className="flex flex-col items-center justify-center">
                                <i className="fa-solid fa-font pt-10 text-5xl mx-auto text-center text-black"></i>
                                <h1 className="text-center text-2xl pt-10 font-semibold">
                                    Font
                                </h1>
                                <p className="text-center pt-5 text-lg">
                                    You can trying various of font and copy from
                                    the text results
                                </p>
                                <a href="/font" className="p-3 rounded-xl w-50 bg-black text-center text-white mt-3 font-semibold">Start</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
