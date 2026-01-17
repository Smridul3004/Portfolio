import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    insta,
    LNMIIT,
    vacaow,
    despo
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Teaching Assistant - ISL Lab",
        company_name: "LNMIIT",
        icon: LNMIIT,
        iconBg: "#fbc3bc",
        date: "Jan 2024 - April 2024",
        points: [
            "Guided students in Linux fundamentals including file management, shell scripting, and command-line operations.",
            "Taught Python programming essentials covering data types, control structures, and NumPy for numerical computing.",
            "Instructed data science foundations including Pandas for data manipulation and Matplotlib for visualization.",
            "Provided hands-on guidance in machine learning concepts using Scikit-Learn library and supervised practical sessions.",
        ],
    },
    {
        title: "Sponsorship Head",
        company_name: "Desportivos - LNMIIT",
        icon: despo,
        iconBg: "#b3b3b3",
        date: "Aug 2023 - Jan 2024",
        points: [
            "Led sponsorship acquisition efforts, securing ₹30L in funding from 11 partners.",
            "Created and presented targeted sponsorship proposals, achieving 50% conversion rate through strategic outreach.",
            "Coordinated sponsor deliverables and maintained ongoing communication to ensure partnership satisfaction.",
            "Managed cross-functional collaboration with organizing team to successfully execute the festival for 4000 participants.",
        ],
    },
    {
        title: "Business Development Intern",
        company_name: "Vacaow",
        icon: vacaow,
        iconBg: "#accbe1",
        date: "May 2023 - July 2023",
        points: [
            "Conducted comprehensive market research across Airbnb, Booking.com, and MakeMyTrip to identify potential homestay partners.",
            "Successfully onboarded 28 hotels and homestays by highlighting Vacaow's competitive 1% host fee advantage.",
            "Executed targeted outreach campaigns to property owners, emphasizing cost savings compared to competitors charging 3-5% fees.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Smridul3004',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mridul-sharma-78843120a',
    },
    {
        name: 'Instagram',
        iconUrl: insta,
        link: 'https://www.instagram.com/mxridul/',
    }
];

export const projects = [
    // {
    //     iconUrl: pricewise,
    //     theme: 'btn-back-red',
    //     name: 'Instagram Saved Content Analyzer Chrome Extension',
    //     description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    //     link: 'https://github.com/Smridul3004/Instagram-Saved-Content-Analyzer-Chrome-Extension',
    // },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/Smridul3004/Alumni-Connect-Platform',
    // },
    {
        iconUrl: LNMIIT,
        theme: 'btn-back-blue',
        name: 'Alumni Connect Platform',
        description: 'A comprehensive alumni portal for LNMIIT, enabling alumni to connect, share experiences, and stay updated with their alma mater.',
        link: 'https://github.com/Smridul3004/Alumni-Connect-Platform',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Instagram Saved Content Analyzer Chrome Extension',
        description: 'The Instagram Saved Content Analyzer is a RAG (Retrieval-Augmented Generation) based Chrome extension that helps users analyze and query their saved Instagram posts and reels. ',
        link: 'https://github.com/Smridul3004/Instagram-Saved-Content-Analyzer-Chrome-Extension',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];