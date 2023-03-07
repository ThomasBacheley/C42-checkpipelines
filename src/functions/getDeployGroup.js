import axios from "axios";
import getLatestPipeline from "./getLatestPipeline";

/**
 *
 * @param {int} groupid
 * @returns
 */
async function getDeployGroup(groupid) {
  var temp = await axios
    .get(
      "https://git.code42.io/api/v4/groups/" +
        groupid +
        "/projects?access_token=" +
        import.meta.env.VITE_GITLAB_ACCESS_TOKEN
    )
    .then((resp) => {
      var deploy = {
        name: "",
        deployList: [],
      };

      resp.data.forEach((data) => {
        deploy.name = data.namespace.name;
        let latestpipeline = getLatestPipeline(data.id).then((result)=>{latestpipeline=result});
        deploy.deployList.push({
          id: data.id,
          avatar_url: data.avatar_url,
          name: data.name,
          description: data.description,
          latestpipeline: latestpipeline,
        });
      });

      return deploy;
    })
    .catch((err) => {
      console.error(err);
    });

  return temp;
}

/**
 *
 * @param {array} groupid_array
 * @returns
 */
async function getDeployGroupArray(groupid_array) {
  var temparray = [];
  groupid_array.forEach(async (id) => {
    var temp = await axios
      .get(
        "https://git.code42.io/api/v4/groups/" +
          id +
          "/projects?access_token=" +
          import.meta.env.VITE_GITLAB_ACCESS_TOKEN
      )
      .then((resp) => {
        var deploy = {
          name: "",
          deployList: [],
        };

        resp.data.forEach((data) => {
          deploy.name = data.namespace.name;
          deploy.deployList.push({
            id: data.id,
            avatar_url: data.avatar_url,
            name: data.name,
            description: data.description,
            latestpipeline: {
              id: 11664,
              web_url: "https://yweelon.fr",
              status: "running",
            },
          });
        });

        return deploy;
      })
      .catch((err) => {
        console.error(err);
      });

    temparray.push(temp);
  });

  return temparray;
}

export { getDeployGroup, getDeployGroupArray };