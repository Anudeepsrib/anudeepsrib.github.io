/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // keep enabled for a polished first impression
  animation: splashAnimation,
  duration: 1400 // shorter, snappier intro
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anudeep Bathina",
  title: "Hi, I’m Anudeep",
  subTitle: emoji(
    "Lead Data Scientist specializing in Large Language Models, retrieval systems, and scalable data platforms. I design and deploy production-grade AI systems that solve real enterprise problems."
  ),
  subText: emoji("Mentor, speaker, and author helping teams and individuals navigate the world of AI, data, and cloud with clarity."),
  resumeLink: "https://anudeepsrib.github.io/resume.pdf", // update with your resume URL or leave empty
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anudeepsrib",
  linkedin: "https://www.linkedin.com/in/anudeepsri/",
  kaggle: "https://www.kaggle.com/anudeepsri",
  gmail: "anudeepaib@gmail.com",
  topmate: "https://topmate.io/anudeep_srib",
  adplist: "https://adplist.org/mentors/anudeep-sri-bathina",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Expertise in production data platforms, AI systems & infrastructure",
  skills: [
    emoji("⚡ Designing scalable data pipelines and ETL systems at enterprise scale"),
    emoji("⚡ Building production AI systems: LLMs, retrieval, agentic workflows, fine-tuning"),
    emoji("⚡ Architecture: cloud-native platforms, cost optimization, observability & reliability")
  ],

  /* Categorized professional skills */
  skillsCategories: [
    {
      title: "AI / LLM & Agentic Systems",
      skills: [
        { skillName: "LLMs, embeddings, retrieval, agentic workflows", fontAwesomeClassname: "fas fa-network-wired" }
      ]
    },
    {
      title: "LLMs & Foundation Models",
      skills: [
        { skillName: "fine-tuning, evaluation, RAG-based solutions", fontAwesomeClassname: "fas fa-cube" }
      ]
    },
    {
      title: "Safety, Reliability & Governance",
      skills: [
        { skillName: "guardrails, evaluation, responsible AI", fontAwesomeClassname: "fas fa-lock" }
      ]
    },
    {
      title: "Observability & Evaluation",
      skills: [
        { skillName: "monitoring model quality, latency, and drift", fontAwesomeClassname: "fas fa-chart-line" }
      ]
    },
    {
      title: "Cost Optimization & Efficiency",
      skills: [
        { skillName: "optimizing cloud, inference, and pipelines", fontAwesomeClassname: "fas fa-chart-pie" }
      ]
    },
    {
      title: "Production ML at Scale",
      skills: [
        { skillName: "deployment, CI/CD, lifecycle automation", fontAwesomeClassname: "fas fa-server" }
      ]
    },
    {
      title: "Data Processing & Engineering",
      skills: [
        { skillName: "Spark, Databricks, ETL/ELT, Delta Lake", fontAwesomeClassname: "fas fa-database" }
      ]
    },
    {
      title: "Cloud Infrastructure",
      skills: [
        { skillName: "Azure, AWS, GCP", fontAwesomeClassname: "fas fa-cloud" }
      ]
    },
    {
      title: "Languages & SQL",
      skills: [
        { skillName: "Python, SQL, PySpark, TypeScript", fontAwesomeClassname: "fas fa-code" }
      ]
    },
    {
      title: "Software Development & DevOps",
      skills: [
        { skillName: "FastAPI, Docker, Kubernetes, testing", fontAwesomeClassname: "fas fa-tools" }
      ]
    },
    {
      title: "Leadership & Methodology",
      skills: [
        { skillName: "mentoring, architecture reviews, delivery leadership", fontAwesomeClassname: "fas fa-users" }
      ]
    }
  ],
  // Legacy support if needed, but we will use categories
  softwareSkills: [],
  display: true // Set false to hide this section, defaults to true
};

// Education Section (Retained but potentially unused if combined timeline is primary)
const educationInfo = {
  display: false, // Using CombinedTimeline
  schools: []
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: false, //Set it to false - using competencies section instead
  experience: [],
  displayCodersrank: false
};

// Competencies & Areas of Expertise (displayed as styled chips/tags)
const competencies = {
  title: "Core Competencies",
  subtitle: "Data engineering and AI systems expertise",
  display: false,
  competencyList: []
};

// Work experience section (Retained but potentially unused if combined timeline is primary)
const workExperiences = {
  display: false, // Using CombinedTimeline
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Hidden in header per request
};

// Some big projects you have worked on

const bigProjects = {
  title: "Publications",
  subtitle: "RESEARCH AND BOOKS",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // Placeholder - keep existing if available or replace
      projectName: "Blueprint of IoT for Smart Cities",
      projectDesc: "Co-author in 'Handbook of Artificial Intelligence for Smart City Development'. Published by CRC Press, 2024.",
      footerLink: [
        {
          name: "View Publication",
          url: "https://doi.org/10.1201/9781003225317"
        }
      ]
    }
  ],
  display: false
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle:
    "Recent Certifications in AI and Generative AI",

  achievementsCards: [
    {
      title: "AI Agents in LangGraph",
      subtitle:
        "DeepLearning.ai",
      image: require("./assets/images/codeInLogo.webp"), // Placeholder
      imageAlt: "Certification Logo",
      footerLink: []
    },
    {
      title: "Safe and Reliable AI",
      subtitle:
        "DeepLearning.ai",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Certification Logo",
      footerLink: []
    },
    {
      title: "Generative AI with LLMs",
      subtitle: "DeepLearning.ai",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Certification Logo",
      footerLink: []
    }
  ],
  display: false
};

