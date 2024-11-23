export interface DetailedCandidate {
  id: string;
  firstName: string;
  lastName: string;
  matchScore: number;
  role: string;
  yearsOfExperience: number;
  location: string;
  education: {
    degree: string;
    school: string;
    year: number;
  }[];
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
  }[];
  languages: {
    name: string;
    level: string;
  }[];
  experience: {
    company: string;
    role: string;
    duration: string;
    description: string[];
  }[];
  summary: string;
}

export const mockCandidates: DetailedCandidate[] = [
  {
    id: '1',
    firstName: 'Sarah',
    lastName: 'Chen',
    matchScore: 95,
    role: 'Senior Frontend Developer',
    yearsOfExperience: 8,
    location: 'San Francisco, CA',
    education: [
      {
        degree: 'M.S. Computer Science',
        school: 'Stanford University',
        year: 2015
      },
      {
        degree: 'B.S. Computer Science',
        school: 'UC Berkeley',
        year: 2013
      }
    ],
    skills: [
      { name: 'React', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'Node.js', level: 'Advanced' },
      { name: 'GraphQL', level: 'Intermediate' }
    ],
    languages: [
      { name: 'English', level: 'Native' },
      { name: 'Mandarin', level: 'Native' },
      { name: 'Spanish', level: 'Intermediate' }
    ],
    experience: [
      {
        company: 'Tech Giant Inc.',
        role: 'Senior Frontend Engineer',
        duration: '2019 - Present',
        description: [
          'Led a team of 5 engineers in developing a new design system used across 20+ products',
          'Improved application performance by 40% through code optimization and lazy loading',
          'Implemented CI/CD pipeline reducing deployment time by 60%'
        ]
      },
      {
        company: 'StartupCo',
        role: 'Frontend Developer',
        duration: '2015 - 2019',
        description: [
          'Built responsive web applications using React and TypeScript',
          'Developed reusable component library used by multiple teams',
          'Mentored junior developers and led technical interviews'
        ]
      }
    ],
    summary: 'Experienced frontend developer with a strong focus on building scalable and performant web applications. Passionate about creating elegant user interfaces and mentoring other developers.'
  },
  {
    id: '2',
    firstName: 'Michael',
    lastName: 'Johnson',
    matchScore: 88,
    role: 'Frontend Developer',
    yearsOfExperience: 5,
    location: 'New York, NY',
    education: [
      {
        degree: 'B.S. Computer Science',
        school: 'NYU',
        year: 2018
      }
    ],
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'JavaScript', level: 'Expert' },
      { name: 'CSS', level: 'Expert' },
      { name: 'Vue.js', level: 'Intermediate' }
    ],
    languages: [
      { name: 'English', level: 'Native' },
      { name: 'French', level: 'Intermediate' }
    ],
    experience: [
      {
        company: 'Web Solutions Ltd',
        role: 'Frontend Developer',
        duration: '2018 - Present',
        description: [
          'Developed modern web applications using React and related technologies',
          'Implemented responsive designs for mobile-first applications',
          'Collaborated with UX team to improve user experience'
        ]
      }
    ],
    summary: 'Frontend developer with a keen eye for design and strong technical skills in modern web technologies.'
  },
  {
    id: '3',
    firstName: 'Emma',
    lastName: 'Wilson',
    matchScore: 85,
    role: 'Full Stack Developer',
    yearsOfExperience: 6,
    location: 'London, UK',
    education: [
      {
        degree: 'M.Eng. Software Engineering',
        school: 'Imperial College London',
        year: 2017
      }
    ],
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'Node.js', level: 'Expert' },
      { name: 'Python', level: 'Expert' },
      { name: 'AWS', level: 'Advanced' }
    ],
    languages: [
      { name: 'English', level: 'Native' },
      { name: 'German', level: 'Advanced' }
    ],
    experience: [
      {
        company: 'Global Tech Solutions',
        role: 'Full Stack Developer',
        duration: '2017 - Present',
        description: [
          'Architected and developed scalable microservices using Node.js and AWS',
          'Built and maintained React-based frontend applications',
          'Implemented automated testing reducing bug reports by 45%'
        ]
      }
    ],
    summary: 'Full stack developer with expertise in both frontend and backend technologies. Strong focus on building scalable and maintainable systems.'
  },
  {
    id: '4',
    firstName: 'Alex',
    lastName: 'Zhang',
    matchScore: 82,
    role: 'Frontend Developer',
    yearsOfExperience: 4,
    location: 'Toronto, Canada',
    education: [
      {
        degree: 'B.S. Software Engineering',
        school: 'University of Toronto',
        year: 2019
      }
    ],
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'Vue.js', level: 'Expert' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Expert' }
    ],
    languages: [
      { name: 'English', level: 'Native' },
      { name: 'Mandarin', level: 'Native' },
      { name: 'French', level: 'Basic' }
    ],
    experience: [
      {
        company: 'Digital Innovation Co',
        role: 'Frontend Developer',
        duration: '2019 - Present',
        description: [
          'Developed and maintained multiple Vue.js applications',
          'Implemented design systems using Tailwind CSS',
          'Led the migration from JavaScript to TypeScript'
        ]
      }
    ],
    summary: 'Frontend developer specializing in Vue.js and modern CSS frameworks. Passionate about creating beautiful and performant user interfaces.'
  },
  {
    id: '5',
    firstName: 'Sofia',
    lastName: 'Martinez',
    matchScore: 80,
    role: 'UI Developer',
    yearsOfExperience: 3,
    location: 'Barcelona, Spain',
    education: [
      {
        degree: 'B.A. Digital Design',
        school: 'Barcelona Design School',
        year: 2020
      }
    ],
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'CSS Animation', level: 'Expert' },
      { name: 'Figma', level: 'Expert' },
      { name: 'GSAP', level: 'Advanced' }
    ],
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Advanced' },
      { name: 'Catalan', level: 'Native' }
    ],
    experience: [
      {
        company: 'Creative Web Studio',
        role: 'UI Developer',
        duration: '2020 - Present',
        description: [
          'Created engaging web animations using GSAP and CSS',
          'Developed responsive React components with a focus on accessibility',
          'Collaborated with designers to implement pixel-perfect interfaces'
        ]
      }
    ],
    summary: 'UI Developer with a strong background in design. Specializes in creating engaging web animations and accessible user interfaces.'
  },
  {
    id: '6',
    firstName: 'Max',
    lastName: 'Kowalski',
    matchScore: 78,
    role: 'Backend Developer',
    yearsOfExperience: 4,
    location: 'Berlin, Germany',
    education: [
      {
        degree: 'B.Sc. Computer Science',
        school: 'Technical University of Berlin',
        year: 2018
      }
    ],
    skills: [
      { name: 'Node.js', level: 'Expert' },
      { name: 'Python', level: 'Advanced' },
      { name: 'Docker', level: 'Advanced' },
      { name: 'SQL', level: 'Intermediate' }
    ],
    languages: [
      { name: 'German', level: 'Native' },
      { name: 'English', level: 'Advanced' }
    ],
    experience: [
      {
        company: 'Cloud Services GmbH',
        role: 'Backend Developer',
        duration: '2018 - Present',
        description: [
          'Developed RESTful APIs using Node.js and Express',
          'Implemented microservices architecture with Docker containers',
          'Optimized database queries for improved performance'
        ]
      }
    ],
    summary: 'Backend developer with a focus on building scalable and efficient server-side applications. Experienced in Node.js and cloud technologies.'
  },
  {
    id: '7',
    firstName: 'Yuki',
    lastName: 'Tanaka',
    matchScore: 75,
    role: 'Full Stack Developer',
    yearsOfExperience: 5,
    location: 'Tokyo, Japan',
    education: [
      {
        degree: 'B.Eng. Computer Engineering',
        school: 'University of Tokyo',
        year: 2016
      }
    ],
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'Ruby on Rails', level: 'Expert' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'AWS', level: 'Intermediate' }
    ],
    languages: [
      { name: 'Japanese', level: 'Native' },
      { name: 'English', level: 'Advanced' }
    ],
    experience: [
      {
        company: 'Tech Innovations Inc',
        role: 'Full Stack Developer',
        duration: '2016 - Present',
        description: [
          'Developed web applications using Ruby on Rails and React',
          'Managed AWS infrastructure for deployment and scaling',
          'Collaborated with cross-functional teams to deliver projects on time'
        ]
      }
    ],
    summary: 'Full stack developer with a background in computer engineering. Experienced in building web applications with Ruby on Rails and React.'
  },
  {
    id: '8',
    firstName: 'Léa',
    lastName: 'Dubois',
    matchScore: 72,
    role: 'Software Engineer',
    yearsOfExperience: 6,
    location: 'Paris, France',
    education: [
      {
        degree: 'M.S. Computer Engineering',
        school: 'École Polytechnique',
        year: 2015
      }
    ],
    skills: [
      { name: 'Java', level: 'Expert' },
      { name: 'Spring Boot', level: 'Advanced' },
      { name: 'Kotlin', level: 'Advanced' },
      { name: 'Angular', level: 'Intermediate' }
    ],
    languages: [
      { name: 'French', level: 'Native' },
      { name: 'English', level: 'Advanced' }
    ],
    experience: [
      {
        company: 'Software Solutions SA',
        role: 'Software Engineer',
        duration: '201 5 - Present',
        description: [
          'Developed backend services using Java and Spring Boot',
          'Implemented RESTful APIs for internal and external use',
          'Mentored junior developers and conducted code reviews'
        ]
      }
    ],
    summary: 'Software engineer with expertise in Java and Spring Boot. Passionate about building scalable and reliable backend services.'
  },
  {
    id: '9',
    firstName: 'Luca',
    lastName: 'Ricci',
    matchScore: 70,
    role: 'DevOps Engineer',
    yearsOfExperience: 5,
    location: 'Milan, Italy',
    education: [
      {
        degree: 'B.Sc. Computer Science',
        school: 'Politecnico di Milano',
        year: 2018
      }
    ],
    skills: [
      { name: 'Docker', level: 'Expert' },
      { name: 'Kubernetes', level: 'Advanced' },
      { name: 'Terraform', level: 'Advanced' },
      { name: 'Jenkins', level: 'Intermediate' }
    ],
    languages: [
      { name: 'Italian', level: 'Native' },
      { name: 'English', level: 'Advanced' }
    ],
    experience: [
      {
        company: 'Cloud Services Italia',
        role: 'DevOps Engineer',
        duration: '2018 - Present',
        description: [
          'Managed containerized applications using Docker and Kubernetes',
          'Automated infrastructure provisioning with Terraform',
          'Implemented CI/CD pipelines for deployment automation'
        ]
      }
    ],
    summary: 'DevOps engineer with a focus on automation and cloud technologies. Experienced in managing containerized applications and CI/CD pipelines.'
  },
  {
    id: '10',
    firstName: 'Anna',
    lastName: 'Petrov',
    matchScore: 68,
    role: 'Frontend Developer',
    yearsOfExperience: 4,
    location: 'Moscow, Russia',
    education: [
      {
        degree: 'B.S. Web Development',
        school: 'Moscow State University',
        year: 2019
      }
    ],
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'Redux', level: 'Expert' },
      { name: 'SASS', level: 'Expert' },
      { name: 'Webpack', level: 'Intermediate' }
    ],
    languages: [
      { name: 'Russian', level: 'Native' },
      { name: 'English', level: 'Advanced' }
    ],
    experience: [
      {
        company: 'Digital Solutions',
        role: 'Frontend Developer',
        duration: '2019 - Present',
        description: [
          'Built complex React applications with Redux state management',
          'Implemented responsive designs with SASS',
          'Optimized application bundle size and loading performance'
        ]
      }
    ],
    summary: 'Frontend developer specializing in React and state management. Strong focus on performance optimization and responsive design.'
  },
  {
    id: '11',
    firstName: 'David',
    lastName: 'Kim',
    matchScore: 65,
    role: 'Full Stack Developer',
    yearsOfExperience: 3,
    location: 'Seoul, South Korea',
    education: [
      {
        degree: 'B.S. Software Engineering',
        school: 'Seoul National University',
        year: 2020
      }
    ],
    skills: [
      { name: 'Next.js', level: 'Advanced' },
      { name: 'MongoDB', level: 'Expert' },
      { name: 'Express.js', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' }
    ],
    languages: [
      { name: 'Korean', level: 'Native' },
      { name: 'English', level: 'Advanced' }
    ],
    experience: [
      {
        company: 'Tech Solutions Korea',
        role: 'Full Stack Developer',
        duration: '2020 - Present',
        description: [
          'Developed full-stack applications using MERN stack',
          'Implemented real-time features using WebSocket',
          'Optimized database queries and API performance'
        ]
      }
    ],
    summary: 'Full stack developer with expertise in MERN stack. Passionate about building real-time applications and optimizing performance.'
  },
  {
    id: '12',
    firstName: 'Maria',
    lastName: 'Garcia',
    matchScore: 63,
    role: 'UX Developer',
    yearsOfExperience: 5,
    location: 'Madrid, Spain',
    education: [
      {
        degree: 'M.A. Interactive Design',
        school: 'Universidad de Madrid',
        year: 2017
      }
    ],
    skills: [
      { name: 'Vue.js', level: 'Expert' },
      { name: 'UI Design', level: 'Expert' },
      { name: 'Accessibility', level: 'Advanced' },
      { name: 'Motion Design', level: 'Advanced' }
    ],
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Advanced' },
      { name: 'Portuguese', level: 'Intermediate' }
    ],
    experience: [
      {
        company: 'Digital Experience Agency',
        role: 'UX Developer',
        duration: '2017 - Present',
        description: [
          'Created accessible Vue.js components and interfaces',
          'Developed animation systems for web applications',
          'Collaborated with UX researchers to implement user feedback'
        ]
      }
    ],
    summary: 'UX Developer combining strong technical skills with design expertise. Focus on creating accessible and engaging user experiences.'
  }
