//input
//dropdown
//file upload
// button

// const Input = () => {
//   return (
//    <>
//    <input type="text" placeholder="Name" className="border-2 border-slate-300 bg-black text-[1.rem] font-semibold rounded-full px-3 py-3 text-slate-100" />
//    </>
//   )
// }

// export default Input 


const Input = ({name,value,onChange,placeholder}) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border-2 border-slate-300 bg-black text-[1rem] font-semibold rounded-full p-2 text-slate-100"
    />
  );
};

export default Input;
