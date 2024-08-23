import { useState , useEffect } from "react";
import logo from ".././assets/logo.svg"
const Navbar = () => {
    const[scrolling, setScrolling] = useState(false)
     const handleScroll=() =>{
        if (window.scrollY >10) {
         setScrolling(true);
        }else{
            setScrolling(false);
        }
     };

        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    return ( 
        <>
        <nav className ={` bg-gray-100 fixed top-0 z-20 w-full py-4 px-6 flex items-center justify-between  ${scrolling ? 'bg-gray-100' : 'bg-transparent'}`}>
       
            <img src={logo} alt="Logo" className="mr-[3%] ml-[2%] size-[6%]" />

            <div className="hidden xl:flex space-x-20 ">
                <a href="#" className="text-lg popsbold text-gray-700 hover:text-gray-900 transition">Home</a>
                <a href="#" className="text-lg popsbold text-gray-700 hover:text-gray-900 transition">About Us</a>
                <a href="#" className="text-lg popsbold text-gray-700 hover:text-gray-900 transition">Features</a>
                <a href="#" className="text-lg popsbold text-gray-700 hover:text-gray-900 transition">Pricing</a>
                <a href="#" className="text-lg popsbold text-gray-700 hover:text-gray-900 transition">Contact</a>
            </div>

            <div className="space-x-8">
                <button className="bg-yellow-500 text-white popbold text-base py-3 px-12 rounded-full hover:bg-yellow-600 transition">
                    Log In
                </button>
                <button className="bg-white text-black popbold text-base py-3 px-12 rounded-full border-2 border-black hover:bg-gray-100 transition">
                Sign in
                </button>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;