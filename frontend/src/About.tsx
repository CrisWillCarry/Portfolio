const About: React.FC = () => {
    return (
        <div id="about" className="mt-28 mx-auto bg-gray-800 text-white p-8 rounded-xl w-11/12 text-left sm:ml-5 xl:ml-24 shadow-lg">
            <h1 className="font-bold text-7xl mb-8">
                <span className="text-yellow-400">About</span>
                <span className="text-green-700"> me</span>
            </h1>
            <div className="flex flex-col xl:flex-row md:flex-col sm:flex-col">
                <div className="text-xl p-4 rounded font-semibold">
                    <p>I'm a Computer Science graduate from Champlain College with a passion for full-stack development. My journey into the world of technology started early on, shaped by the influence of both my parents who work in the tech industry.</p>
                    <br/>
                    <p>Originally from Sao Paulo, Brazil, my family immigrated to Canada in 2012 in pursuit of new opportunities. While I've been living alone since my family returned to Brazil in 2021, the experience has taught me resilience, independence, and the importance of adaptability.</p>
                    <br/>
                    <p>Professionally, I excel in crafting innovative solutions and bringing ideas to life across the full software development lifecycle. My expertise spans both frontend and backend technologies, allowing me to create seamless user experiences and robust server-side functionalities.</p>
                    <br/>
                    <p>On the frontend, I leverage frameworks like React.js to build dynamic and responsive user interfaces. Meanwhile, my backend toolkit includes Flask, Java Spring Boot, and Next.js, which I use to develop scalable and efficient server-side applications.</p>
                    <br/>
                    <p>Additionally, I'm proficient in mobile app development using Swift, enabling me to create native iOS applications that deliver exceptional performance and user satisfaction.</p>
                    <br/>
                    <p>Outside of coding, I like to focus on fitness. I regularly go to the gym and play soccer once a week, which helps me stay active and maintain a healthy work-life balance.</p>
                </div>
                <div className="flex xl:flex-col md:flex-row justify-center items-center mx-auto mt-8 xl:mt-0 xl:w-1/2">
                    <img src="about.png" alt="about" className="inline ml-10 max-w-full max-h-full" />
                    <img src="family.png" alt="about" className="inline ml-10 max-w-full max-h-full" />
                </div>
            </div>
        </div>
    );
}

export default About;
