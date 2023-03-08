import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";

import DeployGroup from "./components/DeployGroup";

import deployCotro from "./data/deployCotrolia.json";
import deployFMM from "./data/deployFMM.json";
import { getDeployGroup } from "./functions/getDeployGroup";
import getLatestPipeline from "./functions/getLatestPipeline";

import reduxdeploy from "./redux/Deployement";
import reduxlatestpipeline from "./redux/LatestPipeline";

//37 -> cotrolia
//75 -> FMM

function App() {
  // const [deploygroupCotro, setdeploygroupCotro] = useState({ name: "", deployList: [] });
  const [deploygroupCotroName, setdeploygroupCotroName] = useState("");
  const [deploygroupCotroList, setdeploygroupCotroList] = useState([]);
  /* const [deploygroupFMM, setdeploygroupFMM] = useState({ name: "", deployList: [] }); */
const asyncGetDeployGroup = async () => {
  const result = await getDeployGroup(37)

  return result
  }

  useEffect(() => {
    asyncGetDeployGroup()
      .then((res) => {
        setdeploygroupCotroName(res.name)
        setdeploygroupCotroList(res.deployList)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])


  /* getDeployGroup(75).then((result) => {
    setdeploygroupFMM(result);
  });
 */
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
