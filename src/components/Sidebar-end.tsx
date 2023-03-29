import React from 'react'

const Info = () => {
  return (
    <div className="w-[70%] h-full">
      <div className="h-1/4 flex flex-col justify-center gap-2">
        <h1 className="font-bold text-3xl text-MarineBlue">Personal info</h1>
        <p className="text-CoolGray">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="h-[65%] flex flex-col justify-start gap-8 text-MarineBlue">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            className="border py-2 px-3 rounded-lg font-medium "
            type="text"
            placeholder="e.g Stephen King"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email Adress</label>
          <input
            className="border py-2 px-3 rounded-lg font-medium"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="adress">Phone Number</label>
          <input
            className="border py-2 px-3 rounded-lg font-medium"
            type="number"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </div>
      <div className="h-[10%] flex justify-between items-center">
        <button className="text-CoolGray">Go Back</button>
        <button className="bg-MarineBlue text-white h-11 px-5 rounded-lg">
          Next Step
        </button>
      </div>
    </div>
  )
}

export default Info
