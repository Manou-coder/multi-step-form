import React from 'react'
import { Step } from '../data/data'

export const Header = ({ step }: { step: Step }) => {
  return (
    <div className="h-1/4 flex flex-col justify-center gap-2">
      <h1 className="font-bold text-3xl text-MarineBlue">{step.title}</h1>
      <p className="text-CoolGray">{step.description}</p>
    </div>
  )
}
