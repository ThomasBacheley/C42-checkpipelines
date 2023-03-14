# Documentation Utilisateur

Cette documentation à pour but d'aider et de guider l'utilisateur de l'application dans son utilisation.
##<span style='background-color:#ed6b00;border-radius:5px;padding: 5px;margin-right:5px;'></span>Home
De base , l'application n'a pas besoin de manipulation particulière.

au chargement on vient lire le contenu du fichier `configuration.json` où on retrouve le paramètre `groups` qui permet ici de spécifié les groupes de projet à afficher.
Le plus important ici est le `groupid` qui doit correspondre à l'id du group où se trouve le projet

une barre de selection est disponible pour afficher les projets que l'on veux voir.

##<span style='background-color:#ed6b00;border-radius:5px;padding: 5px;margin-right:5px;'></span>Comportement

L'idée ici est d'allez chercher via l'api gitlab toutes les informations que l'on souhaite d'un projet et d'un groupe de projet.
En récupérant l'ID du projet, on peut récupérer d'autre information comme les pipelines ou autre (ici on ne récupère que la dernière pipeline)

##<span style='background-color:#ed6b00;border-radius:5px;padding: 5px;margin-right:5px;'></span> /configuration

Dans cette page, on peut configurer le fichier `configuration.json` , lire les différents `.md`
