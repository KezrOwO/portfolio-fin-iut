import meImg from '../assets/me.jpg'


export function Home() {
    return (
        <section id="home">
            <div className='shortPresentation'>
                <img src={meImg} className='mePicture' width="150" height="200" alt="Léo Gengembre" />
                <h1>Léo Gengembre - Développeur full-stack</h1>
                <p>Étudiant en BUT Informatique, passionné par le développement d'applications web, ainsi que par le gameplay et les systèmes de jeu</p>
            </div>
            <div className='homePresentation'>
                <h1>Bienvenue sur mon Portfolio d'étudiant </h1>
                <p>Je suis étudiant en BUT Informatique en 3ème année à l'IUT de Lille dans la réalisation, conception, développements et validation d'applications.
                    Je suis passionné par le développement d'applications web, ainsi que par le gameplay et les systèmes de jeu.
                    Je suis à la recherche d'un stage de 14 à 18 semaiens  partir de mai 2026, n'hésitez pas à consulter mon CV ou à me contacter pour toute opportunité ou collaboration !
                </p>
            </div>
        </section>
    )
}