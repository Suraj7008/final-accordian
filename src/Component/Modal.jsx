import React from 'react'

 export const Modal = ({onHideModal}) => {
 

  
  return (
    <React.Fragment>
      <div>
        <button onClick={() => onHideModal()}>X</button>
      </div>
      <div >
        <label id='email'>Email id: </label>
        <input autoComplete='off' aria-labelledby='email' placeholder='Enter you email id' required />
      </div>
    </React.Fragment>
  )
}