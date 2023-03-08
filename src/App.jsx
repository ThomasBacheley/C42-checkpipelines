import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";

import DeployGroup from "./components/DeployGroup";
import { getDeployGroup } from "./functions/getDeployGroup";

// Data en Brute
import deployCotro from "./data/deployCotrolia.json";
import deployFMM from "./data/deployFMM.json";

//37 -> cotrolia
//75 -> FMM

function App() {
  const [deploygroupCotroList, setdeploygroupCotroList] = useState([]);
  const [deploygroupFMMList, setdeploygroupFMMList] = useState([]);

  const [clicklock,setclicklock] = useState(false);

  const asyncGetDeployGroup = async (groupid) => {
    const result = await getDeployGroup(groupid);

    return result;
  };

  useEffect(() => {
    asyncGetDeployGroup(37).then((res) => {
      setdeploygroupCotroList(res);
    });

    asyncGetDeployGroup(75).then((res) => {
      setdeploygroupFMMList(res);
    });
  }, []);

  setTimeout(()=>{
    console.log('tick');
    setclicklock(true);
  },5000)

  return (
    <div className="App">
      <DeployGroup
        groupname={"Cotrolia"}
        deployList={deploygroupCotroList}
      ></DeployGroup>
      <DeployGroup
        groupname={"FMM"}
        deployList={deploygroupFMMList }
      ></DeployGroup>
    </div>
  );
}

export default App;
