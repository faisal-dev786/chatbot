import React from "react";

const AuthLyout = ({ children }) => {
  return (
    <div>
      <div className="">
        <div className="w-full m-auto">
          <div className="">
            {children}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLyout;
