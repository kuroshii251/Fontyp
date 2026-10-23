import { useState } from "react";
import Footer from "../../components/footer/main";
import Navbar from "../../components/navbar/main";
import alphabet from "./alphabet.json";
import arrow from "./arrowsymbols.json";
import cost from "./costsymbols.json"

export default function CustomNickname(){
    const [symboltext, setSymbolText] = useState("");
    const [tab,  setTab] = useState(0);
    const handleCopies = () => {
        navigator.clipboard.writeText(symboltext);

        if(symboltext.length === 0){
            alert("Error, please fill the input");
        } else {
         alert("Text Copied");

        }

        
    }
        


    const handleSymbol = (symbolsstring: any) => {
        setSymbolText((string) => string + symbolsstring + ""  );
        setSymbolText
    }



    const handleTab = (id: number)  => {
        setTab(id);

    }

    return (
        <>
        <Navbar/>
        <div className="justify-center flex flex-col mx-auto items-center py-20">
            <div className="">
                <div className="">
                    <h1 className="text-center text-4xl font-bold mb-5">Custom Your Fancy Nickname</h1>
                    <div className="col pt-5">
                        <button className=" justify-center absolute bg-white p-3 rounded-l-lg " onClick={handleCopies}>
                          <i className="fa-solid fa-clipboard"></i>

                            
                        </button>
                    <input type="text" value={symboltext} className="mx-auto text-center justify-center p-3 rounded-lg lg:w-150 w-100 shadow-black shadow-sm" onChange={(e) => setSymbolText(e.target.value)}/>                </div>
                    </div>
                    <div className="flex justify-center mx-auto space-x-5 py-5 items-center">
                        <button onClick={() => handleTab(0)}  className="p-2 w-30 rounded-xl bg-black text-white">All</button>
                        <button onClick={() => handleTab(1)} className="p-2 w-30 rounded-xl bg-black text-white">Alphabet</button>
                         <button onClick={() => handleTab(2)}  className="p-2 w-30 rounded-xl bg-black text-white">Arrow</button>
                        <button onClick={() => handleTab(3)}  className="p-2 w-30 rounded-xl bg-black text-white">Cost</button>


                    </div>

  <div className={tab === 0 ? "active" : "hidden"}>
    <div className="grid lg:grid-cols-10 grid-cols-5 py-7 space-x-5 space-y-5 ">
                         {alphabet.map((item) => (
                   <button onClick={() => handleSymbol(item)} className="p-3 rounded-lg bg-slate-100 shadow-black shadow-sm">{item}</button>
                    ))}
                </div>
    <div className="grid lg:grid-cols-10 grid-cols-5 py-7 space-x-5 space-y-5 ">
            {arrow.map((item2) => (
                   <button onClick={() => handleSymbol(item2)} className="p-3 rounded-lg bg-slate-100 shadow-black shadow-sm">{item2}</button>
                    ))}
                    </div>
                        <div className="grid lg:grid-cols-10 grid-cols-5 py-7 space-x-5 space-y-5 ">
                      {cost.map((item3) => (
                   <button onClick={() => handleSymbol(item3)} className="p-3 rounded-lg bg-slate-100 shadow-black shadow-sm">{item3}</button>
                    ))}
                    </div>
                </div>
                    
                                    <div className={tab === 1 ? "active" : "hidden"}>
    <div className="grid lg:grid-cols-10 grid-cols-5 py-7 space-x-5 space-y-5 ">
                         {alphabet.map((item) => (
                   <button onClick={() => handleSymbol(item)} className="p-3 rounded-lg bg-slate-100 shadow-black shadow-sm">{item}</button>
                    ))}
                </div>
                                    </div>



        
<div className={tab === 2 ? "block":"hidden"}>
  <div className="grid lg:grid-cols-10 grid-cols-5 py-7 space-x-5 space-y-5 ">
                         {arrow.map((item) => (
                   <button onClick={() => handleSymbol(item)} className="p-3 rounded-lg bg-slate-100 shadow-black shadow-sm">{item}</button>
                    ))}
                </div>
</div>
              


<div className={tab === 3 ? "block":"hidden"}>
     <div className="grid lg:grid-cols-10 grid-cols-5 py-7 space-x-5 space-y-5 ">
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