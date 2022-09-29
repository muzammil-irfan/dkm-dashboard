import React from "react";
import "./TallySheet.css";

const TallySheet = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-bold text-black">Tally Sheet</h1>
      </div>
      <div className="flex my-10 mx-5">
        <label
          htmlFor="my-modal-4"
          className="p-5 px-14 rounded-md text-center shadow-md mr-8"
        >
          <p>Ticket Number</p>
          <h1 className="text-3xl text-black cursor-pointer font-bold">60</h1>
        </label>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <div className="modal-box relative p-10 flex items-center flex-col py-20" htmlFor="">
            <h3 className="text-3xl font-bold">Change Ticket Number</h3>
            <input
              type="ticket-number"
              placeholder="Ticket Number"
              className="input input-bordered w-96 bg-white mt-5 rounded-full"
            />
            <input
              type="submit"
              value="Save"
              className="btn text-white w-96 mt-10 rounded-full"
            />
          </div>
        </label>
        <label
          htmlFor="my-modal-5"
          className="p-5 px-14 rounded-md cursor-pointer text-center shadow-md"
        >
          <p>DKM Number</p>
          <h1 className="text-3xl text-black font-bold">60</h1>
        </label>
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <label htmlFor="my-modal-5" className="modal cursor-pointer ">
          <div className="modal-box relative flex flex-col justify-center items-center py-20">
            <h3 className="text-3xl font-bold">Change DKM Number</h3>
            <input
              type="email"
              placeholder="DKM Number"
              className="input input-bordered w-96 bg-white mt-5 rounded-full"
            />
            <input
              type="submit"
              value="Save"
              className="btn text-white w-96 mt-10 rounded-full"
            />
          </div>
        </label>
      </div>
      <div className=" px-5 py-10  shadow-lg bg-slate-50">
        <div className=" tallyGrid text-[10px]">
          <div>
            <p className="">Date</p>
            <p className="">6/5/2022</p>
          </div>
          <div>
            <p className="">Ticket Num</p>
            <p className="">60012</p>
          </div>
          <div>
            <p className="">DKM Num</p>
            <p className="">1234</p>
          </div>
          <div className="mr-1">
            <p className="">Ship To</p>
            <p className="mr-1">DKM Little Rock</p>
          </div>
          <div>
            <p className="">Location</p>
            <p className="">Broadway, TX</p>
          </div>
          <div>
            <p className="">Customer</p>
            <p className="">TXLR</p>
          </div>
          <div>
            <p className="">Customer PO</p>
            <p className="">1550</p>
          </div>
          <div>
            <p className="">Pipe Size</p>
            <p className="">10 3/4</p>
          </div>
          <div>
            <p className="">Total FT</p>
            <p className="">1500</p>
          </div>
          <div>
            <p className="">Status</p>
            <p className="">New</p>
          </div>
          <div>
            <p className="">Truck Num</p>
            <p className="">4</p>
          </div>
          <div>
            <p className="">Trailer Num</p>
            <p className="">3</p>
          </div>
          <div>
            <p className="">Driver</p>
            <p className="">Truck Com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TallySheet;
