import Footer from "../../components/footer/main";
import Navbar from "../../components/navbar/main";

export default function ContactPage(){
    return (
        <>
        <Navbar/>
        <div className=" justify-center items-center pt-20 h-200">
            <div className="mx-auto ">  
   <h1 className="text-center text-4xl font-bold">Contact</h1>
            <p className="text-center w-120 mt-5 mx-auto">If you have any question about Fontyp, or if you wan't request anyting about the feature, contact us here</p>
            </div>
         
            <div className="flex justify-center  items-center pt-10">
                <form action="https://formspree.io/f/meaaqdpv" method="POST">
                    <div className="">
                    <h1>Email</h1>
                <input type="email" name="email"  className="p-2 lg:w-150 w-100 shadow-black shadow-sm rounded-md" placeholder="Email..."/>
                    </div>

<div className="mt-5">
 <h1>Message</h1>
                <textarea name="message" className="resize-none p-2 lg:w-150 w-100 shadow-black shadow-sm rounded-md h-50" placeholder="Fill message..." />
</div>
               

                <button type="submit" className="mx-auto bg-black text-white flex justify-center items-center shadow-black w-50 text-center mt-5 shadow-sm p-3 rounded-md font-semibold hover:bg-zinc-900">Submit</button>
                </form>

            </div>
        </div>

        <Footer/>
        </>
    )
}