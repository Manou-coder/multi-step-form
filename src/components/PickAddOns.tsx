import React from 'react'
import { addons, steps } from '../data/data'
import { StepProps } from './PersonalInfo'
import { AddOn } from './sidebar-end/AddOns'
import { Header } from './sidebar-end/Header'
import { Main } from './sidebar-end/Main'

export const PickAddOns = ({
  isCustomizableProfile,
  isLargerStorage,
  isOnlineService,
  planLength,
  updateForm,
}: StepProps) => {
  return (
    <>
      <Header step={steps[2]} />
      <Main>
        <AddOn
          {...addons[0]}
          status={isOnlineService}
          planLength={planLength}
          updateForm={updateForm}
        />
        <AddOn
          {...addons[1]}
          status={isLargerStorage}
          planLength={planLength}
          updateForm={updateForm}
        />
        <AddOn
          {...addons[2]}
          status={isCustomizableProfile}
          planLength={planLength}
          updateForm={updateForm}
        />
      </Main>
    </>
  )
}
