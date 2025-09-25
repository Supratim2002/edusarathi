import { GraduationCap, Code, TestTube, Palette, Briefcase, Book, Building, Landmark, Microscope, DollarSign, Scale, PenTool } from 'lucide-react';

export const quizData = {
  interests: [
    "Solving complex problems",
    "Creative writing and storytelling",
    "Working with numbers and data",
    "Understanding the natural world",
    "Building and fixing things",
    "Helping and caring for others",
    "Leading and persuading people",
    "Art and design",
  ],
  aptitudes: [
    "Logical reasoning",
    "Verbal and written communication",
    "Mathematical skills",
    "Scientific inquiry",
    "Mechanical and technical skills",
    "Empathy and interpersonal skills",
    "Leadership and public speaking",
    "Visual and spatial awareness",
  ],
  personalityTraits: [
    "Analytical and detail-oriented",
    "Imaginative and expressive",
    "Practical and organized",
    "Inquisitive and experimental",
    "Hands-on and pragmatic",
    "Compassionate and patient",
    "Ambitious and assertive",
    "Artistic and intuitive",
  ],
};

export const careerPaths = [
  {
    category: 'Science',
    degree: 'B.Sc. (Bachelor of Science)',
    icon: TestTube,
    description: 'Focuses on scientific principles and research, developing analytical and problem-solving skills.',
    industries: ['Research & Development', 'Healthcare', 'Information Technology', 'Environmental Conservation'],
    govtExams: ['UPSC Civil Services (with science optional)', 'SSC CGL', 'State PSC'],
    privateJobs: ['Research Scientist', 'Data Analyst', 'Software Developer', 'Clinical Researcher', 'Environmental Consultant'],
    entrepreneurialOptions: ['Tech startup', 'Biotech firm', 'R&D consultancy'],
    higherEducation: ['M.Sc.', 'MCA', 'Ph.D.'],
  },
  {
    category: 'Commerce',
    degree: 'B.Com. (Bachelor of Commerce)',
    icon: Briefcase,
    description: 'Provides a strong foundation in accounting, finance, and business management.',
    industries: ['Banking & Finance', 'Accounting', 'Corporate Management', 'Insurance'],
    govtExams: ['RBI Grade B', 'SEBI Grade A', 'IBPS PO', 'CA/CS/CMA'],
    privateJobs: ['Accountant', 'Financial Analyst', 'Auditor', 'Tax Consultant', 'Investment Banker'],
    entrepreneurialOptions: ['Accounting firm', 'Financial advisory service', 'E-commerce business'],
    higherEducation: ['M.Com.', 'MBA (Finance)', 'CA (Chartered Accountancy)'],
  },
  {
    category: 'Arts',
    degree: 'B.A. (Bachelor of Arts)',
    icon: Book,
    description: 'Offers a broad range of subjects in humanities, social sciences, and liberal arts.',
    industries: ['Media & Journalism', 'Education', 'Public Administration', 'Law', 'Social Work'],
    govtExams: ['UPSC Civil Services', 'State PSC', 'IB ACIO'],
    privateJobs: ['Journalist', 'Content Writer', 'Teacher', 'HR Manager', 'Lawyer', 'Social Worker'],
    entrepreneurialOptions: ['Digital marketing agency', 'NGO', 'Publishing house'],
    higherEducation: ['M.A.', 'MSW', 'LL.B.', 'B.Ed.'],
  },
  {
    category: 'Business',
    degree: 'BBA (Bachelor of Business Administration)',
    icon: Landmark,
    description: 'A professional degree focused on management and leadership skills.',
    industries: ['Marketing', 'Human Resources', 'Consulting', 'Sales', 'Operations'],
    govtExams: ['UPSC Civil Services', 'SSC CGL'],
    privateJobs: ['Marketing Manager', 'HR Specialist', 'Business Consultant', 'Sales Executive', 'Operations Analyst'],
    entrepreneurialOptions: ['Startup founder', 'Management consultancy', 'Franchise owner'],
    higherEducation: ['MBA (Master of Business Administration)'],
  },
];

export const collegeLocations = ["Delhi", "Mumbai", "Bangalore", "Kolkata", "Chennai"];

