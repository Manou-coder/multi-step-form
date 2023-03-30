import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type IFormInputs = {
  name: string
  email: string
  phone: number
}

const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

const SidebarEnd = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>()

  console.log('errors: ', errors)

  return (
    <div className="w-[70%] h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="h-full">
        <div className="h-1/4 flex flex-col justify-center gap-2">
          <h1 className="font-bold text-3xl text-MarineBlue">Personal info</h1>
          <p className="text-CoolGray">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <div className="h-[65%] flex flex-col justify-start gap-8 text-MarineBlue">
          {/* name */}
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label htmlFor={'name'}>{'Name'}</label>
              {errors.name && (
                <p className="text-StrawberryRed font-medium">
                  This field is required
                </p>
              )}
            </div>
            <input
              className={`border py-2 px-3 rounded-lg font-medium outline-none ${
                errors.name
                  ? 'border border-red-500'
                  : 'focus:border-PurplishBlue'
              }
              `}
              {...register('name', { required: true })}
              type={'text'}
              placeholder={'e.g Stephen King'}
            />
          </div>
          {/* email */}
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label htmlFor={'email'}>{'Email Adress'}</label>
              {errors.email && (
                <p className="text-StrawberryRed font-medium">
                  This field is required
                </p>
              )}
            </div>
            <input
              className={`border py-2 px-3 rounded-lg font-medium outline-none ${
                errors.email
                  ? 'border border-red-500'
                  : 'focus:border-PurplishBlue'
              }
              `}
              {...register('email', { required: true })}
              type={'email'}
              placeholder={'e.g. stephenking@lorem.com'}
            />
          </div>
          {/* phone */}
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label htmlFor={'phone'}>{'Phone Number'}</label>
              {errors.phone && (
                <p className="text-StrawberryRed font-medium">
                  This field is required
                </p>
              )}
            </div>
            <input
              className={`border py-2 px-3 rounded-lg font-medium outline-none ${
                errors.phone
                  ? 'border border-red-500'
                  : 'focus:border-PurplishBlue'
              }
              `}
              {...register('phone', { required: true })}
              type={'number'}
              placeholder={'e.g. +1 234 567 890'}
            />
          </div>
        </div>
        <div className="h-[10%] flex justify-between items-center">
          <a className="text-CoolGray">Go Back</a>
          <button
            type="submit"
            className="bg-MarineBlue text-white h-11 px-5 rounded-lg"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  )
}

export default SidebarEnd
