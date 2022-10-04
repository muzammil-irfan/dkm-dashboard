import React,{ useState } from 'react'

export default function ImageModal({modal,setModal,imageSrc}) {
  return (
    <div>
        <input type="checkbox" onChange={()=>{console.log("change")}} id="my-modal-3" checked={modal} className="modal-toggle" />
        <div className={`modal`} >
          <div className="modal-box relative p-10 flex-col">
            <label
              
              className="btn btn-sm btn-circle absolute right-2 top-2 "
              onClick={()=>{setModal(false)}}
            >
              ✕
            </label>
           <div className='flex justify-center items-center flex-col'>
           <img src={imageSrc} />
           </div>
          </div>
        </div>
    </div>
  )
}
