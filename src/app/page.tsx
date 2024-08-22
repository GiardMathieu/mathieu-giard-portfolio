'use client'

import Link from "next/link";



export default function Home() {



  return (
    <main className="hero min-h-screen text-neutral">
		<div className="hero-content text-center bg-info">
			<div className="max-w-md">
				<h1 className="text-5xl font-bold">Mathieu Giard</h1>
				<p className="py-6 text-lg">Bonjour, je suis une personne qui a une passion profonde pour la technologie et dotée d'une curiosité qui me permet de rechercher le fonctionnement logicielle d'une application. De plus, je cherche toujours à approfondir mes connaissances. J'aime surmonter des défis et j'aimerais pouvoir devenir encore meilleur dans ce domaine.</p>
				<p><Link  href="portfolio" className="btn btn-primary-content mb-5">Aller au Portfolio</Link></p>
				<p>
					<Link className="link mt-5 text-neutral" href="/Mathieu_GiardCV.pdf">Visionner le Curriculum Vitae (CV)</Link>
				</p>
			</div>
		</div>

    </main>
  );
}
