import axios from "axios";
import getLatestPipeline from "./getLatestPipeline";
import configuration from "../configuration.json";
/**
 * get all Deployement from a groupip
 * @param {int} groupid
 * @returns {array} deploygroup
 */
function getDeployGroup(groupid) {
  return axios
    .get(
      `${configuration.git_url}/groups/${groupid}/projects?access_token=${
        import.meta.env.VITE_GITLAB_ACCESS_TOKEN
      }`
    )
    .then((resp) => {
      var deploygroup = [];

      resp.data.forEach((data) => {
        getLatestPipeline(data.id).then((pipeline) => {
          var deploy = {
            id: data.id,
            name: data.name,
            avatar_url: data.avatar_url,
            description: data.description,
            latestpipeline: pipeline,
          };

          deploygroup.push(deploy);
        });
      });

      return deploygroup;
    })
    .catch((err) => {
      console.error(err);
    });
}

export { getDeployGroup };
