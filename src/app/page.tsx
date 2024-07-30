'use client'

import Link from "next/link";



export default function Home() {



  return (
    <main className="hero min-h-screen bg-primary">
		<div className="hero-content text-center">
			<div className="max-w-md">
				<h1 className="text-5xl font-bold">Mathieu Giard</h1>
				<h2 className="py-3">Développeur Junior</h2>
				<p className="pb-4">Bonjour, je m'appelles Mathieu Giard et je suis un développeur qui a reçu le diplôme d'études collégiales (DEC) dans le programme de développement d'applications. J'ai conçu ce portfolio pour me permettre de mettre en valeur mes capacités et de montrer les projets de programmation dont je suis fier. </p>
				<p><Link  href="portfolio" className="btn btn-secondary">Aller au Portfolio</Link></p>
				<p>
					<Link className="btn btn-info mt-5" href="/Mathieu_GiardCV.pdf">Visionner le Curriculum Vitae (CV)</Link>
				</p>
			</div>
		</div>

    </main>
  );
}
