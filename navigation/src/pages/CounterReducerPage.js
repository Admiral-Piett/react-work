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
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + state.incrementValue,
      };
    case CHANGE_INCREMENT_VALUE:
      return {
        ...state,
        incrementValue: action.payload,
      };
    default:
      return state;
  }
};

const CounterReducerPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
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
