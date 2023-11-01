import React, { useEffect, useRef }  from 'react'
import "./Modal"

const Modal = ({onHideModal}) => {
  const modalElement = useRef();

    useEffect(() => {
      modalElement.current.focus();
    })

const onKeyDown = (e) => {
  if (e.key === "Escape") {
    onHideModal();
  };
}

// const firstElement = modalElement.current;
// const focusedElement = firstElement.querySelectorAll()
// console.log(focusedElement);
  
return (
    <React.Fragment>
      <div className="modal-wrapper" />
        <div role='dialog' className="modal-container" onKeyDown={(e) => onKeyDown(e)}>

          <button ref={modalElement} onClick={() => onHideModal()}>X</button>
    
          <div >
            <label id='email'>Email id: </label>
            <input autoComplete='off' aria-labelledby='email' placeholder='Enter you email id' required />
          </div>
          <div>
            <button onClick={() => onHideModal()}>Submit</button>
          </div>
        </div>
    </React.Fragment>
  )
}
export default Modal;