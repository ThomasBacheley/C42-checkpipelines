import axios from "axios";
import configuration from "../configuration.json";
/**
 * get all Deployement info from a groupip
 * @param {int} groupid
 * @param {string} groupname
 * @returns {array} deploylist
 */
function getDeployList(groupid, groupname) {
  return axios
    .get(
      `${configuration.git_url}/groups/${groupid}/projects?access_token=${
        import.meta.env.VITE_GITLAB_ACCESS_TOKEN
      }`
    )
    .then((resp) => {
      var deploylist = {
        label: groupname,
        options: [],
      };

      resp.data.forEach((data) => {
        var deploy = {
          value: data.id,
          label: data.name,
        };

        deploylist.options.push(deploy);
      });

      return deploylist;
    })
    .catch((err) => {
      console.error(err);
    });
}

export { getDeployList };
