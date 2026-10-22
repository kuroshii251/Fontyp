import Footer from "../../components/footer/main";
import Navbar from "../../components/navbar/main";

export default function ContactPage(){
    return (
        <>
        <Navbar/>
        <div className=" justify-center items-center pt-20 h-200">
            <div className="mx-auto ">  
   <h1 className="text-center text-4xl font-bold">Contact</h1>
            <p className="text-center w-120 mt-5 mx-auto">If you have any question about Fontyp, or if you wan't request anyting about feature, contact here</p>
            </div>
         
            <div className="flex justify-center  items-center pt-10">
                <form action="" method="POST">
                    <div className="">
  <h1>Email</h1>
                <input type="text"  className="p-2 w-100 shadow-black shadow-sm rounded-md" placeholder="Email..."/>
                    </div>

<div className="mt-5">
 <h1>Message</h1>
                <textarea className="resize-none p-2 w-100 shadow-black shadow-sm rounded-md h-50" placeholder="Fill message..." />
</div>
               

                <button type="submit" className="mx-auto bg-black text-white flex justify-center items-center shadow-black w-50 text-center mt-5 shadow-sm p-3 rounded-md">Submit</button>
                </form>

            </div>
        </div>

        <Footer/>
        </>
    )
}