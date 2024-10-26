import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const TrainMe = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const tableData = [
    {
      name: "version-2.0-2024-09-09.md",
      status: "current version",
      createdBy: "27-Jul-23",
      lastUpdated: "28-Jul-23",
      action: "trained",
    },
    {
      name: "version-2.0-2024-09-08.md",
      status: "trained",
      createdBy: "27-Jul-24",
      lastUpdated: "28-Jul-24",
      action: "un-trained",
    },
    // Add more data here if needed
  ];

  // Filter the table data based on the search term
  const filteredData = tableData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.createdBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.lastUpdated.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.action.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="page-width">
        <h2 className="text-[2rem] my-3 text-center font-semibold">Train Me</h2>
        {/* card */}
        <div className="shadow-lg rounded-lg mt-5 mb-12 md:mb-20 p-5 bg-white md:w-1/3">
          <p className="mb-2 font-semibold">
            Current version:{" "}
            <span className="font-normal">version-2.0-2024-09-09.md</span>
          </p>
          <p className="mb-2 font-semibold">
            Name: <span className="font-normal">version-2.0-2024-09-09.md</span>
          </p>
          <p className="mb-2 font-semibold">
            Created by: <span className="font-normal">Sathish</span>
          </p>
          <p className="mb-2 font-semibold">
            Last updated: <span className="font-normal">Adam</span>
          </p>
        </div>
        <div className="flex md:justify-end">
          <div className="relative ml-12 mr-5 md:mr-0 md:ml-0 col-span-2">
            <span className="absolute text-[#6f6f6f] top-[13px] left-4">
              <IoSearch />
            </span>
            <input
              className="border-2 border-[#dad8d8] w-full py-[7px] rounded-md px-10 outline-none"
              placeholder="Search here"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
            />
          </div>
        </div>

        {/* Table */}
        <div className="w-full mb-5 mt-8">
          <div className="">
            <div className="flex flex-col">
              <div className="-my-2 py-2">
                <div className="align-middle inline-block w-full overflow-x-auto sm:rounded-md border-b border-gray-200">
                  <table className="min-w-full">
                    {/* HEAD start */}
                    <thead>
                      <tr className="bg-[#F1F4F9] border-b border-gray-200 text-xs leading-4 text-gray-500 tracking-wider">
                        <th className="px-6 py-3 text-left font-medium"></th>
                        <th className="px-6 py-3 text-left font-medium">
                          Sr. No.
                        </th>
                        <th className="px-6 mt-1 md:mt-0 py-3 text-left font-medium">
                          <span>
                            <p>Name</p>
                          </span>
                        </th>
                        <th className="px-6 py-3 text-left font-medium">
                          <span>
                            <p>Status</p>
                          </span>
                        </th>
                        <th className="px-6 py-3 text-left font-medium">
                          <span>
                            <p>Created By</p>
                          </span>
                        </th>
                        <th className="px-6 py-3 text-left font-medium">
                          <span>
                            <p>Last Updated</p>
                          </span>
                        </th>
                        <th className="px-6 py-3 text-left font-medium">
                          <span>
                            <p>Action</p>
                          </span>
                        </th>
                      </tr>
                    </thead>
                    {/* HEAD end */}
                    {/* BODY start */}
                    <tbody className="bg-white">
                      {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                          <tr key={index}>
                            <td className="px-10 py-4 whitespace-no-wrap border-b border-gray-200">
                              <input
                                className="form-checkbox  h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                type="checkbox"
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para">{index + 1}</p>
                              </div>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para">{item.name}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para2">{item.status}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para2">
                                  {item.createdBy}
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para2">
                                  {item.lastUpdated}
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para2">{item.action}</p>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan={6}
                            className="px-6 py-4 text-center text-gray-500"
                          >
                            No results found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                    {/* BODY end */}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-12 md:mb-20">
          <button className="text-[#212B59] px-5 mt-5 py-2 border rounded-md border-[#926E32] text-[1rem] font-bold">
            Apply
          </button>
        </div>
        {/* Additional form elements */}
        <p className="mb-2 font-semibold">Enter Text</p>
        <textarea
          className="border rounded-md outline-none w-full py-1 pl-2"
          placeholder="Type here.........."
          rows={5}
        ></textarea>
        <div className="flex justify-end mb-12 md:mb-20">
          <button className="text-[#212B59] px-5 mt-5 py-2 border rounded-md border-[#926E32] text-[1rem] font-bold">
            Submit
          </button>
        </div>

        <p className="mb-2 font-semibold">Attach file</p>
        <div className="border p-5 shadow-lg rounded-lg">
          <input type="file" />
        </div>
        <div className="flex justify-end mb-12 md:mb-20">
          <button className="text-[#212B59] px-5 mt-5 py-2 border rounded-md border-[#926E32] text-[1rem] font-bold">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default TrainMe;
