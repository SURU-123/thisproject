import UseInput from "../hooks/use-Input";

const SimpleInput = (props) => {
  const {
    value: enterName,
    isvalid: Nameisvalid,
    hasError: nameInputHasError,
    valuechangeHandler: InputchangeHandler,
    inputblurhandler: inputfocusblurhandler,
    reset: resetNameInput,
  } = UseInput((value) => value.trim() !== "");

  const {
    value: Email,
    isvalid: Emailisvalid,
    hasError: EmailInputhasError,
    valuechangeHandler: EmailchangeHandler,
    inputblurhandler: Emailfocusblurhandler,
    reset: resetEmailInput,
  } = UseInput((value) => value.includes("@") && value.trim() !== "");

  const NameInputvalid = nameInputHasError && !EmailInputhasError;

  let formisvalid = false;

  if (Nameisvalid || Emailisvalid) {
    formisvalid = true;
  }

  const formSubmithandler = (event) => {
    event.preventDefault();

    console.log(enterName, Email);
    resetNameInput();
    resetEmailInput();
  };
  if (NameInputvalid) {
    console.log("hi");
  }

  const formControl = NameInputvalid ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmithandler}>
      <div className={formControl}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enterName}
          onChange={InputchangeHandler}
          onBlur={inputfocusblurhandler}
        />
      </div>
      <div className={formControl}>
        <label htmlFor="Email">E-mail</label>
        <input
          type="text"
          id="email"
          value={Email}
          onChange={EmailchangeHandler}
          onBlur={Emailfocusblurhandler}
        />
      </div>
      {NameInputvalid && !Emailisvalid && (
        <p className="error-text">name is empty </p>
      )}
      <div className="form-actions">
        <button disabled={!formisvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
