import { FiCheck } from "react-icons/fi";

function SelectLogin({ active, icon, value, text, id, onClick }) {
  return (
    <div
      onClick={() => onClick(id)}
      className={`duration-300 cursor-pointer mt-10 rounded-br-xl rounded-tl-xl flex flex-row items-center  border  py-2 px-2  w-full justify-between ${
        active === id ? "border-secondary" : "border-gray-300"
      }`}
    >
      <div className="flex flex-row w-11/12	">
        <div
          className={`h-8 w-8   rounded-full items-center justify-center flex ${
            active === id
              ? "backgroud-secondary text-white"
              : "bg-gray-300 text-gray-600"
          }`}
        >
          {icon}
        </div>
        <div className="flex flex-col color-black text-sm text-gray-800 mx-2 border-secondary">
          <a>{value}</a>
          <a className="text-xs text-gray-600">{text}</a>
        </div>
      </div>
      {active === id && (
        <div className="h-5 w-5 backgroud-secondary  rounded-full items-center justify-center flex mx-2">
          <FiCheck className="text-sm color-secondary" />
        </div>
      )}
    </div>
  );
}
export default SelectLogin;
