import { useReducer } from "react";

const initialInputState = {
  value: "",
  istouched: false,
};

const InputstateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, istouched: state.istouched };
  }
  if (action.type === "BLUR") {
    return { istouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { istouched: false, value: "" };
  }
  return InputstateReducer;
};

const UseInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    InputstateReducer,
    initialInputState
  );

  //   const [enteredValue, setenteredValue] = useState("");
  //   const [istouched, setistouched] = useState(false);

  const valueIsvalid = validateValue(inputState.value);
  const hasError = !valueIsvalid && inputState.istouched;

  const valuechangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    // setenteredValue(event.target.value);
  };

  const inputblurhandler = () => {
    dispatch({ type: "BLUR" });
    // setistouched(true);
  };

  const reset = () => {
    dispatch({ type: "RESET" });
    // setenteredValue("");
    // setistouched(false);
  };

  return {
    value: inputState.value,
    isvalid: valueIsvalid,
    hasError,
    valuechangeHandler,
    inputblurhandler,
    reset,
  };
};

export default UseInput;
