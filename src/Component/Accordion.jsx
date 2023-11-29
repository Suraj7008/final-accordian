import React, { useEffect, useRef, useState } from 'react';
import Form from './Form';
import Modal from './Modal';
import './AccordionStyle.css'
import { ModalInModal } from './ModalInModal';

const MyAccordion = () => {
    const [showFirst, setShowFirst] = useState(false); // First accordion show/hide 
    const [showSecond, setShowSecond] = useState(false); // Second accordion show/hide
    const [showThird, setShowThird] = useState(false); // Third accordion show/hide
    const [expanded, setExpanded] = useState(false); // aria Expand/Collapse 
    const [enable, setEnable] = useState(false); // show/hide condition for 2nd accordion
    const [newEnable, setNewEnable] = useState(false);  // show/hide condition for 3rd accordion
    const [isOpen, setIsOpen] = useState(false); // show/hide modal
    const [isOpenSecondModal, setIsOpenSecondModal] = useState(false);
    const [checkSeconModal, setCheckSecondModal] = useState(false);

    const handleClick = (index) => {
        // Accordian expand/collase hide/show
        if (index === 0) {  // First accordion
            setShowFirst(!showFirst);
            setExpanded(!expanded);
        }

        if (index === 1) {  // Second accordion
            setShowSecond(!showSecond);
            setEnable(true);
            setExpanded(!expanded);
        }

        if (index === 2) {  // Third accordion
            setShowThird(!showThird);
            setExpanded(!expanded);
            setNewEnable(true);
        }
    };

    const onClickSubmit = (index) => {  // Form submit button
        if (index === 1) {  // Second accordion
            setShowSecond(true);
            setShowFirst(false);
        }

        if (index === 2 && checkSeconModal === true) {  // Third accordion
                setEnable(true);
                setShowThird(true);
                setShowSecond(false);
        }
    };

    const onClickOpenModal = () => {    // Modal open on click data button
        setIsOpen(true);
    };

    const onClickOpenSeconModal = () => {   //Second modal open on clicking data nutton in modal component
        setIsOpenSecondModal(true)
    }

    const onClickReset = () => {    // Reset entire content on clicking reset button
        window.location.reload();
    };

    const hideModal = useRef(null);
    const onHideModal = () => { //  Modal open/close
        if (checkSeconModal === true) {
            setIsOpen(false);
            hideModal.current.focus();
        }
        if(isOpenSecondModal) {
            setIsOpenSecondModal(false);
            setIsOpen(true);
            setCheckSecondModal(true);
        }
    
    };
// console.log(checkSeconModal)
    const accordionFocus = useRef(null);    //  First accordion close and focus shift to second accordion
    useEffect(() => {
        if (showSecond) {
            accordionFocus.current.focus();
        };
    },[showSecond]);
    
    const thirdAccordionFocus = useRef(null);   //  Second accordion close and focus shift to third accordion
    useEffect(() => {
        if (showThird) {
            thirdAccordionFocus.current.focus();
        };
    },[showThird]);
    
    const reset = useRef(null);
        useEffect(() => {
            if(!showThird && !newEnable) {
                reset.current.focus();
            }
        }, [showThird,newEnable])

    return (
        <React.Fragment>
            <div>
                <button className='accordianButton' ref={reset} onClick={() => handleClick(0)} aria-expanded={showFirst ? 'true' : 'false'}>User Information</button>   {/* First accordion */}
                {/* User Information content */}
                <div className='main-content'>

                <h2 hidden={!showFirst}>Personal Details</h2>

                <div hidden={!showFirst}>
                    <Form onClickSubmit={onClickSubmit} index={1} />    {/*onclicksubmit perform on submit button and opens second accordion by index=1*/}
                </div>
                </div>
            </div>

            <div className='main-content'>
                <button className='accordianButton' onClick={() => handleClick(1)} aria-expanded={showSecond ? 'true' : 'false'} disabled={!showSecond && !enable} ref={accordionFocus}>Additional Information</button> {/* Second accordion */}
                {/* Additional Information */}
                <h2 hidden={!showSecond}>Additional Details</h2>
                <p hidden={!showSecond}>Click on submit after filling additional data!</p>
 
                    <ul id='newbuttons'>
                        <button hidden={!showSecond} ref={hideModal} onClick={onClickOpenModal}>Add Email</button>
                        <button hidden={!showSecond} onClick={() => onClickSubmit(2)}>Submit</button>
                    </ul>
                <div hidden={!isOpen}>
                    <Modal checkSeconModal={checkSeconModal} onClickOpenSeconModal={onClickOpenSeconModal} onHideModal={onHideModal} />
                </div>

                <div hidden={!isOpenSecondModal}>
                    <ModalInModal onHideModal={onHideModal} />
                </div>
            </div>

            <div className='main-content'>
                <button className='accordianButton' onClick={() => handleClick(2)} aria-expanded={showThird ? 'true' : 'false'} disabled={!showThird && !newEnable} ref={thirdAccordionFocus}>Final Step</button>   {/* Third accordion */}
                {/* Final Step*/}
                <h3 hidden={!showThird}>Congrats!</h3>
                <p hidden={!showThird}>You are done now!</p>
                <div id='newbuttons'>
                <button hidden={!showThird} onClick={onClickReset}>Reset</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MyAccordion;