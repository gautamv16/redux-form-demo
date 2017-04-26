const validate = values => {
  const errors = {}
  
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if(!values.password){
    errors.password="Password is required";
  }

  if(!values.confirm_password){
    errors.confirm_password='Confirm password is required';
  }

  if(values.confirm_password && values.password && (values.password!==values.confirm_password)){
    errors.confirm_password="Confirm password not matched";
  }

  if(!values.dd || !values.mm || !values.yyyy){
    errors.dob="Date of birth is required";
  }

  if(values.dd && isNaN(values.dd)){
    errors.dob="Day should be numeric";
    return errors;
  }else if(values.dd && !(values.dd  >=1 && values.dd <=31)){
     errors.dob="Day should be in between 1 to 31";
    return errors;
  }

  if(values.mm && isNaN(values.mm)){
    errors.dob="Month should be numeric";
    return errors;
  }else if(values.mm && !(values.mm  >=1 && values.mm <=12)){
     errors.dob="Month should be in between 1 to 12";
    return errors;
  }

  if(values.yyyy && isNaN(values.yyyy)){
    errors.dob="Year should be numeric";
    return errors;
  }else if(values.yyyy && values.yyyy.length != 4){
     errors.dob="Invalid year";
    return errors;
  }


  if (!values.sex) {
    errors.sex = 'Gender is required'
  }

  return errors
}

export default validate
