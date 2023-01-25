import { v4 as uuidv4 } from "uuid";

const Table = ({ config, data }) => {
  const renderedHeaders = config.map((entry) => {
    return (
      <th key={uuidv4()}>{entry.header ? entry.header(entry) : entry.label}</th>
    );
  });

  const renderedRows = data.map((dataEntry) => {
    return (
      <tr className="border-b" key={uuidv4()}>
        {config.map((configEntry) => {
          return (
            <td className="p-3" key={uuidv4()}>
              {configEntry.render(dataEntry)}
            </td>
          );
        })}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
