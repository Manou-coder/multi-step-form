import React from 'react'
import { Footer } from './Footer'

export const SidebarEnd = ({
  children,
  stepIndex,
  setStepIndex,
}: {
  children: React.ReactNode
  stepIndex: number
  setStepIndex: any
}) => {
  return (
    <div className="w-[70%] h-full">
      <form className="h-full">
        {children}
        <Footer stepIndex={stepIndex} setStepIndex={setStepIndex} />
      </form>
    </div>
  )
}
