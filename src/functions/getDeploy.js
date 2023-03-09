import axios from "axios";
import getLatestPipeline from "./getLatestPipeline";
import configuration from "../configuration.json";

function getDeploy(deployid) {
  return axios
    .get(
      `${configuration.git_url}/projects/${deployid}?access_token=${
        import.meta.env.VITE_GITLAB_ACCESS_TOKEN
      }`
    )
    .then((resp) => {
      var deploy = {
        id: resp.data.id,
        name: resp.data.name,
        avatar_url: resp.data.avatar_url,
      };

      getLatestPipeline(deployid).then((pipeline) => {
        deploy.latestpipeline = pipeline;
      });

      return deploy;
    })
    .catch((err) => {
      console.error(err);
    });
}

export { getDeploy };
