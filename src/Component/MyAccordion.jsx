import React from 'react'
import {useState} from 'react'
import Form from './Form';
import { Modal } from './Modal';

const MyAccordion = () => {
    const [showFirst, setShowFirst] = useState(false); //First accordion show/hide 
    const [showSecond, setShowSecond] = useState(false); //Second accordion show/hide
    const [showThird, setShowThird] = useState(false); //Third accordion show/hide
    const [expanded, setExpanded] = useState(false); // aria Expand/Collapse 
    const [enable, setEnable] = useState(false); //show/hide condition for 2nd accordion
    const [newEnable, setNewEnable] = useState(false);  //show/hide condition for 3rd accordion
    const [isOpen, setIsOpen] = useState(false); //show/hide modal

    const handleClick = (index) => {
    //Accordian expand/collase hide/show
        if (index === 0) {  //First accordion
            setShowFirst(!showFirst);
            setExpanded(!expanded);
        }
        
        if (index === 1) {  //Second accordion
            setShowSecond(!showSecond);
            setEnable(true);
            setExpanded(!expanded);
        }

        if (index === 2) {  //Third accordion
            setShowThird(!showThird);
            setExpanded(!expanded);
            setNewEnable(true);
        }
        
    }
    
    const onClickSubmit = (index) => {  //Form submit button
        if (index === 1) {  //Second accordion
            setShowSecond(true);
            setShowFirst(false); 
        }

        if (index === 2) {  //Third accordion
            setEnable(true);
            setShowThird(true)
            setShowSecond(false);
        }
    }

    const onClickOpenModal = () => {    //Modal open on click data button
        setIsOpen(true);
    }
    console.log(isOpen)

    const onClickReset = () => {    //Reset entire content on clicking reset button
        setShowThird(false);
        setNewEnable(false);
        setShowSecond(false);
        setEnable(false);
        setShowFirst(false);
    }

  return (
    <React.Fragment>

    <div>
        <button onClick={() => handleClick(0)} aria-expanded={expanded} >User Information</button> {/* First accordion */}
        {/* User Information content */}
        <h2 hidden={showFirst ? false : true}>Personal Details</h2>

        <div hidden={showFirst ? false : true}>
            <Form onClickSubmit={onClickSubmit} />
        </div>
    </div>

    <div>
        <button onClick={() => handleClick(1)} aria-expanded={expanded} disabled = {showSecond === false && enable === false ? true : false}>Additional Information</button>{/* Second accordion */}
        {/* Additional Information */}
            <h2 hidden={showSecond ? false : true}>Additional Details</h2>
                <p hidden={showSecond ? false : true}>Click on submit after filling additional data!</p>

                <ul>
                    <button hidden={showSecond ? false : true} onClick={() => onClickSubmit(2)}>Submit</button>
                    <button hidden={showSecond ? false : true} onClick={onClickOpenModal}>Data</button>
                </ul>
                <div hidden={isOpen ? false : true} >

            <Modal />

                </div>
    </div>

    <div>
        <button onClick={() => handleClick(2)} aria-expanded={expanded} disabled = {showThird === false && newEnable === false ? true : false}>Final Step</button>{/* Third accordion */}
        {/* Final Step*/}
            <h3 hidden={showThird ? false : true}>Congrats!</h3>
            <p hidden={showThird ? false : true}>You are done now!</p>
                <button hidden={showThird ? false : true} onClick={onClickReset}>Reset</button>

    </div>  
    </React.Fragment>
  )
}

export default MyAccordion;