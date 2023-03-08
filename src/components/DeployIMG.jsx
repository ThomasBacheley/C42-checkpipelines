import "../DeployIMG.css";

function DeployIMG(props) {
  return (
    <div
      className="gl-avatar gl-avatar-identicon gl-avatar-identicon-bg1"
      itemProp="image"
    >
        {props.deployname.charAt(0)}
    </div>
  );
}

export default DeployIMG;
