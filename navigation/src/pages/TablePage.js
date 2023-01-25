import Table from "../components/Table";
import { useState } from "react";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

// NOTE: could just put all the sorting logic into a SortableTable component which could ALSO be reuseable, unlike
//  this page.
const TablePage = () => {
  const [sortDirection, setSortDirection] = useState(0);
  const [sortColumn, setSortColumn] = useState(undefined);

  const handleSortChange = (column) => {
    if (sortColumn !== column) {
      setSortDirection(1); // If you click on a new column we'll always reset your sort direction to ascending
    } else if (sortDirection === 1) {
      setSortDirection(-1);
    } else if (sortDirection === -1) {
      setSortDirection(0);
    } else {
      // Is `undefined` already
      setSortDirection(1);
    }
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

  const config = [
    {
      header: sortableHeaderSegment,
      label: "Fruit",
      render: (fruit) => fruit.name,
      sortComparator: (a, b) => {
        return a.name.localeCompare(b.name) * sortDirection;
      },
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
    {
      header: sortableHeaderSegment,
      label: "Score",
      render: (fruit) => fruit.score,
      sortComparator: (a, b) => {
        return (a.score - b.score) * sortDirection;
      },
    },
  ];

  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 1 },
    { name: "Lemon", color: "bg-yellow-500", score: 4 },
    { name: "Lime", color: "bg-green-500", score: 3 },
  ];

  const sortData = () => {
    if (!sortDirection) {
      return data;
    }

    // The smart way to do this would be to nest the other data (the functions) under the label key as a sub-doc.
    // That way you could fetch out what you needed at any given time.
    let sortFunction = undefined;
    // NOTE: Could also have done: `const { sortValue } = config.find((column) => column.label === sortBy);`
    for (let i = 0; i < config.length; i++) {
      if (config[i].label === sortColumn) {
        sortFunction = config[i].sortComparator;
      }
    }
    if (!sortFunction) {
      return data;
    }
    return data.sort(sortFunction);
  };
  return (
    <div>
      <Table
        config={config}
        data={sortData()}
        handleSortChange={handleSortChange}
      />
    </div>
  );
};

export default TablePage;
