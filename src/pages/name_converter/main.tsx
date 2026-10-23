import { useState } from "react";
import Navbar from "../../components/navbar/main";
import Footer from "../../components/footer/main";

const data = [
    { id: 1, first_symbol: "𒆜", last_symbol: "𒆜" },
    { id: 2, first_symbol: "ᴹᴿ°᭄★", last_symbol: "࿐⓿❼" },
    { id: 3, first_symbol: "🍁•", last_symbol: "•🍁" },
    { id: 4, first_symbol: "『", last_symbol: "』•ᴮᴬᴰʙᴏʏツ" },
    { id: 5, first_symbol: "Iam ", last_symbol: "愛" },
    { id: 6, first_symbol: "Oɴʟʏ", last_symbol: "모 ⸙" },
    { id: 7, first_symbol: "I’m ", last_symbol: "🇧🇷" },
    { id: 8, first_symbol: "꧁༺", last_symbol: "༻꧂" },
    { id: 9, first_symbol: "", last_symbol: "ツ" },
    { id: 10, first_symbol: "Whos ", last_symbol: "ぷ" },
    {id: 11, first_symbol: "⌗!! ꒰  ", last_symbol: "  ꒱ 🥝"},
    {id: 12, first_symbol: "*ੈ✩‧₊˚", last_symbol: "*ੈ✩‧₊˚"},
    {id: 13, first_symbol: "𐔌  ₊ ", last_symbol: " 𐙚 ꒱.˚࿔ "},
    {id: 14, first_symbol: "✮`,— ", last_symbol: " .ᐟ.ᐟ "},
    {id: 15, first_symbol: "⋆˚࿔ ", last_symbol: "𝜗𝜚˚⋆"},
    {id: 16, first_symbol: "「 ✦  ", last_symbol: " ✦ 」"},
    {id: 17, first_symbol: "⠀︵⠀", last_symbol: " ⠀◌Ⳋ𝅄 "},
    {id: 18, first_symbol: "⋆˚࿔ ", last_symbol: "𝜗𝜚˚⋆"},
    {id: 19, first_symbol: "𐔌 . ⋮ ", last_symbol: " .ᐟ ֹ ₊ ꒱ "},
    {id: 20, first_symbol: "《★~ ", last_symbol: " ~★ 》"},

];

export default function NameConverter() {
    const [name, setName] = useState("");
    const [copy, setCopy] = useState("");
    const handleCopyText = (id) => {
        const name = document.getElementById("name").textContent.trim();
        navigator.clipboard.writeText(name);
        setCopy(id);
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center py-20">
                <div className="p-3 ">
                    <div className="col space-y-5">
                        <div className="col pb-3">
 <h1 className="text-center font-bold text-4xl">Nickname Converter</h1>
                        <p className="text-center text-xl">
                            Input your name and copy your best fancy text
                        </p>
                        </div>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Input your name"
                            className="p-3 lg:w-200 w-100 mt-2 rounded-md mx-auto flex justify-center items-center shadow-black shadow-sm border border-black border border-black"
                        />
                    </div>

                    <div className="col pt-5">
                        <div className="grid lg:grid-cols-2 grid-cols-1 space-y-3 space-x-3">
                            {data.map((item) => (
                                <div
                                    key={item.id}
                                    className="p-4 shadow-black w-100 rounded-md shadow-sm"
                                >
                                    <div className="flex ">
                                        <button
                                            onClick={() =>
                                                handleCopyText(item.id)
                                            }
                                        >
                                            {copy === item.id ? 
                                                    <i className="fa-solid fa-clipboard-check"></i>
                                             : 
                                                <i className="fa-solid fa-clipboard"></i>
                                            }
                                        </button>

                                        <h1
                                            id="name"
                                            className="w-90 text-center break-all p-2 "
                                        >
                                            {item.first_symbol +
                                                (name || "Jackson") +
                                                item.last_symbol}
                                        </h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
