import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import backendHost from "../../utils/backendHost";

const Location = () => {
  const [location, setLocation] = useState([]);
  useEffect(() => {
    axios
      .get(`${backendHost}/location/`)
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-black font-bold">Locations</h1>
        <label for="my-modal-6" class="btn modal-button btn-warning">
          Add New
        </label>
        {/* modal  */}
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal ">
          <div class="modal-box relative p-10 flex-col">
            <label
              for="my-modal-6"
              class="btn btn-sm btn-circle absolute right-2 top-2 "
            >
              ✕
            </label>
            <h1 className="text-2xl font-bold ml-7">Add member</h1>
            <div className="flex justify-center items-center flex-col">
              <input
                type="email"
                placeholder="Name"
                class="input input-bordered w-96 bg-white mt-5 rounded-full"
              />
              <input
                type="email"
                placeholder="Address"
                class="input input-bordered w-96 bg-white mt-5 rounded-full"
              />
              <input
                type="submit"
                value="Save"
                className="btn text-white w-96 mt-10 rounded-full"
              />
            </div>
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
                {/* <td className="text-black font-semibold">Address</td> */}
                <td className="text-black font-semibold">Edit/Delete</td>
              </tr>
              {/* <!-- row 2 --> */}
              {location.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className="text-gray-400">{item.name}</td>
                    <td className="flex">
                      <button class="btn btn-ghost btn-outline mx-2">
                        <FiEdit />
                      </button>
                      <button class="btn bg-red-500">
                        <RiDeleteBinLine />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Location;
