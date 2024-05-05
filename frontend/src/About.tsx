

const About: React.FC<{language: string}> = ({language}) => {
    return (
        <div id="about" className="mt-28 mx-auto bg-gray-800 text-white p-8 rounded-xl w-11/12 text-left sm:ml-5 xl:ml-24 shadow-lg">
            <h1 className="font-bold text-7xl mb-8">
                <span className="text-yellow-400">{language==='en'?<span>About</span>:<span>À propos</span>}</span>
                <span className="text-green-700"> {language==='en'?<span>me</span>:<span>de moi</span>}</span>
            </h1>
            <div className="flex flex-col xl:flex-row md:flex-col sm:flex-col">
                <div className="text-xl p-4 rounded font-semibold">
                    <p>{language==='en' ? 
                    <p>I'm a Computer Science graduate from Champlain College with a passion for full-stack development. My journey into the world of technology started early on, shaped by the influence of both my parents who work in the tech industry.</p>
                    :
                    <p>Je suis un diplômé en informatique du College Champlain avec une passion pour le développement full-stack. Mon parcours dans le monde de la technologie a commencé très tôt, façonné par l'influence de mes deux parents qui travaillent dans l'industrie technologique.</p>
                    }</p>
                    <br/>
                    <p>{language==='en' ? 
                        <p>Originally from Sao Paulo, Brazil, my family immigrated to Canada in 2012 in pursuit of new opportunities. While I've been living alone since my family returned to Brazil in 2021, the experience has taught me resilience, independence, and the importance of adaptability.</p>
                        :
                        <p>Originaire de São Paulo, au Brésil, ma famille a immigré au Canada en 2012 à la recherche de nouvelles opportunités. Bien que je vive seul depuis le retour de ma famille au Brésil en 2021, cette expérience m'a appris la résilience, l'indépendance et l'importance de l'adaptabilité.</p>
                    }</p>
                    <br/>
                    <p>{language==='en' ? 
                        <p>Professionally, I excel in crafting innovative solutions and bringing ideas to life across the full software development lifecycle. My expertise spans both frontend and backend technologies, allowing me to create seamless user experiences and robust server-side functionalities.</p>
                        :
                        <p>Professionnellement, je suis excellent dans l'élaboration de solutions innovantes et dans la concrétisation d'idées tout au long du cycle de développement logiciel. Mon expertise couvre à la fois les technologies frontend et backend, me permettant de créer des expériences utilisateur fluides et des fonctionnalités côté serveur robustes.</p>
                    }</p>
                    <br/>
                    <p>{language==='en' ? 
                        <p>On the frontend, I leverage frameworks like React.js to build dynamic and responsive user interfaces. Meanwhile, my backend toolkit includes Flask, Java Spring Boot, and Next.js, which I use to develop scalable and efficient server-side applications.</p>
                        :
                        <p>Sur le frontend, j'utilise des frameworks comme React.js pour construire des interfaces utilisateur dynamiques et réactives. Pendant ce temps, ma boîte à outils backend inclut Flask, Java Spring Boot et Next.js, que j'utilise pour développer des applications côté serveur évolutives et efficaces.</p>
                    }</p>
                    <br/>
                    <p>{language==='en' ? 
                        <p>Additionally, I'm proficient in mobile app development using Swift, enabling me to create native iOS applications that deliver exceptional performance and user satisfaction.</p>
                        :
                        <p>De plus, je suis compétent dans le développement d'applications mobiles avec Swift, ce qui me permet de créer des applications iOS natives offrant des performances exceptionnelles et une satisfaction utilisateur.</p>
                    }</p>
                    <br/>
                    <p>{language==='en' ? 
                        <p>Outside of coding, I like to focus on fitness. I regularly go to the gym and play soccer once a week, which helps me stay active and maintain a healthy work-life balance.</p>
                        :
                        <p>En dehors du codage, j'aime me concentrer sur ma forme physique. Je vais régulièrement à la salle de sport et joue au football une fois par semaine, ce qui m'aide à rester actif et à maintenir un équilibre sain entre vie professionnelle et vie privée.</p>
                    }</p>
                </div>
                <div className="flex xl:flex-col md:flex-row justify-center items-center mx-auto mt-8 xl:mt-0 xl:w-1/2">
                    <img src="about.png" alt="about" className="inline ml-10" style={{ width: '30vh', height: '30vh' }} />
                    <img src="family.png" alt="about" className="inline ml-10" style={{ width: '30vh', height: '30vh' }} />
                </div>
            </div>
        </div>
    );
}

export default About;
