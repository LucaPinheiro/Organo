import "./Squad.css";

const Squad = (props) => {
  const css = { backgroundColor: props.secondColor };

  return (
    <section className="squad" style={css}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
    </section>
  );
};

export default Squad;
