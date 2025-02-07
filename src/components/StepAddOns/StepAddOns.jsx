import React from 'react'
import './StepAddOns.css'

export default function StepAddOns({ nextStep, prevStep}) {
  return (

    <div className='add-on-container'>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className='addons'>
            {['Online Service', 'Larger Storage', 'Customizable Profile'].map((addon) => (
                <label key={addon} className='addon'>
                    <input type="checkbox" />{addon}
                </label>
            ))}
        </div>
        <button onClick={prevStep} className='button'>Go Back</button>
        <button onClick={nextStep} className='button'>Next Step</button>
    </div>
  )
}
