export default function Hero() {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="w-150 space-y-5 ">
                    <h1 className="text-5xl text-black text-center font-bold">
                        Nickname Font Generator
                    </h1>
                    <h1 className="text-4xl text-black text-center font-bold">
                        For your stylish profile
                    </h1>
                    <p className="text-center w-100 mx-auto">
                        Make your nickname's look the way you want. Explore
                        another styles, find your favorite design
                    </p>
                    <div className="mx-auto flex justify-center items-center">
                        <a className="bg-zinc-900 p-3 text-white hover:bg-black w-50 font-semibold text-center rounded-xl mx-auto mt-3 ">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
