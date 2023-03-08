import "../DeployIMG.css";

function DeployIMG(props) {
  return (
    <div
      class="gl-avatar gl-avatar-identicon gl-avatar-identicon-bg1"
      itemprop="image"
    >
        {props.deployname.charAt(0)}
    </div>
  );
}

export default DeployIMG;
