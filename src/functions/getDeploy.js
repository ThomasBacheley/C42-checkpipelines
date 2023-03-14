import axios from "axios";
import configuration from "../configuration.json";

function getDeploy(deployid) {
  return axios
    .get(
      `${configuration.git_url}/projects/${deployid}?access_token=${
        import.meta.env.VITE_GITLAB_ACCESS_TOKEN
      }`
    )
    .then((resp) => {
      var deploy = {
        id: resp.data.id,
        name: resp.data.name,
        avatar_url: resp.data.avatar_url,
      };

      getLatestPipeline(deployid).then((pipeline) => {
        deploy.latestpipeline = pipeline;
      });

      return deploy;
    })
    .catch((err) => {
      console.error(err);
    });
}

async function getDeployment(deployIdArray) {
  const response = await Promise.all(deployIdArray.map(async (deployid) => {
    try {
      const resp = await axios.get(`${configuration.git_url}/projects/${deployid}?access_token=${import.meta.env.VITE_GITLAB_ACCESS_TOKEN}`);
      const deploy = {
        id: resp.data.id,
        name: resp.data.name,
        avatar_url: resp.data.avatar_url,
      };
      const pipeline = await getLatestPipeline(deployid);
      deploy.latestpipeline = pipeline;
      return deploy;
    } catch (err) {
      console.error(err);
      return null;
    }
  }));
  return response.filter(Boolean);
}

/* async function getDeployement(deployIdarray) {
  var response = [];
  deployIdarray.map(async (deployid) => {
    var t = await axios
      .get(
        `${configuration.git_url}/projects/${deployid}?access_token=${
          import.meta.env.VITE_GITLAB_ACCESS_TOKEN
        }`
      )
      .then((resp) => {
        var deploy = {
          id: resp.data.id,
          name: resp.data.name,
          avatar_url: resp.data.avatar_url,
        };

        getLatestPipeline(deployid).then((pipeline) => {
          deploy.latestpipeline = pipeline;
        });

        return deploy;
      })
      .catch((err) => {
        console.error(err);
      });

    response.push(t);
  });
  return response;
} */
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
      var deploygroup = {
        groupname: resp.data[0].namespace.name,
        deployList: [],
      };

      resp.data.forEach((data) => {
        getLatestPipeline(data.id).then((pipeline) => {
          var deploy = {
            id: data.id,
            name: data.name,
            avatar_url: data.avatar_url,
            description: data.description,
            latestpipeline: pipeline,
          };

          deploygroup.deployList.push(deploy);
        });
      });

      return deploygroup;
    })
    .catch((err) => {
      console.error(err);
    });
}

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

async function getAllDeployFromDeployGroups(deployGroupArrayId) {
  var response = [];
  for (const deploygroupId of deployGroupArrayId) {
    let t = await getDeployGroup(deploygroupId);
    response.push(t);
  }
  return Promise.all(response);
}

export {
  getDeploy,
  getDeployment,
  getDeployGroup,
  getDeployList,
  getLatestPipeline,
  getAllDeployFromDeployGroups,
};
