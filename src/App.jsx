import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";

import DeployGroup from "./components/DeployGroup";
import Multiselect from "./components/Multiselect";

import { getDeployGroup } from "./functions/getDeployGroup";
import { getDeployList } from "./functions/getDeployList";
import { getDeploy } from "./functions/getDeploy";

import configuration from "./configuration.json";

// Data en Brute
import deployCotro from "./data/deployCotrolia.json";
import deployFMM from "./data/deployFMM.json";

//37 -> cotrolia
//75 -> FMM

function App() {
  const [deploygroup, setDeploygroup] = useState([]);
  const [deploygroupCotroList, setdeploygroupCotroList] = useState([]);
  const [deploygroupFMMList, setdeploygroupFMMList] = useState([]);
  const [optionslist, setoptionslist] = useState([]);
  const [clicklock, setclicklock] = useState(false); // pour trigger je ne sais pas pourquoi

  const [SelectedOptions, setSelectedOptions] = useState([]);

  const setSOptions = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    var deploy = [];
    SelectedOptions.forEach(async (option) => {
      var deploytemp = await getDeploy(option.value);
      deploy.push(deploytemp);
    });
    console.log(deploy);
  };

  const asyncGetDeployGroup = async (groupid) => {
    const result = await getDeployGroup(groupid);

    return result;
  };

  const asyncGetDeployList = async (groupid, groupname) => {
    const result = await getDeployList(groupid, groupname);
    return result;
  };

  useEffect(() => {
    asyncGetDeployGroup(configuration.groups[0].groupid).then((res) => {
      setDeploygroup([...deploygroup, res]);
      setdeploygroupCotroList(res);
    });

    asyncGetDeployGroup(configuration.groups[1].groupid).then((res) => {
      setDeploygroup([...deploygroup, res]);
      setdeploygroupFMMList(res);
    });

    asyncGetDeployList(
      configuration.groups[0].groupid,
      configuration.groups[0].name
    )
      .then((res) => {
        return res;
      })
      .then(async (res) => {
        var response = await asyncGetDeployList(
          configuration.groups[1].groupid,
          configuration.groups[1].name
        ).then((response) => {
          return response;
        });

        setoptionslist([res, response]);
      });
  }, []);

  setTimeout(() => {
    setclicklock(!clicklock);
    setInterval(()=>{
      console.log('ping')
    },configuration.interval*1000);
  }, 5000);

  return (
    <div className="App">
      <Multiselect setSOptions={setSOptions} options={optionslist} />
      <DeployGroup
        groupname={configuration.groups[0].name}
        deployList={deploygroupCotroList}
      ></DeployGroup>
      <DeployGroup
        groupname={configuration.groups[1].name}
        deployList={deploygroupFMMList}
      ></DeployGroup>
      {deploygroup &&
        deploygroup.forEach((deployg) => {
            <DeployGroup
              groupname={deployg.name}
              deployList={deployg.deployList}
            />
        })}
    </div>
  );
}

export default App;
