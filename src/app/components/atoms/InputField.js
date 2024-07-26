function InputField({
  placeholder,
  heading,
  style,
  icon,
  type,
  onChange,
  value,
  disabled,
}) {
  return (
    <div className={`w-full ${style}`}>
      <a className="text-sm  opacity-60 ">{heading}</a>
      <div className="border rounded-tl-xl rounded-br-xl mt-1 border-gray-200 py-2 px-3 justify-between flex flex-row items-center">
        <input
          disabled={disabled}
          value={value}
          type={type}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-4/5 outline-none text-sm py-1 ${
            disabled ? "text-gray-500" : null
          }`}
        />

        {icon}
      </div>
    </div>
  );
}
export default InputField;
