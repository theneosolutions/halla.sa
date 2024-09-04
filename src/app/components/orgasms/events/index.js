import { useRef, useState } from "react";
import Image from "next/image";
import Image1 from "@/assets/svgs/image1.svg";
import { CiImageOn } from "react-icons/ci";
import { Button } from "@/app/components/atoms";
import DatePicker from "react-datepicker";
import { Iframe } from "@/app/components/atoms";
import { useDispatch } from "react-redux";
import * as action from "@/redux/reducer";
import { TiDelete } from "react-icons/ti";
import { RxUpdate } from "react-icons/rx";

import "react-datepicker/dist/react-datepicker.css";

function Event({ setEventData }) {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    address: "",
  });
  const [name, setName] = useState("");
  const [disription, setDiscription] = useState("");
  const [image, setImage] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [image2, setImage2] = useState(null);
  function handleClick() {
    fileInputRef.current.click();
  }
  function handleSelectImage(e) {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      if (
        selectedImage.type === "image/png" ||
        selectedImage.type === "image/svg+xml" ||
        selectedImage.type === "image/jpeg" ||
        selectedImage.type === "image/jpg" ||
        selectedImage.type === "image/gif"
      ) {
        setImage(selectedImage);
        setImage2(URL.createObjectURL(selectedImage));
      } else {
        alert("Please upload a PNG , SVG , JPEG , JPG or GIF file.");
        e.target.value = null;
      }
    }
  }

  function NextContinue() {
    var data = {
      name: name,
      image: image,
      eventDate: startDate,
      notes: disription,
      latitude: location?.latitude,
      longitude: location?.longitude,
      cardId: 1,
      showQRCode: true,
      address: "Address of the place",
      status: "active",
    };
    console.log("data", data);
    if (
      image != null &&
      name != "" &&
      startDate != "" &&
      disription != "" &&
      location?.longitude != null &&
      location?.latitude != null
    ) {
      setButtonDisabled(true);
      setEventData(data);
      // setActive(2);
    } else {
      dispatch(
        action.Message({
          open: true,
          error: true,
          message: "All Fields Required!",
        })
      );
    }
  }

  return (
    <>
      <a className="text-3xl  font-bold">Create Event</a>
      <div className="flex flex-col md:flex-row  w-full justify-between ">
        <div className="w-full md:w-1/2  mt-10 flex flex-col pb-10 md:px-6 px-3 ">
          <div className="flex flex-col items-center justify-center border border-dashed w-full border-primary  rounded-xl ">
            {image2 && (
              <div className="flex flex-row w-full justify-between">
                <div></div>
                <div className="py-2 px-2 flex flex-row items-center space-x-1">
                  <RxUpdate
                    className="text-xl text-green-500 cursor-pointer hover:text-green-600 duration-300"
                    onClick={handleClick}
                  />
                  <TiDelete
                    className="text-3xl text-red-500 cursor-pointer hover:text-red-600 duration-300"
                    onClick={() => (setImage(null), setImage2(null))}
                  />
                </div>
              </div>
            )}

            {image2 ? (
              <div className="m-h-96 min-h-56 w-full relative my-2 mb-5">
                <Image src={image2} quality={100} fill objectFit="contain" />
              </div>
            ) : (
              <div
                className="items-center flex flex-col py-20  px-20 cursor-pointer"
                onClick={handleClick}
              >
                <CiImageOn className="text-6xl text-gray-400" />
                <a className="text-md opacity-80">Upload Image</a>
              </div>
            )}
          </div>
          <a className="text-sm text-gray-700 mt-3">Event Details</a>

          <div className="w-full ">
            <div className="flex flex-col  mt-10">
              <div className="flex flex-col w-full">
                <a className="text-sm text-gray-500 ">Event Name</a>
                <input
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Type your event name"
                  className="py-3 px-3  text-sm mt-2 outline-none border border-gray-200 rounded-lg"
                />
              </div>
              <div className="flex flex-col w-full mt-5">
                <a className="text-sm text-gray-500">Select Date and Time</a>
                <DatePicker
                  className="py-3 px-3 w-full text-sm mt-2 outline-none border border-gray-200 rounded-lg"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div className="flex flex-col w-full mt-5">
              <a className="text-sm text-gray-500 ">Event Description</a>
              <textarea
                onChange={(e) => setDiscription(e.target.value)}
                placeholder="Type your event description..."
                className="py-3 px-3  text-sm mt-2 outline-none border min-h-32 border-gray-200 rounded-lg"
              />
            </div>
          </div>
          <div className="my-4">
            <Iframe setLocation={(e) => setLocation(e)} />
            <input
              value={
                location?.latitude &&
                location?.latitude + " " + location?.longitude
              }
              placeholder="Selected Logitude Latitude"
              className="py-3 px-3 w-full text-sm mt-2 outline-none border border-gray-200 rounded-lg"
            />
          </div>
          <div className="flex flex-row w-full items-center justify-center space-x-10">
            <Button
              value="Save As Draft"
              style="w-max  font-primary backgroud-secondary mt-10"
            />
            <Button
              disabled={buttonDisabled}
              onClick={() => NextContinue()}
              value="Continue"
              style="w-max  font-primary backgroud-secondary mt-10"
            />
          </div>
        </div>

        <Image src={Image1} className=" object-cover w-1/2" />
      </div>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleSelectImage}
        style={{ display: "none" }}
      />
    </>
  );
}
export default Event;
