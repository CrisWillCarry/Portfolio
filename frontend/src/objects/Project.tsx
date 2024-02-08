export interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    }

export const Projects: Project[] = [
    {
        id: 1,
        title: "ACMS",
        description: "This is a project description",
        link: ""
    },
    {
        id: 2,
        title: "BusBellos",
        description: "This is a project description",
        link: ""
    },
    {
        id: 3,
        title: "SecuriSense",
        description: "This is a project description",
        link: ""
    },
    {
        id: 4,
        title: "Pet Clinic",
        description: "This is a project description",
        link: "https://www.google.com/"
    }
];