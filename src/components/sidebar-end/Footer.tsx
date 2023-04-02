import React from 'react'

export const Footer = ({
  stepIndex,
  setStepIndex,
}: {
  stepIndex: number
  setStepIndex: React.Dispatch<React.SetStateAction<number>>
}) => {
  return (
    <div className="h-[10%] flex justify-between items-center">
      <button
        type="button"
        onClick={() => setStepIndex((curr: number) => curr - 1)}
        className={`text-CoolGray active:text-MarineBlue ${
          stepIndex === 0 && 'invisible'
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
