import ContractLogixRecommendation from "../src/GregorySmelkovContractLogixRecommendation.pdf";

export default {
  sections: [
    {
      title: "Work Experience",
      id: "work",
      items: [
        {
          title: "Markforged",
          date: "Jul 2022 - Present",
          links: [
            {
              type: "website",
              url: "https://markforged.com/",
            },
          ],
          about: [
            {
              header: "Software Engineer II",
              text: [
                "Currently working on expanding internal tools to visualize data from the printers to support faster hardware development (TypeScript, Node.js, React, PostgreSQL)",
              ],
            },
            {
              header: "Software Engineer",
              text: [
                "Worked on Eiger, the core web-app, to expaned user capabilities when it comes to managing their parts and 3D printers (JavaScript, Node.js, Angular, PostgreSQL)",
                "Specifically worked on the inspection tool to identify defects in printed parts and integrating part simulations into Eiger which can predict part behavior under user defined loads",
              ],
            },
          ],
        },
        {
          title: "Rivet Health",
          date: "Jun 2021 - Jul 2022",
          links: [
            {
              type: "website",
              url: "https://www.rivethealth.com/",
            },
          ],
          about: [
            {
              header: "Software Engineer",
              text: [
                "Contributed to a SaaS web-app to make healthcare billing more transparent and seamless (TypeScript, Node.js, Angular, PostgreSQL)",
                "Developing features to improve user experience in regard to data visibility with a focus on code quality",
                "Writing automated tests using Jest",
              ],
            },
          ],
        },
        {
          title: "Contract Logix",
          date: "Sep 2019 - Dec 2020",
          links: [
            {
              type: "website",
              url: "https://www.contractlogix.com/",
            },
            {
              type: "file",
              url: ContractLogixRecommendation,
              text: "Recommendation Letter",
            },
          ],
          about: [
            {
              header: "Software Developer Intern",
              text: [
                "Worked as a part of the development team on the existing contract management .NET web-app",
                "Improved user experience by implementing new features and resolving bugs (C#, JavaScript)",
                "Contributed to design and development of collaboration portal to streamline client contracts",
                "Created database migrations and used SSMS to write and run SQL queries (SQL)",
              ],
            },
          ],
        },
        {
          title: "MITRE Corporation",
          date: "May 2019 - Aug 2019",
          links: [
            {
              type: "website",
              url: "https://www.mitre.org/",
            },
          ],
          about: [
            {
              header: "Software Engineering Intern",
              text: [
                "Worked alongside full-time developers as a member of an Agile/Scrum team on a DoD sponsored mission planning system",
                "Implemented many new features, identified and fixed bugs in existing .NET application (C#)",
                "Adapted a microservice into a Docker container to run with the rest of the service infrastructure",
              ],
            },
          ],
        },
        {
          title: "Text Machine Lab",
          date: "Jun 2018 - May 2019",
          links: [
            {
              type: "website",
              url: "https://text-machine.cs.uml.edu/lab2/",
            },
            {
              type: "file",
              url: "https://arxiv.org/abs/1908.11443",
              text: "NarrativeTime Research Paper",
            },
          ],
          about: [
            {
              header: "Research Intern",
              text: [
                "Designed and developed an interface for a research paper to annotate articles and other texts with regard to time.",
                "The new tool, NarrativeTime, allows for to simplify and expedite the process to create annotated datasets (JavaScript, HTML)",
                "Co-author on NarrativeTime research paper about temporal annotation tool",
                "Implemented a tool to annotate posts for calls-to-action to predict political unrest (Python)",
                "Created a program to extract user conversations from Reddit for teaching chat bots (Python)",
                "Wrote a script to scrape and format text from news articles for a temporal dataset (Python)",
              ],
            },
          ],
        },
        {
          title: "Empow Studios",
          date: "Jun 2016 - Oct 2018",
          links: [
            {
              type: "website",
              url: "https://empow.me/",
            },
          ],
          about: [
            {
              header: "Lead Instructor",
              text: [
                "Taught game design, robotics, animation, and programming to elementary and middle school students",
              ],
            },
            {
              header: "Marketing/Operations Intern",
              text: [
                "Gathered marketing information and generated promotional materials",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Education",
      id: "education",
      items: [
        {
          title: "UMass Amherst",
          date: "Jan 2021 - Dec 2022",
          links: [
            {
              type: "website",
              url: "https://www.cics.umass.edu/",
            },
          ],
          about: [
            {
              header: "Masters in Computer Science",
              text: [
                "Decided to further my education while working part time to dive deeper into topics I had found interesting in undergrad, GPA: 3.7",
                "Notable courses: Machine Learning, Neural Networks, Optimization, Wireless Networking & Sensing, Intelligent Visual Computing, Advanced Algorithms",
              ],
            },
          ],
        },
        {
          title: "UMass Lowell",
          date: "Aug 2017 - Dec 2020",
          links: [
            {
              type: "website",
              url: "https://www.uml.edu/sciences/computer-science/",
            },
          ],
          about: [
            {
              header: "Bachelors in Computer Science",
              text: [
                "Minor in Business Administration",
                "Minor in Math",
                "3.9 GPA, Dean's List, Graduated Summa Cum Laude",
                "Notable courses: Software Engineering, Analysis of Algorithms, Operating Systems, Foundations of CS, Organization of Programming Languages",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Projects",
      id: "projects",
      items: [
        {
          title: "Photography Portfolio",
          date: "Nov 2023",
          links: [
            {
              type: "github",
              url: "https://github.com/IsItGreg/PhotoPortfolio",
            },
            {
              type: "website",
              url: "https://photo.gsme.dev/",
            },
          ],
          about: [
            {
              header: "photo.gsme.dev",
              text: [
                "This is a portfolio of some of my photography from the past few years. I didn't really have a good way of sharing my favorite photos, so I figured it could be a fun project.",
                "This was built using React, Sass, and Typescript and hosted on GitHub pages. It ended up being a great way to experiment with various design ideas and practice some front-end development skills.",
              ],
            },
          ],
        },
        {
          title: "Grad School Projects",
          date: "Jan 2021 - Dec 2022",
          about: [
            {
              header: "Cooperative Robot Simulation",
              text: [
                "Designed a small simulation of robots trying to solve a goal using Markov Decision Processes and Q-Learning (Python)",
              ],
            },
            {
              header: "Image2Minecraft",
              text: [
                "Created a pipeline to convert 2D images into voxelized models within Minecraft (Python)",
              ],
            },
            {
              header: "Tablut AI",
              text: [
                "Worked to build and train an AI to play the game Tablut using reinforcement learning (Python)",
              ],
            },
          ],
        },
        {
          title: "Cage Inventory Management System",
          date: "Jun 2020 - Dec 2020",
          links: [
            {
              type: "github",
              url: "https://github.com/IsItGreg/CageIMS",
            },
          ],
          about: [
            {
              header: "Camera inventory management web-app",
              text: [
                "Lead the design and development on a full-stack inventory management solution for the photography department at UMass Lowell",
                "Built using React, Node.js, and MongoDB, this project was fun to create as it allowed me to learn those tools as well as RESTful APIs, managing user passwords, and all that goes into a larger project",
                "The front-end UI was implemented in React using Bootstrap, Material-UI, Semantic UI, and Sass",
              ],
            },
          ],
        },
        {
          title: "Personal Website",
          date: "Aug 2020, May 2022",
          links: [
            {
              type: "github",
              url: "https://github.com/IsItGreg/gsme.dev",
            },
          ],
          about: [
            {
              header: "gsme.dev",
              text: [
                "This website was intended to be a digital version of my resume and an opportunity to learn responsive design, React, and Bootstrap",
                "I built this site using React, Bootstrap, and hosted on GitHub pages and you can find the source code on my GitHub",
              ],
            },
          ],
        },
        {
          title: "Freshman / Sophomore Projects",
          date: "Sep 2017 - Dec 2018",
          about: [
            {
              header: "Ants and Doodlebugs",
              text: [
                "Developed a small simulation to show a balance between predators and prey (C++)",
              ],
            },
            {
              header: "Big Int",
              text: [
                "Created a class to handle mathematical operations with extremely large numbers by storing the data as strings (C++)",
              ],
            },
            {
              header: "Evil Hangman",
              text: [
                "Programmed a console game of hangman where the computer will cheat to win (C)",
              ],
            },
          ],
        },
      ],
    },
  ],
};
