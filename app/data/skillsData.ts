import {ISkillGroup} from "../components/types";

const skillsData:ISkillGroup[] = [
    {
        id: 1,
        grouping: "Programming",
        tools: ["Python", "R", "SQL", "TypeScript", "Kotlin", "HTML5/CSS", "Git"]
    },
    {
        id: 2,
        grouping: "Web Development & APIs",
        tools: ["Flask", "Django", "ExpressJs", "NodeJs", "ReactJs", "REST APIs"]
    },
    {
        id: 3,
        grouping: "Data Science & Machine Learning",
        tools: [
            "TensorFlow", "Pandas", "Scikit Learn", "Power BI", "Tableau", "Natural Language Processing", 
            "Deep Learning", "Predictive Modeling", "Forecasting", "Data Visualization"
        ]
    },
    {
        id: 4,
        grouping: "Big Data & Databases",
        tools: ["Hadoop", "Spark", "SQL", "NoSQL", "PostgreSQL"]
    },
    {
        id: 5,
        grouping: "Cloud & Containerization",
        tools: ["Docker", "Kubernetes", "Digital Ocean"]
    },
    {
        id: 6,
        grouping: "Project Management & Collaboration",
        tools: ["Agile", "Scrum", "GitHub", "GitLab"]
    }    
]

export default skillsData;