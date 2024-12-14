// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   return (
//     <nav className="w-[90%] flex flex-wrap justify-between items-center bg-transparent absolute top-8 ml-12 space-y-4 sm:space-y-0">
//       <div className="flex items-center space-x-2">
//         <img
//           src={logo}
//           alt="Logo"
//           className="w-14 h-14 rounded-full"
//         />
//         <div>
//           <h1 className="text-[1.5rem] font-semibold">Recruitment Hub</h1>
//           <p className="text-blue-300 font-semibold text-[1.2rem]">
//             365
//           </p>
//         </div>
//       </div>

//       <div className="flex justify-between items-center bg-slate-500 px-6 py-2 rounded-full w-full sm:w-[50%] sm:mr-8 space-x-4">
//         <Link to="/" className="text-[1rem] sm:text-[1.3rem] font-semibold text-slate-100">
//           Home
//         </Link>
//         <Link to="/about" className="text-[1rem] sm:text-[1.3rem] font-semibold text-slate-100">
//           About
//         </Link>
//         <Link to="/jobopening" className="text-[1rem] sm:text-[1.3rem] font-semibold text-slate-100">
//           JobOpening
//         </Link>
//         <Link to="/contact" className="text-[1rem] sm:text-[1.3rem] font-semibold text-slate-100">
//           Contact
//         </Link>
//       </div>

//       <button className="relative bg-slate-600 rounded-3xl px-6 py-3  text-sm sm:text-base text-white font-semibold overflow-hidden group">
//         <span className="absolute inset-0 rounded-3xl border-2 border-transparent before:absolute before:inset-0 before:rounded-3xl before:border before:border-yellow-400 before:animate-snake before:bg-gradient-to-r before:from-yellow-400 before:via-blue-500 before:to-red-400 before:bg-[length:200%] before:z-0 before:opacity-70 group-hover:opacity-100"></span>
//         <span className="relative z-10">Submit CV</span>
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import FormSubmit from "./FormSubmit"; 
const Navbar = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <>
      <nav className="w-[90%] flex flex-wrap justify-between items-center bg-transparent absolute top-8 ml-12 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-14 h-14 rounded-full" />
          <div className="flex flex-col justify-center items-center font-serif">
            <h1 className="text-[1.5rem] font-semibold text-white">Recruitment Hub</h1>
            <p className="text-blue-300 font-semibold text-[1.2rem]">365</p>
          </div>
        </div>

        <div className="flex justify-between items-center bg-slate-800 px-6 py-2 rounded-full w-full sm:w-[50%] sm:mr-8 space-x-4">
          <Link to="/" className="text-[1rem] font-semibold text-slate-100 hover:underline ">
            Home
          </Link>
          <Link to="/about" className="text-[1rem] font-semibold text-slate-100 hover:underline">
            About
          </Link>
          <Link to="/jobopening" className="text-[1rem]  font-semibold text-slate-100 hover:underline">
            JobOpening
          </Link>
          <Link to="/contact" className="text-[1rem] font-semibold text-slate-100 hover:underline">
            Contact
          </Link>
        </div>

        <button
          onClick={toggleFormVisibility}
          className="relative bg-slate-600 rounded-3xl px-6 py-3 text-sm sm:text-base text-white font-semibold overflow-hidden group"
        >
          <span className="absolute inset-0 rounded-3xl border-2 border-transparent before:absolute before:inset-0 before:rounded-3xl before:border before:border-yellow-400 before:animate-snake before:bg-gradient-to-r before:from-yellow-400 before:via-blue-500 before:to-red-400 before:bg-[length:200%] before:z-0 before:opacity-70 group-hover:opacity-100"></span>
          <span className="relative z-10">Submit CV</span>
        </button>
      </nav>

   
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-80">
          <div className="relative rounded-lg p-6">
            {/* Close button */}
            <button
              onClick={toggleFormVisibility}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            {/* FormSubmit Component */}
            <FormSubmit />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
