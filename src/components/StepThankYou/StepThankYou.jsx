import React from 'react'
import './StepThankYou.css'

export default function StepThankYou() {
  return (

    <div>
      <div className='confirmation-container'>
        <div className='confirmation-icon'>
          <img src="./src/assets/check-icon.svg" alt="" />
        </div>
        <h2>Thank you!</h2>
        <p>Thanks for confirming your subscriptions! We hope you gave fun using our platform.
          If you ever need support, please feel free to email us at
          <a href='mailto:support@loremgaming.com'> support@loremgaming.com</a>.
        </p>
      </div>
    </div>
  )
}
