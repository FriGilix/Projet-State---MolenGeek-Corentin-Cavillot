import React, { useState } from 'react'
import './StepSelectPlan.css'

export default function StepSelectPlan({ nextStep, prevStep}) {

  const [billingCycle, setBillingCycle] = useState('yearly')
  const [selectedPlan, setSelectPlan] = useState (null)
  
  const plans = [
    {name: 'Arcade', price: { monthly: 9, yearly: 90}, icon: './src/assets/arcade.svg'},
    { name: 'Advanced', price: { monthly: 12, yearly: 120 }, icon: './src/assets/advenced.svg' },
    { name: 'Pro', price: { monthly: 15, yearly: 150 }, icon: './src/assets/pro.svg' }
  ]

  return (
    <div className='select-plan-container'>
      <h2>Select your plan</h2>
    </div>
    
        
    
  )
}
