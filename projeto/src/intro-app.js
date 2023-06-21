import "./intro.css"

function Intro() {
    const projects = [
        {link: "#", img: '../images/iconiconi.png', title:"NOTHING HERE, MAN", description:"Ops! Parece que esse projeto não saiu do VScode ainda."},
        {link: "#", img: '../images/iconiconi.png', title:"NOTHING HERE, MAN", description:"Ops! Parece que esse projeto não saiu do VScode ainda."},
        {link: "#", img: '../images/iconiconi.png', title:"NOTHING HERE, MAN", description:"Ops! Parece que esse projeto não saiu do VScode ainda."}
    ];
    const listProjects = projects.map(projects =>
        <div className="projects">
            <a href={ projects.link }>
                <img src={projects.img } />
                <h2>{projects.title}</h2> 
                <p>{projects.description}</p>
            </a>
        </div>
) ;
    return (
        <div className="intro-container">
            <nav>
                <ul>
                    <li>HOME</li>
                    <li><a>SOBRE MIM</a></li>
                    <li><a>PROJETOS</a></li>
                    <li><a>CONTATE-ME</a></li>
                </ul>
            </nav>
         <div className="aboutMe">
            <h1>SOBRE MIM</h1>
            <div className="aboutMe-container">
                <div id="photo"></div>
                <div className="textContainer">
                    <div id="aboutMe-text">
                        <p>Oi, sou eu, Danielle! Tenho 18 anos e sou de Belo Horizonte, Minas Gerais. Minha paixão pela programação nasceu quando eu era criança e sempre fui fascinada por computadores e jogos. Desde então, tenho me dedicado aos estudos, tanto por conta própria quanto com o auxílio do projeto Programadores do Amanhã. Meu objetivo é me tornar uma Desenvolvedora Full-stack Jr. e estou determinada a seguir em frente, adquirindo conhecimento e buscando oportunidades no mercado de trabalho.</p>
                    </div>
                    <div id='orangePhoto'></div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 456.53 115.51">
                        <defs>
                        <style>
                        </style>
                        </defs>
                        <g id="Camada_2" data-name="Camada 2">
                        <g id="HOME">
                        <polygon class="cls-1" points="454.93 57.76 410.53 2.01 409.24 3.62 1.25 3.62 1.25 111.89 409.24 111.89 410.53 113.51 454.93 57.76"/>
                        </g>
                        </g>
                </svg>
        </div>

        <div id="colorfulLine"></div>
        <h1>PROJETOS</h1>
            <div id="projects-container">
                {listProjects}
            </div>
            
        </div>
        
    )
    
};

export default Intro;