import React from 'react'
import BgSidebarDesktop from '../assets/images/bg-sidebar-desktop.svg'

const Sidebar = ({ arr }: { arr: string[] }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${BgSidebarDesktop})`,
        backgroundRepeat: 'no-repeat',
        height: '568px',
        width: '274px',
      }}
      className="flex justify-center"
    >
      <ul className="flex flex-col w-[80%] pt-8 gap-8">
        {arr.map((step, i) => (
          <li key={`step${i}`} className="flex items-center gap-4">
            <span
              className="
            circle
            flex justify-center items-center 
            h-9 w-9 
            rounded-full 
            border border-white 
            cursor-pointer 
            text-white
            hover:bg-LightBlue
            hover:first:text-black
            "
            >
              <span className="">{i + 1}</span>
            </span>
            <div className="flex flex-col gap-1">
              <span className={`p-0 leading-none text-xs text-CoolGray`}>
                STEP {i + 1}
              </span>
              <span className="text-white font-medium p-0 leading-none">
                {step}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
