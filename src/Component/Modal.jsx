import React, { useEffect, useRef }  from 'react'
import "./Modal"

const Modal = ({onHideModal}) => {
  const modalElement = useRef();
  
  useEffect(() => {
    const addedElement = modalElement.current.querySelectorAll('input, button');
    addedElement[0].focus();
  })
  
  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      onHideModal();
    };
    handleModalNavigation(e);
  }
  
  const handleModalNavigation = (e) => {
  const allElement = modalElement.current.querySelectorAll('input, button');
  const firstElement = allElement[0];
  const lastElement = allElement[allElement.length - 1];
  
if(e.key === "Tab") {
     if(e.shiftKey) {
        if(document.activeElement === firstElement){
        lastElement.focus();
        e.preventDefault();
    } 
  }else {
      if(document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
        }
      }
     }
}
  
return (
    <React.Fragment>
      <div className="modal-wrapper" />
        <div ref={modalElement} role='dialog' className="modal-container" onKeyDown={(e) => onKeyDown(e)}>

          <button onClick={() => onHideModal()}>X</button>
    
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