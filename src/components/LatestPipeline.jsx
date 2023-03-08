/**
 * render a 'pipeline'
 * @param {*} props
 */
function DeployCard(props) {
  
  if (props.latestpipeline != null) {
    let progressClass =
      "progress-bar progress-bar-striped " + props.latestpipeline.status;
    props.latestpipeline.status == "running"
      ? (progressClass += " progress-bar-animated")
      : (progressClass += "");

    return (
      <div className="progress">
        <div
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="100"
          style={{ width: "100%" }}
          className={progressClass}
        >
          <a target={"_blank"} href={props.latestpipeline.web_url}>
            #{props.latestpipeline.ref} ({props.latestpipeline.id})
          </a>
        </div>
      </div>
    );
  } else {
    return(
        <div>
            <p className="nopipeline"><i>Aucune Pipeline trouvée</i></p>
        </div>
    );
  }
}

export default DeployCard;
