import React from "react";

const DashUsers = () => {
  const tableData = [
    {
      name: "Adam",
      tokensDelivered: "21 M",
      created: "27-Jul-23",
      updated: "28-Jul-23",
    },
    {
      name: "Harry",
      tokensDelivered: "19 M",
      created: "27-Jul-23",
      updated: "28-Jul-23",
    },
  ];
  return (
    <>
      {" "}

      {/* table */}
      <div className="w-full mb-12 mt-20">
      <select className="border rounded-md outline-none py-2 pl-2 mb-5 w-64 bg-[#f6f7f9]" name="" id="">
        <option value="">Select all</option>
        <option value="">Activate</option>
        <option value="">Suspend</option>
        <option value="">Archive</option>
      </select>
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
                          <p>User</p>
                        </span>
                      </th>
                      <th>
                        <div className="px-6 py-3 text-left font-medium primary-para">
                          <span>
                            <p>Tokens deleivered</p>
                          </span>
                        </div>
                      </th>
                      <th className="">
                        <div className="px-6 py-3 text-left font-medium primary-para">
                          <span>
                            <p>Created</p>
                          </span>
                        </div>{" "}
                      </th>
                      <th className="">
                        <div className="px-6 py-3 text-left font-medium primary-para">
                          <span>
                            <p>Updated</p>
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
                                {item?.tokensDelivered}
                              </p>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex items-center">
                              <p className="tertiary-para2"> {item?.created}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex items-center">
                              <p className="tertiary-para2"> {item?.updated}</p>
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
    </>
  );
};

export default DashUsers;
