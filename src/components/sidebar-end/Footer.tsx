import React from 'react'

type FooterProps = {
  isFirstStep: boolean
  isLastStep: boolean
  goBackwards: () => void
}

export const Footer = ({
  isFirstStep,
  isLastStep,
  goBackwards,
}: FooterProps) => {
  return (
    <div className="h-[10%] flex justify-between items-center">
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
