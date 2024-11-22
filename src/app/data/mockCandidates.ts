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
  }
];
