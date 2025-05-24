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
  username: "Chaitanya Bejjanki",
  title: "Hi all, I'm Chaitanya",
  subTitle: emoji(
    "A passionate Front-end developer 🚀 about building responsive UIs with React.js. Skilled in designing clean interfaces, integrating APIs, and crafting smooth user experiences. Eager to create impactful web apps and grow with great teams."
  ),
  resumeLink:
  "https://drive.google.com/uc?export=download&id=14BZhhbHEWU_LXu34gBuabmL4gTG1b07s",
 // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Chaitanya1819",
  linkedin: "https://www.linkedin.com/in/chaitanya-bejjanki-55ba91171/",
  gmail: "chaitanyabejjanki19@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Frontend Engineer focused on building sleek, responsive, and scalable user interfaces",
  skills: [
    emoji(
      "⚡ Develop clean, reusable components and implement seamless API integrations for dynamic web apps"
    ),
    emoji("⚡ Optimize performance and maintain cross-browser compatibility for consistent user experience"),
    emoji(
      "⚡ Create responsive layouts using Tailwind CSS, Bootstrap, and modern web design principles"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Illinois Institute of Technology",
      logo: require("./assets/images/IITLogo.png"),
      subHeader: "Master of Science in Information Technology & Management",
      duration: "August 2023 - May 2025",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set to true to show the Proficiency Section visually
  experience: [
    {
      Stack: "Frontend / UI Design (React.js, CSS, JavaScript)",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend (Node.js, Express, Spring Boot)",
      progressPercentage: "55%"
    },
    {
      Stack: "Programming (Java, Python, SQL)",
      progressPercentage: "70%"
    },
    {
      Stack: "Database Management (MySQL, MongoDB, PostgreSQL)",
      progressPercentage: "75%"
    },
    {
      Stack: "Data Visualization (Power BI, Tableau)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set to true if you're integrating CodersRank badges
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/TCSLogo.jpg"),
      date: "Oct 2021 – Apr 2022",
      desc: "Worked with MetLife's business applications team to resolve ServiceNow tickets and support data processing workflows. Automated SQL reports for insurance claims, enhanced data accuracy through Java debugging, and contributed to backend data operations by writing optimized SQL scripts."
    },
    {
      role: "Front-End Developer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/TCSLogo.jpg"),
      date: "May 2022 – Jul 2023",
      desc: "Developed React-based UI components to modernize the insurance platform interface, improving responsiveness and maintainability. Integrated REST APIs for dynamic data rendering, applied Redux for state management, and collaborated in Agile ceremonies for timely feature delivery. Used Git and Jira for version control and task tracking."
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/cryptoCurrency.png"),
      projectName: "Crypto Trading Platform",
      projectDesc: "A full-stack cryptocurrency analytics dashboard built using React, Spring Boot, and MySQL. Displays live market data and 7-day price charts using CoinGecko API.",
      footerLink: [
         {
        name: "View on GitHub",
        url: "https://github.com/Chaitanya1819/Crypto_Currency/tree/main"  // replace with your actual repo URL
      }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/currencyconverter.jpg"), // Replace with actual image path
      projectName: "Currency Converter",
      projectDesc: "Built a responsive web app using HTML, CSS, and JavaScript to convert currencies in real-time using API data. Features dynamic UI updates, error handling, and mobile-friendly design.",
      footerLink: [
         {
        name: "View Project",
        url: "https://chaitanya1908.github.io/WebApp/lab03/" // Replace with actual live/demo link or GitHub repo
        }
    
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Upsilon Pi Epsilon UPE",
      subtitle:
        "Inducted into the International Honor Society for Computing and Information Disciplines for outstanding academic excellence in Information Technology.",
      image: require("./assets/images/upeLogo.jpg"),
      imageAlt: "UPE Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/17m_Gpn7eTXsPDN5UMqav-ell_xheGOjn/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1R-dORcNdkgk8PXPGyJYSRYzj0qgVUb7P/view?usp=sharing"
        },
        {
          name: "Upsilon Pi Epsilon UPE",
          url: " https://upe.acm.org"
        }
      ]
    },
    {
      title: "Uma and Arun Ahuja Graduate Fellowship",
      subtitle:
        "Awarded by Illinois Institute of Technology for outstanding academic performance in Information Technology and Management, with a focus on Management Information Systems.",
      image: require("./assets/images/IITLogo.png"),
      imageAlt: "Illinois Institute of Technology Logo",
      footerLink: [
        {
          name: "Explore Fellowship Details",
          url: "https://drive.google.com/file/d/1iPDEfgkjE0eZgu1KqP4BRnrubkeEBwxD/view?usp=sharing"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
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
  number: "+1 6303296042",
  email_address: "chaitanyabejjanki19@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
