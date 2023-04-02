import React from 'react'

const Global = () => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full">
      <Header step={step} />
      <Main>
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
      </Main>
      <Footer stepIndex={stepIndex} setStepIndex={setStepIndex} />
    </form>
  )s
}

export default Global