export const colleges = [
    {
        name: "St. Stephen's College",
        location: "Delhi",
        courses: ["B.A. Economics", "B.Sc. Physics"],
        cutoff: "98-99%",
        fees: "₹42,000/year",
        rating: 4.8,
        distance: "Varies"
    },
    {
        name: "Hindu College",
        location: "Delhi",
        courses: ["B.Com (Hons)", "B.A. Political Science"],
        cutoff: "97-99%",
        fees: "₹18,000/year",
        rating: 4.7,
        distance: "Varies"
    },
    {
        name: "St. Xavier's College",
        location: "Mumbai",
        courses: ["B.A. Mass Media", "B.Sc. IT"],
        cutoff: "96-98%",
        fees: "₹7,000 - ₹35,000/year",
        rating: 4.6,
        distance: "Varies"
    },
    {
        name: "Narsee Monjee College of Commerce and Economics",
        location: "Mumbai",
        courses: ["B.Com", "BMS"],
        cutoff: "95-97%",
        fees: "₹35,000/year",
        rating: 4.5,
        distance: "Varies"
    },
    {
        name: "Christ University",
        location: "Bangalore",
        courses: ["BBA", "B.A. Journalism"],
        cutoff: "Entrance Exam",
        fees: "₹2,00,000/year",
        rating: 4.7,
        distance: "Varies"
    },
    {
        name: "Mount Carmel College",
        location: "Bangalore",
        courses: ["B.Com", "B.Sc. Fashion Design"],
        cutoff: "90-95%",
        fees: "₹50,000/year",
        rating: 4.4,
        distance: "Varies"
    },
    {
        name: "Presidency College",
        location: "Kolkata",
        courses: ["B.A. English", "B.Sc. Chemistry"],
        cutoff: "95-98%",
        fees: "₹12,000/year",
        rating: 4.6,
        distance: "Varies"
    },
    {
        name: "Jadavpur University",
        location: "Kolkata",
        courses: ["B.A. Comparative Literature", "B.Sc. Mathematics"],
        cutoff: "92-97%",
        fees: "₹2,500/year",
        rating: 4.8,
        distance: "Varies"
    },
    {
        name: "Loyola College",
        location: "Chennai",
        courses: ["B.Com", "B.Sc. Visual Communication"],
        cutoff: "95-98%",
        fees: "₹15,000/year",
        rating: 4.7,
        distance: "Varies"
    },
    {
        name: "Madras Christian College",
        location: "Chennai",
        courses: ["B.A. History", "B.Sc. Microbiology"],
        cutoff: "90-95%",
        fees: "₹25,000/year",
        rating: 4.5,
        distance: "Varies"
    },
];

export const timelineEvents = [
    {
        date: "Jan - Mar",
        title: "Major Entrance Exams Registration",
        description: "JEE Main, NEET, CUET-UG, and other major university entrance exam registrations typically open during this period.",
        category: "Exams",
    },
    {
        date: "Apr - May",
        title: "Board Exams & Entrance Tests",
        description: "Class 12 board examinations are conducted, followed by major entrance tests.",
        category: "Exams",
    },
    {
        date: "May - June",
        title: "Results and Cut-off Announcements",
        description: "Results for board exams and entrance tests are declared. Colleges start announcing their cut-off percentages.",
        category: "Admissions",
    },
    {
        date: "June - July",
        title: "College Application Window",
        description: "Application portals for most government and private colleges are open. This is the prime time to apply.",
        category: "Admissions",
    },
    {
        date: "July - Aug",
        title: "Counseling and Admission Process",
        description: "Colleges conduct counseling sessions and seat allotments based on merit lists and entrance exam scores.",
        category: "Admissions",
    },
    {
        date: "Aug - Sep",
        title: "Academic Session Begins",
        description: "The new academic year for most undergraduate courses begins.",
        category: "Academics",
    },
    {
        date: "Sep - Nov",
        title: "Scholarship Application Windows",
        description: "Various government and private scholarship application windows open for eligible students.",
        category: "Scholarships",
    },
];

export const courseCategories = ["Science", "Commerce", "Arts", "Business"];

export const communityPosts = [
  {
    id: 1,
    title: "Which is a better stream after 10th for a career in tech?",
    author: "Rohan S.",
    avatar: "https://picsum.photos/seed/rohan/32/32",
    timestamp: "2 hours ago",
    content: "I'm confused between taking Science with Computers vs. Commerce with Computers. I want to become a software engineer eventually. Everyone says Science is the only way, but I've heard you can do a BCA after Commerce too. What are the pros and cons?",
    upvotes: 28,
    comments: [
      { id: 1, author: "Priya K.", avatar: "https://picsum.photos/seed/priya/32/32", timestamp: "1 hour ago", content: "Go for Science. The foundation in Physics and Maths is crucial for engineering entrance exams and a deeper understanding of computer science concepts." },
      { id: 2, author: "Amit C.", avatar: "https://picsum.photos/seed/amit/32/32", timestamp: "45 mins ago", content: "While BCA is an option after commerce, a B.Tech degree holds more weight in the industry. I'd recommend the science stream." },
    ],
  },
  {
    id: 2,
    title: "How to prepare for the CUET exam? Any tips?",
    author: "Sneha M.",
    avatar: "https://picsum.photos/seed/sneha/32/32",
    timestamp: "5 hours ago",
    content: "I'm starting my preparation for the CUET exam for admission into Delhi University. It feels a bit overwhelming. Can anyone share their preparation strategy, recommended books, or any useful resources? Thanks in advance!",
    upvotes: 45,
    comments: [
      { id: 1, author: "Raj V.", avatar: "https://picsum.photos/seed/raj/32/32", timestamp: "4 hours ago", content: "Focus on NCERT books thoroughly, that's the base. For practice, you can use Arihant or Oswaal question banks. And take as many mock tests as you can!" },
    ],
  },
  {
    id: 3,
    title: "Is a B.A. in Economics a good option for a career in finance?",
    author: "Karan P.",
    avatar: "https://picsum.photos/seed/karan/32/32",
    timestamp: "1 day ago",
    content: "I'm interested in finance but not a huge fan of pure accounting. I find economics more interesting. How are the job prospects after a B.A. in Economics compared to a B.Com?",
    upvotes: 15,
    comments: [],
  },
];
