import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";

import DeployGroup from "./components/DeployGroup";
import Multiselect from "./components/Multiselect";

import {
  getAllDeployFromDeployGroups,
  getDeployList,
  getDeployment,
} from "./functions/getDeploy";

import configuration from "./configuration.json";
import LoadingButton from "./components/DeployButton";

function App() {
  const [deployGroup, setDeployGroup] = useState([]);

  const [optionslist, setoptionslist] = useState([]);
  const [clicklock, setclicklock] = useState(false); // pour trigger je ne sais pas pourquoi

  const [SelectedOptions, setSelectedOptions] = useState([]);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const setOptions = (selectedOptions) => {
    let temp = [];
    selectedOptions.map((item) => {
      temp.push(item.value);
    });
    setSelectedOptions(temp);
  };

  const asyncGetDeployment = async (array) => {
    const result = await getDeployment(array);
    return result;
  };

  const asynGetAllDeployFromDeployGroups = async (grouparrayid) => {
    const result = await getAllDeployFromDeployGroups(grouparrayid);
    return result;
  };

  const asyncGetDeployList = async (groupid, groupname) => {
    const result = await getDeployList(groupid, groupname);
    return result;
  };

  useEffect(() => {
    asynGetAllDeployFromDeployGroups([
      configuration.groups[0].groupid,
      configuration.groups[1].groupid,
    ]).then((res) => {
      setDeployGroup(res);
    });

    //pour recuperer les 'options' du multiselect
    asyncGetDeployList(
      configuration.groups[0].groupid,
      configuration.groups[0].name
    ).then(async (res) => {
      var response = await asyncGetDeployList(
        configuration.groups[1].groupid,
        configuration.groups[1].name
      ).then((response) => {
        return response;
      });

      setoptionslist([res, response]);
    });
  }, [clicklock]);

  sleep(3000).then(() => {
    setInterval(async () => {
      console.log("ping");
      /* asyncGetDeployment(SelectedOptions).then(async (result) => {
        console.log(result);
      }); */
    }, configuration.interval * 1000);
  });

  return (
    <div className="App">
      <Multiselect setOptions={setOptions} options={optionslist} />
      <LoadingButton
        setDeployGroup={setDeployGroup}
        options={SelectedOptions}
      />
      <div>
        {deployGroup.map((deploy) => (
          <DeployGroup
            key={deploy.groupname}
            groupname={deploy.groupname}
            deployList={deploy.deployList}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
