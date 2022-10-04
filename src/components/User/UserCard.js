import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import backendHost from "../../utils/backendHost";
import { errorHandler } from "../common/CommonToast";

const UserCard = ({ user, value, dataFetcher }) => {
  const handleChange = (e) => {
    const obj = {
      status: e.target.value,
    };
    axios
      .put(`${backendHost}/user/edit/${user.user_id}`, obj)
      .then((res) => {
        dataFetcher();
        toast.success(res.data.message);
      })
      .catch((err) => {
        errorHandler(err);
      });
  };

  return (
    <tr>
      <td className="text-gray-400">{user.name}</td>
      <td className="text-gray-400">{user.email}</td>
      <td className="text-gray-400">{user.ticket}</td>
      <td className="flex items-center">
        <select className="select w-36" value={value} onChange={handleChange}>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
        </select>
      </td>
    </tr>
  );
};

export default UserCard;
