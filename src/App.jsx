import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import DeployGroup from "./components/DeployGroup";

import deployCotro from "./data/deployCotrolia.json";
import deployFMM from "./data/deployFMM.json";

function App() {
  return (
    <div className="App">
      <DeployGroup
        groupname={deployCotro.name}
        deployList={deployCotro.deployList}
      ></DeployGroup>
      <DeployGroup
        groupname={deployFMM.name}
        deployList={deployFMM.deployList}
      ></DeployGroup>
    </div>
  );
}

export default App;
