// // import Button from "./Common/Button"
// // import DropDownSkills from "./Common/DropDownSkills"
// // import Input from "./Common/Input"
// // import SubmitFileButton from "./Common/SubmitFileButton"


// // const FormSubmit = () => {
// //   return (
// //   <>
// //   <div className="w-full bg-slate-800 p-6 rounded-2xl flex flex-col space-y-8 ">
// //     <div className="flex space-x-4">
// //     <Input/>
// //     <Input/>
// //     </div>

// //   <DropDownSkills/>
 
// //   <SubmitFileButton/>

// //   <Button/>
// //   </div>

// //   </>
// //   )
// // }

// // export default FormSubmit

import { useState } from "react";
import Button from "./Common/Button";
import DropDown from "./Common/DropDown";
import Input from "./Common/Input";
import SubmitFileButton from "./Common/SubmitFileButton";

const FormSubmit = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    number: "",
    notice:"",
    skills: [],
    experience: [],
  });

  const skills = ["Golang", "Java", "JavaScript", "Python", "C++", "Ruby", "Salesforce"];
  const experienceRanges = ["1-3 years", "3-6 years", "6-9 years", "9+ years"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDropdownChange = (key, value, remove = false) => {
    setFormInput((prev) => ({
      ...prev,
      [key]: remove
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation (basic example)
    if (!formInput.name || !formInput.email || !formInput.number) {
      alert("Please fill in all required fields!");
      return;
    }

    console.log("Form Submitted:", formInput);
    // Perform additional actions like API calls here
  };

  return (
    <>
  <form onSubmit={handleSubmit}>
      <div className="w-full bg-slate-800 p-6 rounded-2xl flex flex-col space-y-6">
        {/* Name and Email Inputs */}
        <div className="flex space-x-4">
          <Input
            name="name"
            value={formInput.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <Input
            name="email"
            value={formInput.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>

    
   {/* Phone Number and File Upload */}
   <div className="flex space-x-4">
          <Input
            name="number"
            value={formInput.number}
            onChange={handleChange}
            placeholder="Phone Number"
          />
            <Input
            name="number"
            value={formInput.notice}
            onChange={handleChange}
            placeholder="Notice Period"
          />
         
        </div>

       

        {/* Dropdowns for Skills and Experience */}
        <div className="flex space-x-4">
          <DropDown
            label="Skills"
            options={skills}
            selected={formInput.skills}
            onSelect={(value, remove) => handleDropdownChange("skills", value, remove)}
          />
          <DropDown
            label="Experience"
            options={experienceRanges}
            selected={formInput.experience}
            onSelect={(value, remove) => handleDropdownChange("experience", value, remove)}
          />
        </div>

        <SubmitFileButton />
        

        {/* Submit Button */}
        <Button type="submit" label="Submit" />
      </div>
    </form>


    </>
  
  );
};

export default FormSubmit;
