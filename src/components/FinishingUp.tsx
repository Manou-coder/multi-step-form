import React from 'react'
import { addons, AddOnType, FormItems, planOptions, steps } from '../data/data'
import { StepProps } from './PersonalInfo'
import { AddOn } from './sidebar-end/AddOns'
import { Header } from './sidebar-end/Header'
import { Main } from './sidebar-end/Main'

export const FinishingUp = ({
  isCustomizableProfile,
  isLargerStorage,
  isOnlineService,
  planLength,
  updateForm,
  plan,
}: StepProps) => {
  const arr = [
    { isOnlineService },
    { isLargerStorage },
    { isCustomizableProfile },
  ]

  const selectedOptions = arr
    .map((option) => {
      const optionKey = Object.keys(option)[0]
      const optionValue = Object.values(option)[0]

      if (optionValue) {
        const optionObj = addons.find((addon) => addon.id === optionKey)
        return optionObj
      } else {
        return null
      }
    })
    .filter((obj) => obj !== null)
  console.log('selectedOptions: ', selectedOptions)

  return (
    <>
      <Header step={steps[3]} />
      <Main>
        <article className="bg-Magnolia rounded-lg p-4 flex flex-col gap-4">
          <div className="flex justify-between items-center ">
            <div>
              <p className="font-bold leading-none">{`${plan} (${
                !planLength ? 'Month' : 'Year'
              })`}</p>
              <button
                onClick={() => updateForm({ planLength: !planLength })}
                type="button"
                className="text-CoolGray underline"
              >
                change
              </button>
            </div>
            <div>
              <p className="font-bold leading-none">
                {getPrice(planOptions[plan].monthly, planLength)}
              </p>
            </div>
          </div>
          <div className="py-[0.1px] bg-CoolGray"></div>
          <ul>
            {selectedOptions.map((option) => (
              <li>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-CoolGray">{option?.title}</p>
                  </div>
                  <div>
                    <p className="text-sm">
                      {getPrice(option?.monthly, planLength, true)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </article>
        <article className="flex justify-between items-center p-4">
          <div>
            <p className="text-CoolGray">Total (per year)</p>
          </div>
          <div>
            <p className="font-bold text-PurplishBlue text-xl">
              {getPrice(total(plan, planLength, selectedOptions), false, true)}
            </p>
          </div>
        </article>
      </Main>
    </>
  )
}

const getPrice = (
  amount: number | undefined | null,
  yearly: boolean,
  withPlus: boolean = false
): string => {
  if (amount == null) return ''
  return `${withPlus ? '+' : ''}$${!yearly ? amount : amount * 10}/${
    !yearly ? 'mo' : 'yr'
  }`
}

const total = (
  plan: string | undefined,
  planLength: boolean,
  selectedOption: AddOnType[]
): number | null => {
  if (!plan) return null
  const calculateMonthlyOptions = selectedOption?.reduce(
    (total, addon) => total + addon.monthly,
    0
  )
  const totalMonthly =
    planOptions[plan].monthly + (calculateMonthlyOptions ?? 0)
  return !planLength ? totalMonthly : totalMonthly * 10
}
