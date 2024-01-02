import Collaborator from "../Collaborator";
import "./Squad.css";

const Squad = (props) => {
  const css = { backgroundColor: props.secondColor };

  return (
    <section className="squad" style={css}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="collaborator">
        {props.collaborators.map((collaborator) => (
          <Collaborator
            name={collaborator.name}
            job={collaborator.job}
            image={collaborator.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Squad;
