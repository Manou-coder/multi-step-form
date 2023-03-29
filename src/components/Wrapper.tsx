import React from 'react'
import Info from './Sidebar-end'
import Sidebar from './Sidebar-start'
const Wrapper = () => {
  const arr = ['YOUR INFO', 'SELECT-PLANS', 'ADD-ONS', 'SUMMARY']
  return (
    <div className="w-[940px] flex bg-white shadow-xl p-4 pr-0 rounded-2xl">
      <section>
        <Sidebar arr={arr} />
      </section>
      <section className="w-full flex justify-center items-center">
        <Info />
      </section>
    </div>
  )
}

export default Wrapper
