import React from "react";

export default {
  skills: [
    {
      title: "Contact",
      content: [
        [
          <a href="mailto:javiyesares@gmail.com">javiyesares@gmail.com</a>,
          "envelope"
        ],
        [<a href="tel:0034657090783">+34 657 090 783</a>, "phone"],
        [
          <a href="https://github.com/jyesares" target="_blank">
            jyesares
          </a>,
          "github"
        ],
        [
          <a href="https://www.linkedin.com/in/fjyesares/" target="_blank">
            fjyesares
          </a>,
          "linkedin"
        ],
        [
          <a href="http://www.jyesares.com" target="_blank">
            www.jyesares.com
          </a>,
          "world"
        ]
      ]
    },
    {
      title: "About me",
      content: [
        "Teamwork",
        "Creative",
        "Proactive",
        "Good at communication with other expertises",
        "Good at analysis and synthesis",
        "Good organization and planning",
        "Quality orientated",
        "Ability to work autonomously",
        "Initiative and entrepreneurship",
        "Capacity for decision making",
        "Leadership skills"
      ]
    },
    {
      title: "Skills",
      content: [
        "Javascript (ES6)",
        "NodeJS",
        "Loopback",
        "Express",
        "ReactJS",
        "NextJS",
        "Jest",
        "Mocha / Chai",
        "Jenkins",
        "Docker",
        "OpenShift",
        "Github",
        "TDD",
        "BDD"
      ]
    },
    {
      title: "Languages",
      content: ["Spanish (Native)", "English (Fluent)", "German (Low)"]
    },
    {
      title: "Hobbies",
      content: ["Reading", "Music", "Cooking", "Films", "Sport"]
    }
  ],
  blocks: {
    experience: [
      {
        title: "SOFTWARE ENGINEER - AXA Group Operations",
        date: "January 2020 - January 2022",
        description: [
          "Building job offer platform with an integrated search engine (AXA Jobs)",
          "Working in a fraud detection solution (Sherlock)",
          "Building a news portal with (nextjs/reactjs/nodejs)",
          "Working with agile software development and Continuous Integration. Automated build, test and deployment."
        ],
        techs: [
          "Technologies: Javascript, NodeJS, ReactJS",
          "Frameworks: Nextjs",
          "Testing: Jest",
          "Libraries: elasticlunr",
          "DevOps: Docker, Docker-Compose, OpenShift, Jenkins",
          "Version Control: Github, Git-flow",
          "Agile Software: Jira, Confluence"
        ]
      },
      {
        title: "NODEJS - REACTJS DEVELOPER - Altran (AXA Group Operations)",
        date: "December 2015 - January 2020",
        description: [
          "Building APIs with NodeJS (Express, Loopback, NextJS).",
          "Making APPs with ReactJS (Redux)",
          "Working with agile software development and Continuous Integration. Automated build, test and deployment."
        ],
        techs: [
          "Technologies: JavaScript, NodeJS, ReactJS",
          "Frameworks: Loopback, NextJS",
          "Testing: Jest, Mocha, Chai",
          "DevOps: Docker, Docker-Compose, OpenShift, Jenkins",
          "Version Control: Github, Git-flow",
          "Agile Software: Jira, Confluence"
        ]
      },
      {
        title: "JAVA DEVELOPER - Capgemini (Gas Natural Fenosa)",
        date: "March 2015 - December 2015",
        description: [
          "Developing a virtual branch office for Gas Natural as J2EEdeveloper with several frameworks.",
          "CSM Platform with Fatwire."
        ],
        techs: [
          "Technologies: J2EE, HTML, JSP, CSS, JavaScript, jQuery, SQL",
          "Frameworks: Struts, Hibernate, Fatwire",
          "Tools: SVN"
        ]
      },
      {
        title: "PHP DEVELOPER - Internship (University of Granada)",
        date: "January 2014 - Juny 2014",
        description: [
          "Developing a Web of Trivial project of University of Granada."
        ],
        techs: ["Technologies: PHP, HTML, CSS, JavaScript, Ajax, SQL"]
      },
      {
        title: "FREELANCE- Atrepar (Startup)",
        date: "February 2014 - April 2014",
        description: [
          "Design, development and maintenance of MySQL database.",
          "Local server management (XAMPP) and domains."
        ]
      },
      {
        title: "PHP DEVELOPER - Codigonexo (Granada)",
        date: "November 2012 - February 2013",
        description: [
          "Joomla! module to allow access only certain countries to web by geolocation."
        ],
        techs: ["Technologies: PHP, HTML, CSS, JavaScript, Joomla!, VirtueMart"]
      }
    ],
    education: [
      {
        title: ["Master Engineer's Degree in Computer Science and Engineering"],
        subtitle: ["University of Granada"],
        date: "September 2011 - Currently"
      },
      {
        title: ["Master Engineer's Degree in Computer Science and Engineering"],
        subtitle: [
          "Erasmus at Brandenburgische Technische Universität Cottbus-Senftenberg, Germany"
        ],
        date: "September 2011 - Julio 2012"
      },
      {
        title: [
          "Bachelor Engineer's Degree in Computer Science and Engineering"
        ],
        subtitle: ["University of Granada"],
        date: "September 2007 - Juny 2014"
      },
      {
        title: ["Web 2.0: Interactive Services with PHP and MySQL"],
        subtitle: ["University of Granada"],
        date: "April 2008"
      }
    ]
  }
};
