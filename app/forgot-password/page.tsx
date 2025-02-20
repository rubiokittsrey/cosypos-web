import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-black">
      <div className="flex justify-center flex-col p-12 bg-[#292C2D] w-[758px] text-center rounded-xl">
        <h3 className="text-white text-3xl font-semibold">Forgot Password?</h3>
        <p className="text-white mt-4">
          Please enter your username or email to recover your password
        </p>

        <div className="flex flex-col justify-center text-white gap-1 px-12 mt-8">
          <span className="text-md text-left"> Username</span>

          <Input type="text" placeholder="Enter Your Username" />
          <div className="flex justify-center">
            <Button className="bg-[#F5B6D9] hover:bg-[#FF69B4] mt-4 w-fit text-black">
              Submit Now
            </Button>
          </div>

          <div>
            <p className="mt-16 cursor-pointer">
              Back to{" "}
              <Link href="/login">
                <span className="text-[#F5B6D9] hover:text-[#FF69B4]">
                  Login!
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
