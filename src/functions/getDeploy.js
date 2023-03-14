import axios from "axios";
import configuration from "../configuration.json";
import _ from "lodash";

/**
 * Get Deployement from a project
 * 
 * @param {int} deployid id of the project
 * @return return the deploy
 */
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

/**
 * Get Array of Deployement from a array of project ID
 * 
 * @param {Array} deployIdArray array of projectId
 * @returns  return an array of deployement
 */
async function getDeployment(deployIdArray) {
  var response = await Promise.all(
    deployIdArray.map(async (deployid) => {
      try {
        const resp = await axios.get(
          `${configuration.git_url}/projects/${deployid}?access_token=${
            import.meta.env.VITE_GITLAB_ACCESS_TOKEN
          }`
        );
        const deploy = {
          id: resp.data.id,
          name: resp.data.name,
          avatar_url: resp.data.avatar_url,
          namespace: resp.data.namespace.name,
        };
        const pipeline = await getLatestPipeline(deployid);
        deploy.latestpipeline = pipeline;
        return deploy;
      } catch (err) {
        console.error(err);
        return null;
      }
    })
  );
  response = response.filter(Boolean);
  //on groupe par namespace
  response = _.groupBy(response, "namespace");
  //on creer un tableau (car la cetait un objet bizare)
  response = _.values(response);

  //on creer un tableau temporaire puis on lui ajoute les items adéquat
  let tempArray = [];
  await response.map((item) => {
    tempArray.push({
      groupname: item[0].namespace,
      deployList: item,
    });
  });

  return tempArray.filter(Boolean);
}

/**
 * Get 'Deployement Group' from a group id
 * 
 * @param {int} groupid id of the group
 * @returns return an object 'Deployement Group' who contains informations about deployements in the group
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
 * Get 'Deployement Group' from a group id for Option
 * 
 * @param {int} groupid id of the group
 * @returns return an object 'Deployement Group' who contains informations about deployements in the group for option
 */
function getDeployListForOption(groupid) {
  return axios
    .get(
      `${configuration.git_url}/groups/${groupid}/projects?access_token=${
        import.meta.env.VITE_GITLAB_ACCESS_TOKEN
      }`
    )
    .then((resp) => {
      var deploylist = {
        label: resp.data[0].namespace.name,
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
 * Get the Latest pipeline from a project by the projectid
 * 
 * @param {int} projectid 
 * @returns return a 'pipeline' object
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

/**
 * Get all deployement from a array of deploy group ID
 * 
 * @param {Array} deployGroupArrayId 
 * @returns return an array of all deployement
 */
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
  getDeployListForOption,
  getLatestPipeline,
  getAllDeployFromDeployGroups,
};
