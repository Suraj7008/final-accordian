import React, { useState } from 'react'

const Form = ({onClickSubmit}) => {

  const [firstName, setFirstName] = useState('');
  const [showFirstName, setshowFirstName] = useState(false)
  const [lastName, setLastName] = useState('')
  const [showlastName, setshowlastName] = useState(false)

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const onSubmit = () => {
    if(firstName.trim() === '') {
      setshowFirstName(true);
    } else {
      setshowFirstName(false);
    };
    if(lastName.trim() === '') {
      setshowlastName(true);
    } else {
      setshowlastName(false)
    };
  }
 
  return (
    <form>

    <div>
      <label id='fname'>First Name: </label>
      <input value={firstName} onChange={handleFirstNameChange} autoComplete='given-name' type='text' aria-labelledby='fname' name='first_name' placeholder='Enter your first name' required/>
      <span hidden={!showFirstName} style={{ color: 'red' }}>Please fill first name field</span>
    </div>
    <div>
      <label id='lname'>Last Name: </label>
      <input value={lastName} onChange={handleLastNameChange} autoComplete='family-name' type='text' aria-labelledby='lname' name='last_name' placeholder='Enter your last name' aria-required = "true" required/>
      <span hidden={!showlastName} style={{ color: 'red' }}>Please fill last name field</span>
    </div>
    <br />
    <button type='submit' onClick={() => onSubmit(onClickSubmit)}>Submit</button>
    
    </form>
  )
}

export default Form;