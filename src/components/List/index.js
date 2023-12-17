import "./List.css";

const List = (props) => {
  console.log(props.itens);

  return (
    <div className="List">
      <label>{props.label}</label>
      <select>
        {props.itens.map((item, index) => (
          <option key={index}>{item}</option>
        ))} 
      </select>
    </div>
  );
};

export default List;
