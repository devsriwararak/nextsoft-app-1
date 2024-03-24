"use client";
import React, { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1 className="text-lg ">ADMIN PAGE</h1>
      <div className="bg-white px-4 py-4 mt-4 rounded-lg shadow-lg">
        <h2>ค้นหาข้อมูล</h2>

        <div className="mt-4 flex flex-col md:flex-row gap-2">
          <input
            type="text"
            placeholder="INPUT LPN NO"
            className="bg-gray-200 px-4 py-2 rounded-lg border border-gray-400"
          />
          <input
            type="text"
            placeholder="INPUT BATCH NO"
            className="bg-gray-200 px-4 py-2 rounded-lg border border-gray-400"
          />
        </div>

        <div className="mt-4 flex flex-col md:flex-row gap-2">
          <button onClick={()=>setShow(true)} className="bg-purple-500 text-white px-4 py-2 rounded-md">
            ค้นหา
          </button>
          <button onClick={()=>setShow(false)} className="bg-gray-700 text-white px-4 py-2 rounded-md">
            ล้างข้อมูล
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            ออกจากระบบ
          </button>
        </div>
      </div>

      {/* แสดงข้อมูล */}
      {show && (
        <div className="mt-5 bg-white px-4 py-10 rounded-lg shadow-lg ">
          <h2>ส่วนแสดงผลข้อมูล</h2>

          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <input
              type="text"
              placeholder="Product Name"
              className=" w-full bg-gray-200 px-4 py-2 rounded-lg border border-gray-400"
            />
            <input
              type="text"
              placeholder="Product Code"
              className=" w-full bg-gray-200 px-4 py-2 rounded-lg border border-gray-400"
            />
          </div>

          
          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <input
              type="text"
              placeholder="Batch No."
              className=" w-full bg-gray-200 px-4 py-2 rounded-lg border border-gray-400"
            />
            <input
              type="text"
              placeholder="Receive Date"
              className=" w-full bg-gray-200 px-4 py-2 rounded-lg border border-gray-400"
            />
          </div>

          
          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <input
              type=""
              placeholder="Manufacturing Data"
              className=" w-full bg-gray-200 px-4 py-2 rounded-lg border border-gray-400"
            />
            <input
              type="text"
              placeholder="Export Date"
              className=" w-full bg-gray-200 px-4 py-2 rounded-lg border border-gray-400"
            />
          </div>

          
          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <input
              type="text"
              placeholder="Bin Location"
              className=" w-full bg-gray-200 px-4 py-2 rounded-lg border border-gray-400"
            />
            <input
              type="text"
              placeholder="AddWho"
              className=" w-full bg-gray-200 px-4 py-2 rounded-lg border border-gray-400"
            />
          </div>

          
          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <input
              type="text"
              placeholder="Arrive_Date"
              className=" w-full bg-gray-200 px-4 py-2 rounded-lg border border-gray-400"
            />
            <input
              type="text"
              placeholder="Customer Name"
              className=" w-full bg-gray-200 px-4 py-2 rounded-lg border border-gray-400"
            />
          </div>
        </div>
      )}
    </div>
  );
}
