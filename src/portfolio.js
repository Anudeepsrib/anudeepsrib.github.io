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
  title: "Hi I'm Anudeep",
  subTitle: emoji(
    "Shipping production data systems and AI products. Building scalable pipelines, GenAI systems, and data-driven platforms that solve complex problems. Mentor, speaker and open-source contributor."
  ),
  resumeLink: "https://anudeepsrib.github.io/resume.pdf", // update with your resume URL or leave empty
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anudeepsrib",
  linkedin: "https://www.linkedin.com/in/anudeepsri/",
  kaggle: "https://www.kaggle.com/anudeepsri",
  gmail: "anudeepaib@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section (see 'Expertise & Focus' further below)

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "VIT University",
      logo: require("./assets/images/stanfordLogo.png"), // Placeholder
      subHeader: "B.Tech in Electrical and Electronics Engineering",
      duration: "2011 - 2015",
      desc: "Focus on Engineering fundamentals.",
      descBullets: []
    },
    {
      schoolName: "University of Massachusetts Amherst",
      logo: require("./assets/images/harvardLogo.png"), // Placeholder
      subHeader: "Master of Science in Computer Science",
      duration: "2021 - 2024",
      desc: "Specialized in Machine Learning and Data Science.",
      descBullets: []
    }
  ]
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
  competencyList: [
    "Data Pipeline Architecture (ETL/ELT)",
    "Big Data Processing (Spark, Kafka, Delta Lake)",
    "AI Systems & Agentic Workflows",
    "Generative AI & LLMs",
    "Machine Learning in Production",
    "Data Warehousing & Lakehouse Design",
    "Cloud Infrastructure (AWS, Azure)",
    "Observability & Data Quality",
    "Cost Optimization & Governance",
    "Leadership & Technical Strategy"
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cloud Data Engineer",
      company: "Cognizant",
      companylogo: require("./assets/images/quoraLogo.png"), // Placeholder
      date: "2015 - 2019",
      desc: "Worked on cloud infrastructure and data processing systems.",
      descBullets: []
    },
    {
      role: "Bigdata and ML Engineer",
      company: "Gain Insights Solutions",
      companylogo: require("./assets/images/googleAssistantLogo.webp"), // Placeholder
      date: "2019 - 2019",
      desc: "Developed big data and machine learning solutions.",
      descBullets: []
    },
    {
      role: "Technical Lead",
      company: "Capgemini",
      companylogo: require("./assets/images/facebookLogo.png"), // Placeholder
      date: "2019 - 2021",
      desc: "Led technical teams and developed advanced ML models. Received Extra Mile Award.",
      descBullets: []
    },
    {
      role: "Lead Data Scientist",
      company: "Infosys",
      companylogo: require("./assets/images/airbnbLogo.png"), // Placeholder
      date: "2024 - Present",
      desc: "Leading AI initiatives and driving business impact.",
      descBullets: [
        "Mentored 240+ engineers",
        "Driving $2M+ business impact"
      ]
    }
  ]
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
      image: require("./assets/images/saayaHealthLogo.webp"), // Placeholder
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section
// Talks Section (concise grouped summary)

const talkSection = {
  title: "Mentorship & Talks",
  // Premium narrative for website, LinkedIn or a keynote slide
  subtitle: emoji(
    "I build long-term academic alliances and global industry partnerships that scale AI capability across institutions and enterprises. Trusted by leading universities and international platforms, I design curricula, lead faculty development, and deliver strategic forums that translate research into practice and upskill talent at scale."
  ),

  // Three concise category cards that capture the strategic partnerships
  talks: [
    {
      title: "Academic Partnerships",
      subtitle:
        "Sustained collaborations with VIT University (Chennai, Vellore, Amaravati), PVP Siddhartha and University of Massachusetts — embedded coursework, faculty development and advanced instruction in databases, ML, computer vision and software systems."
    },
    {
      title: "Global Industry Platforms",
      subtitle:
        "Strategic speaker and curator at DeepLearning.ai (Pie & AI), Berlin School of Business & Innovation and the Cloud Computing Conference (Boussias) — engagements that connect ideas to global adoption."
    },
    {
      title: "Training & Mentorship",
      subtitle:
        "Programmatic instructor roles and enterprise trainings with Great Learning, Wiley, Verzeo and Analytics Vidhya, plus active mentorship on Kaggle and university examiner duties — enabling workforce readiness and career acceleration."
    }
  ],
  display: true // keep visible
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to false
};

// Blogs Section
// Hidden: commented/disabled per request — kept minimal so exports remain valid
const blogSection = {
  title: "Blogs",
  subtitle: "I love to write about AI and Data Science.",
  displayMediumBlogs: "false", // Set true to fetch medium blogs
  blogs: [],
  display: false // Hidden: do not render the Blogs section
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

  /* Professional technical skills - no captions, data-focused icons */
  softwareSkills: [
    // Data & Pipeline
    { skillName: "AI / LLM & Agentic Systems", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "LLMs & Foundation Models", fontAwesomeClassname: "fas fa-cube" },
    { skillName: "Safety, Reliability & Governance", fontAwesomeClassname: "fas fa-lock" },
    { skillName: "Observability & Evaluation", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Cost Optimization & Efficiency", fontAwesomeClassname: "fas fa-chart-pie" },
    { skillName: "Production ML at Scale", fontAwesomeClassname: "fas fa-server" },

    // Data Stack
    { skillName: "Data Processing & Engineering", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Cloud Infrastructure", fontAwesomeClassname: "fas fa-cloud" },

    // Languages & Tools
    { skillName: "Languages & SQL", fontAwesomeClassname: "fas fa-code" },

    // DevOps & Software
    { skillName: "Software Development & DevOps", fontAwesomeClassname: "fas fa-tools" },

    // Leadership
    { skillName: "Leadership & Methodology", fontAwesomeClassname: "fas fa-users" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Hidden in header per request
};

const timelineSection = {
  display: true,
  title: "Experience & Education",
  subtitle: "My professional journey",
  events: [
    {
      title: "VIT University",
      subtitle: "B.Tech in Electrical and Electronics Engineering",
      date: "2011–2015",
      description: "Focused on foundational engineering principles.",
      type: "education"
    },
    {
      title: "Cognizant",
      subtitle: "Cloud Data Engineer",
      date: "2015–2019",
      description: "Built cloud infrastructure and large-scale data processing systems.",
      type: "work"
    },
    {
      title: "Gain Insights Solutions",
      subtitle: "Big Data and ML Engineer",
      date: "2019",
      description: "Developed machine learning and big data solutions.",
      type: "work"
    },
    {
      title: "Capgemini",
      subtitle: "Technical Lead",
      date: "2019–2021",
      description: "Led engineering teams and delivered advanced ML solutions. Earned the Extra Mile Award.",
      type: "work"
    },
    {
      title: "University of Massachusetts Amherst",
      subtitle: "Master of Science in Computer Science",
      date: "2021–2024",
      description: "Specialized in Machine Learning and Data Science.",
      type: "education"
    },
    {
      title: "Infosys",
      subtitle: "Lead Data Scientist",
      date: "2024–Present",
      description: "Driving AI initiatives and delivering measurable business impact.",
      type: "work"
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "anudeepsrib@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "anudeepsri", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  timelineSection,
  resumeSection
};
