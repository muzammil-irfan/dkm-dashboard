import React, {useState,useEffect} from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from 'axios';
import backendHost from "../../utils/backendHost";
import { toast } from "react-toastify";
import CommonToast, { errorHandler } from "../common/CommonToast";

const Customer = () => {
  const [customer, setCustomer] = useState([]);
  const initialValues = {
    name:"",
    address:""
  }
  const [values,setValues] = useState(initialValues)
  const [modal,setModal] = useState(false)//If true then open the modal
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setValues({...values, [name]:value});
  }
  const [type,setType] = useState("create");
  const [id,setId] = useState("");
  const handleSubmit = ()=>{
    if(values.name.length === 0 || values.address.length === 0){
      toast.error("Fill the form correctly")
    } else {
      //It will change the endpoint depending on the type so we can create and edit from same model without link method
      if(type === 'update'){
        
        axios.put(`${backendHost}/customer/edit/${id}`,values)
        .then(res=>{
          dataFetcher();
          setModal(false);
          toast.success(res.data.message);
        })
        .catch(err=>{
        errorHandler(err);
      });
    } else {
      
      axios.post(`${backendHost}/customer/add`,values)
      .then(res=>{
        dataFetcher();
        setModal(false);
        toast.success(res.data.message);
        })
        .catch(err=>{
          errorHandler(err);
        });
      }
    }
  }
  const handleButton = (item, buttonType) =>{
    if(buttonType === 'edit'){
      setId(item.id);
      setType("update");
      setValues({
        name:item.name,
        address: item.address
      });
      setModal(true)
    } else {
      axios.delete(`${backendHost}/customer/delete/${item.id}`)
      .then(res=>{
        dataFetcher();
        toast.success(res.data.message);
      })
      .catch(err=>{
        errorHandler(err);
        console.log(err)
      })
    }
  }
  const dataFetcher = ()=>{
    axios
      .get(`${backendHost}/customer/`)
      .then((res) => {  
        setCustomer(res.data);
      })
      .catch((err) => {
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
        <h1 className="text-xl text-black font-bold">Customers</h1>
        <label onClick={()=>{setModal(true); setType("create");}} className="btn modal-button btn-warning">Add New</label>
        {/* modal  */}
        <input type="checkbox" onChange={()=>{console.log("change")}} id="my-modal-3" checked={modal} className="modal-toggle" />
        <div className={`modal `}>
          <div className="modal-box relative p-10 flex-col">
            <label
              
              className="btn btn-sm btn-circle absolute right-2 top-2 "
              onClick={()=>{setModal(false)}}
            >
              ???
            </label>
           <h1 className='text-2xl font-bold ml-7'>{type === "create" ? "Add" : "Edit"} Customer</h1>
           <div className='flex justify-center items-center flex-col'>
           <input
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                className="input input-bordered w-96 bg-white mt-5 rounded-full"
              />
           <input
                placeholder="Address"
                name="address"
                value={values.address}
                onChange={handleChange}
                className="input input-bordered w-96 bg-white mt-5 rounded-full"
              />
              <button className="btn text-white w-96 mt-10 rounded-full" onClick={handleSubmit}>
                Save
              </button>
           </div>
          </div>
        </div>
      </div>
      <div className="my-10 rounded-lg shadow-md h-96">
        <div className="overflow-x-auto ">
          <table className="table w-full ">
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <td className="text-black font-semibold">Name</td>
                <td className="text-black font-semibold">Address</td>
                <td className="text-black font-semibold">Edit/Delete</td>
              </tr>
              {/* <!-- row 2 --> */}
              {
                customer.length !== 0 && 
                customer.map(item=>{
                  return(
                    <tr key={item.id}>
                      <td className="text-gray-400">{item.name}</td>
                      <td className="text-gray-400">
                        {item.address}
                      </td>
                      <td className="flex">
                        <button className="btn btn-ghost btn-outline mx-2" onClick={()=>{handleButton(item, "edit")}}>
                          <FiEdit />
                        </button>
                        <button className="btn bg-red-500" onClick={()=>{handleButton(item, "delete")}}>
                          <RiDeleteBinLine />
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customer;
