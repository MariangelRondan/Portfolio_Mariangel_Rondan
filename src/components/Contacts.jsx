import React from "react";

const Contact = () => {

    return (
        <div id="contact" className="text-[var(--main-text)] font-bold max-w-[1048px] mt-[20%]  flex- flex-col  items-center m-auto md:pl-20 p-4 py-16  shadow-xl bg-[#ffc7a2] shadow-gray-400 rounded-xl ">
<h1 className="py-4 text-bold text-center  font-bold uppercase text-3xl" >Contact me</h1>
        <form action="https://getform.io/f/lajnnoqa" method="POST" encType="multipart/form-data" >
            <div className="grid md:grid-cols-2 gap-1  py-2 ml-19">
           <div  className="m-4">
           <div className=" md:col-span-2 gap-4 w-full ">
                    <label className="uppercase text-sm py-2">Name</label>
                <input className="border-2 rounded-lg p-3 flex w-full border-gray-300"  type="text" name='name' />
                </div>
                <div className="  md:col-span-2 gap-4 w-full  ">
                    <label className="uppercase text-sm py-2">Email</label>
                <input className="border-2 rounded-lg p-3 flex w-full border-gray-300"  type="email" name='email' />
                </div>
                <div className=" md:col-span-2 gap-4 w-full  py-2"> 
                    <label className="uppercase text-sm py-2">Subject</label>
                <input className="border-2 rounded-lg p-3 flex w-full border-gray-300"  type="text" name='subject' />
                </div>
                </div>
                <div className="m-4 mt-4 mr-10">
                <label className="uppercase text-sm py-2 ">Message</label>
                <textarea className="border-2 rounded-lg p-3 w-full mt-2 flex" rows={7} name='message' ></textarea>
                </div>
            
                </div>
            <button className="bg-[var(--main-text)] text-gray-100 mt-4 ml-[30%] p-4 rounded-lg w-96">
                Send
            </button>
        </form>
        
        </div>
    )
}


export default Contact