import { useState } from "react";
import Footer from "../../components/footer/main";
import Navbar from "../../components/navbar/main";
import alphabet from "./alphabet.json";
import arrow from "./arrowsymbols.json";
import cost from "./costsymbols.json"

export default function CustomNickname(){
    const [symboltext, setSymbolText] = useState("");
    const [tab,  setTab] = useState("");
    const handleCopies = () => {
        navigator.clipboard.writeText(symboltext);
    }
        


    const handleSymbol = (symbolsstring) => {
        setSymbolText((string) => string + symbolsstring + ""  );
    }

    const handleTab = (id)  => {
        setTab(id);

    }

    return (
        <>
        <Navbar/>
        <div className="justify-center flex flex-col mx-auto items-center py-20">
            <div className="">
                <div className="">
                    <h1 className="text-center text-4xl font-bold mb-5">Custom Your Nickname</h1>
                    <div className="col pt-5">
                        <button className=" justify-center absolute bg-white p-3 rounded-l-lg " onClick={handleCopies}>
                            {handleCopies ?
                         <i className="fa-solid fa-clipboard-check"></i>

                             :
                          <i className="fa-solid fa-clipboard"></i>

                            }
                        </button>
                    <input type="text" value={symboltext} className="mx-auto text-center justify-center p-3 rounded-lg w-150 shadow-black shadow-sm" onChange={(e) => setSymbolText(e.target.value)}/>                </div>
                    </div>
                    <div className="flex justify-center mx-auto space-x-5 py-5 items-center">
                        <button onClick={() => handleTab(1)} className="p-2 w-30 rounded-xl bg-black text-white">Alphabet</button>
                         <button onClick={() => handleTab(2)}  className="p-2 w-30 rounded-xl bg-black text-white">Arrow</button>
                        <button onClick={() => handleTab(3)}  className="p-2 w-30 rounded-xl bg-black text-white">Cost</button>


                    </div>
                                    <div className={tab === 1 ? "active" : "hidden"}>
    <div className="grid grid-cols-12 py-7 space-x-5 space-y-5 ">
                         {alphabet.map((item) => (
                   <button onClick={() => handleSymbol(item)} className="p-3 rounded-lg bg-slate-100 shadow-black shadow-sm">{item}</button>
                    ))}
                </div>
                                    </div>



        
<div className={tab === 2 ? "block":"hidden"}>
  <div className="grid grid-cols-10 py-7 space-x-5 space-y-5 ">
                         {arrow.map((item) => (
                   <button onClick={() => handleSymbol(item)} className="p-3 rounded-lg bg-slate-100 shadow-black shadow-sm">{item}</button>
                    ))}
                </div>
</div>
              


<div className={tab === 3 ? "block":"hidden"}>
     <div className="grid grid-cols-10 py-7 space-x-5 space-y-5 ">
                         {cost.map((item) => (
                   <button onClick={() => handleSymbol(item)} className="p-3 rounded-lg bg-slate-100 shadow-black shadow-sm">{item}</button>
                    ))}
                </div>
</div>


               
            </div>

        </div>
        <Footer/>
        </>
    )
}