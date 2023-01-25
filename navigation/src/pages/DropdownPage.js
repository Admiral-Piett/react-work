import Dropdown from "../components/Dropdown";
import { useState } from "react";

const DropdownPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option.label);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
  ];
  return (
    <div className="flex">
      {/*<div>Selected Option: {selectedOption}</div>*/}
      <Dropdown
        options={options}
        value={selectedOption}
        onChange={handleOptionSelect}
      />
    </div>
  );
};

export default DropdownPage;
