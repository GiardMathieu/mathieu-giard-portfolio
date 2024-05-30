
import Project from "./project";

export const project1 = new Project(1, "GriffinPiece", "Un site de streaming inspiré des titans commerciales comme Crunchyroll, Netflix Prime Video etc... Les utilisateurs, peuvent se créer un compte, se connecter, laisser un commentaire sur l'épisode et le mettre dans ses favoris. De plus, pour éviter le moment où l'utilisateur oublie ce qu'il avait regardé auparavant, il y a une fonctionnalité d'historique qui montre les épisodes qu'il avait regardé", "bruh");

export const project2 = new Project(2, "Among Them", "Un jeu de rencontre prenant inspiration du jeu populaire Club Penguin: L'utilisateur peut se créer un compte, se connecter, modifier l'apparence de son avatar, communiquer avec les autres joeurs et jouer aux mini-jeux qui sont présents dans le terrain de jeu", "bruh");

export const project3 = new Project(3, "Outil de conception de programmes d'études du Collège Maisonneuve", "Cet un outil conçu à l'aide d'un autre étudiant et d'un professeur durant mon stage. Cela permet aux conseiller(ère)s pédagogiques de créer des programmes d'études de manière efficace, tout en facilitant le processus. De plus, lorsque l'information du programme a été crée ils peuvent en un clic les transféré dans un document Word qu'ils peuvent ensuite imprimé à l'aide de la librairie OpenXML de C#", "bruh");

export const project4 = new Project(4, "Text Invaders", "Un jeu conçu avec C++ et la librairie Curses, qui permet de dessiner dans le terminal tout en pouvant le bouger avec un bouton, qui prend inspiration du fameux jeu rétro Space Invaders", "bruh");

export const project5 = new Project(5, "Blackjack", "Comme le nom du projet le décrit, c'est un jeu de blackjack conçu directement sur le terminal, les cartes du dealer sont pigés de façon aléatoire en fonction des règles officielles du Blackjack.", "bruh");

export const project6 = new Project(6, "Stationnement Intelligent", "Une petite maquette d'entrée d'un stationnement intelligent utilisant la technologie des Arduino. Le stationnement intelligent consiste à scanner les plaques des automobilistes et regarde dans sa base de donnée pour voir si cette personne est accepté sur les lieux. De plus, grâce avec la caméra, on peut faire monter ou descendre la barre d'entrée avec les gestes avec la main.","bruh");


export const projectArray: Project[] = [project1, project2, project3, project4, project5, project6];