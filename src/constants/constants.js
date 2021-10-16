export const projects = [
  {
    title: 'Collaborative Platform For Startups and Investors',
    description: "Built a modern web application using Django and React to facilitate communication between startups and investors. Startups seeking investments can seek funding via our platform where they can get in touch with independent investors who will choose from a wide range of startups. Features like recommendation system, chat interface, filtering and search are included.",
    image: '/images/project_1.png',
    tags: ['Django', 'Mongo', 'React', 'NLP'],
    id: 0,
  },
  {
    title: 'Stock Prediction using Sentiment Analysis and Historic Price Data',
    description: "Led and worked on a group project under the patronage and guidance of Credit Suisse. Worked on building LSTM architectures to predict stock prices from market news and integrated multiple components in a web framework to predict future stock prices using text and time-series data.",
    image: '/images/project_3.jpg',
    tags: ['NLP', 'Development', 'Finance'],
    id: 1,
  },
  {
    title: 'Implementation of ext2fs',
    description:"Implemented the ext2 file system in the xv6 operating system. Implemented native file system as well and enabled coexistence of multiple file systems on the same OS. Performs all basic operations related to file systems such as creation of files/directories, deletion of files/directories, writing and reading from files, etc.",
    image: '/images/project_2.jpg',
    tags: ['Operating Systems', 'ext2', 'xv6'],
    id: 2,
  },

  {
    title: 'BitTorrent Protocol',
    description: "Implemented the BitTorrent Protocol in Python along with algorithms like Rarest First, Top 4 Peers, etc.",
    image: '/images/project_4.png',
    tags: ['Computer Networks', 'Python', 'BitTorrent'],
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];

export const ExperienceData = [
    {
        title: 'Summer Analyst',
        Company: "Goldman Sachs",
        image: '/images/GS.png',
        description: "Worked on a backend and data pipelining project using Java, Spring Boot and Kafka",
        date:"June 2021 to August 2021",
        tags: ['Java','Spring Boot','Kafka'],
        id: 0,
    },
    {
        title: 'Computer Vision Intern',
        Company: "AISeon Healthcare Technologies",
        image: '/images/aiseon.jpeg',
        description: "Worked on segmentation of retina images to find hard exudates, haemorrhages, etc. Used and implemented novel deep learning architectures for this task.",
        date:"July 2019 to August 2019",
        tags: ['Python','OpenCV','Computer Vision'],
        id: 1,
    },
    {
        title: 'Deep Learning Intern',
        Company: "National University of Singapore",
        image: '/images/nus.jpeg',
        description: "Worked on different Machine Learning and Deep Learning algorithms with a group project in the domain of NLP and Deep Learning. Joint internship with Hewlett Packard Enterprises.",
        date:"June 2019 to July 2019",
        tags: ['Machine Learning','Deep Learning','NLP'],
        id: 2,
    },
    {
        title: 'Big Data Intern',
        Company: "Hewlett Packard",
        image: '/images/hp.png',
        description: "Worked on Big Data technologies such as Hadoop, Spark, Hive, etc and used these technologies to complete a group project. Joint internship with National University of Singapore.",
        date:"June 2019 to July 2019",
        tags: ['Big Data','Hadoop','Spark'],
        id: 3,
    },
]