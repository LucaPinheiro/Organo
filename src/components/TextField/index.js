import "./TextField.css";

const TextField = (props) => {
  const placeHolderModify = `${props.placeholder}...`;



  const readOn = (event) => {
    props.onChanged(event.target.value)
  };

  return (
    <div className="text-field">
      <label htmlFor="">{props.label}</label>
      <input
        value={props.value}
        onChange={readOn}
        required={props.required}
        type="text"
        placeholder={placeHolderModify}
      />
    </div>
  );
};

export default TextField;
