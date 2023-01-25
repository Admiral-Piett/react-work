import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

// These `value` and `onChange` names are a common convention even though they're horrid names.
const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (divEl.current && !divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const cleanup = () => {
      document.removeEventListener("click", handler);
    };

    document.addEventListener("click", handler, true);
    return cleanup;
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });

  const selection = value ? value : "Select...";

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        classNames="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {selection}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && (
        <Panel classNames="absolute top-full">{renderedOptions}</Panel>
      )}
    </div>
  );
};

export default Dropdown;
