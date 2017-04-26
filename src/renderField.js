import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label className={touched && error && 'error '}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      
    </div>
  </div>
)

export default renderField
