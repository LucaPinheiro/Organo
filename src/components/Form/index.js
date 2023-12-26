import { useState } from "react";
import Button from "../Button";
import List from "../List";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {
  const times = ["Programação", "Front-End", "DataScience", "UXUI", "Mobile"];

  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");
  const [squad, setSquad] = useState("");

  const inSave = (event) => {
    event.preventDefault();
    props.oncollaboratorRegistered({
      name,
      job,
      image,
      squad,
    });
  };

  return (
    <section className="form">
      <form onSubmit={inSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChanged={(value) => setName(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={job}
          onChanged={(value) => setJob(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          onChanged={(value) => setImage(value)}
        />
        <List
          required={true}
          label="Time"
          itens={times}
          value={squad}
          onChanged={(value) => setSquad(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
