import React, { useState } from "react";

const DashUsers = () => {
  const [selected, setSelected] = useState([]);
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

  // Handle individual checkbox toggle
  const handleCheckboxChange = (index) => {
    setSelected((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };

  // Handle Select All checkbox
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(tableData.map((_, index) => index));
    } else {
      setSelected([]);
    }
  };

  return (
    <>
      <div className="w-full mb-12 mt-20">
        <select
          className="border rounded-md outline-none py-2 pl-2 mb-5 w-64 bg-[#f6f7f9]"
          name=""
          id=""
        >
        
          <option value="">Activate</option>
          <option value="">Suspend</option>
          <option value="">Archive</option>
        </select>
        <div className="">
          <div className="flex flex-col">
            <div className="-my-2 py-2">
              <div className="align-middle inline-block w-full overflow-x-auto sm:rounded-md border-b border-gray-200">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-[#F1F4F9] border-b border-gray-200 text-xs leading-4 text-gray-500 tracking-wider">
                      <th className="whitespace-no-wrap border-b px-10 py-4 text-left font-medium border-gray-200">
                        <input
                        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                          type="checkbox"
                          onChange={handleSelectAll}
                          checked={selected.length === tableData.length}
                        />
                      </th>
                      <th className="px-6 py-3 text-left font-medium">Sr. No.</th>
                      <th className="px-6 mt-1 md:mt-0 py-3 text-left font-medium primary-para">
                        <p>User</p>
                      </th>
                      <th className="px-6 py-3 text-left font-medium primary-para">
                        <p>Tokens delivered</p>
                      </th>
                      <th className="px-6 py-3 text-left font-medium primary-para">
                        <p>Created</p>
                      </th>
                      <th className="px-6 py-3 text-left font-medium primary-para">
                        <p>Updated</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {tableData.map((item, index) => (
                      <tr key={index}>
                        <td className="px-10 py-4 whitespace-no-wrap border-b border-gray-200">
                          <input
                            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            type="checkbox"
                            checked={selected.includes(index)}
                            onChange={() => handleCheckboxChange(index)}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <p className="tertiary-para">{index + 1}</p>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <p className="tertiary-para">{item.name}</p>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <p className="tertiary-para2">{item.tokensDelivered}</p>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <p className="tertiary-para2">{item.created}</p>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <p className="tertiary-para2">{item.updated}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
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
