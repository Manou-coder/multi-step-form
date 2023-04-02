import BgSidebarDesktop from '../../assets/images/bg-sidebar-desktop.svg'
import { Step, steps } from '../../data/data'

export const SidebarStart = ({ currentIndex }: { currentIndex: number }) => {
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
        {steps.map((step, index) =>
          index !== steps.length - 1 ? (
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
                ${currentIndex === index && 'bg-LightBlue first:text-black'}
                `}
              >
                <span className="">{step.id}</span>
              </span>
              <div className="flex flex-col gap-1">
                <span className={`p-0 leading-none text-xs text-CoolGray`}>
                  STEP {step.id}
                </span>
                <span className="text-white font-medium p-0 leading-none">
                  {step.sidebar}
                </span>
              </div>
            </li>
          ) : null
        )}
      </ul>
    </div>
  )
}
