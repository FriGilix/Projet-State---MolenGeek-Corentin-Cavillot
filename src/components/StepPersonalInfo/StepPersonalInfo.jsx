import React, { useState } from 'react'
import './StepPersonalInfo.css'

export default function StepPersonalInfo({ nextStep }) {

const [valueName, setValueName] = useState('Vingt-six')
const [valueMail, setValueMail] = useState('vingt-six@email.com')
const [valuePhone, setValuePhone] = useState('e.g.+1 234 567 890')
const changerName = (e) => {
  setValueName(e.target.value)
}
const changerMail = (e) => {
  setValueMail(e.target.value)
}
const changerPhone = (e) => {
  setValuePhone(e.target.value)
}
  
  return (
    <>
    <div className='personal-info-container'>
        <h2>Personal Info</h2>
        <p><span className='subtitle'>Please Provide your name, email, and phone number.</span></p>
  
    <form>
    <div>
      <p>Your name is : {valueName}</p>
    </div>
      <label htmlFor='nom'></label>
      <input type='text' id='nom' value={valueName} onChange={changerName} className='input-field'/>
      <br/><br/>
    </form>
    

    <form>
    <div>
      <p><span>Your email is : {valueMail}</span></p>
    </div>
      <label htmlFor='nom'></label>
      <input type='text' id='nom' value={valueMail} onChange={changerMail} className='input-field'/>
      <br/><br/>
    </form>

    <form>
    <div>
      <p><span>Your phone number is : {valuePhone}</span></p>
    </div>
      <label htmlFor='nom'></label>
      <input type='text' id='nom' value={valuePhone} onChange={changerPhone} className='input-field'/>
      <br/><br/>
    </form>

    <button onClick={nextStep} className='next-button'>Next Step</button>

    </div>
    </>
  )
}
