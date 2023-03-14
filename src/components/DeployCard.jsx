import DeployIMG from "./DeployIMG";
import LatestPipeline from "./LatestPipeline"

/**
 * render a 'deploy card' to display information about 1 deploy
 */
function DeployCard(props) {
  let progressClass =
    "progress-bar progress-bar-striped " + props.deploy.latestpipeline?.status;

  props.deploy.latestpipeline?.status == "running"
    ? (progressClass += " progress-bar-animated")
    : (progressClass += "");

  var img = '';

  props.deploy.avatar_url ? img = <img className="card-img-top" src={props.deploy.avatar_url} alt="" /> : img = <DeployIMG className="card-img-top" deployname={props.deploy.name}/>;

  return (
    <div className="deploycard card p-2 m-2">
      {img}
      <div className="card-body">
        <h5 className="card-title">{props.deploy.name}</h5>
        <LatestPipeline latestpipeline={props.deploy.latestpipeline}/>
      </div>
    </div>
  );
}

export default DeployCard;
