import { useEffect, useMemo, useState } from 'react'

type SkillGroup = {
    title: string
    description: string
    items: Array<{
        label: string
        level: string
        value: number
    }>
}

type TechBadge = {
    label: string
    tone: string
    short: string
}

const skillGroups: SkillGroup[] = [
    {
        title: 'Développement',
        description: 'Technos que j’utilise pour concevoir des applis web et des systèmes plus techniques.',
        items: [
            { label: 'Java', level: 'Solide', value: 88 },
            { label: 'JavaScript / TypeScript', level: 'Solide', value: 84 },
            { label: 'React', level: 'Avancé', value: 82 },
            { label: 'Next.js', level: 'Bon niveau', value: 74 },
        ],
    },
    {
        title: 'Conception',
        description: 'Ce qui m’aide à structurer des projets maintenables et pertinents pour un contexte pro.',
        items: [
            { label: 'UML / Modélisation', level: 'Bon niveau', value: 76 },
            { label: 'Algorithmique', level: 'Bon niveau', value: 80 },
            { label: 'API REST / architecture', level: 'Bon niveau', value: 78 },
            { label: 'Git / GitHub', level: 'Solide', value: 86 },
        ],
    },
    {
        title: 'Environnement',
        description: 'Outils et méthodes qui accompagnent mon travail au quotidien.',
        items: [
            { label: 'Spring Boot', level: 'Bon niveau', value: 76 },
            { label: 'Node.js', level: 'Bon niveau', value: 74 },
            { label: 'SQL', level: 'Solide', value: 78 },
            { label: 'C# (contexte jeu vidéo)', level: 'En progression', value: 68 },
        ],
    },
]

const featuredTechs: TechBadge[] = [
    { label: 'Java', tone: 'tone-java', short: 'Jv' },
    { label: 'JavaScript', tone: 'tone-js', short: 'JS' },
    { label: 'TypeScript', tone: 'tone-ts', short: 'TS' },
    { label: 'React', tone: 'tone-react', short: 'R' },
    { label: 'Next.js', tone: 'tone-next', short: 'Nx' },
    { label: 'Node.js', tone: 'tone-node', short: 'Nd' },
    { label: 'Spring Boot', tone: 'tone-spring', short: 'Sp' },
    { label: 'C#', tone: 'tone-csharp', short: 'C#' },
    { label: 'SQL', tone: 'tone-sql', short: 'SQL' },
    { label: 'HTML', tone: 'tone-html', short: 'HT' },
    { label: 'CSS', tone: 'tone-css', short: 'CS' },
    { label: 'Git', tone: 'tone-git', short: 'G' },
]

export function Presentation() {
    const [reducedMotion, setReducedMotion] = useState(false)

    useEffect(() => {
        const mediaQuery = globalThis.matchMedia('(prefers-reduced-motion: reduce)')

        const updatePreference = () => {
            setReducedMotion(mediaQuery.matches)
        }

        updatePreference()
        mediaQuery.addEventListener('change', updatePreference)

        return () => {
            mediaQuery.removeEventListener('change', updatePreference)
        }
    }, [])

    const marqueeTechs = useMemo(() => {
        return [...featuredTechs, ...featuredTechs]
    }, [])

    return (
        <section id="presentation" className="presentation-page">
            <div className="presentation-hero">
                <p className="eyebrow">À propos</p>
                <h1>Des hard skills lisibles, pas un carrousel décoratif</h1>
                <p className="intro-text">
                    Je suis étudiant en troisième année de BUT Informatique à l’IUT de Lille, avec un intérêt fort
                    pour le développement web, la conception de systèmes et le gameplay programming. Mon objectif
                    est de montrer clairement ce que je sais faire, sans surcharger la page.
                </p>
            </div>

            <div className="skills-marquee" aria-label="Technologies principales">
                <div className={`marquee-track ${reducedMotion ? 'is-static' : ''}`}>
                    {marqueeTechs.map((tech, index) => (
                        <div key={`${tech.label}-${index}`} className={`tech-pill ${tech.tone}`}>
                            <span className="tech-pill__mark">{tech.short}</span>
                            <span className="tech-pill__label">{tech.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="skills-grid">
                {skillGroups.map((group) => (
                    <article key={group.title} className="skill-card skill-card--expanded">
                        <h2>{group.title}</h2>
                        <p className="skill-card__description">{group.description}</p>
                        <ul className="skill-meter-list">
                            {group.items.map((item) => (
                                <li key={item.label} className="skill-meter-item">
                                    <div className="skill-meter-item__header">
                                        <span>{item.label}</span>
                                        <span>{item.level}</span>
                                    </div>
                                    <div className="skill-meter">
                                        <span style={{ width: `${item.value}%` }} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>

            <div className="presentation-summary">
                <div className="skill-card skill-card--summary">
                    <h2>Langues</h2>
                    <ul>
                        <li>Français - langue maternelle</li>
                        <li>Anglais - niveau B2</li>
                        <li>Allemand - niveau A2</li>
                    </ul>
                </div>

                <div className="skill-card skill-card--summary">
                    <h2>Soft Skills</h2>
                    <ul>
                        <li>Travail en équipe</li>
                        <li>Adaptabilité</li>
                        <li>Organisation</li>
                        <li>Autonomie</li>
                    </ul>
                </div>

                <div className="skill-card skill-card--summary">
                    <h2>Passions</h2>
                    <ul>
                        <li>Informatique</li>
                        <li>Jeux vidéo</li>
                        <li>Football</li>
                        <li>Musique</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
