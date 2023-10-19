import React from 'react'
import  './Accordionstyle.css'
import MyAccordion from './MyAccordion';
import AccordianData from '../Data/AccordianData';

const Accordion = () => {

    // const [accordianData] = useState(AccordianData);
    
  return (
    <div>

    {AccordianData.map((item) => (
        <MyAccordion key={item.id} {...item} />
    ))}
        </div>
  )
}

export default Accordion