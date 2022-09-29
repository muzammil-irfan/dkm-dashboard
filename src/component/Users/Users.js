import axios from "axios";
import { useEffect, useState } from "react";
import backendHost from "../../utils/backendHost";

import User from "./User";

const Users = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get(`${backendHost}/user/ticket/`)
    .then(res=>{
      setUser(res.data);
    })
    .catch(err=>{
      console.log(err);
    });
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl text-black font-bold">User</h1>
      </div>
      <div className="my-10 rounded-lg shadow-md h-96">
        <div className="overflow-x-auto ">
          <table className="table w-full ">
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <td className="text-black font-semibold">Name</td>
                <td className="text-black font-semibold">Email</td>
                <td className="text-black font-semibold">Tickets</td>
                <td className="text-black font-semibold">Approval</td>
              </tr>
              {/* <!-- row 2 --> */}
              
                
                  {user.length !== 0 && user.map((item) => <User user={item} key={item.email} />
                    )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
