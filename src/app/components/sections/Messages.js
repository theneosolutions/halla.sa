import React from "react";
import Image from "next/image";
import Man from "@/assets/man.png";
import Add from "@/assets/svgs/add.svg";
import { Template1 } from "@/app/components/layouts";
import { IoSearchOutline } from "react-icons/io5";
import { IoSendSharp } from "react-icons/io5";

function Messages() {
  return (
    <div className=" flex flex-col md:flex-row md:space-x-10  md:h-screen">
      <div className="w-full md:w-1/4">
        <div>
          <Search
            icon={<IoSearchOutline className="color-purpul" />}
            style=""
            placeholder="Search"
          />
          <div className="mt-4">
            <SingleChat
              icon={Man}
              name="Jhon Smith"
              message="We invite you...."
              time="15 mins"
              newMessage={5}
            />
            <SingleChat
              icon={Man}
              name="Jhon Smith"
              message="We invite you...."
              time="15 mins"
            />
            <SingleChat
              icon={Man}
              name="Jhon Smith"
              message="We invite you...."
              time="15 mins"
            />
            <SingleChat
              icon={Man}
              name="Jhon Smith"
              message="We invite you...."
              time="15 mins"
            />
            <SingleChat
              icon={Man}
              name="Jhon Smith"
              message="We invite you...."
              time="15 mins"
            />
            <SingleChat
              icon={Man}
              name="Jhon Smith"
              message="We invite you...."
              time="15 mins"
            />
            <SingleChat
              icon={Man}
              name="Jhon Smith"
              message="We invite you...."
              time="15 mins"
            />
            <SingleChat
              icon={Man}
              name="Jhon Smith"
              message="We invite you...."
              time="15 mins"
            />
          </div>
        </div>
      </div>
      <div className="md:w-3/4">
        <div className="h-1/6		">
          <a className="text-xs font-semibold color-purpul ">
            50 Friends online
          </a>

          <div className="flex flex-row space-x-3 my-5 overflow-x-auto">
            <Avatar online={true} />
            <Avatar online={true} />
            <Avatar online={true} />
            <Avatar online={true} />
            <Avatar online={true} />
            <Avatar online={true} />
            <Avatar online={true} />
            <Avatar online={true} />

            <Avatar online={true} />
          </div>
        </div>
        <div className="h-5/6 0">
          <div className="h-5/6	space-y-5 overflow-auto">
            <MessageRow
              text="Hi there <br /> I wanna talk about the place <br />
                actually"
            />

            <MessageRow dir="my" text="Yea yea sure…" />
            <MessageRow
              dir="my"
              text="Please, let me know what you <br/> want to know?"
            />
            <MessageRow
              text="Thanks <br /> Btw, I want to know more about <br />
                the space & facilities. & can I <br /> get some more pictures of <br /> current room. "
            />

            <MessageRow
              dir="my"
              text="Please, let me know what you <br/> want to know?"
            />
          </div>
          <div className="flex flex-row justify-between  h-1/6 my-3 md:my-0">
            <Search
              icon={<IoSendSharp className="color-purpul cursor-pointer" />}
              style="w-11/12		py-1 h-min rounded-xl"
              placeholder="Type Something..."
            />
            <div className="mx-10 h-10 w-10 flex flex-row items-center justify-center  backgroud-3rd rounded-full">
              <Image src={Add} className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Messages;

function MessageRow({ dir, text }) {
  return (
    <>
      {dir === "my" ? (
        <div className="flex flex-row  w-full  items-end justify-end">
          <div className="	flex flex-row-reverse space-x-3 ">
            <Image src={Man} className="h-11 w-11 rounded-full mx-2" />
            <div className="flex flex-col px-4 py-3 backgroud-primary rounded-br-3xl rounded-l-3xl ">
              <a
                className="text-sm  text-white  flex "
                dangerouslySetInnerHTML={{ __html: text }}
              ></a>
              <a className=" text-gray-200 mt-1" style={{ fontSize: 10 }}>
                12:20 pm
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row  w-full   ">
          <div className="	flex flex-row space-x-3 ">
            <Image src={Man} className="h-11 w-11 rounded-full" />
            <div className="flex flex-col">
              <a
                className="text-sm  color-purpul flex "
                dangerouslySetInnerHTML={{ __html: text }}
              ></a>
              <a className=" text-gray-500 mt-1" style={{ fontSize: 10 }}>
                12:20 pm
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Avatar({ online }) {
  return (
    <div className="md:w-max">
      <div className="flex flex-row-reverse ">
        <div
          className={`h-2 w-2 rounded-full  -ml-2 -mb-3 ${
            online ? "bg-green-500" : "bg-gray-300"
          }`}
        ></div>
        <Image src={Man} className="h-11 w-11 rounded-full" />
      </div>
    </div>
  );
}
function SingleChat({ icon, name, message, time, newMessage }) {
  return (
    <div className="border-b border-gray-100 py-3 flex flex-row justify-between hover:bg-gray-200 px-2 cursor-pointer rounded-md">
      <div className="w-5/6	flex flex-row space-x-3 items-center">
        <Image src={icon} className="h-11 w-11 rounded-full" />
        <div className="flex flex-col">
          <a className="text-md font-semibold color-purpul ">{name}</a>
          <a className="text-xs text-gray-500">{message}</a>
        </div>
      </div>
      <div className="flex flex-col">
        <a className="text-xs font-semibold color-purpul ">{time}</a>
        {newMessage && (
          <div className="text-xs flex flex-row items-center justify-center h-5 mt-2 w-5 backgroud-primary rounded-full text-white">
            <a>{newMessage}</a>
          </div>
        )}
      </div>
    </div>
  );
}
function Search({ icon, style, placeholder }) {
  return (
    <div
      className={`flex flex-row border  justify-between items-center px-3 rounded-md backgroud-3rd ${style}`}
    >
      <input
        placeholder={placeholder}
        className="w-11/12	outline-none text-sm py-2.5 backgroud-3rd"
      />
      {icon}
    </div>
  );
}
