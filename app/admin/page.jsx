"use client";
import { Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const [showStatus, setShowStatus] = useState(0);

  const handleSearch = () => {
    if (input === "3100058299100275") {
      setShow(true);
      setShowStatus(1);
    } else if (input === "3100058287501198") {
      setShow(true);
      setShowStatus(2);
    } else if (input === "3100054324900474") {
      setShow(true);
      setShowStatus(3);
    } else {
      setShow(false);
      toast.error("ไม่พบข้อมูล");
    }
  };
  const handleClear = () => {
    setShow(false);
    setInput("");
    setShowStatus(0);
  };
  return (
    <div>
      <h1 className="text-lg ">ADMIN PAGE</h1>
      <div className="bg-white px-4 py-4 mt-4 rounded-lg shadow-lg">
        <h2 className="font-semibold">ค้นหาข้อมูล</h2>

        <div className="mt-4 flex flex-col md:flex-row gap-2">
          <Input
            type="text"
            label="INPUT LPN NO"
            value={input || ""}
            className="w-full"
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="w-full flex flex-col md:flex-row gap-2">
            <button
              onClick={handleSearch}
              className="bg-purple-500 text-white px-4 py-2 rounded-md"
            >
              ค้นหา
            </button>
            <button
              onClick={handleClear}
              className="bg-gray-700 text-white px-4 py-2 rounded-md"
            >
              ล้างข้อมูล
            </button>
          </div>
        </div>
      </div>

      {/* แสดงข้อมูล */}
      {show ? (
        <div className="mt-5 bg-white px-4 py-5 rounded-lg shadow-lg ">
          <h2 className=" font-semibold">ส่วนแสดงผลข้อมูล</h2>

          {/* Section 1 */}
          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <div className="flex flex-col gap-1 w-full">
              <small>Product Code :</small>
              <p>
                {showStatus === 1
                  ? "BDS001504800001"
                  : showStatus === 2
                  ? "EEL016204000001"
                  : showStatus === 3
                  ? "PAS108204001811"
                  : " "}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <small>Product Name :</small>
              {showStatus === 1
                ? "แผ่นพื้นเฌอร่าบอร์ด 1.5x120x240ซม"
                : showStatus === 2
                ? "แผ่นผนังเฌอร่าบอร์ด 0.8x122x244ซม"
                : showStatus === 3
                ? "ไม้ฝาเฌอร่า_สัก 0.8x20x400เหลืองการะเวก"
                : " "}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <small>Batch No :</small>
              {showStatus === 1
                ? "D162401152"
                : showStatus === 2
                ? "PK82109212"
                : showStatus === 3
                ? "FL12106293"
                : " "}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <small>Manufacturing Batch :</small>
              {showStatus === 1
                ? "M162401053"
                : showStatus === 2
                ? "M082402023"
                : showStatus === 3
                ? "M082402023"
                : " "}
            </div>
          </div>

          {/* Section 2 */}

          <div className="flex flex-col md:flex-row gap-2 mt-5">
            <div className="flex flex-col gap-1 w-full">
              <small>Bin Location :</small>
              <p>
                {showStatus === 1
                  ? "W1011"
                  : showStatus === 2
                  ? "W0805"
                  : showStatus === 3
                  ? "W0601"
                  : " "}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <small>Recieved Date :</small>
              {showStatus === 1
                ? "2024-03-26 07:20:10.000"
                : showStatus === 2
                ? "2021-11-26 22:17:18.000"
                : showStatus === 3
                ? "2021-12-25 21:51:07.000"
                : " "}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <small>Ship Date :</small>
              {showStatus === 1
                ? "2024-01-16 11:00:00.000"
                : showStatus === 2
                ? "2021-09-21 11:00:00.000"
                : showStatus === 3
                ? "2021-06-29 11:00:00.000"
                : " "}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <small>Arrival Date :</small>
              {showStatus === 1
                ? "2024-03-25 07:20:10.000"
                : showStatus === 2
                ? "2021-11-23 22:17:18.000"
                : showStatus === 3
                ? "2021-12-20 21:51:07.000"
                : " "}
            </div>
          </div>

          {/* Section 3 */}

          <div className="flex flex-col md:flex-row gap-2 mt-5">
            <div className="flex flex-col gap-1 w-full md:w-1/3 ">
              <small>Loader :</small>
              <p>
                {showStatus === 1
                  ? "sumit_p"
                  : showStatus === 2
                  ? "wison_d"
                  : showStatus === 3
                  ? "anek_i"
                  : " "}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full ">
              <small>Customer Name :</small>
              <p>
                {showStatus === 1
                  ? "TWJS Company Limited"
                  : showStatus === 2
                  ? "ศ.รัตนะค้าวัสดุ"
                  : showStatus === 3
                  ? "โชควัฒนา โฮมเซ็นเตอร์ จำกัด"
                  : " "}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-center mt-5 text-xl">ไม่พบข้อมูล</h2>
        </div>
      )}
    </div>
  );
}
