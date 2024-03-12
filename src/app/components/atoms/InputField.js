function InputField({ placeholder, heading, style, icon, type }) {
  return (
    <div className={`w-full ${style}`}>
      <a className="text-sm  opacity-60 ">{heading}</a>
      <div className="border rounded-tl-xl rounded-br-xl mt-1 border-gray-200 py-2 px-3 justify-between flex flex-row items-center">
        <input
          type={type}
          placeholder={placeholder}
          className="w-4/5 outline-none text-sm py-1"
        />

        {icon}
      </div>
    </div>
  );
}
export default InputField;
