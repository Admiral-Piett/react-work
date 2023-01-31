import Button from "../components/Button";
import { useCount } from "../hooks/count";
import Panel from "../components/Panel";

const CounterPage = ({ initialCount }) => {
  const {
    count,
    incrementValue,
    increment,
    decrement,
    incrementByValue,
    changeIncrementValue,
  } = useCount(initialCount);

  return (
    <Panel classNames="m-3">
      <h1 className="text-lg">Count: {count}</h1>
      <div className="flex flex-row">
        <Button primary rounded onClick={increment}>
          Increment
        </Button>
        <Button danger rounded onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={incrementByValue}>
        <label>Add Multiple</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={incrementValue}
          onChange={changeIncrementValue}
        />
        <Button secondary rounded>
          Submit
        </Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
