import { useEffect, useRef, useState } from "react";
import { InputField, Button } from "@/app/components/atoms";
import { CiEdit } from "react-icons/ci";
import Image from "next/image";
import { User } from "@/functions/user";
function Dashboard() {
  const fileInputRef = useRef(null); // Create a ref for the file input
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [user, setUser] = useState(null);
  const [disabled, setDisabled] = useState(false);

  function handleClick() {
    fileInputRef.current.click();
  }

  function handleSelectImage(e) {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];

      // Check if the selected file is either PNG or SVG
      if (
        selectedImage.type === "image/png" ||
        selectedImage.type === "image/svg+xml"
      ) {
        setImage(selectedImage);
        setImage2(URL.createObjectURL(selectedImage));
      } else {
        // Show an alert if the file type is not PNG or SVG
        alert("Please upload a PNG or SVG file.");
        // Optionally, you can reset the file input to clear the selected file
        e.target.value = null;
      }
    }
  }
  useEffect(() => {
    if (User()?.user) {
      setUser(User()?.user);
      console.log("User()?.user", User()?.user);
    }
  }, []);
  console.log("user", user);
  function onInputChange() {}
  return (
    <div className="">
      <div className="flex flex-col">
        <a className="font-4rth color-purpul">Profile</a>

        <a className="text-xs color-purpul mt-5">Profile Photo</a>
        <div className="flex flex-col md:flex-row md:space-x-5 mt-3 items-center">
          <div className="h-20 w-20 rounded-full bg-gray-200 flex flex-row items-center justify-center overflow-hidden">
            {image2 && <Image src={image2} width={80} height={70} />}
          </div>
          <div className="w-full md:w-max   mt-4 md:mt-0 flex flex-col items-center">
            <div
              onClick={handleClick}
              className="border-primary border rounded-tl-xl rounded-br-xl py-1.5 px-4  mb-2 text-center"
            >
              <a className="text-sm color-purpul">Uploud new picture</a>
            </div>
            <a className="text-sm color-purpul px-20">Delete </a>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Header
          style="mt-10"
          value="Personal Information"
          editable={true}
          onClick={() => setDisabled(!disabled)}
          disabled={disabled}
        />
        <div className="flex md:flex-row flex-col md:space-x-10 mt-4">
          <div className="w-full md:w-1/2 ">
            <InputField
              disabled={disabled}
              value={user?.firstName}
              placeholder="First Name"
              style=" w-full "
              heading="First Name"
              onChange={() => onInputChange()}
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <InputField
              disabled={disabled}
              value={user?.lastName}
              placeholder="Last Name"
              style=" w-full "
              heading="Last Name"
              onChange={() => onInputChange()}
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:space-x-10 mt-4">
          <div className="w-full md:w-1/2 ">
            <InputField
              disabled={disabled}
              placeholder="Email"
              style=" w-full "
              heading="Email"
              value={user?.email}
              onChange={() => onInputChange()}
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <InputField
              disabled={disabled}
              placeholder="User Name"
              style=" w-full "
              heading="User Name"
              value={user?.username}
              onChange={() => onInputChange()}
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <Header style="mt-10" value="Acount Detail" />
        <div className="flex md:flex-row flex-col md:space-x-10 mt-4">
          <div className="w-full md:w-1/2 ">
            <InputField
              disabled={true}
              value={user?.status}
              placeholder="Status"
              style=" w-full "
              heading="Status"
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <InputField
              disabled={true}
              placeholder="Reference Code"
              style=" w-full "
              heading="Reference Code"
              value={user?.referenceCode}
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:space-x-10 mt-4">
          <div className="w-full md:w-1/2 ">
            <InputField
              disabled={true}
              value={user?.wallet}
              placeholder="Wallet"
              style=" w-full "
              heading="Wallet"
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <InputField
              disabled={true}
              placeholder="Role"
              style=" w-full "
              heading=" Role"
              value={user?.roles}
            />
          </div>
        </div>
      </div>

      {/* <div className="w-full">
        <Header style="mt-10" value="Education Qualification" />
        <div className="flex md:flex-row flex-col md:space-x-10 mt-4">
          <div className="w-full md:w-1/2 ">
            <InputField
              placeholder="Enter your Qualification"
              style=" w-full "
              heading="Enter your Qualification"
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <InputField placeholder="State" style=" w-full " heading="State" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:space-x-10 mt-4">
          <div className="w-full md:w-1/2 ">
            <InputField
              placeholder="Gender"
              style=" w-full "
              heading="Gender"
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <InputField
              placeholder="Language"
              style=" w-full "
              heading="Language"
            />
          </div>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 mt-10 space-y-3 md:space-y-0">
        <Button value="Update" style="backgroud-secondary w-full md:w-52" />
        <div className="border-red-500 w-full md:w-52 border rounded-tl-xl rounded-br-xl py-1.5 px-4   text-center">
          <a className="text-sm text-red-400">Delete account</a>
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleSelectImage}
        style={{ display: "none" }}
      />
    </div>
  );
}
export default Dashboard;
function Header({ style, value, editable, onClick, disabled }) {
  return (
    <div className={`flex flex-row justify-between ${style}`}>
      <h1 className="font-primary opacity-90 ">{value}</h1>
      {editable && (
        <div
          className="border border-gray-200 rounded-md flex flex-row items-center space-x-2 px-2 text-gray-500 hover:bg-gray-100 duration-200 cursor-pointer"
          onClick={() => onClick()}
        >
          <CiEdit className="" />
          <a className=" text-sm"> {disabled ? "Edit" : "Edititable"} </a>
        </div>
      )}
    </div>
  );
}
