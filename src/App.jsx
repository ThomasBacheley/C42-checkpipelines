import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";

import DeployGroup from "./components/DeployGroup";
import { getDeployGroup } from "./functions/getDeployGroup";
import { getDeployList } from "./functions/getDeployList";

// Data en Brute
import deployCotro from "./data/deployCotrolia.json";
import deployFMM from "./data/deployFMM.json";
import Multiselect from "./components/Multiselect";

//37 -> cotrolia
//75 -> FMM

function App() {
  const [deploygroupCotroList, setdeploygroupCotroList] = useState([]);
  const [deploygroupFMMList, setdeploygroupFMMList] = useState([]);
  const [optionslist, setoptionslist] = useState([]);

  const [clicklock, setclicklock] = useState(false);

  const asyncGetDeployGroup = async (groupid) => {
    const result = await getDeployGroup(groupid);
    return result;
  };

  const asyncGetDeployList = async (groupid, groupname) => {
    const result = await getDeployList(groupid, groupname);
    return result;
  };

  useEffect(() => {
    asyncGetDeployGroup(37).then((res) => {
      setdeploygroupCotroList(res);
    });

    asyncGetDeployGroup(75).then((res) => {
      setdeploygroupFMMList(res);
    });

    asyncGetDeployList(37, "Cotrolia")
      .then((res) => {
        return res;
      })
      .then(async (res) => {
        var response = await asyncGetDeployList(75, "FMM").then((response) => {
          return response
        });

        console.log([res,response]);

        setoptionslist([res,response]);
      });
  }, []);

  setTimeout(() => {
    setclicklock(true);
  }, 5000);

  return (
    <div className="App">
      <Multiselect options={optionslist} />
      <DeployGroup
        groupname={"Cotrolia"}
        deployList={deploygroupCotroList}
      ></DeployGroup>
      <DeployGroup
        groupname={"FMM"}
        deployList={deploygroupFMMList}
      ></DeployGroup>
    </div>
  );
}

export default App;
