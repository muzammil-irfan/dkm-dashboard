import React from "react";
import { BsChevronDown } from "react-icons/bs";

const Users = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-black font-bold">Users</h1>
      </div>
      <div className="my-10 rounded-lg shadow-md h-96">
        <div class="overflow-x-auto ">
          <table class="table w-full ">
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <td className="text-black font-semibold">Name</td>
                <td className="text-black font-semibold">Email</td>
                <td className="text-black font-semibold">Tickets</td>
                <td className="text-black font-semibold">Approval</td>
              </tr>
              {/* <!-- row 2 --> */}
              <tr>
                <td className="text-gray-400">debra holt</td>
                <td className="text-gray-400">debra.holt@example.com</td>
                <td className="text-gray-400">024</td>
                <td className="flex items-center">
                  <select class="select w-36">
                    <option disabled selected>
                      Pending <BsChevronDown />
                    </option>
                    <option>Approved</option>
                    <option>Pending</option>
                    <option>Paused</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
