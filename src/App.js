import { useState } from "react";
import Banner from "./components/Banner/index.js";
import Form from "./components/Form/index.js";

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const onNewCollaboratorAdd = (collaborator) => {
    console.log(collaborator);
    setCollaborators([...collaborators, collaborator]);
  };
  return (
    <div className="App">
      <Banner />
      <Form
        oncollaboratorRegistered={(collaborator) =>
          onNewCollaboratorAdd(collaborator)
        }
      />
    </div>
  );
}

export default App;
