import React from 'react';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const Location = () => {
    return (
        <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-black font-bold">Locations</h1>
        <label for="my-modal-3" class="btn modal-button btn-warning">Add New</label>
        {/* modal  */}
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label
              for="my-modal-3"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 class="text-lg font-bold">
              Congratulations random Internet user!
            </h3>
            <p class="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
          </div>
        </div>
      </div>
      <div className="my-10 rounded-lg shadow-md h-96">
        <div class="overflow-x-auto ">
          <table class="table w-full ">
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <td className="text-black font-semibold">Name</td>
                <td className="text-black font-semibold">Address</td>
                <td className="text-black font-semibold">Edit/Delete</td>
              </tr>
              {/* <!-- row 2 --> */}
              <tr>
                <td className="text-gray-400">Erin Rhiel Madsen</td>
                <td className="text-gray-400">
                  2464 Royal Ln. Mesa, New Jersey 45463
                </td>
                <td className="flex">
                  <button class="btn btn-ghost btn-outline mx-2">
                    <FiEdit />
                  </button>
                  <button class="btn bg-red-500">
                    <RiDeleteBinLine />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default Location;