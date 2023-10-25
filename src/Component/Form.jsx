import React from 'react'

const Form = ({onClickSubmit}) => {
 
  return (
    <form>

    <div>
      <label id='fname'>First Name: </label>
      <input autoComplete='given-name' type='text' aria-labelledby='fname' placeholder='Enter your first name' required/>
    </div>
    <div>
      <label id='lname'>Last Name: </label>
      <input autoComplete='family-name' type='text' aria-labelledby='lname' placeholder='Enter your last name' aria-required = "true" required/>
    </div>
    <br />
    <button type='submit' onClick={() => onClickSubmit(1)}>Submit</button>
    </form>
  )
}

export default Form;