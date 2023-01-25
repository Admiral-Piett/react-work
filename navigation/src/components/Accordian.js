import PropTypes from "prop-types";
import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordian = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    // This should prevent race conditions on "double-clicks" by using the most up to date version of the state
    // `current` and using that as a comparison.  Otherwise, React's batching of the re-rendering might not be
    // quick enough to account for user behavior.
    setExpandedIndex((current) => {
      // Ternary to close a nav that's already expanded and gets clicked again.
      current === index ? setExpandedIndex(-1) : setExpandedIndex(index);
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const expandedIcon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronLeft /> : <GoChevronDown />}
      </span>
    );

    return (
      <div onClick={() => handleClick(index)} key={item.id}>
        <h3 className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer">
          {item.label}
          {expandedIcon}
        </h3>
        {isExpanded && <p className="border-b p-5">{item.content}</p>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

Accordian.propTypes = {
  items: PropTypes.array,
};

export default Accordian;
