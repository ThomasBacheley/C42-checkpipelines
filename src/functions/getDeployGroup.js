import axios from "axios";
import getLatestPipeline from "./getLatestPipeline";

/**
 * get all Deployement from a groupip
 * @param {int} groupid
 * @returns {array} deploygroup
 */
function getDeployGroup(groupid) {
  return axios
    .get(
      "https://git.code42.io/api/v4/groups/" +
        groupid +
        "/projects?access_token=" +
        import.meta.env.VITE_GITLAB_ACCESS_TOKEN
    )
    .then((resp) => {
      var deploygroup = []

      resp.data.forEach((data) => {
        getLatestPipeline(data.id).then((pipeline) => {
          var deploy = {
            id: data.id,
            avatar_url: data.avatar_url,
            name: data.name,
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
