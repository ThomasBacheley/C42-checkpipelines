import axios from "axios";

/**
 * Get the latest pipeline of a project
 * @param {int} projectid the projectid
 * @returns {object} Gitpipeline
 */
function getLatestPipeline(projectid) {
  return axios
    .get(
      "https://git.code42.io/api/v4/projects/" +
        projectid +
        "/pipelines?access_token=" +
        import.meta.env.VITE_GITLAB_ACCESS_TOKEN
    )
    .then((resp) => {
      var Gitpipeline = {
        id: 0,
        ref: "ref",
        status: undefined,
        web_url: "https://google.com",
      };

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
