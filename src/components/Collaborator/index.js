import "./Collaborator.css";

const Collaborator = ({ name, image, job, backColor }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: backColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{job}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
