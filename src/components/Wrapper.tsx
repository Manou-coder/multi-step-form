import { useState } from 'react'
import { steps } from '../data/data'
import { SidebarEnd } from './sidebar-end/SidebarEnd'
import { SidebarStart } from './sidebar-start/SidebarStart'
import { PersonalInfo } from './PersonalInfo'
import { Plan, Step2 } from './Step2'

export type UserInfoType = Plan

const Wrapper = () => {
  const [stepIndex, setStepIndex] = useState<number>(0)
  const [userInfo, setUserInfo] = useState<object>({
    plan: 'Arcade',
    monthly: true,
  })
  console.log('userInfo: ', userInfo)

  return (
    <div className="w-[940px] flex bg-white shadow-xl p-4 pr-0 rounded-2xl">
      <section>
        <SidebarStart steps={steps} stepIndex={stepIndex} />
      </section>
      <section className="w-full flex justify-center items-center">
        <SidebarEnd>
          {stepIndex === 0 && (
            <PersonalInfo
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
              userInfo={userInfo}
            />
          )}
        </SidebarEnd>
      </section>
    </div>
  )
}

export default Wrapper
