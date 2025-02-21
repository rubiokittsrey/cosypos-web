"use client";
import React from "react";
import SideNav from "./SideNav";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  // Function to get the current page name from pathname
  const getPageName = () => {
    const path = pathname.split("/")[1];
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <div className="flex bg-black">
      <SideNav />
      <div className="flex-1 ml-[171px]">
        {" "}
        {/* Width matches SideNav */}
        <div className="p-8 bg-black min-h-screen">
          <Navbar name={getPageName()} />
          <main className="mt-8">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
