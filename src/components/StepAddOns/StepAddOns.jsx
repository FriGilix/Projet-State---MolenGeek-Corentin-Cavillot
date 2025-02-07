import React, { useState } from 'react'
import './StepAddOns.css'

export default function StepAddOns({ nextStep, prevStep, selectedPlan}) {

  const [selectedAddOns, setSelectedAddons] = useState([])

  const addOns =[
    {name: 'Online Service', description: 'Access to multiplayer games', price: {Arcade:10, Advanced:8, Pro:5}},
    {name: 'Larger Storage', description: 'Extra 1TB of cloud save', price: {Arcade:20, Advanced:15, Pro:10}},
    {name: 'Customizable Profile', description: 'Custom theme on your profile', price: {Arcade: 20, Advanced:15, Pro: 10}}
  ]

  const toggleAddOn = (name) => {
    setSelectedAddons((prev) => 
    prev.includes(name) ? prev.filter((addon) => addon !== name) : [...prev, name]
  )
  }

  return (

    <div className='add-on-container'>
        <h2>Pick add-ons</h2>
        <p className='subtitle'>Add-ons help enhance your gaming experience.</p>

        <div className='addons'>
          {addOns.map((addon) => (
            <label key={addon.name} className={`addon ${selectedAddOns.includes(addon.name) ? 'selected' : ''}`}>
              <input type='checkbox' checked={selectedAddOns.includes(addon.name)} onChange={() => toggleAddOn(addon.name)}/>
              <div className='addon-info'>
                <h3>{addon.name}</h3>
                <p>{addon.description}</p>
              </div>
              <span className='price'>+${addon.price[selectedPlan]}/yr</span>
            </label>
          ))}
        </div>
           
        <div className='buttons'>
        <button onClick={prevStep} className='prev-button'>Go Back</button>
        <button onClick={nextStep} className='next-button'>Next Step</button>
      </div>
    </div>
  )
}
