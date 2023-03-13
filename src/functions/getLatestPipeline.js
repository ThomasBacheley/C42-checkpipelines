import axios from "axios";
import configuration from "../configuration.json";

/**
 * Get the latest pipeline of a project
 * @param {int} projectid the projectid
 * @returns {object} Gitpipeline
 */
function getLatestPipeline(projectid) {
  return axios
    .get(
      `${configuration.git_url}/projects/${projectid}/pipelines?access_token=${
        import.meta.env.VITE_GITLAB_ACCESS_TOKEN
      }`
    )
    .then((resp) => {
      var Gitpipeline = null;

      if (resp.data[0]) {
        Gitpipeline = {
          id: resp.data[0].id,
          ref: resp.data[0].ref,
          status: resp.data[0].status,
          web_url: resp.data[0].web_url,
        };
      }

      return Gitpipeline;
    });
}
export default getLatestPipeline;
