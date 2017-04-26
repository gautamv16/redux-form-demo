import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import { FlatButton,FontIcon,LinearProgress } from 'material-ui'
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'
const colors = [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet' ]

const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

const WizardFormThirdPage = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
       <h2 className="header">Thank you</h2>
       <LinearProgress mode="determinate" value="100" />
      <div className="textCenter">
        <i className="fa fa-check-circle success-icon"></i>
        </div>
      <div className="textCenter">
       <FlatButton
      label="Go to Dashboard"
      className="borderButton"
      style={{'border':"1px solid #00bedd"}}
      
      primary={true}
      type="submit"
       labelPosition="before"
      icon={<NavigationArrowForward />}
      disabled={pristine || submitting}
      />
      </div>
    </form>
  )
}
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  validate
})(WizardFormThirdPage)
