import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import DeployGroup from "./components/DeployGroup";
import getDeployGroup from "./functions/getDeployGroup";

function App() {
  var deployCotro = getDeployGroup(37);
  var deployFMM = {
    name: "FMM",
    deployList: [
      {
        id:247,
        avatar_url:null,
        name: "Documentation",
        description:
          "Dépôt contenant la documentation technique du projet FMM.",
        latestpipeline: {
          id: 0,
          web_url: "https://yweelon.fr",
        },
      },
      {
        id:215,
        avatar_url:"https://git.code42.io/uploads/-/system/project/avatar/215/CloudOrbis_Favicon.png",
        name: "Déploiement FMM",
        description:
          "Dépôt intégrant l'ensemble des scripts / fichiers pour la mise à jour de l'environnement FMM !",
        latestpipeline: {
          id: 11677,
          web_url: "https://yweelon.fr",
        },
      },
      {
        id:213,
        avatar_url:"https://git.code42.io/uploads/-/system/project/avatar/213/Capture_d_écran_2022-12-11_à_22.54.34.png",
        name: "Déploiement FMM",
        description:
          "Dépôt contenant le CRM Dolibarr FMM",
        latestpipeline: {
          id: 11677,
          web_url: "https://yweelon.fr",
        },
      },
      {
        id:212,
        avatar_url:"https://git.code42.io/uploads/-/system/project/avatar/212/logo-FMM-04WP.png",
        name: "FMM - Module",
        description:
          "Module DOLIBARR FMM dédié aux usages métiers du clients (conf, PDF, ...)",
        latestpipeline: {
          id: 11564,
          web_url: "https://yweelon.fr",
        },
      },
      {
        id:210,
        avatar_url:"https://git.code42.io/uploads/-/system/project/avatar/210/Capture_d_écran_2022-12-11_à_22.53.13.png",
        name: "Module suivi qualité",
        description:
          "Module DOLIABRR permettant de définir  sur des produits des critères bloquant OU non pour leurs commandes.",
        latestpipeline: {
          id: 11243,
          web_url: "https://yweelon.fr",
        },
      }
    ],
  };

  return (
    <div className="App">
      <h1>Check Pipelines</h1>
      <DeployGroup
        groupname={deployCotro.name}
        deployList={deployCotro.deployList}
      ></DeployGroup>
      <DeployGroup
        groupname={deployFMM.name}
        deployList={deployFMM.deployList}
      ></DeployGroup>
    </div>
  );
}

export default App;
