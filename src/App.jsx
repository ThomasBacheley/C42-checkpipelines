import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useEffect } from "react";

import DeployGroup from "./components/DeployGroup";
import Multiselect from "./components/Multiselect";

import {
  getAllDeployFromDeployGroups,
  getDeployList,
} from "./functions/getDeploy";

import configuration from "./configuration.json";
import LoadingButton from "./components/DeployButton";

//37 -> cotrolia
//75 -> FMM

function App() {
  const [deploygroupCotroList, setdeploygroupCotroList] = useState([]);
  const [deploygroupFMMList, setdeploygroupFMMList] = useState([]);
  const [optionslist, setoptionslist] = useState([]);
  const [clicklock, setclicklock] = useState(false); // pour trigger je ne sais pas pourquoi

  const [SelectedOptions, setSelectedOptions] = useState([]);

  const setOptions = (selectedOptions) => {
    let temp = [];
    selectedOptions.map((item)=>{
      temp.push(item.value)
    });
    setSelectedOptions(temp);
    console.log(SelectedOptions);
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
      setdeploygroupCotroList(res[0].deployList);
      setdeploygroupFMMList(res[1].deployList);
    });

    //pour recuperer les 'options' du multiselect
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
    setInterval(() => {
      console.log("ping");
    }, configuration.interval * 1000);
  }, 5000);

  return (
    <div className="App">
      <Multiselect setOptions={setOptions} options={optionslist} />
      <LoadingButton
        options={SelectedOptions}
      />
      <div>
        <DeployGroup
          groupname={configuration.groups[0].name}
          deployList={deploygroupCotroList}
        ></DeployGroup>
        <DeployGroup
          groupname={configuration.groups[1].name}
          deployList={deploygroupFMMList}
        ></DeployGroup>
      </div>
    </div>
  );
}

export default App;
