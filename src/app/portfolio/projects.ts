
import Project from "./project";
import { technology1, technology2, technology3, technology4, technology5, technology6, technology7, technology8, technology9, technology10, technology11, technology12, technology13,technology14, technology15, technology16, technology17, technology18 } from "./Technologies";

export const project1 = new Project(1, "GriffinPiece", "Projet d'école", "Un site de streaming inspiré des titans commerciales comme Crunchyroll, Netflix Prime Video etc... Les utilisateurs, peuvent se créer un compte, se connecter, laisser un commentaire sur l'épisode et le mettre dans ses favoris. De plus, pour éviter le moment où l'utilisateur oublie ce qu'il avait regardé auparavant, il y a une fonctionnalité d'historique qui montre les épisodes qu'il avait regardé", "GriffinPieceLogo.jpg",
    [technology1, technology3, technology4, technology8, technology14, technology15, technology12  ]
);

export const project2 = new Project(2, "Among Them", "Projet d'école", "Un jeu de rencontre prenant inspiration du jeu populaire Club Penguin: L'utilisateur peut se créer un compte, se connecter, modifier l'apparence de son avatar, communiquer avec les autres joeurs et jouer aux mini-jeux qui sont présents dans le terrain de jeu", "AmongThemIcon.png",
    [technology1, technology3, technology4, technology6, technology16]
);

export const project3 = new Project(3, "Outil de conception de programmes d'études", "Stage", "Cet un outil conçu à l'aide d'un autre étudiant et d'un professeur durant mon stage. Cela permet aux conseiller(ère)s pédagogiques de créer des programmes d'études de manière efficace, tout en facilitant le processus. De plus, lorsque l'information du programme a été crée ils peuvent en un clic les transféré dans un document Word qu'ils peuvent ensuite imprimé à l'aide de la librairie OpenXML de C#", "MaisonneuveLogo.png",
    [technology17, technology11, technology3, technology1, technology4]
);

export const project4 = new Project(4, "Text Invaders", "Projet de certification", "Un jeu conçu avec C++ et la librairie Curses, qui permet de dessiner dans le terminal tout en pouvant le bouger avec un bouton, qui prend inspiration du fameux jeu rétro Space Invaders.", "TextInvadersLogo.png",
    [technology10]
);

export const project5 = new Project(5, "Blackjack",  "Projet de certification","Comme le nom du projet le décrit, c'est un jeu de blackjack conçu directement sur le terminal, les cartes du dealer sont pigés de façon aléatoire en fonction des règles officielles du Blackjack.", "BlackJackLogo.png",
    [technology10]
);

export const project6 = new Project(6, "Stationnement Intelligent", "Projet d'école", "Une petite maquette d'entrée d'un stationnement intelligent utilisant la technologie des Arduino. Le stationnement intelligent consiste à scanner les plaques des automobilistes et regarde dans sa base de donnée pour voir si cette personne est accepté sur les lieux. De plus, grâce avec la caméra, on peut faire monter ou descendre la barre d'entrée avec les gestes avec la main.","StationnementIntelligentLogo.png",
    [technology9, technology11, technology18]
);

export const project7 = new Project(7, "Mon Portfolio", "Projet personnel", "Un portfolio qui permet de mettre en valeur mes compétences et de montrer à quel point je suis capable d'apprendre de nouvelles choses ou d'utiliser des technologies que je ne suis pas encore familier, par exemple: Next.js et Tailwindcss (avec daisyui)", "PortfolioLogo.png",
    [technology1, technology3, technology5, technology7]
);

export const projectArray: Project[] = [project1, project2, project3, project4, project5, project6, project7];