,{
  id: '13',
  firstName: 'James',
  lastName: 'Anderson',
  matchScore: 61,
  role: 'Backend Developer',
  yearsOfExperience: 7,
  location: 'Sydney, Australia',
  education: [{
    degree: 'B.S. Software Engineering',
    school: 'University of Sydney',
    year: 2016
  }],
  skills: [
    { name: 'Python', level: 'Expert' },
    { name: 'Django', level: 'Expert' },
    { name: 'PostgreSQL', level: 'Advanced' },
    { name: 'Redis', level: 'Intermediate' }
  ],
  languages: [
    { name: 'English', level: 'Native' }
  ],
  experience: [{
    company: 'Tech Solutions Australia',
    role: 'Backend Developer',
    duration: '2016 - Present',
    description: [
      'Built scalable APIs using Django REST framework',
      'Optimized database performance and query efficiency',
      'Implemented caching strategies using Redis'
    ]
  }],
  summary: 'Backend developer specialized in Python and Django. Strong focus on database optimization and API design.'
},
{
  id: '14',
  firstName: 'Nina',
  lastName: 'Patel',
  matchScore: 59,
  role: 'Mobile Developer',
  yearsOfExperience: 4,
  location: 'Mumbai, India',
  education: [{
    degree: 'M.S. Mobile Computing',
    school: 'IIT Mumbai',
    year: 2019
  }],
  skills: [
    { name: 'React Native', level: 'Expert' },
    { name: 'iOS', level: 'Advanced' },
    { name: 'Android', level: 'Advanced' },
    { name: 'Firebase', level: 'Intermediate' }
  ],
  languages: [
    { name: 'Hindi', level: 'Native' },
    { name: 'English', level: 'Advanced' },
    { name: 'Gujarati', level: 'Native' }
  ],
  experience: [{
    company: 'Mobile Apps India',
    role: 'Mobile Developer',
    duration: '2019 - Present',
    description: [
      'Developed cross-platform mobile applications using React Native',
      'Implemented push notifications and real-time updates',
      'Optimized app performance and reduced load times'
    ]
  }],
  summary: 'Mobile developer with expertise in React Native and native platforms. Focused on creating performant cross-platform applications.'
},
{
  id: '15',
  firstName: 'Thomas',
  lastName: 'Mueller',
  matchScore: 57,
  role: 'Cloud Architect',
  yearsOfExperience: 8,
  location: 'Munich, Germany',
  education: [{
    degree: 'M.S. Cloud Computing',
    school: 'TU Munich',
    year: 2015
  }],
  skills: [
    { name: 'AWS', level: 'Expert' },
    { name: 'Terraform', level: 'Expert' },
    { name: 'Kubernetes', level: 'Advanced' },
    { name: 'Python', level: 'Advanced' }
  ],
  languages: [
    { name: 'German', level: 'Native' },
    { name: 'English', level: 'Advanced' }
  ],
  experience: [{
    company: 'Cloud Solutions GmbH',
    role: 'Cloud Architect',
    duration: '2015 - Present',
    description: [
      'Designed and implemented cloud infrastructure on AWS',
      'Managed multi-region Kubernetes clusters',
      'Reduced infrastructure costs by 30% through optimization'
    ]
  }],
  summary: 'Cloud architect with deep expertise in AWS and infrastructure as code. Focus on scalable and cost-effective solutions.'
},
{
  id: '16',
  firstName: 'Sophie',
  lastName: 'Bernard',
  matchScore: 55,
  role: 'Data Engineer',
  yearsOfExperience: 5,
  location: 'Montreal, Canada',
  education: [{
    degree: 'M.S. Data Science',
    school: 'McGill University',
    year: 2018
  }],
  skills: [
    { name: 'Python', level: 'Expert' },
    { name: 'Apache Spark', level: 'Advanced' },
    { name: 'SQL', level: 'Expert' },
    { name: 'Airflow', level: 'Intermediate' }
  ],
  languages: [
    { name: 'French', level: 'Native' },
    { name: 'English', level: 'Advanced' }
  ],
  experience: [{
    company: 'Data Analytics Co',
    role: 'Data Engineer',
    duration: '2018 - Present',
    description: [
      'Built data pipelines processing 5TB of daily data',
      'Implemented ETL workflows using Apache Spark',
      'Optimized data warehouse performance'
    ]
  }],
  summary: 'Data engineer specialized in building scalable data pipelines and ETL processes. Strong background in data warehousing.'
},
{
  id: '17',
  firstName: 'Carlos',
  lastName: 'Silva',
  matchScore: 53,
  role: 'Security Engineer',
  yearsOfExperience: 6,
  location: 'São Paulo, Brazil',
  education: [{
    degree: 'B.S. Cybersecurity',
    school: 'USP',
    year: 2017
  }],
  skills: [
    { name: 'Penetration Testing', level: 'Expert' },
    { name: 'Python', level: 'Advanced' },
    { name: 'Network Security', level: 'Expert' },
    { name: 'Cloud Security', level: 'Advanced' }
  ],
  languages: [
    { name: 'Portuguese', level: 'Native' },
    { name: 'English', level: 'Advanced' },
    { name: 'Spanish', level: 'Intermediate' }
  ],
  experience: [{
    company: 'Security Solutions Brasil',
    role: 'Security Engineer',
    duration: '2017 - Present',
    description: [
      'Conducted security audits and penetration testing',
      'Implemented security best practices across cloud infrastructure',
      'Developed automated security scanning tools'
    ]
  }],
  summary: 'Security engineer focused on cloud security and penetration testing. Expert in implementing secure infrastructure.'
},
{
  id: '18',
  firstName: 'Elena',
  lastName: 'Popov',
  matchScore: 51,
  role: 'ML Engineer',
  yearsOfExperience: 4,
  location: 'Stockholm, Sweden',
  education: [{
    degree: 'PhD Machine Learning',
    school: 'KTH Royal Institute',
    year: 2019
  }],
  skills: [
    { name: 'TensorFlow', level: 'Expert' },
    { name: 'Python', level: 'Expert' },
    { name: 'PyTorch', level: 'Advanced' },
    { name: 'MLOps', level: 'Intermediate' }
  ],
  languages: [
    { name: 'Russian', level: 'Native' },
    { name: 'English', level: 'Advanced' },
    { name: 'Swedish', level: 'Intermediate' }
  ],
  experience: [{
    company: 'AI Solutions AB',
    role: 'ML Engineer',
    duration: '2019 - Present',
    description: [
      'Developed and deployed machine learning models',
      'Optimized model training pipelines',
      'Implemented ML monitoring systems'
    ]
  }],
  summary: 'Machine learning engineer with PhD background. Specialized in developing and deploying production ML systems.'
},
{
  id: '19',
  firstName: 'Ahmed',
  lastName: 'Hassan',
  matchScore: 49,
  role: 'DevOps Engineer',
  yearsOfExperience: 5,
  location: 'Dubai, UAE',
  education: [{
    degree: 'B.S. Computer Engineering',
    school: 'American University of Dubai',
    year: 2018
  }],
  skills: [
    { name: 'Kubernetes', level: 'Expert' },
    { name: 'AWS', level: 'Advanced' },
    { name: 'GitLab CI', level: 'Expert' },
    { name: 'Ansible', level: 'Advanced' }
  ],
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Advanced' }
  ],
  experience: [{
    company: 'Cloud Tech UAE',
    role: 'DevOps Engineer',
    duration: '2018 - Present',
    description: [
      'Managed Kubernetes clusters across multiple clouds',
      'Implemented GitOps practices for deployment',
      'Automated infrastructure provisioning'
    ]
  }],
  summary: 'DevOps engineer specialized in Kubernetes and GitOps. Focus on automation and continuous deployment.'
},
{
  id: '20',
  firstName: 'Isabella',
  lastName: 'Rossi',
  matchScore: 47,
  role: 'Frontend Developer',
  yearsOfExperience: 3,
  location: 'Rome, Italy',
  education: [{
    degree: 'B.A. Web Design',
    school: 'University of Rome',
    year: 2020
  }],
  skills: [
    { name: 'Angular', level: 'Expert' },
    { name: 'SCSS', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'RxJS', level: 'Intermediate' }
  ],
  languages: [
    { name: 'Italian', level: 'Native' },
    { name: 'English', level: 'Advanced' }
  ],
  experience: [{
    company: 'Web Studio Italia',
    role: 'Frontend Developer',
    duration: '2020 - Present',
    description: [
      'Developed enterprise applications using Angular',
      'Implemented complex state management with RxJS',
      'Created reusable component libraries'
    ]
  }],
  summary: 'Frontend developer specialized in Angular and TypeScript. Strong focus on component architecture and state management.'
}
];
