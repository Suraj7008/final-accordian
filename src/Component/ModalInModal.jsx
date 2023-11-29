import React, { useEffect, useRef, useState } from 'react'
import './ModalInModal.css'

export const ModalInModal = ({onHideModal}) => {
  const secondModalElement = useRef(null);
  const [checked, setChecked] = useState(false);
  const [checkError, setCheckError] = useState(true);
  const [checkedValue, setCheckedValue] = useState('');

  const modalInModalFocus = useRef(null);

  useEffect(() => {
    const secondModalElement = modalInModalFocus.current.querySelectorAll('input, button');
    secondModalElement[0].focus();
  });

  const handleInputChange = (e) => {
    setCheckedValue(e.target.value);
    setChecked(!checked);
    setCheckError(true);
  };

  const onSubmit = () => {
    if(checked === true){
      onHideModal();
    } 
    if(checked !== true) {
      setCheckError(false)
    }
  };

  const onKeyDownSecondModal = (e) => {
    if (e.key === "Escape") {
      if(checked === true){
        onHideModal();
      } 
      if(checked !== true) {
        setCheckError(false)
      }
    };
    handleModalNavigation(e);
  };

  const handleModalNavigation = (e) => {
    const secondModalElement = modalInModalFocus.current.querySelectorAll('input, button');
    const firstElement = secondModalElement[0];
    const lastElement = secondModalElement[secondModalElement.length - 1];
  
      if(e.key === "Tab") {
           if(e.shiftKey) {
              if(document.activeElement === firstElement){
              lastElement.focus();
              e.preventDefault();
          };
        } else  {
            if(document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
              }
            }
        }};


  return (
    <>
    <div className="modal-in-modal-wrapper" />
    <div id='modalin-modal-input' onKeyDown={(e ) => {onKeyDownSecondModal(e)}} ref = {modalInModalFocus} className="modal-in-modal-container" role='dialog' aria-modal="true" >
      <input ref={secondModalElement} value={checkedValue} onChange={handleInputChange} id='checkBox' aria-labelledby='verify'  type='checkBox' aria-checked={checked} aria-required="true" required/>
        <p id='verify'>
          Please verify that above information is corect by checking the check box.
        </p>
        <span hidden={checkError} role='alert' style={{ color: 'red' }}>Check above check box to submit!</span>
      <button onClick={onSubmit}>Submit</button>
    </div>
    </>
  )
};