import produce from "immer";
import Panel from "../components/Panel";
import Button from "../components/Button";
import { useReducer } from "react";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const INCREMENT_BY_VALUE = "increment_by_value";
const CHANGE_INCREMENT_VALUE = "change_increment_value";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case INCREMENT_BY_VALUE:
      state.count = state.count + state.incrementValue;
      state.incrementValue = 0;
      return;
    case CHANGE_INCREMENT_VALUE:
      state.incrementValue = action.payload;
      return;
    default:
      return;
  }
};

const CounterReducerPage = ({ initialCount }) => {
  // `produce` is from immer which lets us directly mutate the state with code and it, under the hood, creates a
  // new state object that contains our changes and returns it.
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    incrementValue: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const incrementByValue = (event) => {
    event.preventDefault();
    dispatch({
      type: INCREMENT_BY_VALUE,
    });
  };

  const changeIncrementValue = (event) => {
    dispatch({
      type: CHANGE_INCREMENT_VALUE,
      payload: parseInt(event.target.value) || 0,
    });
  };

  return (
    <Panel classNames="m-3">
      <h1 className="text-lg">Count: {state.count}</h1>
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
          value={state.incrementValue}
          onChange={changeIncrementValue}
        />
        <Button secondary rounded>
          Submit
        </Button>
      </form>
    </Panel>
  );
};

export default CounterReducerPage;
