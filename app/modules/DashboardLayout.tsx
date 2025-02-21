import SideNav from "@/app/components/SideNav";
import React from "react";
import Navbar from "../components/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DashboardCharts } from "../components/dashboardCharts/DashboardCharts";

const DashboardLayout = () => {
  return (
    <div className="flex bg-black min-w-screen min-h-screen">
      <SideNav />
      <div className="w-full p-10">
        <Navbar name="Dashboard" />
        <div className="reports-container flex flex-col gap-4 justify-around my-9 md:flex-row">
          <div className="flex flex-col justify-between w-full h-[166px] p-3 bg-[#292C2D] rounded-xl overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-white text-base font-bold">
                Daily Sales
              </span>
              <img
                src="/dollarSign.svg"
                alt="dollar-logo"
                className="p-2 bg-[#F5B6D9] rounded-full"
              />
            </div>
            <span className="text-2xl font-medium text-white">$2k</span>
            <div className="flex justify-between items-center">
              <span className="text-base text-[#777979]">9 February 2024</span>
              <img src="/linegraph.svg" alt="line-graph" />
            </div>
          </div>
          <div className="flex flex-col justify-between w-full h-[166px] p-3 bg-[#292C2D] rounded-xl overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-white text-base font-bold">
                Monthly Revenue
              </span>
              <img
                src="/dollarSign.svg"
                alt="dollar-logo"
                className="p-2 bg-[#F5B6D9] rounded-full"
              />
            </div>
            <span className="text-2xl font-medium text-white">$2k</span>
            <div className="flex justify-between items-center">
              <span className="text-base text-[#777979]">9 February 2024</span>
              <img src="/linegraph2.svg" alt="line-graph" />
            </div>
          </div>{" "}
          <div className="flex flex-col justify-between w-full h-[166px] p-3 bg-[#292C2D] rounded-xl overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-white text-base font-bold">
                Table Occupancy
              </span>
              <img
                src="/dollarSign.svg"
                alt="dollar-logo"
                className="p-2 bg-[#F5B6D9] rounded-full"
              />
            </div>
            <span className="text-2xl font-medium text-white">$2k</span>
            <div className="flex justify-between items-center">
              <span className="text-base text-[#777979]">9 February 2024</span>
              <img src="/linegraph.svg" alt="line-graph" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <ScrollArea className="flex flex-col p-6 w-full text-white rounded-xl h-[466px] bg-[#292C2D] relative overflow-y-auto">
            <div className="flex justify-between mb-10">
              <h3 className="text-2xl font-medium">Popular Dishes</h3>
              <span className="text-[#FAC1D9] hover:underline cursor-pointer">
                See all
              </span>
            </div>

            <div className="mt-4 w-full flex items-center justify-between bg-[#3D4142]">
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/300"
                  alt=""
                  className="h-[66px]"
                />
                <div className="px-4">
                  <h3 className="text-base font-medium">Chicken Parmesan</h3>
                  <p className="text-sm text-[#777979]">Serving: 01 person</p>
                </div>
              </div>
              <div className="flex flex-col px-4 text-end">
                <span className="text-[#FAC1D9] font-normal ">In Stock</span>
                <span>$55.00</span>
              </div>
            </div>
            <div className="mt-4 w-full flex items-center justify-between bg-[#3D4142]">
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/300"
                  alt=""
                  className="h-[66px]"
                />
                <div className="px-4">
                  <h3 className="text-base font-medium">Chicken Parmesan</h3>
                  <p className="text-sm text-[#777979]">Serving: 01 person</p>
                </div>
              </div>
              <div className="flex flex-col px-4 text-end">
                <span className="text-[#FAC1D9] font-normal ">In Stock</span>
                <span>$55.00</span>
              </div>
            </div>
            <div className="mt-4 w-full flex items-center justify-between bg-[#3D4142]">
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/300"
                  alt=""
                  className="h-[66px]"
                />
                <div className="px-4">
                  <h3 className="text-base font-medium">Chicken Parmesan</h3>
                  <p className="text-sm text-[#777979]">Serving: 01 person</p>
                </div>
              </div>
              <div className="flex flex-col px-4 text-end">
                <span className="text-[#FAC1D9] font-normal ">In Stock</span>
                <span>$55.00</span>
              </div>
            </div>
            <div className="mt-4 w-full flex items-center justify-between bg-[#3D4142]">
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/300"
                  alt=""
                  className="h-[66px]"
                />
                <div className="px-4">
                  <h3 className="text-base font-medium">Chicken Parmesan</h3>
                  <p className="text-sm text-[#777979]">Serving: 01 person</p>
                </div>
              </div>
              <div className="flex flex-col px-4 text-end">
                <span className="text-[#FAC1D9] font-normal ">In Stock</span>
                <span>$55.00</span>
              </div>
            </div>
            <div className="mt-4 w-full flex items-center justify-between bg-[#3D4142]">
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/300"
                  alt=""
                  className="h-[66px]"
                />
                <div className="px-4">
                  <h3 className="text-base font-medium">Chicken Parmesan</h3>
                  <p className="text-sm text-[#777979]">Serving: 01 person</p>
                </div>
              </div>
              <div className="flex flex-col px-4 text-end">
                <span className="text-[#FAC1D9] font-normal ">In Stock</span>
                <span>$55.00</span>
              </div>
            </div>
          </ScrollArea>
          <ScrollArea className="flex flex-col p-6 w-full text-white rounded-xl h-[466px] bg-[#292C2D] relative overflow-y-auto">
            <div className="flex justify-between mb-10">
              <h3 className="text-2xl font-medium">Popular Dishes</h3>
              <span className="text-[#FAC1D9] hover:underline cursor-pointer">
                See all
              </span>
            </div>

            <div className="mt-4 w-full flex items-center justify-between bg-[#3D4142]">
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/300"
                  alt=""
                  className="h-[66px]"
                />
                <div className="px-4">
                  <h3 className="text-base font-medium">Chicken Parmesan</h3>
                  <p className="text-sm text-[#777979]">Serving: 01 person</p>
                </div>
              </div>
              <div className="flex flex-col px-4 text-end">
                <span className="text-[#FAC1D9] font-normal ">In Stock</span>
                <span>$55.00</span>
              </div>
            </div>
            <div className="mt-4 w-full flex items-center justify-between bg-[#3D4142]">
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/300"
                  alt=""
                  className="h-[66px]"
                />
                <div className="px-4">
                  <h3 className="text-base font-medium">Chicken Parmesan</h3>
                  <p className="text-sm text-[#777979]">Serving: 01 person</p>
                </div>
              </div>
              <div className="flex flex-col px-4 text-end">
                <span className="text-[#FAC1D9] font-normal ">In Stock</span>
                <span>$55.00</span>
              </div>
            </div>
            <div className="mt-4 w-full flex items-center justify-between bg-[#3D4142]">
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/300"
                  alt=""
                  className="h-[66px]"
                />
                <div className="px-4">
                  <h3 className="text-base font-medium">Chicken Parmesan</h3>
                  <p className="text-sm text-[#777979]">Serving: 01 person</p>
                </div>
              </div>
              <div className="flex flex-col px-4 text-end">
                <span className="text-[#FAC1D9] font-normal ">In Stock</span>
                <span>$55.00</span>
              </div>
            </div>
            <div className="mt-4 w-full flex items-center justify-between bg-[#3D4142]">
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/300"
                  alt=""
                  className="h-[66px]"
                />
                <div className="px-4">
                  <h3 className="text-base font-medium">Chicken Parmesan</h3>
                  <p className="text-sm text-[#777979]">Serving: 01 person</p>
                </div>
              </div>
              <div className="flex flex-col px-4 text-end">
                <span className="text-[#FAC1D9] font-normal ">In Stock</span>
                <span>$55.00</span>
              </div>
            </div>
            <div className="mt-4 w-full flex items-center justify-between bg-[#3D4142]">
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/300"
                  alt=""
                  className="h-[66px]"
                />
                <div className="px-4">
                  <h3 className="text-base font-medium">Chicken Parmesan</h3>
                  <p className="text-sm text-[#777979]">Serving: 01 person</p>
                </div>
              </div>
              <div className="flex flex-col px-4 text-end">
                <span className="text-[#FAC1D9] font-normal ">In Stock</span>
                <span>$55.00</span>
              </div>
            </div>
          </ScrollArea>
        </div>
        <div className="mt-10 ">
          <DashboardCharts />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
