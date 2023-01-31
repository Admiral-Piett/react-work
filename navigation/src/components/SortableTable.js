import { useState } from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import Table from "./Table";

const SortableTable = ({ config, data }) => {
  const [sortDirection, setSortDirection] = useState(0);
  const [sortColumn, setSortColumn] = useState(undefined);

  const sortableHeaderSegment = (fruit) => {
    return (
      <div
        onClick={() => {
          handleSortChange(fruit.label);
        }}
      >
        <div className="flex items-center cursor-pointer hover:bg-gray-100">
          {setSortGraphic(fruit.label)}
          {fruit.label}
        </div>
      </div>
    );
  };

  const updatedConfig = config.map((entry) => {
    if (!entry.sortValue) {
      return entry;
    }
    return {
      ...entry,
      header: sortableHeaderSegment,
    };
  });

  const handleSortChange = (column) => {
    if (sortColumn !== column) {
      setSortDirection(1); // If you click on a new column we'll always reset your sort direction to ascending
    } else if (sortDirection === 1) {
      setSortDirection(-1);
    } else if (sortDirection === -1) {
      setSortDirection(0);
    } else {
      // Is `0` (starts here)
      setSortDirection(1);
    }
    console.log(sortDirection);
    setSortColumn(column);
  };

  const setSortGraphic = (column) => {
    if (column !== sortColumn || sortDirection === 0) {
      return <FaSort />;
    } else if (sortDirection === 1) {
      return <FaSortUp />;
    } else if (sortDirection === -1) {
      return <FaSortDown />;
    }
  };

  const sortData = () => {
    if (!sortDirection) {
      return data;
    }
    console.log("sorting");

    // This looks weird, but here we loop through the config, looking to see which column has been selected to sort on.
    // Once we find it, we call for the value that column should sort on, and check its type.  It's type determines
    // which function we pass to .sort so that each version is understood and sorted properly.
    let sortFunction = undefined;
    for (let i = 0; i < config.length; i++) {
      if (config[i].label === sortColumn) {
        if (typeof config[i].sortValue === "string") {
          sortFunction = (a, b) => {
            return a.name.localeCompare(b.name) * sortDirection;
          };
        } else {
          sortFunction = (a, b) => {
            return (a.score - b.score) * sortDirection;
          };
        }
      }
    }
    if (!sortFunction) {
      return data;
    }
    return data.sort(sortFunction);
  };

  return <Table config={updatedConfig} data={sortData()} />;
};

export default SortableTable;
