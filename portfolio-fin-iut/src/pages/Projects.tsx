type Project = {
  title: string
  context: string
  stack: string[]
  highlights: string[]
  link?: {
    href: string
    label: string
  }
}

const projects: Project[] = [
  {
    title: 'Classification de donnees avec KNN',
    context: 'Projet academique orienté algorithmique et visualisation.',
    stack: ['Java', 'JavaFX', 'MVC'],
    highlights: [
      'Implementation d un algorithme KNN pour classifier des nouvelles donnees.',
      'Interface graphique JavaFX pour rendre les resultats lisibles.',
      'Architecture MVC pour separer logique metier et presentation.',
    ],
  },
  {
    title: 'Clicker Bad UI (UX experimentale)',
    context: 'Projet front centré sur l interaction et la perception utilisateur.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Realisation d un clicker classique avec compteur de progression.',
      'Version Bad UI volontairement perturbante (elements qui bougent, textes instables).',
      'Travail sur les limites de l ergonomie et les impacts sur l utilisateur.',
    ],
    link: {
      href: '../video.html',
      label: 'Voir la video du projet',
    },
  },
  {
    title: 'Application de messagerie en ligne',
    context: 'Projet plus complet avec back-end, base de donnees et moderation.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Java', 'PostgreSQL'],
    highlights: [
      'Gestion de comptes et authentification.',
      'Creation de fils d actualite et envoi de messages.',
      'Mise en place de regles de moderation et de persistance en base de donnees.',
    ],
  },
]

const experiences = [
  {
    period: 'Stage de 2e annee - 2025',
    role: 'Developpeur full-stack - Startup Caelus',
    details:
      'Realisation d\'une application interne pour gérer une base de donnees alimentée par plusieurs éléments de leur application principale.',
    stack: ['Node.js', 'Express.js', 'React', 'Next.js'],
    result: 'Couverture de tests back-end: 97%',
  },
  {
    period: 'Aout 2024',
    role: 'Hote de caisse - Supermarche Match',
    details: 'Accueil client, encaissement, conseil et accompagnement des nouveaux arrivants.',
    stack: [],
  },
  {
    period: '2023-2024',
    role: 'Vice-president du BDE - IUT de Lille',
    details: 'Organisation d\'evenements, communication et coordination d\'equipes.',
    stack: [],
  },
]

export function Projects() {
  return (
    <section id="projets" className="projects-page">
      <header className="projects-page__hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Projets realises</h1>
        <p className="intro-text">
          Cette page regroupe des projets representatifs de mon parcours: algorithmique,
          front-end et applications web plus completes. L objectif est de montrer les
          problemes abordes, les choix techniques et les competences mobilisees.
        </p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h2>{project.title}</h2>
            <p className="project-card__context">{project.context}</p>

            <ul className="project-card__highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="project-card__stack" aria-label="Technologies utilisees">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            {project.link ? (
              <a className="project-card__link" href={project.link.href} target="_blank" rel="noreferrer">
                {project.link.label}
              </a>
            ) : null}
          </article>
        ))}
      </div>

      <section className="projects-experience" aria-labelledby="experience-title">
        <h2 id="experience-title">Experiences professionnelles</h2>
        <p>
          Cette sous-section complete les projets avec du contexte terrain:
          environnement de travail, impact concret et niveau de responsabilite.
        </p>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article key={`${experience.period}-${experience.role}`} className="experience-item">
              <p className="experience-item__period">{experience.period}</p>
              <h3>{experience.role}</h3>
              <p>{experience.details}</p>
              {experience.stack.length > 0 ? (
                <div className="experience-item__stack" aria-label="Technologies utilisees">
                  {experience.stack.map((tech) => (
                    <span key={`${experience.role}-${tech}`}>{tech}</span>
                  ))}
                </div>
              ) : null}
              {'result' in experience && experience.result ? (
                <p className="experience-item__result">{experience.result}</p>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
