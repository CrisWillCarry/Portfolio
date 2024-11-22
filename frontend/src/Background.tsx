import { motion } from "framer-motion";
import React from "react";
import { FaGraduationCap, FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { MdTimeline } from "react-icons/md";

const Background: React.FC<{ language: string }> = ({ language }) => {
    const timelineEvents = [
        {
            date: language === 'en' ? "March - May 2024" : "Mars - Mai 2024",
            icon: <FaBriefcase />,
            title: language === 'en' 
                ? "uOttawa - Applied Machine Learning Intern" 
                : "Université d'Ottawa - Stagiaire en apprentissage automatique appliqué",
            text: language === 'en' 
                ? "Built and deployed a Convolutional Neural Network (CNN) that performed binary classification on network traffic requests from IoT devices to mitigate malicious attacks." 
                : "Conçu et déployé un Réseau Neuronal Convolutionnel (CNN) effectuant une classification binaire sur les requêtes de trafic réseau des appareils IoT pour atténuer les attaques malveillantes."
        },
        {
            date: language === 'en' ? "June 2024" : "Juin 2024",
            icon: <FaGraduationCap />,
            title: language === 'en' 
                ? "Champlain College - D.E.C. Computer Science Graduate" 
                : "Collège Champlain - Diplômé du D.E.C. en informatique",
            text: language === 'en' 
                ? "Graduated from Champlain College's 3-year D.E.C. Computer Science program, building a strong foundation in software development and computing." 
                : "Diplômé du programme de D.E.C. en informatique de 3 ans au Collège Champlain, avec une base solide en développement logiciel et informatique."
        },
        {
            date: language === 'en' ? "September 2023 - Present" : "Septembre 2023 - Présent",
            icon: <FaLaptopCode />,
            title: language === 'en' 
                ? "Peça Estilosa BB - Full Stack Developer" 
                : "Peça Estilosa BB - Développeur Full Stack",
            text: language === 'en' 
                ? "Developing an online store for Peça Estilosa BB, covering both authenticated and unauthenticated user flows, as well as a comprehensive admin panel." 
                : "Développe une boutique en ligne pour Peça Estilosa BB, couvrant les flux utilisateurs authentifiés et non authentifiés, ainsi qu'un panneau d'administration complet."
        },
        {
            date: language === 'en' ? "October 2023 - Present" : "Octobre 2023 - Présent",
            icon: <MdTimeline />,
            title: language === 'en' 
                ? "OutlierAI - AI Code Trainee" 
                : "OutlierAI - Stagiaire en code IA",
            text: language === 'en' 
                ? "Started as an AI Code Trainee at OutlierAI, focusing on expanding skills in artificial intelligence and advanced coding practices." 
                : "Commencé en tant que stagiaire en code IA chez OutlierAI, en se concentrant sur l'expansion des compétences en intelligence artificielle et en pratiques de codage avancées."
        },
    ];
    

    return (
        <div id="background" className=" mx-auto w-11/12 sm:ml-5 xl:ml-24 p-10 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-2xl">
            <h1 className="text-5xl font-bold text-center text-transparent bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text p-2 mb-16">
                {language === 'en' ? 'Background' : 'Parcours'}
            </h1>
            <div className="relative space-y-10">
                {timelineEvents.map((event, index) => (
                    <motion.div
                        key={index}
                        className="relative flex items-start space-x-6 p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-400 text-white text-2xl shadow-lg">
                            {React.cloneElement(event.icon)}
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-3xl font-semibold text-white mb-1">{event.title}</h3>
                            <p className="text-gray-300 mb-2">{event.text}</p>
                            <span className="text-sm text-blue-300">{event.date}</span>
                        </div>
                        {/* Connecting dots */}
                        {index < timelineEvents.length - 1 && (
                            <div className="absolute left-6 top-full h-10 w-1 bg-gradient-to-b from-blue-500 to-green-400"></div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Background;
