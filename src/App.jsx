import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";

import DeployListCard from "./components/DeployListCard";

function App() {
  var deployList = [
    {
      avatar_url:
        "https://git.code42.io/uploads/-/system/project/avatar/123/folder.png",
      name: "Documentation",
      description:
        "Dépot contenant des documentations du projet COTROLIA / REPTURN",
      latestpipeline: {
        id: 37,
        web_url: "https://yweelon.fr",
      },
    },
    {
      avatar_url:
        "https://git.code42.io/uploads/-/system/project/avatar/123/folder.png",
      name: "Documentation",
      description:
        "Dépot contenant des documentations du projet COTROLIA / REPTURN",
      latestpipeline: {
        id: 37,
        web_url: "https://yweelon.fr",
      },
    },
    {
      avatar_url:
        "https://git.code42.io/uploads/-/system/project/avatar/123/folder.png",
      name: "Documentation",
      description:
        "Dépot contenant des documentations du projet COTROLIA / REPTURN",
      latestpipeline: {
        id: 37,
        web_url: "https://yweelon.fr",
      },
    },
    {
      avatar_url:
        "https://git.code42.io/uploads/-/system/project/avatar/123/folder.png",
      name: "Documentation",
      description:
        "Dépot contenant des documentations du projet COTROLIA / REPTURN",
      latestpipeline: {
        id: 37,
        web_url: "https://yweelon.fr",
      },
    }
  ]

  return (
    <div className="App">
      <h1>Check Pipelines</h1>
      <div>
        <h1>Cotrolia</h1>
        <DeployListCard deployList={deployList}></DeployListCard>
      </div>
    </div>
  );
}

export default App;
