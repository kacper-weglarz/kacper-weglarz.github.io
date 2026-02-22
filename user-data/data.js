const data ={
  "bio": [
      "Computer Science student and IT Systems Administrator in the Polish Armed Forces. I bridge the gap between mission-critical infrastructure management and modern backend development.",
      "My technical focus is on building scalable Java applications with Spring Boot. I combine military discipline with a deep understanding of server environments to deliver secure and efficient software solutions."
  ],
    "skills": [
        "Java & Spring Boot",
        "JPA & Hibernate",
        "REST API Design",
        "PostgreSQL & MySQL",
        "Git & GitHub",
        "Maven",
        "JUnit 5",
        "IntelliJ IDEA",
        "Docker & Containerization",
        "Windows System Administration",
        "Network Infrastructure & Security",
    ],
    "experience": [
        {
            "title": "Geospatial Intelligence & Satellite Services Agency",
            "duration": "December 2024 - Present",
            "subtitle": "IT Systems Administrator",
            "details": [
                "Administer server infrastructure and network equipment for military communications systems.",
                "Configure and deploy core network hardware including switches, routers, and distribution equipment.",
                "Provide technical support through internal helpdesk for hardware, software, and network issues.",
                "Participate in test environment infrastructure setup, including server configuration and network implementation.",
                "Deploy and configure server hardware and networking equipment in production environment.",
                "Maintain system documentation and follow military IT security protocols."
            ],
            "tags": [
                "System Administration",
                "Network Configuration",
                "Helpdesk Support",
                "Server Infrastructure",
                "IT Security"
            ],
            "icon": "server"
        },
    ],
    "education": [
        {
            "title": "Computer Science",
            "duration": "2024 - Present",
            "subtitle": "WSB Merito University, Warsaw",
            "details": [
                "Currently pursuing degree in Computer Science",
                "Focus: Software Development, Algorithms, Database Systems"
            ],
            "tags": ["Java", "Spring Boot", "Software Engineering"],
            "icon": "graduation-cap"
        },
        {
            "title": "Mechatronics Engineering",
            "duration": "2022 - 2024",
            "subtitle": "Military University of Technology (WAT), Warsaw",
            "details": [
                "Completed 2 years of engineering coursework",
                "Relevant courses: Programming, Mathematics, Physics, Electronics.",
                "Transitioned to Computer Science to focus on software development"
            ],
            "tags": ["Engineering", "Programming Fundamentals"],
            "icon": "book"
        }
    ],
  "contactLinks": [
    {
      "label": "Email",
      "link": "mailto:kacperw268@gmail.com",
      "icon": "fa fa-envelope"
    },
    {
      "label": "LinkedIn",
      "link": "https://www.linkedin.com/in/kacper-węglarz-53627a382",
      "icon": "fa-brands fa-linkedin"
    },
    {
      "label": "GitHub",
      "link": "https://github.com/kacper-weglarz/kacper-weglarz.github.io",
      "icon": "fa-brands fa-github"
    },
  ],
  "footer": [
    {
      //"label": "Links",
      "data": [
        {
          //"text": "Github",
          //"link": "https://github.com/kacper-weglarz/kacper-weglarz.github.io"
        },
          {
              //"text": "LinkedIn",
              //"link": "www.linkedin.com/in/kacper-węglarz-53627a382"
          }
      ]
    },
    {
      "label": "copyright-text",
      "data": [
        ""
      ]
    }
  ]
}

export const bio = data.bio;

export const skills = data.skills;

export const experience = data.experience

export const education = data.education

export const contactLinks = data.contactLinks

export const footer = data.footer;
