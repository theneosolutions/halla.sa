import { InputField, Button } from "@/app/components/atoms";
import { CiEdit } from "react-icons/ci";
function Dashboard() {
  return (
    <div className="">
      <div className="flex flex-col">
        <a className="font-4rth color-purpul">Profile</a>

        <a className="text-xs color-purpul mt-5">Profile Photo</a>
        <div className="flex flex-col md:flex-row md:space-x-5 mt-3 items-center">
          <div className="h-20 w-20 rounded-full bg-gray-200"></div>
          <div className="w-full md:w-max   mt-4 md:mt-0 flex flex-col items-center">
            <div className="border-primary border rounded-tl-xl rounded-br-xl py-1.5 px-4  mb-2 text-center">
              <a className="text-sm color-purpul">Uploud new picture</a>
            </div>
            <a className="text-sm color-purpul px-20">Delete </a>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Header style="mt-10" value="Personal Information" />
        <div className="flex md:flex-row flex-col md:space-x-10 mt-4">
          <div className="w-full md:w-1/2 ">
            <InputField
              placeholder="First Name"
              style=" w-full "
              heading="First Name"
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <InputField
              placeholder="Last Name"
              style=" w-full "
              heading="Last Name"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:space-x-10 mt-4">
          <div className="w-full md:w-1/2 ">
            <InputField placeholder="Email" style=" w-full " heading="Email" />
          </div>
          <div className="w-full md:w-1/2 ">
            <InputField
              placeholder="Date of birth"
              style=" w-full "
              heading="Date of birth"
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <Header style="mt-10" value="Contact Personal" />
        <div className="flex md:flex-row flex-col md:space-x-10 mt-4">
          <div className="w-full md:w-1/2 ">
            <InputField
              placeholder="Phone Number"
              style=" w-full "
              heading="Phone Number"
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <InputField placeholder="Email" style=" w-full " heading="Email" />
          </div>
        </div>
      </div>

      <div className="w-full">
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
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 mt-10 space-y-3 md:space-y-0">
        <Button value="Update" style="backgroud-secondary w-full md:w-52" />
        <div className="border-red-500 w-full md:w-52 border rounded-tl-xl rounded-br-xl py-1.5 px-4   text-center">
          <a className="text-sm text-red-400">Delete account</a>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
function Header({ style, value }) {
  return (
    <div className={`flex flex-row justify-between ${style}`}>
      <h1 className="font-primary opacity-90 ">{value}</h1>
      <div className="border border-gray-200 rounded-md flex flex-row items-center space-x-2 px-2 text-gray-500">
        <CiEdit className="" />
        <a className=" text-sm">Edit</a>
      </div>
    </div>
  );
}
