import { useState } from "react";

const Navbar = () =>{
    const [navbarIsOpen, setNavbarIsOpen] = useState<boolean>(false);

    return (
        <div className="relative flex flex-col items-end w-full">
            <div className="w-full px-2 bg-gray-400 flex items-center justify-between">
                <img className="h-20" src={`${process.env.PUBLIC_URL}/assets/yensy_logo.svg`} alt="" />
                <div className="flex items-center h-full">
                    <span className="mx-3 font-bold">Yensy Gonzalez</span>
                    <div className="h-12 w-12 border-2 border-gray-600 rounded-full bg-gray-300 cursor-pointer" onClick={()=>setNavbarIsOpen(!navbarIsOpen)}/>
                </div>
            </div>            
            <div className={`${navbarIsOpen ? "absolute" : "hidden"} h-14 -bottom-14 right-0 w-36 flex items-center justify-end bg-white border border-black px-4`}>
                <span className="text-md font-semibold">Logout</span>
                {/* <span className="py-4">Other Options</span> */}
            </div>
        </div>

    )
}

export default Navbar;