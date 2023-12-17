import Button from "../Button";
import List from "../List";
import TextField from "../TextField";
import "./Form.css";

const Form = () => {
  const times = ["Programação", "Front-End", "DataScience", "UXUI", "Mobile"];

  const inSave = (event) => {
    event.preventDefault();
    console.log("Form foi submetido");
  };

  return (
    <section className="form">
      <form onSubmit={inSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField required={true} label="Nome" placeholder="Digite seu nome" />
        <TextField required={true} label="Cargo" placeholder="Digite o seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        <List required={true} label="Time" itens={times} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
