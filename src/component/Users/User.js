import React from 'react';
import { BsChevronDown } from "react-icons/bs";

const User = ({user}) => {

    return (
        <tr>
                    <td className="text-gray-400">{user.name}</td>
                    <td className="text-gray-400">
                    {user.email}
                    </td>
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
    );
};

export default User;