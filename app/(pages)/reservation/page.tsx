"use client"

import Layout from "@/app/components/Layout";
import useState from "react";

import SideNav from "@/app/components/SideNav";
import Navbar from "@/app/components/Navbar";
import Tabs from "@/app/components/tabs/Tabs";

import { Button } from "@/components/ui/button";

const Reservation = () => {
  const tabs = [
    {id: "tab-1", label:"1st Floor", content:<div className="w-full h-52 bg-red-200"></div>},
    {id: "tab-2", label:"2nd Floor", content:<div className="w-full h-52 bg-red-300"></div>},
    {id: "tab-3", label:"3rd Floor", content:<div className="w-full h-52 bg-red-400"></div>},
  ];

  return (
    <Layout>
      <div className="flex bg-black min-w-screen min-h-screen">
        <div className="w-full p-10">
          <Tabs tabs={tabs}/>
        </div>
      </div>
    </Layout>
  );
};

export default Reservation;
