
import DeployListCard from "./DeployListCard";

function DeployGroup(props) {
  return (
    <div className="border rounded m-2">
      <h1>{props.groupname}</h1>
      <DeployListCard deployList={props.deployList}></DeployListCard>
    </div>
  );
}

export default DeployGroup;
