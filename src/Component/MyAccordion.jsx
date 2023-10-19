import React from 'react'
import {useState} from 'react'

const MyAccordion = ({title, content}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [show, setShow] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleClick = (index) => {
        setShow(!show);
        setExpanded(!expanded);
        if (activeIndex === index) {
            setActiveIndex(index);
        }else {
            setActiveIndex(null);
        }
    }

  return (
    <div>
        <button onClick={() => handleClick()} aria-expanded={expanded}>{title} <span> + </span></button>
        <p hidden={show ? false : true}>{content}</p>
    </div>
  )
}

export default MyAccordion;