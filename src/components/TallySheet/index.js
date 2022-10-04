import axios from "axios";
import React, { useEffect, useState } from "react";
import backendHost from "../../utils/backendHost";
import CommonToast from "../common/CommonToast";
import ChangeDKM from "./ChangeDKM";
import ChangeTicket from "./ChangeTicket";

const TallySheet = () => {
  const [dkmTicket,setDkmTicket] = useState({dkm:"",ticket:""});
  const [ticketData,setTicketData] = useState([]);
  const dkmTicketFetcher = ()=>{
    axios.get(`${backendHost}/dkm_ticket`)
    .then(res=>{
      console.log(res)
      setDkmTicket({
        dkm: res.data.dkm,
        ticket:res.data.ticket
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
  const ticketsFetcher = ()=>{
    axios.get(`${backendHost}/ticket/`)
    .then(res=>{
      setTicketData(res.data);
      console.log(ticketData)
    })
    .catch(err=>{
      console.log(err);
    })
  } 
  useEffect(()=>{
    dkmTicketFetcher();
    ticketsFetcher();
  },[])
  return (
    <div>
      <CommonToast />
      <div>
        <h1 className="text-xl font-bold text-black">Tally Sheet</h1>
      </div>
      <div className="flex my-10 mx-5">
        <ChangeTicket ticket={dkmTicket.ticket} dkmTicketFetcher={dkmTicketFetcher} />
        <ChangeDKM dkm={dkmTicket.dkm} dkmTicketFetcher={dkmTicketFetcher} />
      </div>
      <div className="w-fit py-10 shadow-lg bg-slate-50 ">
        <table className="overflow-auto">
          <thead>
            <tr>
              {
                headerData.map(item=>{
                  return(
                    <td key={item} >
                      <p className="px-1 w-28">{item} </p></td>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              ticketData.map(item=>{
                return(
                  <tr  key={item.ticket_number}>
                    <td className="py-1">{item.date}</td>
                    <td>{item.ticket_number}</td>
                    <td>{item.dkm_number}</td>
                    <td>{item.location.name}</td>
                    <td>{item.customer.name}</td>
                    <td>{item.customer_po}</td>
                    <td>{item.pipe_size}</td>
                    <td>{item.total_ft}</td>
                    <td>No status</td>
                    <td>{item.truck_number}</td>
                    <td>{item.trailer_number}</td>
                    <td>{item.trailer_number}</td>
                    <td>{item.truck_company}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TallySheet;

const headerData = [
  "Date",
  "Ticket Num",
  "DKM Num",
  // "Ship To",
  "Location",
  "Customer",
  "Customer PO",
  "Pipe Size",
  "Total FT",
  "Status",
  "Truck Num",
  "Trailer Num",
  "Driver",
  "Truck com"
]