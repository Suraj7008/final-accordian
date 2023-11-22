import React, { useState } from 'react'

export const ModalInModal = ({onHideSecondModal}) => {

  const [checked, setChecked] = useState(false);

  const onSubmit = () => {
    if(checked === true){
      onHideSecondModal();
    }};

  return (
    <div role='dialog' aria-modal="true">
      <input aria-labelledby='verify' onChange={() => setChecked(!checked)} type='checkBox' aria-checked={checked} aria-required="true" required/>
        <p id='verify'>
          Please verify that above information is corect by checking the check box.
        </p>
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
};
