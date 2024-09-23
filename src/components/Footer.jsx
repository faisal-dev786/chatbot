import React from "react";
const currentYear = new Date().getFullYear(); // Get current year
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
<MdWifiCalling3 />;
const Footer = () => {
  return (
    <>
      {" "}
      <div className="bg-[#faf9f9] ">
        <div className="page-width">
          <div className="md:flex justify-around">
            <div className="flex justify-center">
              <img className="max-w-[200px]" src="/logo.png" alt="" />
            </div>
            <div>
              <h4 class="uppercase text-center mb-4 mt-8 font-semibold text-[#535353]">
                agreements
              </h4>
              <a className="text-decoration-none" href="#">
                <p class=" uppercase text-center text-[#535353]">
                  privacy policy
                </p>
              </a>
              <a className="text-decoration-none" href="#">
                <p className=" uppercase py-1 text-center text-[#535353]">
                  terms &amp; conditions
                </p>
              </a>
              <a className="text-decoration-none" href="#">
                <p class=" uppercase text-center text-[#535353]">
                  cookies policy
                </p>
              </a>
            </div>
            <div>
              <h4 class=" uppercase text-center font-semibold mt-8 mb-4 text-[#535353]">
                Contact us
              </h4>
              <div className="flex items-center justify-center gap-3">
                <span className="text-[1.5rem] text-[#535353]">
                  <FaLinkedin />
                </span>
                <span className="text-[1.5rem] text-[#535353]">
                  <FaSquareWhatsapp />
                </span>
                <span className="text-[1.5rem] text-[#535353]">
                  <FaSquareFacebook />
                </span>
                <span className="text-[1.5rem] text-[#535353]">
                  <FaInstagramSquare />
                </span>
              </div>
              <div className="flex items-center gap-3 mt-3 justify-center">
                <span className="text-[1.5rem] text-[#535353]">
                  <MdWifiCalling3 />
                </span>
                <span className="text-[1.5rem] text-[#535353]">
                  <MdEmail />
                </span>
                <span className="text-[1.5rem] text-[#535353]">
                  <FaSquareXTwitter />
                </span>
              </div>
            </div>
          </div>
          <p className="text-center  py-4 text-[1rem] font-semibold text-[#535353] md:pl-12">
            © {currentYear} Chatbot. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
