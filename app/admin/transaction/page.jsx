"use client";
import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";


function Transaction() {
  const [input1, setInput1] = useState("");

  const TABLE_HEAD = ["Name", "Job", "Employed", ""];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];
  return (
    <div>
      <h1 className="text-xl">จัดการข้อมูล User</h1>

      <div className="bg-white px-4 py-2 mt-4 rounded-lg shadow-lg">
        เพิ่มข้อมูล
        <div className="flex flex-col md:flex-row gap-4 mt-2">
        <Input
              label="Username"
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />

            <Input
              label="Password"
              type="password"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />

            <Button>บันทึก</Button>

            <Input
              label="ค้นหา"
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />

            <Button>ค้นหา</Button>
        </div>
      </div>

    
    
      <Card className="mt-4 h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {job}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    แก้ไข / ลบ
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    </div>
  );
}

export default Transaction;
