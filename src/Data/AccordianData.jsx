import Form from "../Component/Form";

const [AccordianData] = [
    {
        id: 1,
        title: "User Information", //key:value.
        content: Form() //This is the way to call functi on in the variable.
    },
    {
        id: 2,
        title: "Additional Information",
        content: "This is the content of section 2"
    },
    {
      id: 3,
      title: "Final Step",
      content: "This is the content of section 3"
  }
];

export default AccordianData;