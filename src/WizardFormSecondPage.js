import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import { FlatButton,FontIcon,LinearProgress } from 'material-ui'
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'

import { CardActions } from 'material-ui/Card'
import MenuItem from 'material-ui/MenuItem';
import { Checkbox,  RadioButtonGroup,  SelectField,  TextField,  Toggle,  DatePicker} from 'redux-form-material-ui'

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <p style={{'color':"red","textAlign":"center","fontSize":"12px"}}>{error}</p> : false



const WizardFormSecondPage = (props) => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
     <h2 className="header">Signup</h2>
     <LinearProgress mode="determinate" value="66" />
     <br/>
      <div className="textCenter"><label>DATE OF BITRH</label></div>
      <div className="textCenter">
      <Field name="dd" style={{"width":100}} component={dd => 
          <TextField  hintText = "DD" 
            floatingLabelText="DD"
            errorText = {dd.touched && dd.error}
            {...dd} 
          />
        }/>

         <Field name="mm" style={{"width":100,margin:"0px 10px"}} component={mm => 
          <TextField  hintText = "MM" 
            floatingLabelText="MM"

            errorText = {mm.touched && mm.error}
            {...mm} 
          />
        }/>
         <Field name="yyyy" style={{"width":100}}component={yyyy => 
          <TextField  hintText = "YYYY" 
            floatingLabelText="YYYY"
            errorText = {yyyy.touched && yyyy.error}
            {...yyyy} 
          />
        }/>
      
      </div>
      <div><Field name="dob" component={renderError}/></div>
      <br/>
      <div className="textCenter">
        <label>GENDER</label><br/><br/>
        <div className="textCenter">
          <span className="boxStyle"><label className="radioGroupLabel"><Field name="sex" className="radioGroup" component="input" type="radio" value="male"/> <span>MALE</span></label>
          <label className="radioGroupLabel"><Field name="sex" className="radioGroup" component="input" type="radio" value="female"/> <span>FEMALE</span></label>
          <label className="radioGroupLabel"><Field name="sex" className="radioGroup" component="input" type="radio" value="unspecified"/> <span>UNSPECIED</span></label>
          </span>
        </div>
          <Field name="sex" component={renderError}/>

      </div>
      <br/><br/>
 <div className="textCenter">
         <label>WHERE DID YOU HEAR ABOUT US</label>
        <Field
            name="hear_about_us"
            component={SelectField}
            fullWidth={true}
          >
            <MenuItem value="Google Search" primaryText="Goog'Search" />
            <MenuItem value="Social Media" primaryText="Social Media" />
            <MenuItem value="Friends" primaryText="Friends" />
          </Field>
            
        </div>
     
      <div>
        <CardActions style={{"textAlign":"right"}}>
        <FlatButton
      label="Back"
      style={{"float":"left"}}
      onTouchTap={previousPage}
      labelPosition="after"
      
    />
      <FlatButton
      label="Next"
      className="borderButton"
      
      
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
  form: 'wizard',  //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage)
