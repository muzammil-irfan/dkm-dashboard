import React from "react";
import "./TallySheet.css";

const TallySheet = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-bold text-black">Tally Sheet</h1>
      </div>
      <div className="flex my-10 ">
        <div className="mx-5 p-5 px-14 rounded-md text-center shadow-md">
          <p>DKM Number</p>
          <h1 className="text-3xl text-black font-bold">60</h1>
        </div>
        <div className="p-5 px-14 rounded-md text-center shadow-md">
          <p>Ticket Number</p>
          <h1 className="text-3xl text-black font-bold">60</h1>
        </div>
      </div>
      <div className=" px-7 py-10  shadow-lg bg-slate-50">
        <div class=" tallyGrid">
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
          <div>
            <p className="">Ship To</p>
            <p className="">DKM Little Rock</p>
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
            <p className=" mx-2">Driver</p>
            <p className="">Truck Com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TallySheet;
