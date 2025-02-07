import React, { useState } from 'react'
import './StepSelectPlan.css'

export default function StepSelectPlan({ nextStep, prevStep}) {

  const [billingCycle, setBillingCycle] = useState('yearly')
  const [selectedPlan, setSelectedPlan] = useState (null)
  
  const plans = [
    {name: 'Arcade', price: { monthly: 9, yearly: 90}, icon: './src/assets/arcade.svg'},
    { name: 'Advanced', price: { monthly: 12, yearly: 120 }, icon: './src/assets/advenced.svg' },
    { name: 'Pro', price: { monthly: 15, yearly: 150 }, icon: './src/assets/pro.svg' }
  ]

  return (
    <div className='select-plan-container'>
      <h2>Select your plan</h2>
      <p className='subtitle'>You have the option of monthly or yearly billing</p>

      <div className='plans'>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`plan ${selectedPlan === plan.name ? 'selected' : ''}`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            <img src={plan.icon} alt={`${plan.name} icon`} />
            <h3>{plan.name}</h3>
            <p>${billingCycle === 'yearly' ? plan.price.yearly + '/yr' : plan.price.monthly + '/mo'}</p>
          </div>
        ))}
      </div>

      <div className='billing-toggle'>
        <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
        <label className='switch'>
          <input
            type='checkbox'
            checked={billingCycle === 'yearly'}
            onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
          />
          <span className='slider'></span>
        </label>
        <span className={billingCycle === 'yearly' ? 'active' : ''}>Yearly</span>
      </div>

      <div className='buttons'>
        <button onClick={prevStep} className='prev-button'>Go Back</button>
        <button onClick={nextStep} className='next-button' disabled={!selectedPlan}>Next Step</button>
      </div>
    </div>
  )
}
