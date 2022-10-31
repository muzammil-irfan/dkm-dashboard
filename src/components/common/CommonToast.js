import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
export const errorHandler = (err)=>{
    if(err.response.data.message){
        toast.error(err.response.data.message);
    } else {
        toast.error("Internal Server Error. Please try again");
        console.log(err);
    }
};
export default function CommonToast() {
  return (
    <ToastContainer 
    position='bottom-center'
    autoClose={3000}
    hideProgressBar
    />
  )
}
