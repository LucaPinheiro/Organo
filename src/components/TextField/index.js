import "./TextField.css";

const TextField = (props) => {
  const placeHolderModify = `${props.placeholder}...`;

  let value = "";

  const readOn = (event) => {
    value = event.target.value;
    console.log(value);
  };

  return (
    <div className="text-field">
      <label htmlFor="">{props.label}</label>
      <input
        value={value}
        onChange={readOn}
        required={props.required}
        type="text"
        placeholder={placeHolderModify}
      />
    </div>
  );
};

export default TextField;
