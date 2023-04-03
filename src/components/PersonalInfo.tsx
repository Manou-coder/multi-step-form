import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormItems, Step, steps } from '../data/data'
import { Footer } from './sidebar-end/Footer'
import { Header } from './sidebar-end/Header'
import { Main } from './sidebar-end/Main'

export type StepProps = FormItems & {
  updateForm: (item: Partial<FormItems>) => void
}

export const PersonalInfo = ({
  name,
  email,
  phone,
  updateForm,
  isFormError,
}: StepProps & { isFormError: any }) => {
  const errors = {
    name: false,
    email: false,
    phone: false,
  }
  console.log('isFormError: ', isFormError)
  return (
    <>
      <Header step={steps[0]} />
      <Main>
        {/* name */}
        <div className="flex flex-col">
          <div className="flex justify-between">
            <label htmlFor={'name'}>{'Name'}</label>
            {isFormError.name && !name ? (
              <p className="text-StrawberryRed font-medium">
                This field is required
              </p>
            ) : null}
          </div>
          <input
            className={`border py-2 px-3 rounded-lg font-medium outline-none ${
              isFormError.name && !name
                ? 'border border-red-500'
                : 'focus:border-PurplishBlue'
            }
          `}
            type={'text'}
            placeholder={'e.g Stephen King'}
            id="name"
            name="name"
            value={name}
            // required
            onChange={(e) => {
              updateForm({ name: e.target.value })
            }}
            autoFocus
            autoComplete="name"
          />
        </div>
        {/* email */}
        <div className="flex flex-col">
          <div className="flex justify-between">
            <label htmlFor={'email'}>{'Email Adress'}</label>
            {isFormError.email && !email ? (
              <p className="text-StrawberryRed font-medium">
                This field is required
              </p>
            ) : null}
          </div>
          <input
            className={`border py-2 px-3 rounded-lg font-medium outline-none ${
              isFormError.email && !email
                ? 'border border-red-500'
                : 'focus:border-PurplishBlue'
            }
          `}
            type={'email'}
            value={email}
            onChange={(e) => {
              updateForm({ email: e.target.value })
            }}
            placeholder={'e.g. stephenking@lorem.com'}
            autoComplete="email"
          />
        </div>
        {/* phone */}
        <div className="flex flex-col">
          <div className="flex justify-between">
            <label htmlFor={'phone'}>{'Phone Number'}</label>
            {isFormError.phone && !phone ? (
              <p className="text-StrawberryRed font-medium">
                This field is required
              </p>
            ) : null}
          </div>
          <input
            className={`border py-2 px-3 rounded-lg font-medium outline-none ${
              isFormError.phone && !phone
                ? 'border border-red-500'
                : 'focus:border-PurplishBlue'
            }
          `}
            type={'number'}
            value={phone}
            onChange={(e) => {
              updateForm({ phone: e.target.value })
            }}
            placeholder={'e.g. +1 234 567 890'}
            autoComplete="phone"
            // required
          />
        </div>
      </Main>
    </>
  )
}
