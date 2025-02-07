import React from 'react'
import './StepSummary.css'

export default function StepSummary({ selectedPlan = 'Arcade', billingCycle = 'Monthly', selectedAddOns = [], onChangePlan, prevStep, confirm}) {

  const planPrices = {
    Arcade: { Monthly: 9, Yearly: 90 },
    Advanced: { Monthly: 12, Yearly: 120 },
    Pro: { Monthly: 15, Yearly: 150 },
  };

  const addOnPrices = {
    'Online Service': { Monthly: 1, Yearly: 10 },
    'Larger Storage': { Monthly: 2, Yearly: 20 },
    'Customizable Profile': { Monthly: 2, Yearly: 20 },
  };

 
  const planPrice = planPrices[selectedPlan]?.[billingCycle] || 0;
  const addOnsTotal = selectedAddOns.reduce(
    (total, addOn) => total + (addOnPrices[addOn]?.[billingCycle] || 0),
    0
  );
  const total = planPrice + addOnsTotal;
  return (

    <div className="summary-container">
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>

      <div className="summary-card">
        <div className="plan-info">
          <div>
            <strong>{selectedPlan} ({billingCycle})</strong>
            <button onClick={onChangePlan} className="change-btn">Change</button>
          </div>
          <span className="price">${planPrice}/{billingCycle === 'Monthly' ? 'mo' : 'yr'}</span>
        </div>

        <hr />

        {selectedAddOns.map((addOn) => (
          <div key={addOn} className="addon-item">
            <span>{addOn}</span>
            <span className="price">+${addOnPrices[addOn][billingCycle]}/{billingCycle === 'Monthly' ? 'mo' : 'yr'}</span>
          </div>
        ))}
      </div>

      <div className="total">
        <span>Total (per {billingCycle.toLowerCase()})</span>
        <strong className="total-price">${total}/{billingCycle === 'Monthly' ? 'mo' : 'yr'}</strong>
      </div>

      <div className="buttons">
        <button onClick={prevStep} className="button prev">Go Back</button>
        <button onClick={confirm} className="button confirm">Confirm</button>
      </div>
    </div>
  )
}
