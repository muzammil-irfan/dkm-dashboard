import React from "react";

export default function FilterModal({
  modal,
  setModal,
  data,
  setData,
  filterType,
}) {
  const handleChange = (index, type, checked) => {
    //type will let us know that it is a location or customer
    const newData = [...data[type]];

    newData[index]["checked"] = !checked;
    setData({ ...data, [type]: newData });
  };
  const handleSelectAll = () => {
    const newData = {};
    newData["location"] = data.location.map((item) => {
      item["checked"] = true;
      return item;
    });
    newData["customer"] = data.customer.map((item) => {
      item["checked"] = true;
      return item;
    });
    setData(newData);
  };
  return (
    <>
      <input
        type="checkbox"
        id="my-modal-3"
        checked={modal}
        className="modal-toggle"
        onChange={() => {}}
      />
      <div className={`modal `}>
        <div className="modal-box relative  flex-col">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold ">Filter</h1>
            <label
              className="btn btn-sm btn-circle  "
              onClick={() => {
                setModal(false);
              }}
            >
              ✕
            </label>
          </div>
          <div className="p-2">
            {filterType === "location" && (
              <>
                <h3 className="font-bold">Location</h3>
                <div className="p-1 max-h-20 overflow-auto">
                  {data.location.map((item, index) => {
                    return (
                      <CommonOption
                        key={item.location}
                        id={item.location}
                        name={item.location_name}
                        type={"location"}
                        checked={item.checked}
                        handleChange={handleChange}
                        index={index}
                      />
                    );
                  })}
                </div>
              </>
            )}
            {filterType === "customer" && (
              <>
                <h3 className="font-bold">Customer</h3>
                <div className="p-1 max-h-20 overflow-auto">
                  {data.customer.map((item, index) => {
                    return (
                      <CommonOption
                        key={item.customer}
                        id={item.customer}
                        name={item.customer_name}
                        type={"customer"}
                        checked={item.checked}
                        handleChange={handleChange}
                        index={index}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>
          <div className="">
            <button
              className="w-full bg-slate-200 p-1"
              onClick={handleSelectAll}
            >
              Select All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
const CommonOption = ({ id, name, type, checked, handleChange, index }) => {
  return (
    <div className="flex gap-2 pointer">
      <input
        type="checkbox"
        onChange={(e) => handleChange(index, type, checked)}
        value={type} //To get type as value
        checked={checked}
        className="pointer"
        id={name + id}
      />
      <label className="pointer" id={name + id}>
        {name}
      </label>
    </div>
  );
};
