
import DeployListCard from "./DeployListCard";

/**
 * Display a 'Deploy group' (name and list of deployement)
 * @param {*} props 
 * @returns 
 */
function DeployGroup(props) {
  return (
    <div className="border rounded m-2">
      <h1>{props.groupname}</h1>
      <DeployListCard deployList={props.deployList}></DeployListCard>
    </div>
  );
}

export default DeployGroup;
