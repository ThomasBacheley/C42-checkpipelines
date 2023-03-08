import DeployCard from "./DeployCard";
import { useState } from "react";

/**
 * Display a 'Deploy group' (name and list of deployement)
 * @param {*} props
 * @returns
 */
function DeployGroup(props) {
  return (
    <div className="border rounded m-2" style={{ background: "#F8F9FA" }}>
      <h1>{props.groupname}</h1>
      <div className="d-flex justify-content-around flex-wrap">
        {props.deployList.map((deploy) => (
          <DeployCard key={deploy.id} deploy={deploy}></DeployCard>
        ))}
      </div>
    </div>
  );
}

export default DeployGroup;
