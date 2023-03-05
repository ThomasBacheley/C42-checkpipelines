import DeployCard from "./DeployCard";

function DeployListCard(props) {
  return (
    <div className="d-inline-flex justify-content-around flex-wrap">
      {props.deployList.map((deploy) => (
        <DeployCard deploy={deploy}></DeployCard>
      ))}
    </div>
  );
}

export default DeployListCard;
