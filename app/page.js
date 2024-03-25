"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import Link from "next/link";

export default function Home() {
  const router = useRouter(); // สร้างตัวแปร router ด้วย useRouter
  const [sendDataLogin, setSendDataLogin] = useState({});

  const handleChange = (e) => {
    setSendDataLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignIn = async () => {
    // const data = {
    //   username: sendDataLogin.username,
    //   password: sendDataLogin.password,
    // };

    if (sendDataLogin.username == "admin" && sendDataLogin.password == "1234") {
      toast.success("เข้าสู่ระบบสำเร็จ");
      router.push("/admin");
    } else {
      toast.error("userName หรือ Password ไม่ถูกต้อง");
      router.push("/");
    }
  };

  console.log(sendDataLogin);
  return (
    <div className="flex bg-gray-100 w-full h-[100vh] justify-center">
      <RecoilRoot>
        <ToastContainer autoClose={2000} theme="colored" />
        <Card className="w-96 my-32 border-2 bg-gray-50 ">
          <div className="flex justify-center mt-10">
            <Typography variant="h4">เข้าสู่ระบบ</Typography>
          </div>
          <CardBody className="flex flex-col  gap-4 mt-10">
            <Input
              color="blue"
              label="UserName"
              size="lg"
              name="username"
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="password"
              color="blue"
              label="Password"
              size="lg"
              name="password"
              onChange={(e) => handleChange(e)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSignIn();
                }
              }}
            />

            <ul>
              <li>เข้าสู่ระบบ : admin / 1234</li>
            </ul>
          </CardBody>
          <CardFooter className="pt-0 ">
            <Button
              color="purple"
              variant="gradient"
              fullWidth
              onClick={handleSignIn}
              className="text-md"
            >
          เข้าสู่ระบบ
            </Button>

            <Link href="/addData">
              <Button fullWidth variant="gradient" className="text-md mt-4">
                เพิ่มข้อมูล (ไม่แนะนำ)
              </Button>
            </Link>

            {/* <ul className="mx-auto mt-5">
              <li>ADMIN : admin / admin</li>
              <li>USER : user1 / user1</li>
            </ul> */}
          </CardFooter>
        </Card>
      </RecoilRoot>
    </div>
  );
}
