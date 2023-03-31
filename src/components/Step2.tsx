import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Step } from '../data/data'
import { Card } from './Card'

type IFormInputs = {
  name: string
  email: string
  phone: number
}

export const Step2 = ({
  step,
  stepIndex,
  setStepIndex,
  setUserInfo,
}: {
  step: Step
  stepIndex: number
  setStepIndex: React.Dispatch<React.SetStateAction<number>>
  setUserInfo: React.Dispatch<React.SetStateAction<object>>
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>()

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    setStepIndex((curr: number) => curr + 1)
    setUserInfo((curr: object) => ({ ...curr, data }))
    // console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full">
      <div className="h-1/4 flex flex-col justify-center gap-2">
        <h1 className="font-bold text-3xl text-MarineBlue">{step.title}</h1>
        <p className="text-CoolGray">{step.description}</p>
      </div>
      <div className="h-[65%] flex flex-col justify-start gap-8 text-MarineBlue">
        <div className="flex">
          <Card />
        </div>
        <div></div>
      </div>
      <div className="h-[10%] flex justify-between items-center">
        <button
          onClick={() => setStepIndex((curr: number) => curr - 1)}
          className={`text-CoolGray ${stepIndex === 0 && 'invisible'}`}
        >
          Go Back
        </button>
        <button
          type="submit"
          className="bg-MarineBlue text-white h-11 px-5 rounded-lg"
        >
          Next Step
        </button>
      </div>
    </form>
  )
}