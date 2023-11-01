import React from 'react'
import "./Modal"

 export const Modal = ({onHideModal}) => {
 
const onKeyDown = (e) => {

  if (e.key === "Escape") {
    onHideModal();
}
}
  
  return (
    <React.Fragment>
      <div className='modal-wrapper' />
        <div className='modal-container'onKeyDown={(e) => onKeyDown(e)}>
          <button onClick={() => onHideModal()}>X</button>
    
          <div >
            <label id='email'>Email id: </label>
            <input autoComplete='off' aria-labelledby='email' placeholder='Enter you email id' required />
          </div>
        </div>
    </React.Fragment>
  )
  }