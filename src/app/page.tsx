import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col place-items-center">
		<div>
			<div className="grid 2-32 rounded place-content-center">
				Mathieu Giard
			</div>
			<div className="grid 2-32 rounded">
				Développeur d'applications et sites Web
			</div>
		</div>
		<div className="py-2 place-items-center">
			Bonjour, je m'appelle Mathieu Giard et je suis un développeur d'applications/site web en recherche d'emploi. J'aime beaucoup coder parce que j'aime me donner des défis mentales à surmonter et de voir les résultats. J'apprécie aussi le travail en équipe qui a de la bonne cohésion et de la bonne communication permettant la complétion d'un projet.
			<iframe src="/Mathieu_GiardCV.pdf" className="place-items-center w-full h-screen py-6"/>
		</div>

    </main>
  );
}
