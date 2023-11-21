import React from 'react'

export const ModalInModal = () => {
  return (
    <div aria-modal="true">
    <input type='checkBox' aria-required="true" required/>
      <p>
        Please verify that above information is corect by checking the check box.
      </p>
    <button>Submit</button>
    </div>
  )
}
