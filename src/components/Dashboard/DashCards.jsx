import React from "react";

const DashCards = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 md:mb-20">
        {/* Passing the prop 'count' to the Card component */}
        <Card label="No of users" count="55" />
        <Card label="no of tokens trained" count="2.1 M" />
        <Card label="no of token answered" count="10 M" />
        <Card label="cost saved" count="20 M" />
      </div>
    </>
  );
};

const Card = ({ label, count }) => {
  return (
    <div className="border border-[orange] p-5 rounded-2xl shadow-lg">
      <p className="uppercase font-medium text-[#525052]">{label}</p>
      <h1 className="text-[3rem] text-center font-semibold">{count}</h1>
    </div>
  );
};

export default DashCards;
