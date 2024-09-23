import React, { useState } from "react";
import AuthLyout from "../../Layout/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // toggle password
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <AuthLyout>
        <div className=" w-4/6 md:w-2/6 mx-auto  pt-5 md:pt-5">
          <div className="flex justify-center">
            <img className="max-w-[150px]" src="/logo.jpg" alt="" />
          </div>
          <div className="">
            <form action="submit">
              <div>
                <p className="mt-5 md:mt-5 mb-8 md:mb-8 md:max-w-[300px] leading-[25.82px] m-auto text-[26px] primary-font-family text-center font-bold">
                  Sign in to chatbot
                </p>
                <p className="secondary-para mb-1">Email*</p>
                <input
                  className="border rounded-md outline-none w-full py-1 pl-2"
                  type="text"
                />

<p className="secondary-para mt-2 mb-1">Password*</p>
                <div className="relative">
                  <input
                   className="border rounded-md outline-none w-full py-2 pl-2"
                    placeholder=""
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                  />

                  <span onClick={togglePassword}>
                    {showPassword ? (
                      <MdOutlineRemoveRedEye
                        className="text-[#C1C1C5] absolute right-5 top-3 cursor-pointer"
                        size={20}
                      />
                    ) : (
                      <FaEyeSlash
                        className="text-[#C1C1C5] absolute right-5 top-3 cursor-pointer"
                        size={20}
                      />
                    )}
                  </span>
                </div>

                <div className="md:flex justify-between pt-5">
                  {/* <Link to="/reset-password">
                    <p className="underline text-[#212B59] text-[1rem] primary-font-family">
                      Forgot your password?
                    </p>
                  </Link> */}
                </div>
                <button className="text-[#212B59] w-full  mt-5 py-2 border rounded-md border-[#926E32] text-[1rem] primary-font-family font-bold">
                  SIGN IN
                </button>
                <div className=" justify-between mt-12 md:mt-12">
                  <p className="text-[#00000048] text-[1rem] primary-font-family">
                    Don't have an account?
                  </p>
                  <Link to={"/sign-up"}>
                    <p className="underline mt-3 text-[#212B59] text-[1rem] primary-font-family">
                      Create an account
                    </p>
                  </Link>
                  <div className="flex justify-center">
                    <p className="text-[#0000007c] absolute bottom-5  text-[0.7rem] md:text-[0.9rem] primary-font-family mt-5 md:mt-20">
                      © {new Date().getFullYear()} All Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </AuthLyout>
    </div>
  );
};

export default SignIn;
