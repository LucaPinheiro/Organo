import { useState } from "react";
import Banner from "./components/Banner/index.js";
import Form from "./components/Form/index.js";
import Squad from "./components/Squad/index.js";
import Footer from "./components/Footer/index.js";

function App() {
  const squads = [
    {
      name: "Programação",
      primaryColor: "#57c278",
      secondColor: "#d9f7e9",
    },
    {
      name: "Front-End",
      primaryColor: "#82cffa",
      secondColor: "#e8f8ff",
    },
    {
      name: "Data Science",
      primaryColor: "#a60157",
      secondColor: "#f0f8e2",
    },
    {
      name: "Devops",
      primaryColor: "#E06869",
      secondColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#db6ebf",
      secondColor: "#fae9f5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondColor: "#FFEEDF",
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const onNewCollaboratorAdd = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator]);
  };
  return (
    <div className="App">
      <Banner />
      <Form
        squads={squads.map((squad) => squad.name)}
        oncollaboratorRegistered={(collaborator) =>
          onNewCollaboratorAdd(collaborator)
        }
      />

      {squads.map((squad) => (
        <Squad
          key={squad.nome}
          name={squad.name}
          primaryColor={squad.primaryColor}
          secondColor={squad.secondColor}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.squad === squad.name
          )}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
