import React, { useState } from 'react'

const Form = ({onClickSubmit, index}) => {

  const [firstName, setFirstName] = useState(''); // 1st input field default empty state
  const [showFirstName, setShowFirstName] = useState(false);  //Error field hide/show for 1st
  const [lastName, setLastName] = useState(''); // 2st input field default empty state
  const [showlastName, setShowLastName] = useState(false);  //Error field hide/show for 2st

  const handleFirstNameChange = (e) => {  //Set edited value for 1st
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => { //Set edited value for 2nd
    setLastName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(firstName.trim() === '') { //Condition to check first name input field is empty or not
      setShowFirstName(true);
    } else {
      setShowFirstName(false);
    };

    if(lastName.trim() === '') {  //Condition to check last name input field is empty or not
      setShowLastName(true);
    } else {
      setShowLastName(false);
    };

    if (firstName.trim() !== '' && lastName.trim() !== '') {  //Condition to check both input field is not empty.
      onClickSubmit(index);
    };
  };

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
    <form>

      <div>
        <label id='fname'>First Name: </label>
        <input value={firstName} onChange={handleFirstNameChange} onBlur={firstError} autoComplete='given-name' type='text' aria-labelledby='fname' name='first_name' placeholder='Enter your first name' aria-required = "true" required/>
        <span role='alert' hidden={!showFirstName} style={{ color: 'red' }}>Please fill first name field</span>  {/* Error Message */}
      </div>

      <div>
        <label id='lname'>Last Name: </label>
        <input value={lastName} onChange={handleLastNameChange} onBlur={lastError} autoComplete='family-name' type='text' aria-labelledby='lname' name='last_name' placeholder='Enter your last name' aria-required = "true" required/>
        <span role='alert' hidden={!showlastName} style={{ color: 'red' }}>Please fill last name field</span>  {/* Error Message */}
      </div>
        <button type='submit' onClick={onSubmit}>Submit</button>

    </form>
  );
};

export default Form;