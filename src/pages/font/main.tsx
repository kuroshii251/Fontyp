import { useState } from "react";
import transformText from 'fancy-text-generator';
import Navbar from "../../components/navbar/main";
import Footer from "../../components/footer/main";

export default function FontPage(){
    const [inputname, setInputName] = useState('');
    const [copyText, setCopyText] = useState<Number | null>(null);
    const handleCopyText = (textFont: string, id: number) => {
        navigator.clipboard.writeText(textFont);
        setCopyText(id);
    }

    const fontDatas = [
        {id:1,fontname:"Bold", stylefont:"bold"},
        {id:2,fontname:"Italic", stylefont:"italic"},
        {id:3,fontname:"Script", stylefont:"script"},
        {id:4,fontname:"Fraktur",  stylefont:"fraktur"},
        {id:5,fontname:"Monospace", stylefont:"monospace"},
        {id:6,fontname:"Underline", stylefont:"underline"},
        {id:7,fontname:"Strikethrough", stylefont:"strikethrough"},
        {id:8,fontname:"Superscript", stylefont:"superscript"},
        {id:9,fontname:"Subscript", stylefont:"subscript"},
        {id:10,fontname:"Fancy 1", stylefont:"fancy1"},
        {id:11,fontname:"Fancy 2", stylefont:"fancy2"},
        {id:12,fontname:"Fancy 3", stylefont:"fancy3"},
        {id:13,fontname:"Bold Italic", stylefont:"boldItalic"}
    ];

    return (
        <>
        <Navbar/>
        <div className="flex-1 justify-center items-center h-180 p-10">
            <div className="grid grid-cols-2 shadow-black shadow-sm rounded-xl">
   <div className=" items-center justify-center pt-20">
   
    <div className="pb-10">
  <h1 className="text-4xl text-center font-bold mb-3">Fancy Text</h1>
                    <p className="text-center text-md">Input your name and copy your stylish name</p>
    </div>
                  

                <input type="text" value={inputname} className="p-4 w-100 flex justify-center items-center mx-auto rounded-lg shadow-black shadow-sm" onChange={(e) => setInputName(e.target.value)} placeholder="Input Your Name"/>

            </div>
             <div className="grid grid-cols-1 space-y-5 gap-10 pt-10 overflow-y-auto h-100">
                {fontDatas.map((itemFont) => {
                    const converttofont = transformText(inputname, itemFont.stylefont )
                    return (
                        <div className="p-5 w-100 h-50 shadow-black shadow-sm rounded-xl" key={itemFont.id}>
                            <div className="flex">
  <button onClick={() => handleCopyText(converttofont, itemFont.id)}>

                                {copyText === itemFont.id ?  (
                        <i className="fa-solid fa-clipboard-check"></i>
                                ) : (

                                <i className="fa-solid fa-clipboard"></i>
                                )
                                }

                            </button>
                                <h1 className="text-center mx-auto">{itemFont.fontname}</h1>
                            </div>
                          
                            <div className="flex justify-center items-center">
                                <h1 className="text-lg break-all">{converttofont}</h1>
                            </div>
                        </div>
                    )
                    

                })}
            </div>
            </div>
         
           
        </div>
        <Footer/>
        </>
    )
}