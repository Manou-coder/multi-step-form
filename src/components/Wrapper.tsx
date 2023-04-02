import { FormEvent, SetStateAction, useState } from 'react'
import { FormItems, steps } from '../data/data'
import { SidebarEnd } from './sidebar-end/SidebarEnd'
import { SidebarStart } from './sidebar-start/SidebarStart'
import { PersonalInfo } from './PersonalInfo'
import { SelectPlan } from './SelectPlan'
import { initialValues } from '../data/data'
import useMultiForm from '../hooks/useMultiForm'
import { Footer } from './sidebar-end/Footer'

const Wrapper = () => {
  const [formData, setFormData] = useState(initialValues)

  const updateForm = (fieldToUpdate: Partial<FormItems>) => {
    setFormData((prev) => ({ ...formData, ...fieldToUpdate }))
  }

  const sideBar = ['Your Info', 'Select Plan', 'Add-Ons', 'Summary']

  const {
    currentIndex,
    goBackwards,
    goForwards,
    isFirstStep,
    isLastStep,
    goToSection,
  } = useMultiForm(sideBar.length)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (isLastStep) return alert('congrats something')
    goForwards()
  }
  console.log('currentIndex: ', currentIndex)

  return (
    <div className="w-[940px] flex bg-white shadow-xl p-4 pr-0 rounded-2xl">
      <section>
        <SidebarStart currentIndex={currentIndex} />
      </section>
      <section className="w-full flex justify-center items-center">
        <div className="w-[70%] h-full">
          <form onSubmit={handleSubmit} className="h-full">
            {currentIndex === 0 && (
              <PersonalInfo {...formData} updateForm={updateForm} />
            )}
            {currentIndex === 1 && (
              <SelectPlan {...formData} updateForm={updateForm} />
            )}
            <Footer
              isFirstStep={isFirstStep}
              isLastStep={isLastStep}
              goBackwards={goBackwards}
            />
          </form>
        </div>
      </section>
    </div>
  )
}

export default Wrapper
