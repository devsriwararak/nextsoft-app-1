import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      <div className="bg-white px-10 py-10 rounded-lg shadow-lg ">
        <h1 className="text-xl">
          จัดการข้อมูล User (ไม่แนะนำ - แนะนำให้อยู่ในพื้นที่ของ admin ดีกว่า)
        </h1>
        <div className="flex flex-row gap-4 mt-4">
          <input
            type="text"
            placeholder="Username"
            className="bg-gray-200 py-2 px-2 border border-gray-400 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-200 py-2 px-2 border border-gray-400 rounded-md"
          />
        </div>

        <div className="mt-4 flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <button className="bg-purple-500 text-white px-2 py-2 rounded-lg">
              บันทึก
            </button>
            <button className="bg-purple-500 text-white px-2 py-2 rounded-lg">
              ค้นหา
            </button>

            <Link href="/">
              <button className="bg-black text-white px-2 py-2 rounded-lg">
                กลับหน้าเข้าสู่ระบบ
              </button>
            </Link>
          </div>

          <div className="flex flex-row gap-2">
            <button className="bg-yellow-800 text-white px-2 py-2 rounded-lg">
              แก้ไขข้อมูล
            </button>
            <button className="bg-red-500 text-white px-2 py-2 rounded-lg">
              ลบข้อมูล
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
