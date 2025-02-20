import SideNav from "@/app/components/SideNav";
import React from "react";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <div className="flex bg-black w-screen">
      <SideNav />
      <div className="w-full p-10">
        <Navbar name="Dashboard" />
      </div>
    </div>
  );
};

export default DashboardLayout;
