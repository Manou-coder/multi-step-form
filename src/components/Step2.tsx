import { useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { cards, Step } from '../data/data'
import { Card } from './sidebar-end/Card'
import { Footer } from './sidebar-end/Footer'
import { Header } from './sidebar-end/Header'
import { Main } from './sidebar-end/Main'
// import { object } from './Wrapper'

type IFormInputs = {
  name: string
  email: string
  phone: number
}

export type Plan = {
  plan: 'Arcade' | 'Advanced' | 'Pro'
  monthly: boolean
}

export const Step2 = ({
  step,
  stepIndex,
  setStepIndex,
  setUserInfo,
  userInfo,
}: {
  step: Step
  stepIndex: number
  setStepIndex: React.Dispatch<React.SetStateAction<number>>
  setUserInfo: React.Dispatch<React.SetStateAction<object>>
  userInfo: object
}) => {
  const handleChange = (event: any) => {
    console.log('change')
    setUserInfo((curr: any) => ({ ...curr, monthly: event.target.checked }))
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>()

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    setStepIndex((curr: number) => curr + 1)
    setUserInfo((curr: object) => ({ ...curr, data }))
    // console.log(data)
    console.log('submit form')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full">
      <Header step={step} />
      <Main>
        <div className="flex gap-4">
          {cards.map((card) => (
            <Card
              key={card.title}
              image={card.image}
              title={card.title}
              monthPrice={card.monthPrice}
              setUserInfo={setUserInfo}
              userInfo={userInfo}
            />
          ))}
        </div>
        <div
          className="
          flex justify-center items-center gap-4 bg-Magnolia rounded-lg py-2
        "
        >
          <span
            className={`font-medium ${!userInfo.monthly && 'text-CoolGray'}`}
          >
            Monthly
          </span>
          <span className="flex items-center">
            <label className="w-8 relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                onChange={handleChange}
                className="sr-only peer"
              ></input>
              <div className="w-full h-4 bg-MarineBlue rounded-full peer-checked:after:translate-x-4 after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all will-change-transform"></div>
            </label>
          </span>
          <span
            className={`font-medium ${userInfo.monthly && 'text-CoolGray'}`}
          >
            Yearly
          </span>
        </div>
      </Main>
      <Footer stepIndex={stepIndex} setStepIndex={setStepIndex} />
    </form>
  )
}
