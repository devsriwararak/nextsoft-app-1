"use client";
/* eslint-disable @next/next/no-img-element */

import { FaAlignJustify } from "react-icons/fa";

import { LayoutDashboard } from "lucide-react";
import SidebarItem from "./item";

import { useRecoilState } from "recoil";
import { hideActiveStore } from "../../store/store";

const items = [
  {
    name: "ค้นหาข้อมูล",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "ข้อมูล User",
    path: "/admin/transaction",
    icon: LayoutDashboard,
  },
  {
    name: "ตั้งค่า อื่นๆ",
    path: "/admin/setting",
    icon: LayoutDashboard,
    items: [
      {
        name: "General",
        path: "/admin/setting/general",
      },
      {
        name: "Security",
        path: "/admin/setting/security",
      },
    ],
  },
];

function Sidebar() {

  const [hideActive, setHideActive] = useRecoilState(hideActiveStore);


  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-3`}
    >
      <div className="flex flex-col space-y-10  w-full">
        <div className="flex items-center justify-between">
          <img
            className=" w-fit h-10 cursor-pointer"
            src="/previewlogo.png"
            alt="Logo"
          />
          <FaAlignJustify
            className=" cursor-pointer"
            onClick={() => setHideActive(!hideActive)}
          />
        </div>
        <div className="flex flex-col space-y-1">
          {items.map((item) => (
            <SidebarItem key={item.path} item={item}  />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
