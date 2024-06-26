'use client'

import Link from "next/link";



export default function Home() {



  return (
    <main className="hero min-h-screen bg-primary">
		<div className="hero-content text-center">
			<div className="max-w-md">
				<h1 className="text-5xl font-bold">Mathieu Giard</h1>
				<p className="py-6">Développeur Junior</p>
				<p><Link  href="portfolio" className="btn btn-secondary">Aller au Portfolio</Link></p>
				<p>
					<a className="btn btn-info mt-5" href="Mathieu_GiardCV.pdf">Visionner le Curriculum Vitae (CV)</a>
				</p>
			</div>
		</div>

    </main>
  );
}
