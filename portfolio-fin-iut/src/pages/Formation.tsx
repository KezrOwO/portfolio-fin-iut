type EducationItem = {
  period: string
  school: string
  degree: string
  description: string
  specialization?: string
}

const educationItems: EducationItem[] = [
  {
    period: '2023-2026',
    school: 'IUT de Lille',
    degree: 'BUT Informatique (3e année en cours)',
    specialization: 'Spécialité: Réalisation, conception et développement d\'applications',
    description: `Formation complète en développement full-stack, architecture logicielle et gestion de projet. 
    Projets académiques variés incluant applications web, algorithmique avancée et systèmes.`,
  },
  {
    period: '2026 (à venir)',
    school: 'Rubika - École supérieure d\'art et design numérique',
    degree: 'Cycle Master (Spécialisation jeu vidéo)',
    description: `Poursuite d'études en mastère spécialisé avec focus sur gameplay programming, 
    architecture jeu et production de contenu interactif.`,
  },
  {
    period: '2020-2023',
    school: 'Lycée de l\'Europe, Dunkerque',
    degree: 'Baccalauréat STI2D, spécialité Systèmes d\'Information et Numérique',
    description: `Formation technologique approfondie en informatique, électronique et systèmes. 
    Base solide pour la transition vers l'enseignement supérieur en informatique.`,
  },
]

export function Formation() {
  return (
    <section id="formation" className="formation-page">
      <header className="formation-page__hero">
        <p className="eyebrow">Parcours académique</p>
        <h1>Formation</h1>
        <p className="intro-text">
          Mon parcours s\'est construit progressivement autour de l\'informatique et du développement,
          avec une orientation croissante vers les systèmes interactifs et le jeu vidéo.
        </p>
      </header>

      <div className="formation-timeline">
        {educationItems.map((item, index) => (
          <article key={`${item.school}-${item.degree}`} className="formation-item">
            <div className="formation-item__marker" aria-hidden="true">
              <span>{index + 1}</span>
            </div>

            <div className="formation-item__content">
              <p className="formation-item__period">{item.period}</p>
              <h2>{item.degree}</h2>
              {item.specialization ? (
                <p className="formation-item__specialization">{item.specialization}</p>
              ) : null}
              <p className="formation-item__school">{item.school}</p>
              <p className="formation-item__description">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="formation-summary">
        <h2>Résumé des compétences développées</h2>
        <div className="formation-skills-grid">
          <div className="formation-skill-group">
            <h3>Techniques</h3>
            <ul>
              <li>Développement full-stack (web et backend)</li>
              <li>Architectures logicielles</li>
              <li>Algorithmique et optimisation</li>
              <li>Bases de données et persistance</li>
            </ul>
          </div>

          <div className="formation-skill-group">
            <h3>Méthodologie</h3>
            <ul>
              <li>Gestion de projet</li>
              <li>Git et versioning</li>
              <li>Tests et couverture</li>
              <li>Architecture d\'applications scalables</li>
            </ul>
          </div>

          <div className="formation-skill-group">
            <h3>Transversales</h3>
            <ul>
              <li>Communication et travail en équipe</li>
              <li>Autonomie et apprentissage continu</li>
              <li>Adaptation à de nouveaux défis</li>
              <li>Gestion d\'équipe (expérience BDE)</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  )
}
