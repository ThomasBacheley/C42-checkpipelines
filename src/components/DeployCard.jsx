import DeployIMG from "./DeployIMG";
/**
 * render a 'deploy card' to display information about 1 deploy
 * @param {*} props 
 * @returns 
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
        {/* <p className="card-text">{props.deploy.description}</p> */}
        <div className="progress">
          <div
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="100"
            style={{ width: "100%" }}
            className={progressClass}
          >
            <a target={"_blank"} href={props.deploy.latestpipeline?.web_url}>
              #{props.deploy.latestpipeline?.ref} (
              {props.deploy.latestpipeline?.id})
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeployCard;
