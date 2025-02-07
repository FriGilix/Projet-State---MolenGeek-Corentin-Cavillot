import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import StepAddOns from './components/StepAddOns/StepAddOns'
import StepPersonalInfo from './components/StepPersonalInfo/StepPersonalInfo'
import StepSelectPlan from './components/StepSelectPlan/StepSelectPlan'
import StepSummary from './components/StepSummary/StepSummary'
import StepThankYou from './components/StepThankYou/StepThankYou'



function App() {
  

  const [step, setStep] = useState(1)
  

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev -1)

  return (
    <div className='container'>
      <Sidebar step={step}/>
      <div className='content'>
        {step === 1 && <StepPersonalInfo nextStep={nextStep} />}
        {step === 2 && <StepSelectPlan nextStep={nextStep} prevStep={prevStep}/>}
        {step === 3 && <StepAddOns nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <StepSummary nextStep={nextStep} prevStep={prevStep} />}
        {step === 5 && <StepThankYou />}
      </div>
    </div>
  )
}

export default App
