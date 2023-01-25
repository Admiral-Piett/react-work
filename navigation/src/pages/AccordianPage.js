import Accordian from "../components/Accordian";

import { v4 as uuidv4 } from "uuid";

const AccordianPage = () => {
  const items = [
    {
      id: uuidv4(),
      label: "Labelling AWAY!",
      content: "This is my content and I'm content with it",
    },
    {
      id: uuidv4(),
      label: "Labelling AWAY2!",
      content: "This is my content and I'm content with it",
    },
    {
      id: uuidv4(),
      label: "Labelling AWAY3!",
      content: "This is my content and I'm content with it",
    },
  ];
  return (
    <div>
      <Accordian items={items} />
    </div>
  );
};

export default AccordianPage;
