import { Skill } from "./Skills";

export interface Project {
    id: number;
    title: string;
    logo: string;
    description_en: string;
    description_fr: string;
    link: string;
    github: string;
    video : Boolean;
    videoLink? : string;
    skills : Skill[];
    }

export const Projects: Project[] = [
    {
        id: 1,
        title: "ACMS",
        logo: "acms.svg",
        description_en: " An end-to-end web application for Atelier Mecanique CMS Inc. The system orchestrates appointment management, cost computation, and billing interactions with clients. ",
        description_fr: "Une application web de bout en bout pour Atelier Mecanique CMS Inc. Le système orchestre la gestion des rendez-vous, le calcul des coûts et les interactions de facturation avec les clients.",
        link: "https://react-atelier.onrender.com/",
        github: "https://github.com/CrisWillCarry/ateliermecanique-ws/tree/main",
        video: false,
        skills : [
            {
                id : 1,
                image:"",
                name: "React.js",
                color: "bg-blue-600",
                secondColor: "text-white"
            },
            {
                id : 2,
                image:"",
                name: " Java Spring Boot",
                color: "bg-green-600",
                secondColor: "text-white"
            },
            {
                id : 3,
                image:"",
                name: "Docker",
                color: "bg-blue-400",
                secondColor: "text-white"
            },
            {
                id : 4,
                image:"",
                name: "MySQL",
                color: "bg-orange-600",
                secondColor: "text-black"
            },
            {
                id : 5,
                image:"",
                name: "Git",
                color: "bg-black",
                secondColor: "text-white"
            }
        ]
    },
    {
        id: 2,
        title: "BusBellos",
        logo: "bussbellos.png",
        description_en: "A simple 2D game developed in Unity. The game is about a busboy who has to clean the tables and collect the dirty dishes while his boss chases him down. The game has a scoring system and a timer. Each round gets harder as the boss hits harder and runs faster",
        description_fr: "Un jeu 2D simple développé en Unity. Le jeu est sur un garçon de bus qui doit nettoyer les tables et collecter les plats sales tandis que son patron le poursuit. Le jeu a un système de score et une minuterie. Chaque tour devient plus difficile à mesure que le patron frappe plus fort et court plus vite.",
        link: "",
        videoLink: "https://www.youtube.com/watch?v=--UKqFLyOOA",
        github: "https://github.com/CrisWillCarry/BussBoyGame",
        video: true,
        skills : [
            {
                id : 1,
                image:"",
                name: "Unity2D",
                color: "bg-black",
                secondColor: "text-white"
            },
            {
                id : 2,
                image:"",
                name: "C#",
                color: "bg-black",
                secondColor: "text-purple-600"
            },
            {
                id : 3,
                image:"",
                name: "Git",
                color: "bg-black",
                secondColor: "text-white"
            }
        ]
    },
    {
        id: 3,
        title: "SecuriSense",
        description_en: "A Raspberry Pi-powered security system employing infrared laser detection, capturing scenes with a camera upon intrusion. The system swiftly sends images to an external Flask API, generating a comprehensive frontend display via an authenticated Flask application.",
        description_fr: "Un système de sécurité alimenté par Raspberry Pi utilisant la détection laser infrarouge, capturant des scènes avec une caméra lors d'une intrusion. Le système envoie rapidement des images à une API Flask externe, générant un affichage frontal complet via une application Flask authentifiée.",
        videoLink: "https://www.youtube.com/watch?v=fUiuS75jqHA",
        link: "",
        logo: "raspberry.jpg",
        github: "https://github.com/CrisWillCarry/SecuriSense",
        video: true,
        skills : [
            {
                id : 1,
                image:"",
                name: "JavaScript",
                color: "bg-yellow-400",
                secondColor: "text-black"
            },
            {
                id : 2,
                image:"",
                name: "Python Flask",
                color: "bg-yellow-600",
                secondColor: "text-blue-600"
            },
            {
                id : 3,
                image:"",
                name: "Raspberry Pi",
                color: "bg-red-600",
                secondColor: "text-white"
            },
            {
                id : 4,
                image:"",
                name: "SQLite",
                color: "bg-white",
                secondColor: "text-black"
            },
            {
                id : 5,
                image:"",
                name: "Git",
                color: "bg-black",
                secondColor: "text-white"
            }
        ]
    },
    {
        id: 4,
        title: "Pet Clinic",
        description_en: " A web platform for managing pet clinics. It allows admins to oversee staff and empowers receptionists to handle appointments and billing efficiently.",
        description_fr: "Une plateforme web pour gérer les cliniques vétérinaires. Il permet aux administrateurs de superviser le personnel et donne aux réceptionnistes les moyens de gérer efficacement les rendez-vous et la facturation.",
        link: "",
        logo: "spring.png",
        github: "https://github.com/cgerard321/champlain_petclinic",
        video: false,
        skills : [
            {
                id : 1,
                image:"",
                name: "Java Spring Boot",
                color: "bg-green-600",
                secondColor: "text-white"
            },
            {
                id : 2,
                image:"",
                name: "MongoDB",
                color: "bg-green-600",
                secondColor: "text-white"
            },
            {
                id : 3,
                image:"",
                name: "Git",
                color: "bg-black",
                secondColor: "text-white"
            },
            {
                id : 4,
                image:"",
                name: "Docker",
                color: "bg-blue-400",
                secondColor: "text-white"
            },
            {
                id : 5,
                image:"",
                name: "Angular.js",
                color: "bg-red-600",
                secondColor: "text-white"
            }
        ]
    }
];