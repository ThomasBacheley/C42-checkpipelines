import axios from "axios";

/**
 * get Deployement group name
 * @param {int} groupid
 * @returns {string} groupname
 */
function getDeployGroupName(groupid) {
  return axios
    .get(
      "https://git.code42.io/api/v4/groups/" +
        groupid +
        "/projects?access_token=" +
        import.meta.env.VITE_GITLAB_ACCESS_TOKEN
    )
    .then((resp) => {
        return resp.data[0].name
    })
    .catch((err) => {
      console.error(err);
    });
}

export { getDeployGroupName };
