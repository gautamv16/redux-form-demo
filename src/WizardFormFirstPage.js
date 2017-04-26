import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import { Checkbox,  RadioButtonGroup,  SelectField,  TextField,  Toggle,  DatePicker} from 'redux-form-material-ui'
import { FlatButton,FontIcon,LinearProgress } from 'material-ui'

import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'
import { CardActions } from 'material-ui/Card'
const WizardFormFirstPage = (props) => {
  const { handleSubmit } = props

  const renderPasswordField = props => (
  <TextField type="password" hintText={props.label}
    floatingLabelText={props.label}
    errorText={props.touched && props.error}
    {...props}
  />
  )

  return (

    <form onSubmit={handleSubmit}>
       <h2 className="header">Signup</h2>
       <LinearProgress mode="determinate" value="33" />
      <div>
          <Field name="email" component={email => 
          <TextField type="email" hintText = "EMAIL" 
            floatingLabelText="EMAIL"
            fullWidth={true}
            errorText = {email.touched && email.error}
            {...email} 
          />
        }/>
          
      </div>
      <div>
          <Field name="password" component={password => 
          <TextField type="password" hintText = "PASSWORD" 
            floatingLabelText="PASSWORD"
            fullWidth={true}
            errorText = {password.touched && password.error}
            {...password} 
          />
        }/>
      </div>
      <div>
          <Field name="confirm_password" component={password => 
          <TextField type="password" hintText="CONFIRM PASSWORD" 
            floatingLabelText="CONFIRM PASSWORD"
            fullWidth={true}
            errorText = {password.touched && password.error}
            {...password} 
          />
        }/>
      </div>
      <div>
      <CardActions style={{"textAlign":"right"}}>
      <FlatButton
      label="Next"
      labelPosition="before"
      primary={true}
      type="submit"
      icon={<NavigationArrowForward />}
    />
    </CardActions>
        
      </div>
    </form>
  ) 
}

export default reduxForm({
  form: 'wizard',                 // <------ same form name
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)
