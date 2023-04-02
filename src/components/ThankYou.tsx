import React from 'react'
import IconThankYou from '../assets/images/icon-thank-you.svg'

export const ThankYou = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <img className="mb-6" src={IconThankYou} alt="thank-you" />
      <h1 className="font-bold text-4xl mb-4 text-MarineBlue">Thank you!</h1>
      <p className="text-center text-CoolGray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  )
}
