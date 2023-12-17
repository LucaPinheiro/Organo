import "./TextField.css";

const TextField = (props) => {
  return (
    <div className="text-field">
      <label htmlFor="">{props.label}</label>
      <input required={props.required} type="text" placeholder={props.placeholder} />
    </div>
  );
};

export default TextField;
