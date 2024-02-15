import React from 'react'
import { useState } from 'react';
const PhoneOTPForm = () => {
  const [phoneNumber,setPhoneNumber] = useState("");
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  }
  const handlePhoneSubmit = (event) =>{
   event.preventDefault();
   //validataions
   const regex = /[^0-9]/g;
   if(phoneNumber.length<10 || regex.test(phoneNumber)){
    aliert("Invalid Phone Number");
    return;
   }
   //Backend API for sending an OTP
  }

  return (
    <div>
      <form onSubmit={handlePhoneSubmit}>
        <input type="text" value={phoneNumber} onChange={handlePhoneNumber} placeholder='Enter phone number'/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PhoneOTPForm;