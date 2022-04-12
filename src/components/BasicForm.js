import UseInput from "../hooks/use-Input";

const isInputvalid = (value) => value.trim() !== "";
const isEmailvalid = (value) => value.includes("@") && value.trim() !== "";
const BasicForm = (props) => {
  const {
    value: FirstName,
    isvalid: FirstNameisvalid,
    hasError: FirstNameHasError,
    valuechangeHandler: FirstNamechangeHandler,
    inputblurhandler: FirstNameblurhandler,
    reset: resetFirstName,
  } = UseInput(isInputvalid);
  const {
    value: LastName,
    isvalid: LastNameisvalid,
    hasError: LastNameHasError,
    valuechangeHandler: LastNamechangeHandler,
    inputblurhandler: LastNameblurhandler,
    reset: resetLastName,
  } = UseInput(isInputvalid);
  const {
    value: Email,
    isvalid: Emailisvalid,
    hasError: EmailHasError,
    valuechangeHandler: EmailchangeHandler,
    inputblurhandler: Emailblurhandler,
    reset: resetEmail,
  } = UseInput(isEmailvalid);

  let formisvalid = false;
  if (FirstNameisvalid && LastNameisvalid && Emailisvalid) {
    formisvalid = true;
  }

  const formSubmithandler = (event) => {
    event.preventDefault();
    console.log(FirstName, LastName, Email);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const FirstnameClass = !FirstNameHasError
    ? "form-control"
    : "form-control invalid";
  const LastnameClass = !LastNameHasError
    ? "form-control"
    : "form-control invalid";
  const EmailClass = !EmailHasError ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmithandler}>
      <div className="control-group">
        <div className={FirstnameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="firstname"
            value={FirstName}
            onChange={FirstNamechangeHandler}
            onBlur={FirstNameblurhandler}
          />
          {FirstNameHasError && <p>Please Enter a FirstName </p>}
        </div>
        <div className={LastnameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={LastName}
            onChange={LastNamechangeHandler}
            onBlur={LastNameblurhandler}
          />
          {LastNameHasError && <p>Please Enter a LastName</p>}
        </div>
      </div>
      <div className={EmailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={Email}
          onChange={EmailchangeHandler}
          onBlur={Emailblurhandler}
        />
        {EmailHasError && <p>Please Enter a Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formisvalid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
