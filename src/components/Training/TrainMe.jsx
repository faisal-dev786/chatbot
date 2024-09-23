import React from "react";
import { IoSearch } from "react-icons/io5";
const TrainMe = () => {
  const tableData = [
    {
      name: "version-2.0-2024-09-09.md",
      status: "current version",
      createdBy: "27-Jul-23",
      lastUpdated: "28-Jul-23",
      action: "trained",
    },
    {
      name: "version-2.0-2024-09-09.md",
      status: "trained",
      createdBy: "27-Jul-23",
      lastUpdated: "28-Jul-23",
      action: "un-trained",
    },
  ];
  return (
    <>
      <div className="page-width">
        <h2 className="text-[2rem] my-3 text-center font-semibold">Train Me</h2>
        <div className="flex justify-end">
          <div className="relative ml-12 mr-5 md:mr-0 md:ml-0 col-span-2">
            <span className="absolute  text-[#6f6f6f] top-[13px] left-4 ">
              <IoSearch />
            </span>
            <input
              className="border-2 border-[#dad8d8] w-full py-[7px] rounded-md px-10 outline-none"
              placeholder="Search here"
              type="text"
            />
          </div>
        </div>{" "}
        {/* table */}
        <div className="w-full mb-5 mt-8">
          <div className="">
            <div className="flex flex-col">
              <div className="-my-2 py-2">
                <div className="align-middle inline-block w-full overflow-x-auto sm:rounded-md border-b border-gray-200">
                  <table className="min-w-full">
                    {/* HEAD start */}
                    <thead>
                      <tr className="bg-[#F1F4F9] border-b border-gray-200 text-xs leading-4 text-gray-500  tracking-wider">
                        <th className="px-6 py-3 text-left font-medium">
                          Sr. No.
                        </th>
                        <th className="px-6 mt-1 md:mt-0 py-3 text-left font-medium primary-para">
                          <span>
                            <p>Name</p>
                          </span>
                        </th>
                        <th>
                          <div className="px-6 py-3 text-left font-medium primary-para">
                            <span>
                              <p>Status</p>
                            </span>
                          </div>
                        </th>
                        <th className="">
                          <div className="px-6 py-3 text-left font-medium primary-para">
                            <span>
                              <p>Created By</p>
                            </span>
                          </div>{" "}
                        </th>
                        <th className="">
                          <div className="px-6 py-3 text-left font-medium primary-para">
                            <span>
                              <p>Last Updated</p>
                            </span>
                          </div>{" "}
                        </th>
                        <th className="">
                          <div className="px-6 py-3 text-left font-medium primary-para">
                            <span>
                              <p>Action</p>
                            </span>
                          </div>{" "}
                        </th>
                      </tr>
                    </thead>
                    {/* HEAD end */}
                    {/* BODY start */}
                    <tbody className="bg-white">
                      {tableData?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para">{index + 1}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para">{item?.name}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para2">
                                  {" "}
                                  {item?.status}
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para2">
                                  {" "}
                                  {item?.createdBy}
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para2">
                                  {" "}
                                  {item?.lastUpdated}
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                <p className="tertiary-para2">
                                  {" "}
                                  {item?.action}
                                </p>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    {/* BODY end */}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <p className="mb-2 font-semibold">Enter Text</p>
        <textarea
          className="border rounded-md outline-none w-full py-1 pl-2"
          name=""
          id=""
          placeholder="Type here.........."
          rows={5}
        ></textarea>
        <div className="flex justify-end">
          <button className="text-[#212B59] px-5 mt-5 py-2 border rounded-md border-[#926E32] text-[1rem] primary-font-family font-bold">
            Submit
          </button>
        </div>
        {/*  */}
        <p className="mb-2 font-semibold">Attach file</p>
        <div className="border p-5 shadow-lg rounded-lg">
          <input type="file" />
        </div>
        <div className="flex justify-end mb-12">
          <button className="text-[#212B59] px-5 mt-5 py-2 border rounded-md border-[#926E32] text-[1rem] primary-font-family font-bold">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default TrainMe;
