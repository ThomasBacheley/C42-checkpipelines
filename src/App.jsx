import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import DeployGroup from "./components/DeployGroup";

import deployCotro from "./data/deployCotrolia.json";
import deployFMM from "./data/deployFMM.json";
import { getDeployGroup } from "./functions/getDeployGroup";

import reduxdeploy from "./redux/Deployement";
import reduxlatestpipeline from "./redux/LatestPipeline";

//37 -> cotrolia
//75 -> FMM

function App() {
  getDeployGroup(37);
  
  return (
    <div className="App">
      <button
        onClick={() => {
          console.log(reduxdeploy.getState().deployement);
          console.log(reduxlatestpipeline.getState().latestpipeline.pipeline);
        }}
      >
        Afficher Redux
      </button>
      <h5>deployCotrolia.json</h5>
      <DeployGroup
        groupname={deployCotro.name}
        deployList={deployCotro.deployList}
      ></DeployGroup>
      <h5>deployFMM.json</h5>
      <DeployGroup
        groupname={deployFMM.name}
        deployList={deployFMM.deployList}
      ></DeployGroup>
    </div>
  );
}

export default App;
