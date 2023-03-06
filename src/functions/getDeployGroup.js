import axios from "axios";

function getDeployGroup(groupid) {
  axios
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
}

export default getDeployGroup;
