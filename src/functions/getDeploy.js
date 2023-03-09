import axios from "axios";
import getLatestPipeline from "./getLatestPipeline";


function getDeploy(deployid) {
  return axios
    .get(
      "https://git.code42.io/api/v4/projects/" +
        deployid +
        "?access_token=" +
        import.meta.env.VITE_GITLAB_ACCESS_TOKEN
    )
    .then((resp) => {
      var deploy = {
        id:resp.data.id,
        name:resp.data.name,
        avatar_url:resp.data.avatar_url,
      }

      getLatestPipeline(deployid).then((pipeline)=>{
        deploy.latestpipeline = pipeline;
      })

      return deploy;
    })
    .catch((err) => {
      console.error(err);
    });
}

export { getDeploy };
