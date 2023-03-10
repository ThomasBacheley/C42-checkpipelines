import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import { getDeployment } from "../functions/getDeploy";

const asyncGetDeployment = async (array) => {
  const result = await getDeployment(array);
  return result;
};

/**
 * Button to Load Deployement
 */
function LoadingButton(props) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      console.log("loading");
      asyncGetDeployment(props.options).then(async (result) => {

        console.log(result);

        props.setDeployGroup(result);

        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="secondary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading…" : "Click to load"}
    </Button>
  );
}

export default LoadingButton;
