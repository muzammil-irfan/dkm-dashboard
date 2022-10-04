import axios from "axios";
import { useEffect, useState } from "react";
import backendHost from "../../utils/backendHost";
import CommonToast from "../common/CommonToast";

import UserCard from "./UserCard";

const User = () => {
  const [user, setUser] = useState([]);
  const dataFetcher = ()=>{
    axios.get(`${backendHost}/user/ticket/`)
    .then(res=>{
      setUser(res.data);
    })
    .catch(err=>{
      console.log(err);
    });
  }
  useEffect(() => {
    dataFetcher();
  }, []);

  
  return (
    <div>
      <CommonToast />
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
              
                
                  {user.length !== 0 && user.map((item,index) => <UserCard value={item.status} dataFetcher={dataFetcher}  user={item} key={item.email} />
                    )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
