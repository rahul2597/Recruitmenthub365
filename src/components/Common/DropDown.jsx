// import { useState } from "react";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { IoMdClose } from "react-icons/io";


// const DropDownSkills = () => {
//   const [selectedSkills, setSelectedSkills] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const skills = ["Golang", "Java", "JavaScript", "Python", "C++", "Ruby","salesforce"];

//   const handleSkillSelect = (skill) => {
//     if (!selectedSkills.includes(skill)) {
//       setSelectedSkills((prev) => [...prev, skill]);
//     }
//     setShowDropdown(false);
//   };

//   const handleRemoveSkill = (skill) => {
//     setSelectedSkills((prev) => prev.filter((s) => s !== skill));
//   };

//   return (
//     <div className="relative">
//       <label htmlFor="skills-input" className="block font-semibold mb-2">
//         Select Skills:
//       </label>
//       <div className="flex flex-wrap items-center border-slate-300 border-2 rounded-full bg-black ">
//         {selectedSkills.map((skill) => (
//           <div
//             key={skill}
//             className="flex items-center justify-center bg-blue-500 text-white rounded-3xl text-sm m-1 px-1"
//           >
//             <span>{skill}</span>
//             <IoMdClose
//               className="ml-2 cursor-pointer text-sm"
//               onClick={() => handleRemoveSkill(skill)}
//             />
//           </div>
//         ))}
//         <input
//           type="text"
//           id="skills-input"
//           readOnly
//           onClick={() => setShowDropdown((prev) => !prev)}
//           className="flex-grow p-2 border-none rounded-full cursor-pointer bg-transparent outline-none text-white"
//           placeholder="Select a skill"
//         />
//         <IoMdArrowDropdown className="text-slate-300 text-lg" />
//       </div>
//       {showDropdown && (
//         <ul className="absolute z-10 w-full bg-slate-700 border border-gray-300 rounded-md mt-1 max-h-48 overflow-auto shadow-lg">
//           {skills
//             .filter((skill) => !selectedSkills.includes(skill))
//             .map((skill) => (
//               <li
//                 key={skill}
//                 onClick={() => handleSkillSelect(skill)}
//                 className="p-2 hover:bg-blue-100 cursor-pointer"
//               >
//                 {skill}
//               </li>
//             ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default DropDownSkills;


import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const DropDown = ({ label, options, selected, onSelect }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (option) => {
    if (!selected.includes (option)) {
      onSelect(option);
    }
    setShowDropdown(false);
  };

  const handleRemove = (option) => {
    onSelect(option, true); // Remove if already selected
  };

  return (
    <div className="relative">
      <label className=" font-semibold mb-2">{label}</label>
      <div className="flex flex-wrap items-center border-slate-300 border-2 rounded-full bg-black">
        {selected.map((item) => (
          <div
            key={item}
            className="flex items-center justify-center bg-blue-500 text-white rounded-3xl text-sm m-1 px-1"
          >
            <span>{item}</span>
            <IoMdClose
              className="ml-2 cursor-pointer text-sm"
              onClick={() => handleRemove(item)}
            />
          </div>
        ))}
        <input
          type="text"
          readOnly
          onClick={() => setShowDropdown((prev) => !prev)}
          className="flex-grow p-2 border-none rounded-full cursor-pointer bg-transparent outline-none text-white"
          placeholder={`Select ${label}`}
        />
        <IoMdArrowDropdown className="text-slate-300 text-lg" />
      </div>
      {showDropdown && (
        <ul className="absolute z-10 w-full bg-slate-700 border border-gray-300 rounded-md mt-1 max-h-48 overflow-auto shadow-lg">
          {options
            .filter((option) => !selected.includes(option))
            .map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className="p-2 hover:bg-blue-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;


