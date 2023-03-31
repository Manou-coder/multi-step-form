import React, { useState } from 'react'
import { SidebarStart } from './SidebarStart'
import { steps } from '../data/data'
import { SidebarEnd } from './SidebarEnd'
import { Step1 } from './Step1'
import { Step2 } from './Step2'

const Wrapper = () => {
  const [stepIndex, setStepIndex] = useState<number>(0)
  const [userInfo, setUserInfo] = useState<object>({})
  console.log('userInfo: ', userInfo)

  return (
    <div className="w-[940px] flex bg-white shadow-xl p-4 pr-0 rounded-2xl">
      <section>
        <SidebarStart steps={steps} stepIndex={stepIndex} />
      </section>
      <section className="w-full flex justify-center items-center">
        <SidebarEnd>
          {stepIndex === 0 && (
            <Step1
              step={steps[0]}
              stepIndex={stepIndex}
              setStepIndex={setStepIndex}
              setUserInfo={setUserInfo}
            />
          )}
          {stepIndex === 1 && (
            <Step2
              step={steps[1]}
              stepIndex={stepIndex}
              setStepIndex={setStepIndex}
              setUserInfo={setUserInfo}
            />
          )}
        </SidebarEnd>
      </section>
    </div>
  )
}

export default Wrapper
