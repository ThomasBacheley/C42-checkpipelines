import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";

import DeployGroup from "./components/DeployGroup";
import { getDeployGroup } from "./functions/getDeployGroup";
import { getDeployGroupName } from "./functions/getDeployGroupName";

// Data en Brute
import deployCotro from "./data/deployCotrolia.json";
import deployFMM from "./data/deployFMM.json";

//37 -> cotrolia
//75 -> FMM

function App() {
  // const [deploygroupCotro, setdeploygroupCotro] = useState({ name: "", deployList: [] });
  const [deploygroupCotroName, setdeploygroupCotroName] = useState("");
  const [deploygroupCotroList, setdeploygroupCotroList] = useState([]);

  const asyncGetDeployGroup = async (groupid) => {
    const result = await getDeployGroup(groupid);

    return result;
  };

  const asyncGetDeployGroupName = async (groupid) => {
    const result = await getDeployGroupName(groupid);

    return result;
  };

  useEffect(() => {
    asyncGetDeployGroupName(37).then((res) => {
      setdeploygroupCotroName(res);
      console.log(res)
    });
  },[]);

  useEffect(() => {
    asyncGetDeployGroup(37).then((res) => {
      setdeploygroupCotroList(res);
    });
  },[]);

  return (
    <div className="App">
      <DeployGroup
        groupname={deploygroupCotroName}
        deployList={deploygroupCotroList}
      ></DeployGroup>
      {/* <DeployGroup
        groupname={deploygroupFMM.name}
        deployList={deploygroupFMM.deployList}
      ></DeployGroup> */}
    </div>
  );
}

export default App;
