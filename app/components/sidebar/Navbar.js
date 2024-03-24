import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { useRouter } from "next/navigation";

import { useRecoilState } from "recoil";
import { hideActiveStore } from "../../store/store";

export default function Navbar() {

  const [hideActive, setHideActive] = useRecoilState(hideActiveStore);

  const rounter = useRouter()

  const logout = () => {
    rounter.push('/')
  }
  return (
    <div className="flex bg-nav-bg h-14 items-center p-2 justify-between">
      <div className="ms-3">
      <FaAlignJustify
        className=" cursor-pointer text-xl"
        onClick={() => setHideActive(!hideActive)}
        hidden={!hideActive}
      />
      </div>
      <div>
      <BiLogOut className="text-3xl text-white cursor-pointer" onClick={logout} />
      </div>
    </div>
  );
}
