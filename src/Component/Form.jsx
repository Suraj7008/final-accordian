import React, { useState } from 'react'

const Form = ({onClickSubmit, index}) => {

  const [firstName, setFirstName] = useState('');
  const [showFirstName, setShowFirstName] = useState(false);
  const [lastName, setLastName] = useState('');
  const [showlastName, setShowLastName] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(firstName.trim() === '') {
      setShowFirstName(true);
      console.log(firstName);
    } else {
      setShowFirstName(false);
    };
    
    if(lastName.trim() === '') {
      setShowLastName(true);
      console.log(lastName);
    } else {
      setShowLastName(false);
    };
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      onClickSubmit(index);
  }
  }
 
  return (
    <form >

    <div>
      <label id='fname'>First Name: </label>
      <input value={firstName} onChange={handleFirstNameChange} autoComplete='given-name' type='text' aria-labelledby='fname' name='first_name' placeholder='Enter your first name' aria-required = "true" required/>
      <span hidden={!showFirstName} style={{ color: 'red' }}>Please fill first name field</span>
    </div>

    <div>
      <label id='lname'>Last Name: </label>
      <input value={lastName} onChange={handleLastNameChange} autoComplete='family-name' type='text' aria-labelledby='lname' name='last_name' placeholder='Enter your last name' aria-required = "true" required/>
      <span hidden={!showlastName} style={{ color: 'red' }}>Please fill last name field</span>
    </div>
    <br />
    <button type='submit'onClick={onSubmit}>Submit</button>
    
    </form>
  )
}

export default Form;