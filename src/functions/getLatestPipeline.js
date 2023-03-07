import axios from "axios";

async function getLatestPipeline(projectid) {
  return new Promise(async (resolve, reject) => {
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
        resolve(pipeline);
      });
  });
}
export default getLatestPipeline;