// Talks Section (concise grouped summary)

const talkSection = {
  title: "Academic Influence & Global AI Leadership",
  subtitle: "Recognized by universities, AI organizations, and global platforms for advancing practical AI education, applied innovation, and workforce development.",

  categories: [
    {
      name: "UNIVERSITIES",
      description: "Invited to deliver lectures and workshops on AI, machine learning, computer vision, and data-driven innovation.",
      institutions: [
        "VIT University",
        "University of Massachusetts",
        "PVP Siddhartha",
        "JECRC University"
      ]
    },
    {
      name: "GLOBAL AI PLATFORMS",
      description: "Speaker and contributor at international AI forums and conferences.",
      institutions: [
        "DeepLearning.AI (Pie & AI)",
        "Berlin School of Business & Innovation",
        "Cloud Computing Conference (Boussias)"
      ]
    },
    {
      name: "TRAINING PARTNERS",
      description: "Training learners and professionals through structured AI and ML programs.",
      institutions: [
        "Great Learning",
        "Wiley",
        "Verzeo",
        "Analytics Vidhya",
        "Kaggle"
      ]
    }
  ],
  display: true
};

// Impact Metrics
const impactMetrics = {
  display: true,
  stats: [
    { value: "17+", label: "Talks, lectures & expert sessions" },
    { value: "10+", label: "Universities, platforms & partners" },
    { value: "1000+", label: "Learners taught" },
    { value: "176", label: "Great Learning mentorship engagements" },
    { value: "115", label: "Great Learning learners (4.76 / 5 rating)" },
    { value: "173+", label: "Topmate 1:1 mentoring sessions" },
    { value: "23", label: "ADPList mentoring sessions" },
    { value: "180+ hours", label: "One-to-one mentoring time" },
    { value: "7", label: "Countries mentored" },
    { value: "4", label: "Continents reached" },
    { value: "9+ years", label: "AI, ML & data experience" },
    { value: "2", label: "Formal publications (book chapter + thesis)" }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "I love to write about AI and Data Science.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false
};

const timelineSection = {
  display: true,
  title: "Experience & Education",
  subtitle: "My professional journey",
  events: [
    {
      title: "Lead Data Scientist",
      company: "Infosys",
      date: "2024 – Present",
      description: "Leading AI initiatives, architecting GenAI and LLM systems, and building production data platforms that deliver measurable business impact.",
      type: "work"
    },
    {
      title: "M.S. in Computer Science",
      company: "University of Massachusetts Amherst",
      date: "2021 – 2024",
      description: "Graduate research on domain-adapted computer vision using YOLOv8 and ResNet-50; thesis on cross-database fish species recognition.",
      type: "education"
    },
    {
      title: "Technical Lead",
      company: "Capgemini",
      date: "2019 – 2021",
      description: "Directed ML engineering teams and delivered predictive systems at scale; received the ‘Extra Mile Award’ for high-impact delivery.",
      type: "work"
    },
    {
      title: "Big Data & ML Engineer",
      company: "Gain Insights Solutions",
      date: "2019",
      description: "Built scalable PySpark and Docker-based ML workflows, improving pipeline performance by around 30%.",
      type: "work"
    },
    {
      title: "Cloud Data Engineer",
      company: "Cognizant",
      date: "2015 – 2019",
      description: "Designed cloud data pipelines, predictive analytics, and high-volume SQL automation for enterprise clients.",
      type: "work"
    },
    {
      title: "B.Tech in Electrical and Electronics Engineering",
      company: "VIT University",
      date: "2011 – 2015",
      description: "Focused on core engineering fundamentals and hands-on technical projects.",
      type: "education"
    }
  ]
};

const mentorshipSection = {
  display: true,
  title: "Mentoring & Career Impact",
  subtitle: "I mentor learners and professionals through Great Learning, Topmate, ADPList and community platforms, helping them break into and grow within AI and data science.",
  testimonials: [
    {
      name: "Mentee",
      platform: "Topmate",
      quote: "Anudeep was incredibly helpful in clarifying my doubts about the data science career path. His insights on real-world AI production were eye-opening."
    },
    {
      name: "Learner",
      platform: "Great Learning",
      quote: "The sessions were very interactive and practical. Anudeep makes complex concepts like Transformers and LLMs easy to understand."
    },
    {
      name: "Professional",
      platform: "ADPList",
      quote: "Great guidance on transitioning from software engineering to ML. The roadmap provided was very clear and actionable."
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "If you’re exploring AI strategy, LLM architectures, production ML pipelines, or looking for mentoring and career guidance, I’d be happy to connect.",
  number: "",
  email_address: "anudeepsrib@gmail.com"
};

const twitterDetails = {
  userName: "anudeepsri",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  competencies,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  impactMetrics,
  mentorshipSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  timelineSection,
  resumeSection
};
