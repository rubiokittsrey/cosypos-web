import Layout from "@/app/components/Layout";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const StaffLayout = () => {
  return (
    <Layout>
      <div className="mt-12min-w-screen h-screen bg-black text-white">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-medium text-2xl">Staff (22)</h3>
          <div className="flex items-center gap-4">
            <button className="bg-[#FAC1D9] py-4 px-6 text-base font-medium rounded-md text-black">
              Add Staff
            </button>
            <button className="flex items-center gap-2 bg-[#3D4142] py-4 px-6 text-base font-medium rounded-md text-white">
              <span>Sort by</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#FAC1D9] py-4 px-6 text-base font-medium rounded-md text-black">
            Staff Management
          </button>
          <button className="bg-[#FAC1D9] py-4 px-6 text-base font-medium rounded-md text-black">
            Attendance
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default StaffLayout;
