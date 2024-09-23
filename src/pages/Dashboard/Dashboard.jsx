import React from "react";
import DashCards from "../../components/Dashboard/DashCards";
import BarChart from "../../components/Dashboard/BarChart";
import LineChart from "../../components/Dashboard/LineChart";
import DashUsers from "../../components/Dashboard/DashUsers";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Dashboard = () => {
  return (
    <>
    <Navbar/>
      <div className="page-width">
        <DashCards />
        <div className="grid md:grid-cols-2 gap-5">
          <div className="">
            <LineChart />
          </div>
          <div>
            <BarChart />
          </div>
        </div>
        <DashUsers />
      </div>
      <Footer/>
    </>
  );
};

export default Dashboard;
