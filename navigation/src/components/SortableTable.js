import Table from "./Table";
import { useSort } from "../hooks/sort";

const SortableTable = ({ config, data }) => {
  const { updatedConfig, sortData } = useSort(config, data);

  return <Table config={updatedConfig} data={sortData()} />;
};

export default SortableTable;
