import BgSidebarDesktop from '../../assets/images/bg-sidebar-desktop.svg'
import BgMobileDesktop from '../../assets/images/bg-sidebar-mobile.svg'
import { Step, steps } from '../../data/data'

export const SidebarStart = ({ currentIndex }: { currentIndex: number }) => {
  return (
    <div className="flex justify-center w-full h-[172px] md:h-[568px] md:w-[274px] md:bg-no-repeat bg-mobile md:bg-desktop bg-cover">
      <ul className="flex md:flex-col justify-center md:justify-start w-[80%] md:pt-8 gap-8">
        {steps.map((step, index) => (
          <li key={step.id} className="flex items-center gap-4">
            <span
              className={`
                circle
                flex justify-center items-center 
                h-9 w-9 
                rounded-full 
                border border-white 
                cursor-pointer 
                text-white
                ${
                  currentIndex === index || (currentIndex === 4 && index === 3)
                    ? 'bg-LightBlue first:text-black'
                    : ''
                }`}
            >
              <span className="">{step.id}</span>
            </span>
            <div className="hidden md:flex flex-col gap-1">
              <span className={`p-0 leading-none text-xs text-CoolGray`}>
                STEP {step.id}
              </span>
              <span className="text-white font-medium p-0 leading-none">
                {step.sidebar}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
