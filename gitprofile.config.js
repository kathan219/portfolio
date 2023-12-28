// gitprofile.config.js

const config = {
  github: {
    username: 'kathan219', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'kathan-soni',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'kathansoni219@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1LltnrCCqMnHDzVtn6YymJwqBB21TyCGJ/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'C++',
    'Python',
    'JavaScript',
    'Scala',
    'Spark',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Kibana'
  ],
  experiences: [
    {
      company: 'Rydot Infotech Pvt. Ltd',
      position: 'Junior Software Engineer',
      from: 'September 2022',
      to: 'June 2023',
      companyLink: 'https://www.rydotinfotech.com/',
    },
    {
      company: 'Softvan Technologies Pvt Ltd',
      position: 'Java Developer Intern',
      from: 'Dec 2021',
      to: 'May 2022',
      companyLink: 'https://softvan.in/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Carleton University',
      degree: 'Masters of Software Engineering',
      from: 'September 2023',
      to: 'April 2025',
    },
    {
      institution: 'Gandhinagar Institute of Technology',
      degree: 'Bachelors of Computer Engineering',
      from: 'June 2018',
      to: 'June 2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Storage Manager',
      description:
        'Developed a storage management system called Storage Manager, reducing data storage costs by 20% by utilizing Amazon S3 efficient storage infrastructure. The system provides secure cloud data storage, encryption of cloud data, keeping control of your data, controlling your file activity and versioning, and protecting files by two-factor authentication, increasing data security by 30% by implementing encryption of cloud data and two-factor authentication. Enhanced system performance by 15% by optimizing code and utilizing efficient data structures. Implemented using Waterfall process model, streamlining the development process by 25% by following the Waterfall process model.',
      imageUrl: 'https://drive.google.com/file/d/1J66H5foZmeeJvD_LRK9IO3gj3Y6Dxja_/view?usp=drive_link',
    },
    {
      title: 'Conversation Intelligence to Automate Booking',
      description:
        'Reduced flight booking time by 15% by implementing a voice-based assistant that streamlines the booking process and provides personalized recommendations. Increased user engagement by 20% by introducing a voice-based interface that offers a more intuitive and engaging experience for booking flights. Reduced development time by 25% by utilizing Java Spring Boot Framework, Spring Security, HTML/CSS, and AWS Lambda, enabling rapid development and deployment of new features. Enhanced system scalability by 30% by leveraging Amazon RDS and AWS Lambda, ensuring seamless handling of increased user traffic and data volume.',
      imageUrl: 'https://drive.google.com/file/d/1iTH7ZLqRGe-5UcqtdRqKjZGnb1pgSlG8/view?usp=sharing',
      link: 'https://github.com/kathan219/FlightBooking',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-E15Z03STVT', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
