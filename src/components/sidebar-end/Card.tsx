import React from 'react'
import { CardType, FormItems } from '../../data/data'

type CardType2 = CardType & Partial<FormItems>

export const Card = ({
  image,
  title,
  monthPrice,
  plan,
  planLength,
  updateForm,
}: CardType2 & { updateForm: (item: Partial<FormItems>) => void }) => {
  return (
    <div
      className={`w-full md:w-1/3 rounded-lg p-4 border ${
        plan === title && 'border-PurplishBlue bg-Magnolia'
      } hover:border-PurplishBlue hover:bg-Magnolia`}
    >
      <label htmlFor={title}>
        <div className="flex md:flex-col text-MarineBlue cursor-pointer">
          <img className="md:mb-10 w-9" src={image} alt={title}></img>
          <div className="flex flex-col ms-4 md:m-0">
            <span className="font-medium leading-none">{title}</span>
            <span className="text-CoolGray">{`$${
              !planLength ? monthPrice : monthPrice * 10
            }/${planLength ? 'mo' : 'yr'}`}</span>
            {planLength && (
              <span className="text-xs font-medium">2 months free</span>
            )}
          </div>
        </div>
        <input
          onChange={() => updateForm({ plan: title })}
          className="hidden"
          type="radio"
          name={title}
          id={title}
          checked={plan === title}
        />
      </label>
    </div>
  )
}
