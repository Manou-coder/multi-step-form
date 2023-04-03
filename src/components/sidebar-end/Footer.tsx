import React from 'react'

type FooterProps = {
  isFirstStep: boolean
  isLastStep: boolean
  goBackwards: () => void
}

export const Footer = ({ isFirstStep, goBackwards }: FooterProps) => {
  return (
    <div className="h-[10%] bg-white absolute left-0 bottom-0 md:static w-screen md:w-full flex justify-between items-center px-8 md:p-0">
      <button
        type="button"
        onClick={goBackwards}
        className={`text-CoolGray active:text-MarineBlue ${
          isFirstStep && 'invisible'
        }`}
      >
        Go Back
      </button>
      <button
        type="submit"
        className="bg-MarineBlue text-white h-11 px-5 rounded-lg active:bg-[#164988]"
      >
        Next Step
      </button>
    </div>
  )
}
