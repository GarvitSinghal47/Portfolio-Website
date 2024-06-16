/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Garvit's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Garvit Singhal Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Garvit Singhal",
  logo_name: "GarvitSinghal",
  nickname: "GarvitSinghal",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1pJcHJRSD-Huin2hUkusDI2T7I-q4ynrT/view",
  portfolio_repository: "https://github.com/GarvitSinghal47/Portfolio-Website",
  githubProfile: "https://github.com/GarvitSinghal47",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/GarvitSinghal47",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/garvit-singhal/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:garvitsinghal52@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/GarvitSinghal47",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front ends using React,Vue.js,Next.js",
        "⚡ Creating application backends using Node.js, Express, and Flask , Django",
        "⚡ Utilizing TypeScript for type-safe JavaScript development",
        "⚡ Implementing state management with Redux and GraphQL",
        "⚡ Styling with CSS3, Bootstrap, and D3.js for data visualization",
        "⚡ Managing packages with NPM and Yarn",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:veed",
          style: {
            color: "#4FC08D",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#E10098",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "D3.js",
          fontAwesomeClassname: "simple-icons:d3dotjs",
          style: {
            color: "#F9A03C",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on AWS cloud platform",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up and managing containerized applications with Docker and Kubernetes",
        "⚡ Automating CI/CD pipelines with GitHub Actions",
        "⚡ Working with both SQL (PostgreSQL) and NoSQL (MongoDB) databases",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "GH Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Garvit_singhal/",
    },

    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/garvit_47",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/garvit_singhal",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@Garvit391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "KIET Group of Institutions",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "Kiet_logo.png",
      alt_name: "KIET Group of Institutions",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.kiet.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/8DYPN5NKSX4A",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Exploratory Data Analysis for Machine Learning",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/EKVDH5FG4SHX",
      alt_name: "IBM",
      color_code: "#000000",
    },
    {
      title: "Web Design for Everybody",
      subtitle: "- University of Michigan",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/KEXV3E363WNT",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with various startups as a Full Stack Developer and have experience of developing scalable web applications. I love to contribute to Open Source and have a good experience of working with communities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Developer Intern",
          company: "Susalabs (SusaKGjyo Business Private Limited)",
          company_url: "https://susalabs.com/",
          logo_path: "susalabs_logo.png",
          duration: "Sep 2023 - Nov 2023",
          location: "Remote , India",
          description: [
            " Contributed to an integrated solution, involving various frontend and backend components for both user and admin interfaces. Configured and deployed the application on IIS, addressing security issues and improving network robustness, leading to a 65% reduction in vulnerabilities. Implemented connector to consolidate data from three SQL databases, optimizing information flow for improved efficiency.",
          ],
          color: "#000000",
        },
        {
          title: "Full Stack Developer Intern",
          company: "Sarathi",
          company_url: "",
          logo_path: "none.jpg",
          duration: "Nov 2022 - Jan 2022",
          location: "Remote , India",
          description: [
            " • Created a backend responsible for managing data processing and communication for both the website and the app.",
            " Developed an admin(controllers) website that provides information and interaction to the user app.",
            " Experienced in Arduino C++ development, which gives strong understanding of sensors and microcontrollers for IoT devices.",
          ],
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Core Team Member",
          company: "Devup",
          company_url: "https://www.linkedin.com/company/devupkiet/mycompany/",
          logo_path: "devupkiet_logo.jfif",
          duration: "Nov 2022 - Present",
          location: "Ghaziabad , Uttar Pradesh",
          description:
            "Devup is a club in KIET Group of Institutions that is focused on Development and Open Source. We have organised many workshops , seminars and contests on Development and Open Source.",
          color: "#4285F4",
        },
        {
          title: "Member at Kiet-Koders-Korner",
          company: "Kiet-Koders-Korner",
          company_url:
            "https://www.linkedin.com/company/kiet-koders-korner/mycompany/",
          logo_path: "k3.jfif",
          duration: "Oct 2022 - Present",
          location: "Ghaziabad , Uttar Pradesh",
          description:
            "Kiet-Koders-Korner is a club in KIET Group of Institutions that is focused on Competitive Programming and Development. We have organised many workshops , seminars and contests on Competitive Programming.",
          color: "#4285F4",
        },
        {
          title: "MLSA - Beta",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Feb 2023 - Current",
          location: "Remote , India",
          description:
            " Microsoft Learn Student Ambassadors are a global group of campus members who are eager to help fellow students, create robust tech communities, and develop technical and career skills for the future. As a Student Ambassador, I have the opportunity to build my skills and career, grow my community, and help others do the same.",
          color: "#D83B01",
        },
        {
          title: "Member at DSDL Kiet",
          company: "DSDL",
          company_url: "https://www.linkedin.com/company/dsdl-club/",
          logo_path: "Dsdl_logo.jfif",
          duration: "Jan 2022 - May 2022",
          location: "Ghaziabad , Uttar Pradesh",
          description:
            "DSDL is a club in KIET Group of Institutions that is focused on Data Science and Deep Learning. We have organised many workshops and seminars on Data Science, Machine Learning and Deep Learning.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC KIET",
          company_url: "https://www.linkedin.com/company/gdsc-kiet/",
          logo_path: "dsckiet_logo.jfif",
          duration: "May 2022 - Dec 2022",
          location: "Ghaziabad , Uttar Pradesh",
          description:
            "Developer Students Club is a Google Developers program for university students to learn mobile and web development skills. We have conducted many workshops, seminars and hands-on training sessions.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Machine Learning and Open CV projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Garvit_singhal.jpeg",
    description:
      "I am available on almost every social media. You can message me, I can help you with ML, AI,  Web Dev, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://knowlegdeninja.blogspot.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
