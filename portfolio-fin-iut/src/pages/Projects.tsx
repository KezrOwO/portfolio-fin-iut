import badUiVideo from '../assets/bad_ui.mkv'

type Project = {
  title: string
  context: string
  stack: string[]
  highlights: string[]
  badge?: string
  link?: {
    href: string
    label: string
  }
}

const projects: Project[] = [
  {
    title: 'SAE501 - Système de réservation en ligne',
    badge: '3e année',
    context: 'Projet de 3e année: application type Doctolib avec calendrier et gestion de rendez-vous.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JSP', 'H2', 'Maven'],
    highlights: [
      `Développement d'un calendrier interactif avec disponibilités, gestion des créneaux et réservations utilisateur.`,
      `Mise en place de l'authentification et des rôles (utilisateur / administrateur) avec Spring Security.`,
      `Conception d'une application configurable selon le type d'établissement (piscine, cabinet médical, etc.) et API REST associée.`,
    ],
  },
  {
    title: `Émulateur d'architecture RISC-V`,
    badge: '3e année',
    context: 'Projet de 3e année orienté architecture machine, décodage d instructions et exécution bas niveau.',
    stack: ['C++', 'RISC-V', 'CLI', 'Debugger'],
    highlights: [
      `Implémentation d'un pipeline complet decode -> execute avec support de nombreuses instructions RISC-V.`,
      'Gestion mémoire avec vérification des accès, MMIO simulé (stdin/stdout/stderr) et semihosting.',
      `Ajout d'un mode pas à pas avec commandes de debug, désassemblage et détection de boucle infinie.`,
    ],
  },
  {
    title: 'Classification de données avec KNN',
    context: 'Projet académique orienté algorithmique et visualisation.',
    stack: ['Java', 'JavaFX', 'MVC'],
    highlights: [
      `Implémentation d'un algorithme KNN pour classifier de nouvelles données.`,
      'Interface graphique JavaFX pour rendre les résultats lisibles.',
      'Architecture MVC pour séparer logique métier et présentation.',
    ],
  },
  {
    title: 'Clicker Bad UI (UX expérimentale)',
    context: `Projet front centré sur l'interaction et la perception utilisateur.`,
    stack: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      `Réalisation d'un clicker classique avec compteur de progression.`,
      'Version Bad UI volontairement perturbante (éléments qui bougent, textes instables).',
      `Travail sur les limites de l'ergonomie et les impacts sur l'utilisateur.`,
    ],
    link: {
      href: badUiVideo,
      label: 'Voir la vidéo du projet',
    },
  },
  {
    title: 'Application de messagerie en ligne',
    context: 'Projet plus complet avec back-end, base de données et modération.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Java', 'PostgreSQL'],
    highlights: [
      'Gestion de comptes et authentification.',
      `Création de fils d'actualité et envoi de messages.`,
      'Mise en place de règles de modération et de persistance en base de données.',
    ],
  },
]

const experiences = [
  {
    period: 'Stage de 2e année - 2025',
    role: 'Développeur full-stack - Startup Caelus',
    details:
      `Réalisation d'une application interne pour gérer une base de données alimentée par plusieurs éléments de leur application principale.`,
    stack: ['Node.js', 'Express.js', 'React', 'Next.js'],
    result: 'Couverture de tests back-end: 97%',
  },
  {
    period: 'Août 2024',
    role: 'Hôte de caisse - Supermarché Match',
    details: 'Accueil client, encaissement, conseil et accompagnement des nouveaux arrivants.',
    stack: [],
  },
  {
    period: '2023-2024',
    role: 'Vice-président du BDE - IUT de Lille',
    details: `Organisation d'événements, communication et coordination d'équipes.`,
    stack: [],
  },
]

export function Projects() {
  return (
    <section id="projets" className="projects-page">
      <header className="projects-page__hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Projets réalisés</h1>
        <p className="intro-text">
          Cette page regroupe des projets représentatifs de mon parcours: algorithmique,
          front-end et applications web plus complètes. L'objectif est de montrer les
          problèmes abordés, les choix techniques et les compétences mobilisées.
        </p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            {project.badge ? <p className="project-card__badge">{project.badge}</p> : null}
            <h2>{project.title}</h2>
            <p className="project-card__context">{project.context}</p>

            <ul className="project-card__highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="project-card__stack" aria-label="Technologies utilisées">
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
        <h2 id="experience-title">Expériences professionnelles</h2>
        <p>
          Cette sous-section complète les projets avec du contexte terrain:
          environnement de travail, impact concret et niveau de responsabilité.
        </p>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article key={`${experience.period}-${experience.role}`} className="experience-item">
              <p className="experience-item__period">{experience.period}</p>
              <h3>{experience.role}</h3>
              <p>{experience.details}</p>
              {experience.stack.length > 0 ? (
                <div className="experience-item__stack" aria-label="Technologies utilisées">
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
