/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anudeep Bathina",
  title: "Hi all, I'm Anudeep",
  subTitle: emoji(
    "Lead Data Scientist & AI Mentor with 9+ years of experience. Mentored 240+ engineers, delivered 18+ guest lectures, and driving $2M+ business impact. Expert in GenAI, NLP, and Computer Vision."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anudeepsrib",
  linkedin: "https://www.linkedin.com/in/anudeepsri/",
  kaggle: "https://www.kaggle.com/anudeepsri",
  gmail: "anudeepsrib@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA SCIENTIST | AI MENTOR | TECH LEADER",
  skills: [
    emoji("⚡ Building GenAI, NLP, and Computer Vision solutions at scale"),
    emoji("⚡ Mentoring the next generation of AI engineers and Data Scientists"),
    emoji("⚡ Architecting cloud-native AI applications on Azure and AWS")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Massachusetts Amherst",
      logo: require("./assets/images/harvardLogo.png"), // Placeholder
      subHeader: "Master of Science in Computer Science",
      duration: "2015 - 2017",
      desc: "Specialized in Machine Learning and Data Science.",
      descBullets: []
    },
    {
      schoolName: "VIT University",
      logo: require("./assets/images/stanfordLogo.png"), // Placeholder
      subHeader: "B.Tech in Electrical and Electronics Engineering",
      duration: "2009 - 2013",
      desc: "Focus on Engineering fundamentals.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science & AI", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "85%"
    },
    {
      Stack: "Mentorship",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Data Scientist",
      company: "Infosys",
      companylogo: require("./assets/images/airbnbLogo.png"), // Placeholder
      date: "Current",
      desc: "Leading AI initiatives and driving business impact.",
      descBullets: [
        "Mentored 240+ engineers",
        "Driving $2M+ business impact"
      ]
    },
    {
      role: "Senior Data Scientist",
      company: "Capgemini",
      companylogo: require("./assets/images/facebookLogo.png"), // Placeholder
      date: "Previous",
      desc: "Developed advanced ML models and received Extra Mile Award.",
      descBullets: []
    },
    {
      role: "Data Scientist",
      company: "Cognizant",
      companylogo: require("./assets/images/quoraLogo.png"), // Placeholder
      date: "Previous",
      desc: "Worked on predictive analytics. Recognized in Top 100 Millennial List.",
      descBullets: []
    },
    {
      role: "Technical Writer & Analyst",
      company: "GainInsights Solutions",
      companylogo: require("./assets/images/googleAssistantLogo.webp"), // Placeholder
      date: "Previous",
      desc: "Technical documentation and analysis.",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to write about AI and Data Science.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Mentorship & Talks",
  subtitle: emoji(
    "Sharing knowledge with the community 🎤"
  ),

  talks: [
    {
      title: "Guest Lecture at VIT University",
      subtitle: "Database Systems, Computer Vision, AI Innovation",
      slides_url: "",
      event_url: ""
    },
    {
      title: "Mentor at UT Austin PGP",
      subtitle: "Guiding learners in AI and Data Science",
      slides_url: "",
      event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
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
  resumeSection
};
