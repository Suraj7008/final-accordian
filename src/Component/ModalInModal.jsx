import React, { useEffect, useRef, useState } from 'react'

export const ModalInModal = ({onHideSecondModal}) => {

  const [checked, setChecked] = useState(false);

  const modalInModalFocus = useRef(null)

  useEffect(() => {
    const secondModalElement = modalInModalFocus.current.querySelectorAll('input, button');
    secondModalElement[0].focus();
    console.log(secondModalElement)
  }, [onHideSecondModal]);

  const onSubmit = () => {
    if(checked === true){
      onHideSecondModal();
    }};

  return (
    <>
    <div className="modal-wrapper" />
    <div ref = {modalInModalFocus} className="modal-container" role='dialog' aria-modal="true">
      <input aria-labelledby='verify' onChange={() => setChecked(!checked)} type='checkBox' aria-checked={checked} aria-required="true" required/>
        <p id='verify'>
          Please verify that above information is corect by checking the check box.
        </p>
      <button onClick={onSubmit}>Submit</button>
    </div>
    </>
  )
};
