import "../DeployIMG.css";

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
