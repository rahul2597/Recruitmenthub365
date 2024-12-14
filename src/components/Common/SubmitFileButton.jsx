import { useState } from 'react';

const SubmitFileButton = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    if (file) {
      alert(`File ${file.name} has been submitted`);
   
    } else {
      alert('Please select a file first');
    }
  };

  return (
    <>
 <div className="flex border-slate-500 justify-center items-center border-2 rounded-lg p-2">
      <input
       type="file"
        onChange={(e)=>setFile(e.target.value)} value={file}
       
      />
     <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-1 rounded-md hover:bg-blue-600 transition duration-300"
      >
         Submit File
      </button>
     </div> 

    </>
  );
};

export default SubmitFileButton;

