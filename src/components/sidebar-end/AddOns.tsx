import React from 'react'
import { AddOnType, FormItems } from '../../data/data'
import { StepProps } from '../PersonalInfo'

type AddOnProps = AddOnType &
  Partial<FormItems> & {
    updateForm: (item: Partial<FormItems>) => void
    status: boolean
  }

export const AddOn = ({
  updateForm,
  id,
  title,
  description,
  monthly,
  yearly,
  planLength,
  status,
}: AddOnProps) => {
  return (
    <label
      htmlFor={title}
      className={`flex justify-center items-center border rounded-lg cursor-pointer py-4 hover:bg-Magnolia ${
        status && 'border-PurplishBlue bg-Magnolia'
      }`}
    >
      <div className="w-2/12 flex justify-center items-center">
        <input
          id={title}
          type="checkbox"
          checked={status}
          onChange={(e) => updateForm({ [id]: e.target.checked })}
          className="w-4 h-4 text-PurplishBlue border-CoolGray rounded"
        ></input>
      </div>
      <div className="w-8/12">
        <p className="font-medium leading-none mb-2">{title}</p>
        <p className="leading-none text-CoolGray text-sm">{description}</p>
      </div>
      <div className="w-2/12">
        <p className="text-PurplishBlue">{`+$${
          !planLength ? monthly : yearly
        }/${!planLength ? 'mo' : 'yr'}`}</p>
      </div>
    </label>
  )
}
