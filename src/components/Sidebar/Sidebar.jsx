import React from 'react'
import './Sidebar.css'

export default function Sidebar({step}) {
  return (

    <div className='sidebar'>
        <ul>
            {['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'].map((title, index) => (
                <li key={index} className={`step ${step === index + 1 ? "active" : ""}`}>
                   <div className='step-number'>{index+1}</div>
                   <div className='step-info'><small>STEP {index +1}</small>
                   <strong>{title}</strong>
                   </div>
                </li>
            ))}
        </ul>
    </div>
  )
}
