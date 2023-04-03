import { FormEvent, SetStateAction, useState } from 'react'
import { FormItems, steps } from '../data/data'
import { SidebarEnd } from './sidebar-end/SidebarEnd'
import { SidebarStart } from './sidebar-start/SidebarStart'
import { PersonalInfo } from './PersonalInfo'
import { SelectPlan } from './SelectPlan'
import { initialValues } from '../data/data'
import useMultiForm from '../hooks/useMultiForm'
import { Footer } from './sidebar-end/Footer'
import { PickAddOns } from './PickAddOns'
import { FinishingUp } from './FinishingUp'
import { ThankYou } from './ThankYou'

const Wrapper = () => {
  const [formData, setFormData] = useState(initialValues)
  const [isFormError, setIsFormError] = useState({
    name: false,
    email: false,
    phone: false,
  })
  console.log('formData: ', formData)

  const updateForm = (fieldToUpdate: Partial<FormItems>) => {
    setFormData((prev) => ({ ...formData, ...fieldToUpdate }))
  }

  // const sideBar = ['Your Info', 'Select Plan', 'Add-Ons', 'Summary']

  const {
    currentIndex,
    goBackwards,
    goForwards,
    isFirstStep,
    isLastStep,
    goToSection,
  } = useMultiForm(steps.length)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.phone) {
      goForwards()
      return
    }
    if (!formData.name) {
      setIsFormError((curr: any) => ({ ...curr, name: true }))
    }
    if (!formData.email) {
      setIsFormError((curr: any) => ({ ...curr, email: true }))
    }
    if (!formData.phone) {
      setIsFormError((curr: any) => ({ ...curr, phone: true }))
    }
  }

  return (
    <div className="w-full md:w-[940px] h-screen md:h-full flex flex-col md:flex-row bg-Magnolia md:bg-white shadow-xl md:p-4 pr-0 rounded-2xl">
      <section>
        <SidebarStart currentIndex={currentIndex} />
      </section>
      <section className="w-full flex justify-center items-center md:m-0">
        <div className="w-[70%] h-full">
          <form onSubmit={handleSubmit} className="h-full">
            <div className="flex flex-col gap-10 md:gap-0 md:h-[90%] w-[80%] md:w-full absolute top-[132px] left-1/2 transform -translate-x-1/2 md:transform-none md:static bg-white p-6 rounded-lg md:p-0 md:rounded-none">
              {currentIndex === 0 && (
                <PersonalInfo
                  isFormError={isFormError}
                  {...formData}
                  updateForm={updateForm}
                />
              )}
              {currentIndex === 1 && (
                <SelectPlan {...formData} updateForm={updateForm} />
              )}
              {currentIndex === 2 && (
                <PickAddOns {...formData} updateForm={updateForm} />
              )}
              {currentIndex === 3 && (
                <FinishingUp {...formData} updateForm={updateForm} />
              )}
              {currentIndex === steps.length && <ThankYou />}
            </div>
            {currentIndex !== steps.length && (
              <Footer
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                goBackwards={goBackwards}
              />
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Wrapper
