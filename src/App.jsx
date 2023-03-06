import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import DeployGroup from "./components/DeployGroup";

function App() {
  var deployCotro = {
    name: "Cotrolia",
    deployList: [
      {
        id: 192,
        avatar_url:
          "https://git.code42.io/uploads/-/system/project/avatar/192/CloudOrbis_Favicon.png",
        name: "Deploiement COTROLIA",
        description:
          "Dépôt intégrant l'ensemble des scripts / fichiers pour la mise à jour de l'environnement COTROLIA !",
        latestpipeline: {
          id: 11664,
          web_url: "https://yweelon.fr",
        },
      },
      {
        id: 191,
        avatar_url: null,
        name: "Migration",
        description: "Database migration scripts",
        latestpipeline: {
          id: 37,
          web_url: "https://yweelon.fr",
        },
      },
      {
        id: 161,
        avatar_url:
          "https://git.code42.io/uploads/-/system/project/avatar/161/themes.png",
        name: "Thème Code42",
        description: "Thème code42 basé sur le thème eldy",
        latestpipeline: {
          id: 11484,
          web_url: "https://yweelon.fr",
        },
      },
      {
        id: 154,
        avatar_url:
          "https://git.code42.io/uploads/-/system/project/avatar/154/Icone_repturn.png",
        name: "Frontend",
        description: "",
        latestpipeline: {
          id: 37,
          web_url: "https://yweelon.fr",
        },
      },
      {
        id: 123,
        avatar_url:
          "https://git.code42.io/uploads/-/system/project/avatar/123/folder.png",
        name: "Documentation",
        description:
          "Dépot contenant des documentations du projet COTROLIA / REPTURN",
        latestpipeline: {
          id: 3553,
          web_url: "https://yweelon.fr",
        },
      },
    ],
  };

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
