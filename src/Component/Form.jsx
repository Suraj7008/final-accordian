import React, { useRef, useState } from 'react'
import './Form.css'

const Form = ({onClickSubmit, index}) => {

  const [firstName, setFirstName] = useState(''); // 1st input field default empty state
  const [showFirstName, setShowFirstName] = useState(false);  //Error field hide/show for 1st
  const [lastName, setLastName] = useState(''); // 2st input field default empty state
  const [showlastName, setShowLastName] = useState(false);  //Error field hide/show for 2st

  const firstNameInput = useRef(null);
  const LastNameInput = useRef(null);

  const handleFirstNameChange = (e) => {  //Set edited value for 1st
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => { //Set edited value for 2nd
    setLastName(e.target.value);
  };

// onSubmit event used for form validation    
  const onSubmit = (e) => {
    e.preventDefault();
    if(firstName.trim() === '') { //Condition to check first name input field is empty or not
      setShowFirstName(true);
      firstNameInput.current.focus();
    } else {
      setShowFirstName(false);
    };

    if(lastName.trim() === '') {  //Condition to check last name input field is empty or not
      setShowLastName(true);
      LastNameInput.current.focus();
    } else {
      setShowLastName(false);
    };

    if(firstName.trim() === '') { //Condition to check first name input field is empty or not
      firstNameInput.current.focus();
    } else if(lastName.trim() === '') {  //Condition to check last name input field is empty or not
      setShowLastName(true);
      LastNameInput.current.focus();
    }

    if (firstName.trim() !== '' && lastName.trim() !== '') {  //Condition to check both input field is not empty.
      onClickSubmit(index);
    };
  };

// onBlur event used for form validation    
  const firstError = () => {
    if(firstName.trim() === '') { //Condition to check first name input field is empty or not
      setShowFirstName(true);
    } else {
      setShowFirstName(false);
    }
  };

  const lastError = () => {
    if(lastName.trim() === '') {  //Condition to check last name input field is empty or not
      setShowLastName(true);
    } else {
      setShowLastName(false);
    }
  };

  return (
    <form id='formField'>

      <div>
        <label id='fname'>First Name: </label>
        <input ref={firstNameInput} value={firstName} onChange={handleFirstNameChange} onBlur={firstError} autoComplete='given-name' type='text' aria-labelledby='fname' name='first_name' placeholder='Enter your first name' aria-required = "true" required/>
      </div>

        <span style={{ color: 'red' }} role='alert' hidden={!showFirstName}>Please fill first name field</span>  {/* Error Message */}


      <div>
        <label id='lname'>Last Name: </label>
        <input ref={LastNameInput} value={lastName} onChange={handleLastNameChange} onBlur={lastError} autoComplete='family-name' type='text' aria-labelledby='lname' name='last_name' placeholder='Enter your last name' aria-required = "true" required/>
      </div>

        <span style={{ color: 'red' }} role='alert' hidden={!showlastName}>Please fill last name field</span>  {/* Error Message */}

      <div id='newbuttons'>
        <button type='submit' onClick={onSubmit}>Submit</button>
      </div>

    </form>
  );
};

export default Form;