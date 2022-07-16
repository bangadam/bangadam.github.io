// gitprofile.config.js

const config = {
  github: {
    username: 'bangadam', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [
        'BelajarJava',
        'rest-api-lumen',
        'spk-smart-topsis',
        'bangadam.github.io',
        'bangadam',
        'quotes',
        'journey-go',
        'go-api-todo',
        'laravel-masjid-GIS',
        'LaraMesmo',
        'Movie-Catalogue',
        'laravel-anonymous-chat',
        'Create-Solana-NFT-Collection',
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'bangadam',
    twitter: 'bangadam_dev',
    facebook: 'bangadam.dev',
    instagram: 'bangadam.dev',
    dribbble: '',
    behance: '',
    medium: 'bangadam-dev',
    dev: 'bangadam.dev',
    website: 'https://bangadam.github.io',
    phone: '',
    email: 'bangadam.dev@gmail.com',
  },
  skills: [
    'PHP',
    'Golang',
    'Fiber',
    'Echo',
    'Laravel',
    'JavaScript',
    'Node.js',
    'Jquery',
    'MySQL',
    'PostgreSQL',
    'Elasticsearch',
    'Git',
    'Docker',
    'Unit Testing',
    'CSS',
    'Tailwind',
    'Bootstrap',
  ],
  experiences: [
    {
      company: 'Develious',
      position: 'Backend Engineer',
      from: 'May 2022',
      to: 'Present',
    },
    {
      company: 'PT KB Finansia Multi Finance',
      position: 'Golang Developer',
      from: 'May 2022',
      to: 'Present',
    },
    {
      company: 'PT. Sekar Tekno Kreatif (esteh.id)',
      position: 'Fullstack Developer',
      from: 'December 2021',
      to: 'March 2022',
    },
    {
      company: 'PT. Datamax Technology Indonesia',
      position: 'Backend Engineer',
      from: 'April 2021',
      to: 'December 2022',
    },
    {
      company: 'PT. Ergossum Sukses Makmur',
      position: 'Fullstack Developer',
      from: 'August 2020',
      to: 'February 2021',
    },
    {
      company: 'PTIPD Maulana Malik Ibrahim State Islamic University Malang',
      position: 'Fullstack Developer',
      from: 'January 2020',
      to: 'June 2020',
    },
    {
      company: 'PT. Easytech IT Solution',
      position: 'Fullstack Developer',
      from: 'July 2017',
      to: 'August 2018',
    },
  ],
  education: [
    {
      institution: 'Maulana Malik Ibrahim State Islamic University Malang',
      degree: 'Bachelor of Computer Science',
      from: '2018',
      to: 'present',
    },
  ],
  projects: [
    {
      name: 'Pasarin.id',
      url: 'https://pasarin.co.id/',
      description:
        'Building a service API for the Marketplace website "pasarin.id", besides that I contribute to building APIs for product services, transaction services, back-office services, chat services, third-party API integration such as Gosend, JNE & JNT, elastic search integration, and setting API gateway using KONG.',
    },
    {
      name: 'Ayopppk',
      url: 'https://ayopppk.com',
      description:
        'Ayoppk is a platform to learn about preparation for PPPK official work, here I help create APIs, design website administrators and also process online exams.',
    },
    {
      name: 'Rumah Pekerja Indonesia',
      url: 'https://rumahpekerja.id',
      description:
        'I contributed in developing REST API, layouting design to html, integrating Finpay Emoney payments in the transaction process..',
    },
    {
      name: 'kkuljaemkorean',
      url: 'https://kkuljaemkorean.com',
      description:
        'kkuljaemkorean is a website-based Korean language learning platform, here I help in the integration of the API that has been made by the Backend team',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'bangadam-dev',
    limit: 5, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'ligth',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: ['light', 'dark'],

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
};

export default config;
