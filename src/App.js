import Banner from "./components/Banner/index.js";
import TextField from "./components/TextField/index.js";

function App() {
  return (
    <div className="App">
      <Banner />
      <TextField label="Nome" placeholder="Digite seu nome" />
      <TextField label="Cargo" placeholder="Digite o seu cargo"/>
      <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
