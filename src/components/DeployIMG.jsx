import "../DeployIMG.css";

/**
 * Display a default image for deployement
 */
function DeployIMG(props) {
  return (
    <div
      className="defaultimg"
      itemProp="image"
    >
        {props.deployname.charAt(0)}
    </div>
  );
}

export default DeployIMG;
