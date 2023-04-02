import { cards, steps } from '../data/data'
import { StepProps } from './PersonalInfo'
import { Card } from './sidebar-end/Card'
import { Header } from './sidebar-end/Header'
import { Main } from './sidebar-end/Main'

export const SelectPlan = ({ plan, planLength, updateForm }: StepProps) => {
  return (
    <>
      <Header step={steps[1]} />
      <Main>
        <div className="flex gap-4">
          {cards.map((card) => (
            <Card
              key={card.title}
              image={card.image}
              title={card.title}
              monthPrice={card.monthPrice}
              plan={plan}
              planLength={planLength}
              updateForm={updateForm}
            />
          ))}
        </div>
        <div
          className="
          flex justify-center items-center gap-4 bg-Magnolia rounded-lg py-2
        "
        >
          <span className={`font-medium ${planLength && 'text-CoolGray'}`}>
            Monthly
          </span>
          <span className="flex items-center">
            <label className="w-8 relative inline-flex items-center cursor-pointer">
              <input
                checked={planLength}
                type="checkbox"
                onChange={(e) => updateForm({ planLength: e.target.checked })}
                className="sr-only peer"
              ></input>
              <div className="w-full h-4 bg-MarineBlue rounded-full peer-checked:after:translate-x-4 after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all will-change-transform"></div>
            </label>
          </span>
          <span className={`font-medium ${!planLength && 'text-CoolGray'}`}>
            Yearly
          </span>
        </div>
      </Main>
    </>
  )
}
