
import React from "react";

const SideNav = () => {
  return (
    <div className="w-[171px] bg-[#292C2D] min-h-screen flex justify-center rounded-r-3xl">
      <div className="h-full min-h-screen flex flex-col justify-between">
        <div>
          <div className="my-8 ">
            <span className="text-xl font-bold text-[#F5B6D9]">cosypos</span>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center">
              <img
                src="/dashboard.svg"
                alt="dashboard"
                className="p-2 bg-white rounded-full"
              />
              <p className="text-white mt-1 text-md">Dashboard</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/menu.svg"
                alt="dashboard"
                className="p-2 bg-white rounded-full"
              />
              <p className="text-white mt-1 text-md">Menu</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/staff.svg"
                alt="dashboard"
                className="p-2 bg-white rounded-full"
              />
              <p className="text-white mt-1 text-md">Staff</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/inventory.svg"
                alt="dashboard"
                className="p-2 bg-white rounded-full"
              />
              <p className="text-white mt-1 text-md">Inventory</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/reports.svg"
                alt="dashboard"
                className="p-2 bg-white rounded-full"
              />
              <p className="text-white mt-1 text-md">Reports</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/orders.svg"
                alt="dashboard"
                className="p-2 bg-white rounded-full"
              />
              <p className="text-white mt-1 text-md">Order/Table</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/reservation.svg"
                alt="dashboard"
                className="p-2 bg-white rounded-full"
              />
              <p className="text-white mt-1 text-md">Reservation</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-[#F5B6D9]"
          >
            <path
              strokeLinecap="round"
              strokeWidth="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>

          <p className="text-white mt-1 text-md font-bold">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
