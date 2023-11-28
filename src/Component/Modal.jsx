import React, { useEffect, useRef, useState }  from 'react';
// import "./Modal";
// import { ModalInModal } from './ModalInModal';
import './Modal.css'

const Modal = ({onHideModal, onClickOpenSeconModal}) => {
const modalElement = useRef(null);
  const emailError = useRef(null);
  const [email, setEmail] = useState('');
  const [emailErrorMSG, setEmailErrorMSG] =useState(true);
  const [isShow, setIsShow] = useState(true); // Show error messege
 
  //email validation
  const emailValid= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const onSubmit = () => {
    if (email.trim() === '') {
        setIsShow(false);
        emailError.current.focus();  //Error focus
 
    } else {
      if (!emailValid.test(email)) {
        setEmailErrorMSG(false);
      } else {
        setEmailErrorMSG(true);
    };
    setIsShow(true);
    }
    if (email.trim() !== '' && emailValid.test(email)) {
        onHideModal();
        }
    };
 
    const emailInput = () => {
    if (email.trim() === "") {
        setIsShow(false);
        setEmailErrorMSG(true);
    }
    else {
      if (!emailValid.test(email)) {
        setEmailErrorMSG(false);
      } else {
        setEmailErrorMSG(true);  
      };
      setIsShow(true);
    }
    }
 
   
// Esc to close modal
    const onKeyDown = (e) => {
    if (e.key === "Escape") {
      onHideModal();
 
    };
    handleModalNavigation(e);
    };
 
// Focus set in modal
    useEffect(() => {
        const addedElement = modalElement.current.querySelectorAll('input, button');
        addedElement[0].focus();
    }, [onHideModal]);
 
 
    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };
 
    const handleModalNavigation = (e) => {
    const allElement = modalElement.current.querySelectorAll('input, button');
    const firstElement = allElement[0];
    const lastElement = allElement[allElement.length - 1];
 
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
            };
          };
         };
    };
 
return (
    <>
      <div className="modal-wrapper"/>
        <div role='dialog' aria-label='User Email Information' aria-modal="true" className="modal-container" onKeyDown={(e) => onKeyDown(e)} ref={modalElement}>
 
        <button className='closeButton' aria-label='Close' onClick={() => onHideModal()} >X</button>
          <div id='validation'>
            <label id='email'>Email: </label>
            <input className='mailinput' value={email} onChange={handleInputChange} onBlur={emailInput} autoComplete="off" aria-labelledby="email" placeholder="Enter your email id" ref={emailError} required />
           
          </div>
            <span hidden={isShow} role='alert' style={{ color: 'red' }}>Please fill email field.</span>
           
            <span hidden={emailErrorMSG} role='alert' style={{ color: 'red' }}>Please enter valid Email.</span>
          <div id='newbuttons'>
            <button onClick={onClickOpenSeconModal}>Verify</button>
            <button type='submit' onClick={onSubmit}>Submit</button>
          </div>
        </div>
    </>
  );
};
export default Modal;