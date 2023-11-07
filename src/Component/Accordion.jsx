import React, { useEffect, useRef, useState } from 'react';
import Form from './Form';
import Modal from './Modal';

const MyAccordion = () => {
    const [showFirst, setShowFirst] = useState(false); // First accordion show/hide 
    const [showSecond, setShowSecond] = useState(false); // Second accordion show/hide
    const [showThird, setShowThird] = useState(false); // Third accordion show/hide
    const [expanded, setExpanded] = useState(false); // aria Expand/Collapse 
    const [enable, setEnable] = useState(false); // show/hide condition for 2nd accordion
    const [newEnable, setNewEnable] = useState(false);  // show/hide condition for 3rd accordion
    const [isOpen, setIsOpen] = useState(false); // show/hide modal

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
    }

    const onClickSubmit = (index) => {  // Form submit button
        if (index === 1) {  // Second accordion
            console.log("here")
            setShowSecond(true);
            setShowFirst(false);
        }

        if (index === 2) {  // Third accordion
            setEnable(true);
            setShowThird(true);
            setShowSecond(false);
        }
    }

    const onClickOpenModal = () => {    // Modal open on click data button
        setIsOpen(true);
    };

    const onClickReset = () => {    // Reset entire content on clicking reset button
        setShowThird(false);
        setNewEnable(false);
        setShowSecond(false);
        setEnable(false);
        setShowFirst(false);
    }

    const onHideModal = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    }

    const accordionFocus = useRef(null);
    useEffect(() => {
        if (showSecond) {
            accordionFocus.current.focus();
        }
    }, [showSecond]);

    const thirdAccordionFocus = useRef(null);
    useEffect(() => {
        if (showThird) {
            thirdAccordionFocus.current.focus();
        }
    }, [showThird]);

    return (
        <React.Fragment>
            <div>
                <button onClick={() => handleClick(0)} aria-expanded={showFirst ? 'true' : 'false'}>User Information</button> {/* First accordion */}
                {/* User Information content */}
                <h2 hidden={!showFirst}>Personal Details</h2>

                <div hidden={!showFirst}>
                    <Form onClickSubmit={onClickSubmit} index={1} />
                </div>
            </div>

            <div>
                <button onClick={() => handleClick(1)} aria-expanded={showSecond ? 'true' : 'false'} disabled={!showSecond && !enable} ref={accordionFocus}>Additional Information</button>{/* Second accordion */}
                {/* Additional Information */}
                <h2 hidden={!showSecond}>Additional Details</h2>
                <p hidden={!showSecond}>Click on submit after filling additional data!</p>

                <ul>
                    <button hidden={!showSecond} onClick={() => onClickSubmit(2)}>Submit</button>
                    <button hidden={!showSecond} onClick={onClickOpenModal}>Data</button>
                </ul>
                <div hidden={!isOpen}>
                    <Modal onHideModal={onHideModal} />
                </div>
            </div>

            <div>
                <button onClick={() => handleClick(2)} aria-expanded={showThird ? 'true' : 'false'} disabled={!showThird && !newEnable} ref={thirdAccordionFocus}>Final Step</button>{/* Third accordion */}
                {/* Final Step*/}
                <h3 hidden={!showThird}>Congrats!</h3>
                <p hidden={!showThird}>You are done now!</p>
                <button hidden={!showThird} onClick={onClickReset}>Reset</button>
            </div>
        </React.Fragment>
    );
}

export default MyAccordion;
