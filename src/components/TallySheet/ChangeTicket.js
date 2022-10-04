import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import backendHost from '../../utils/backendHost';
import { errorHandler } from '../common/CommonToast';

export default function ChangeTicket({ticket,dkmTicketFetcher}) {
    const [ ticketValue,setTicketValue ] = useState(ticket+1);
    const [ modal,setModal ] = useState(false);
    const handleChange = (e)=>{
        setTicketValue(e.target.value);
    };
    useEffect(()=>{
        setTicketValue(ticket+1);
    },[ticket])
    const handleSubmit = ()=>{
        setModal(false);
        const obj = {
            ticket: ticketValue
        };
        axios.put(`${backendHost}/dkm_ticket/update/ticket`,obj)
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
          <p>Ticket Number</p>
          <h1 className="text-3xl text-black cursor-pointer font-bold">
            {ticket}
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
           <h1 className='text-2xl font-bold ml-7'>Change ticket number</h1>
           <div className='flex justify-center items-center flex-col'>
           <input
                placeholder="Ticket Number"
                name="name"
                type="number"
                value={ticketValue}
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
