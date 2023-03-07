import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import DeployGroup from "./components/DeployGroup";

import deployCotro from "./data/deployCotrolia.json";
import deployFMM from "./data/deployFMM.json";
import { getDeployGroup } from "./functions/getDeployGroup";

import reduxdeploy from "./redux/Deployement";

//37 -> cotrolia
//75 -> FMM

function App() {
  getDeployGroup(37);
  return (
    <div className="App">
      <button
        onClick={() => {
          console.log(reduxdeploy.getState().deployement);
        }}
      >
        Click Me
      </button>
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
