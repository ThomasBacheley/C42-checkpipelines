import axios from "axios";
import reduxdeploy, { addDeploy, init } from "../redux/Deployement";
import getLatestPipeline from "./getLatestPipeline";

/**
 *
 * @param {int} groupid
 * @returns
 */
function getDeployGroup(groupid) {
  axios
    .get(
      "https://git.code42.io/api/v4/groups/" +
        groupid +
        "/projects?access_token=" +
        import.meta.env.VITE_GITLAB_ACCESS_TOKEN
    )
    .then((resp) => {
      reduxdeploy.dispatch(init({ name: resp.data[0].name }));

      resp.data.forEach((data) => {

        var deploy = {
          id: data.id,
          avatar_url: data.avatar_url,
          name: data.name,
          description: data.description,
          latestpipeline: {
            id: 11664,
            web_url: "https://yweelon.fr",
            status: "warning",
          }
        };

        reduxdeploy.dispatch(addDeploy({deploy:deploy}));
      });


      return [];
    })
    .catch((err) => {
      console.error(err);
    });

  var temp = [];

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
