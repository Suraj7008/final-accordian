import React, { useEffect, useRef, useState }  from 'react'
import "./Modal"

const Modal = ({onHideModal}) => {
  const modalElement = useRef();
  const [email, setEmail] = useState('');
  const [isShow, setIsShow] = useState(true);
  
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
  } else {
      setIsShow(true);
      onHideModal();
  }
};

  
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
  } else  {
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
        <div ref={modalElement} role='dialog' aria-label='Additional Personal Information' aria-modal="true" className="modal-container" onKeyDown={(e) => onKeyDown(e)}>

          <button onClick={() => onHideModal()} aria-label='Close'>X</button>
    
          <div id='validation'>
            <label id='email'>Email id: </label>
            <input
                        value={email}
                        onChange={handleInputChange}
                        autoComplete="off"
                        aria-labelledby="email"
                        placeholder="Enter your email id"
                        required
                    />
            <span hidden={isShow} role='alert' style={{ color: 'red' }}>Please fill email field</span>
          </div>
          <div>
            <button onClick={onSubmit}>Submit</button>
          </div>
        </div>
    </React.Fragment>
  )
}
export default Modal;