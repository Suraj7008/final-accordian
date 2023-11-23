import React, { useEffect, useRef, useState }  from 'react';
// import "./Modal";
import { ModalInModal } from './ModalInModal';
import './Modal.css'

const Modal = ({onHideModal}) => {
  const modalElement = useRef(null);
  const emailError = useRef(null);
  const [email, setEmail] = useState('');
  const [isShow, setIsShow] = useState(true);
  const [emailErrorMSG, setEmailErrorMSG] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const emailValid= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  

  useEffect(() => {
    const addedElement = modalElement.current.querySelectorAll('input, button');
    addedElement[0].focus();
  }, [onHideModal]);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

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
  }};

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
        console.log(emailError);    
      };
      setIsShow(true);
  }}

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      onHideModal();
    };
    handleModalNavigation(e);
  };

  const handleModalNavigation = (e) => {
  const allElement = modalElement.current.querySelectorAll('input, button');
  const firstElement = allElement[0];
  const lastElement = allElement[3];

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
          // console.log(allElement);
      }};

    const openNewModal = () => {
      setIsOpenModal(true)
    };

    const hideSecondModal = useRef(null);
    const onHideSecondModal = () => { //Modal open/close
        if (isOpenModal) {
            setIsOpenModal(false);
            hideSecondModal.current.focus();
        }};
  
return (

    <React.Fragment>
      <div className="modal-wrapper" />
        <div ref={modalElement} role='dialog' aria-label='Additional Personal Information' aria-modal="true" className="modal-container" onKeyDown={(e) => onKeyDown(e)}>

          <button className='closeButton' onClick={() => onHideModal()} aria-label='Close'>X</button>

          <div id='validation'>
            <label id='email'>Email id: </label>
            <input
                        type='input'
                        ref={emailError}
                        value={email}
                        onChange={handleInputChange}
                        onBlur={emailInput}
                        autoComplete="off"
                        aria-labelledby="email"
                        placeholder="Enter your email id"
                        required
                    />
            <span hidden={isShow} role='alert' style={{ color: 'red' }}>Please fill email field.</span>
            <span hidden={emailErrorMSG} role='alert' style={{ color: 'red' }}>Please enter valid Email.</span>
          </div>

          <div id='newbuttons'>
            <button onClick={onSubmit}>Submit</button>
            <button onClick={openNewModal} ref={hideSecondModal}>Data</button>
          </div>

          <div hidden={!isOpenModal}>
            <ModalInModal onHideSecondModal={onHideSecondModal}/>
          </div>
        </div>
    </React.Fragment>
  )
};
export default Modal;