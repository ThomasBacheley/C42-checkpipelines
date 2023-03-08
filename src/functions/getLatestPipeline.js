import axios from "axios";
import reduxlatestpipeline, { add } from "../redux/LatestPipeline";

/**
 * Get the latest pipeline of a project
 * @param {int} projectid the projectid
 */
function getLatestPipeline(projectid) {
  axios
    .get(
      "https://git.code42.io/api/v4/projects/" +
        projectid +
        "/pipelines?access_token=" +
        import.meta.env.VITE_GITLAB_ACCESS_TOKEN
    )
    .then((resp) => {
      var pipeline = {
        id: resp.data[0].id,
        ref: resp.data[0].ref,
        status: resp.data[0].status,
        web_url: resp.data[0].web_url,
      };

      reduxlatestpipeline.dispatch(add({latestpipeline:pipeline}));

    });
}
export default getLatestPipeline;
