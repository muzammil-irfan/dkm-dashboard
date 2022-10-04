import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import backendHost from '../../utils/backendHost';
import { errorHandler } from '../common/CommonToast';

export default function ChangeDKM({dkm,dkmTicketFetcher}) {
    const [ dkmValue,setDkmValue ] = useState(dkm+1);
    const [ modal,setModal ] = useState(false);
    const handleChange = (e)=>{
        setDkmValue(e.target.value);
    };
    useEffect(()=>{
        setDkmValue(dkm+1);
    },[dkm])
    const handleSubmit = ()=>{
        setModal(false);
        const obj = {
            dkm: dkmValue
        };
        axios.put(`${backendHost}/dkm_ticket/update/dkm`,obj)
        .then(res=>{
            toast.success(res.data.message);
            dkmTicketFetcher();
        })
        .catch(err=>{
            errorHandler(err);
            console.log(err);
        })
    };
  return (
    <>
        <label
          htmlFor="my-modal-4"
          className="p-5 px-14 rounded-md text-center shadow-md mr-8"
          onClick={()=>{setModal(true)}}
        >
          <p>DKM Number</p>
          <h1 className="text-3xl text-black cursor-pointer font-bold">
            {dkm}
          </h1>
        </label>
        {/* modal  */}
        <input type="checkbox" onChange={()=>{console.log("change")}} id="my-modal-3" checked={modal} className="modal-toggle" />
        <div className={`modal `}>
          <div className="modal-box relative p-10 flex-col">
            <label
              
              className="btn btn-sm btn-circle absolute right-2 top-2 "
              onClick={()=>{setModal(false)}}
            >
              ✕
            </label>
           <h1 className='text-2xl font-bold ml-7'>Change DKM number</h1>
           <div className='flex justify-center items-center flex-col'>
           <input
                placeholder="DKM Number"
                type="number"
                value={dkmValue}
                onChange={handleChange}
                className="input input-bordered w-96 bg-white mt-5 rounded-full"
              />
              <button className="btn text-white w-96 mt-10 rounded-full" onClick={handleSubmit}>
                Save
              </button>
           </div>
          </div>
        </div>
    </>
  )
}
