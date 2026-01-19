export interface Project {
    slug: string;
    url?: string;
    title: string;
    image?: string;
    github?: string;
    stack: string[];
    featured?: boolean;
    features: string[];
    description: string;
    longDescription: string;
    status?: "active" | "archived" | "in-progress" | "private";
}


export const projects: Project[] = [
    {
        slug: "mylists",
        title: "MyLists",
        description:
            "The all-in-one media tracking platform for movies, series, anime, manga, books, and games.",
        longDescription: `MyLists is a comprehensive, type-safe web-app designed to help you organize and track your movies, TV series, anime, manga, books, and video games in one unified interface. Built with modern full-stack architecture using TanStack Start with end-to-end type-safety.`,
        features: [
            "Multi-Media Collections for Movies, Series, Anime, Manga, Books, and Games",
            "Upcoming Media notifications for new releases",
            "Advanced Analytics with detailed statistics and trends",
            "Daily Moviedle guessing game",
            "Achievements System with unique badges",
            "Secure Authentication powered by Better-Auth",
        ],
        stack: [
            "Bun",
            "React",
            "TypeScript",
            "TanStack Start",
            "TanStack Query",
            "TanStack Table",
            "TanStack Router",
            "Drizzle",
            "Tailwind",
            "Redis",
            "TMDB",
            "IGDB",
            "HLTB",
            "GBooks",
            "JIKAN",
        ],
        url: "https://mylists.info",
        github: "https://github.com/Crossoufire/MyLists",
        featured: true,
        status: "active",
    },
    {
        slug: "tresso",
        title: "Tresso",
        description:
            "A self-hosted Kanban board application inspired by Trello, built with TanStack Start.",
        longDescription: `Tresso is a simple Kanban board application inspired by Trello made to be self-hosted. It provides the core functionality needed to organize projects with boards, columns, cards and labels in a clean, modern interface.`,
        features: [
            "Board Management for multiple projects",
            "Draggable Interface for columns and cards",
            "Card Details with titles and descriptions",
            "Labeling System with color-coded labels",
            "Google OAuth Authentication",
            "Clean, responsive UI with shadcn/ui",
        ],
        stack: [
            "TypeScript",
            "TanStack Start",
            "TanStack Router",
            "TanStack Query",
            "Drizzle",
            "SQLite",
            "React",
            "shadcn/ui",
            "Tailwind",
            "better-auth",
        ],
        url: "https://tresso.mylists.info",
        github: "https://github.com/Crossoufire/Tresso",
        featured: true,
        status: "active",
    },
    {
        slug: "science-feed",
        title: "ScienceFeed",
        description:
            "Curate your personal Science news feed with RSS and keywords.",
        longDescription: `ScienceFeed is a platform allowing you to follow RSS feeds from scientific journals and get updates based on keywords. Perfect for researchers and science enthusiasts who want to stay updated on specific topics.`,
        features: [
            "Add personalized keywords",
            "Add RSS feeds from scientific journals",
            "Mark articles as read, unread, archived, or deleted",
            "Weekly email notifications for new articles",
        ],
        stack: ["Python", "Flask", "Gunicorn", "React", "JavaScript", "Tailwind", "SQLAlchemy"],
        url: "https://science-feed.mylists.info",
        github: "https://github.com/Crossoufire/ScienceFeed",
        status: "in-progress",
    },
    {
        slug: "famiglia-recipes",
        title: "Famiglia Recipes",
        description:
            "A simple, modern web app designed for families to easily share and manage recipes.",
        longDescription: `Famiglia Recipes is a simple and modern web application for families to share and manage their favorite recipes. Built with a focus on simplicity and ease of use, featuring full CRUD operations, authentication, and multilingual support.`,
        features: [
            "Full Recipe CRUD operations",
            "Secure user authentication with register-key",
            "Recipe Discovery with search and label filtering",
            "Dynamic ingredient scaling based on servings",
            "Favorites and comments system",
            "Multilingual Support (English and French)",
        ],
        stack: [
            "Bun",
            "TanStack Start",
            "React",
            "TanStack Router",
            "TanStack Query",
            "Drizzle",
            "Turso",
            "Tailwind",
            "shadcn/ui",
            "Better-Auth",
            "Zod",
            "i18next",
        ],
        url: "https://famiglia-recipes.mylists.info",
        github: "https://github.com/Crossoufire/Famiglia-Recipes",
        status: "active",
    },
    {
        slug: "go-waker",
        title: "PM2 Waker Service",
        description:
            "A lightweight Go service that manages PM2-driven apps, starting them on-demand and stopping after inactivity.",
        longDescription: `A very lightweight, self-contained Go service to automatically start and stop pm2-managed apps on-demand. Perfect for dev servers or when hosting several low-traffic sites, saving system resources by only running apps when accessed. Uses only ~10 MB compared to ~150 MB per running app!`,
        features: [
            "On-demand app startup via Nginx integration",
            "Automatic shutdown after configurable inactivity period",
            "Minimal resource usage (~10 MB)",
            "Works with Nginx 502 error handling",
            "Activity ping system to reset timers",
        ],
        stack: ["Go", "PM2", "Nginx"],
        github: "https://github.com/Crossoufire/go-waker",
        status: "active",
    },
    {
        slug: "music-downloader-go",
        title: "Music Downloader Go",
        description:
            "A standalone tool that downloads music from browser bookmarks and adds Spotify metadata.",
        longDescription: `A simple standalone tool that downloads music from your Chrome/Brave bookmarks and adds metadata from Spotify. Features concurrent downloads, automatic metadata tagging, and cross-platform support.`,
        features: [
            "Downloads music from YouTube URLs in bookmarks",
            "Automatic Spotify metadata (title, artist, album, year)",
            "Embeds album cover art into MP3 files",
            "Concurrent downloads for faster processing",
            "Cross-platform support (Windows, macOS, Linux)",
        ],
        stack: ["Go", "Spotify API", "YouTube"],
        github: "https://github.com/Crossoufire/music-downloader-go",
        status: "active",
    },
    {
        slug: "rag-search",
        title: "RAG Search",
        description:
            "A RAG solution using TanStack Start, AI SDK, and Chroma DB for enterprise search.",
        longDescription: `Developing a RAG (Retrieval-Augmented Generation) solution for my company using modern technologies. This project combines vector databases with LLM capabilities for intelligent document search and question answering.`,
        features: [
            "Vector-based document retrieval",
            "AI-powered search and Q&A",
            "Enterprise-grade architecture",
        ],
        stack: ["TanStack Start", "AI SDK", "Chroma DB", "TypeScript"],
        status: "private",
    },
    {
        slug: "react-otp-interface",
        title: "React OTP Interface",
        description:
            "A React interface for Open Trip Planner's GraphQL API for transit planning.",
        longDescription: `Developed an interface in React + TypeScript for the OTP (Open Trip Planner) GraphQL API. This enterprise project provides transit planning capabilities with a modern, user-friendly interface.`,
        features: [
            "GraphQL integration with OTP API",
            "Transit route planning",
            "Modern React architecture",
        ],
        stack: ["React", "TypeScript", "GraphQL", "Open Trip Planner"],
        status: "private",
    },
    {
        slug: "websnap",
        title: "WebSnap",
        description:
            "Python script using Selenium to log in and capture screenshots of specified URLs.",
        longDescription: `WebSnap is a simple Python script for taking automated screenshots of websites. It uses Selenium to control a Chrome browser and captures screenshots of specified URLs after logging into a website if required.`,
        features: [
            "Automated website login",
            "Screenshot capture of specified URLs",
            "Structured directory with timestamps",
            "Customizable Chrome WebDriver options",
        ],
        stack: ["Python", "Selenium", "Chrome WebDriver"],
        github: "https://github.com/Crossoufire/WebSnap",
        status: "archived",
    },
    {
        slug: "litapp",
        title: "LitApp",
        description:
            "A Streamlit app demonstrating data analysis on retail data and statistical methods.",
        longDescription: `A multi-page Streamlit application providing simple analyses on subjects such as US retail and food services, statistical resampling methods, and more. Built as a demo to understand how Streamlit works.`,
        features: [
            "Multi-page Streamlit application",
            "Interactive sliders, buttons, and progress bars",
            "SQL queries and CSV data retrieval",
            "Statistical resampling demonstrations",
        ],
        stack: ["Python", "Streamlit", "SQL", "Pandas"],
        github: "https://github.com/Crossoufire/LitApp",
        status: "archived",
    },
    {
        slug: "radiative-forcing",
        title: "Radiative Transfer Simulation",
        description:
            "Python simulation of radiative transfer focusing on CO2's influence on outgoing radiation.",
        longDescription: `Python implementation of a radiative transfer simulation, which models the interaction of light with the Earth's atmosphere. Particularly focusing on the influence of CO2 concentration on the outgoing radiation spectrum. Forked and adapted from Science Etonnante's implementation.`,
        features: [
            "Simulates electromagnetic radiation propagation",
            "CO2 absorption and emission modeling",
            "Multiple atmospheric temperature models (Uniform, Simple, US1976)",
            "Matplotlib visualizations at different CO2 concentrations",
        ],
        stack: ["Python", "NumPy", "Matplotlib"],
        github: "https://github.com/Crossoufire/radiative-forcing",
        status: "archived",
    },
    {
        slug: "a-star",
        title: "A* Algorithm Visualization",
        description:
            "Interactive Python visualization of the A* pathfinding algorithm using matplotlib.",
        longDescription: `An interactive Python visualization of the A* algorithm, a popular pathfinding algorithm used in robotics, gaming, and navigation systems. Features customizable grids, obstacle placement, and Manhattan distance heuristic.`,
        features: [
            "Interactive matplotlib visualization",
            "Click to add/remove obstacles",
            "Customizable grid size and start/end points",
            "Manhattan distance heuristic",
        ],
        stack: ["Python", "Matplotlib", "NumPy"],
        github: "https://github.com/Crossoufire/A-star",
        status: "archived",
    },
    {
        slug: "whisper2clip",
        title: "Whisper2Clip",
        description:
            "Automatically transcribes audio recordings and saves the text to your clipboard.",
        longDescription: `A Python script that allows users to record audio using their microphone and transcribe it using the Whisper model from OpenAI (free and offline). Features hotkey recording and automatic clipboard copying.`,
        features: [
            "Hotkey-triggered recording",
            "Whisper transcription (free and offline)",
            "Automatic clipboard copying",
            "Customizable hotkey combinations",
        ],
        stack: ["Python", "OpenAI Whisper", "PyAudio"],
        github: "https://github.com/Crossoufire/whisper2clip",
        status: "archived",
    },
    {
        slug: "portfolio",
        title: "This Portfolio",
        description: "The very website you're looking at right now!",
        longDescription: `A modern, responsive portfolio website built with Astro and Tailwind CSS. Hosted on GitHub Pages with automatic deployment via GitHub Actions.`,
        features: [
            "Built with Astro for fast static generation",
            "Tailwind for styling",
            "GitHub Pages deployment",
            "Responsive design",
        ],
        stack: ["Astro", "TypeScript", "Tailwind CSS", "GitHub Pages"],
        github: "https://github.com/Crossoufire/portfolio",
        status: "active",
    },
];


export const featuredProjects = projects.filter((p) => p.featured);
