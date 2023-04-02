import React from 'react'
import { CardType } from '../../data/data'
import { Plan } from '../Step2'
import { UserInfoType } from '../Wrapper'

export const Card = ({
  image,
  title,
  monthPrice,
  plan,
  monthly,
  setUserInfo,
  userInfo,
}: CardType & {
  plan: any
  monthly: any
  setUserInfo: any
  userInfo: object
}) => {
  console.log('userInfo: ', userInfo)
  return (
    <div
      // onClick={() =>
      //   setUserInfo((curr: UserInfoType) => ({ ...curr, plan: title }))
      // }
      className={`w-1/3 rounded-lg p-4 border ${
        userInfo.plan === title && 'border-PurplishBlue bg-Magnolia'
      } hover:border-PurplishBlue hover:bg-Magnolia cursor-pointer `}
    >
      <label htmlFor={title}>
        <div className="flex flex-col text-MarineBlue">
          <img className="mb-10 w-9" src={image} alt={title}></img>
          <span className="font-medium leading-none">{title}</span>
          <span className="text-CoolGray">{`$${
            userInfo.monthly ? monthPrice : monthPrice * 10
          }/${userInfo.monthly ? 'mo' : 'yr'}`}</span>
          {!userInfo.monthly && (
            <span className="text-xs font-medium">2 months free</span>
          )}
        </div>
        <input type="checkbox" name={title} id={title} />
      </label>
    </div>
  )
}
