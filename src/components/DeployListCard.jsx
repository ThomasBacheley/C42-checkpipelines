import DeployCard from "./DeployCard";

/**
 * Display a List of 'deploy card'
 * @param {*} props 
 * @returns 
 */
function DeployListCard(props) {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {props.deployList.map((deploy) => (
        <DeployCard key={deploy.id} deploy={deploy}></DeployCard>
      ))}
    </div>
  );
}

export default DeployListCard;
