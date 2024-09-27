import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'University of South Florida',
        timeline: "2015-Present",
        description: "Developed a Flutter app to assess children's learning rates through innovative data collection and analysis techniques, spearheading the project in the innovative SMART Lab at USF. Successfully tested with 20+ users. Led a machine learning project using LSTM to develop a digital tool for early detection and prediction of psychomotor agitation and aggression in dementia (PAAD), increasing predictive accuracy by 20%. Assisted in teaching Data Mining and Advanced OOPs in C++ to 150+ students, enhancing class performance by 15% through effective mentoring, personalized support, and fostering a collaborative environment.",
        tools: ["Flutter", "Dart", "Jupyter","LSTM", "Python", "TensorFlow", "MATLAB"],
        role: 'Research and Teaching Assistant',
        location: "Tampa, USA",
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Zemoso Technologies - Baker Hughes',
        timeline:"Jan 2022 - Aug 2023",
        description: "Developed a robust backend service with 20+ APIs using Node.js and Express.js, reducing response times by 30% and boosting system efficiency. Implemented cache-aside strategy with Redis on Azure, reducing data retrieval response time by 400 milliseconds. Engineered asynchronous notifications using AMQP with RabbitMQ, improving message delivery efficiency by 25%. Migrated database from SQL to NoSQL, resulting in a 20% improvement in query response time. Pioneered an npm package for dynamic retrieval of environment variables from Kubernetes, leading to over 1,000 downloads.",
        tools: ["Node.js", "Express.js", "Redis", "RabbitMQ", "Azure", "SQL", "NoSQL", "Kubernetes", "npm"],
        role: 'Software Development Engineer II',
        location: "Hyderabad, India",
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Zemoso Technologies - Neustar',
        timeline:"Jun 2021 - Jan 2022",
        description: "Implemented automated CI/CD pipelines, reducing deployment time by 40% using Jenkins. Built and deployed Helm charts for 5 services on GKE, optimizing deployments. Orchestrated Terraform scripts for GCP infrastructure provisioning, cutting provisioning time by 25%.",
        tools: ["Jenkins","GCP","Docer","Kubernetes", "Ansible", "Helm", "GKE", "Terraform", "GCP"],
        role: 'Software Development Engineer',
        location: "Hyderabad, India",
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 4,
        name: 'Infor Global Solutions',
        timeline:"Feb 2021 - May 2021",
        description: "Collaborated with 5 teams to maintain automated test suites using Selenium, reducing bug detection time by 40%.",
        tools: ["Selenium", "Git", "Python", "Java"],
        role: 'Software Engineer Intern',
        location: "Hyderabad, India",
        code: '',
        demo: '',
        image: travel,
    }

];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },