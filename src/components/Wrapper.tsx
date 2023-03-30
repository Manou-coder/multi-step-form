import React from 'react'
import { SidebarStart } from './SidebarStart'
import { steps } from '../data/data'
import { SidebarEnd } from './SidebarEnd'
const Wrapper = () => {
  return (
    <div className="w-[940px] flex bg-white shadow-xl p-4 pr-0 rounded-2xl">
      <section>
        <SidebarStart steps={steps} />
      </section>
      <section className="w-full flex justify-center items-center">
        <SidebarEnd steps={steps} />
      </section>
    </div>
  )
}

export default Wrapper
