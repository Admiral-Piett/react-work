import SortableTable from "../components/SortableTable";

// NOTE: could just put all the sorting logic into a SortableTable component which could ALSO be reuseable, unlike
//  this page.
const SortableTablePage = () => {
  const config = [
    {
      label: "Fruit",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.name,
    },
  ];

  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 1 },
    { name: "Lemon", color: "bg-yellow-500", score: 4 },
    { name: "Lime", color: "bg-green-500", score: 3 },
  ];

  return (
    <div>
      <SortableTable config={config} data={data} />
    </div>
  );
};

export default SortableTablePage;
