import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";

import DeployCard from "./components/DeployCard";

function App() {
  var deploy = {
    avatar_url:
      "https://git.code42.io/uploads/-/system/project/avatar/123/folder.png",
    name: "Documentation",
    description:
      "Dépot contenant des documentations du projet COTROLIA / REPTURN",
    latestpipeline: {
      id: 37,
      web_url: "https://yweelon.fr",
    },
  };

  var deploydeux = {
    avatar_url:
      "https://git.code42.io/uploads/-/system/project/avatar/123/folder.png",
    name: "Documentation",
    description:
      "Dépot contenant des documentations du projet COTROLIA / REPTURN",
    latestpipeline: {
      id: 37,
      web_url: "https://yweelon.fr",
    },
  };

  return (
    <div className="App">
      <h1>Check Pipelines</h1>
      <div>
        <h1>Cotrolia</h1>
        <div className="d-inline-flex justify-content-around flex-wrap">
          <DeployCard deploy={deploy}></DeployCard>
          <DeployCard deploy={deploydeux}></DeployCard>
        </div>
      </div>
    </div>
  );
}

export default App;
