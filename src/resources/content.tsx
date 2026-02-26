import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Manoj",
  lastName: "Gaur",
  name: `Manoj Gaur`,
  role: "Full Stack Web.Dev",
  avatar: "/images/avatar.jpg",
  email: "manojgaur6397@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/imanojgaur",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/imanojgaur/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "x",
    icon: "twitter",
    link: "https://x.com/TManojGaur",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Selene, a design engineer at <Text as="span" size="xl" weight="strong">ONCE UI</Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Manoj is a Full-Stack Software Engineer with a passion for transforming complex business requirements into fast, secure, and scalable web applications. His work spans modern frontend architectures, robust relational databases, and the seamless integration of secure user authentication.
      </>
    ),
  },  
  work: {
    display: true, // set to false to hide this section
    title: "Featured Projects",
    experiences: [
      {
        company: "Plant E-commerce SaaS & Admin Dashboard",
        timeframe: "26 Feb  - Present",
        role: "Creator & Developer",
        achievements: [
          <>
            Architecting a full-stack platform featuring a B2C storefront and a B2B role-based admin dashboard.
          </>,
          <>
            Engineering a robust relational database using PostgreSQL & Prisma to manage users, products, and multi-tier services (Delivery, Installation, Maintenance).
          </>,
          <>
          Implementing NextAuth/JWT for secure authentication and Zustand for complex global state management (cart and checkout logic).
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Financial Dashboard Application",
        timeframe: "feb 2026",
        role: "Next.js Developer",
        achievements: [
          <>
         Developed a full-stack web application based on the official Next.js fundamentals course.
          </>,
          <>
           Integrated Server-Side Rendering (SSR) and Next.js Server Actions to optimize data fetching and reduce load times ,and manage component state using React Hooks.
          </>,
        ],
        images: [
            {
            src: "/images/projects/project-01/cover-01-01.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "L.D.A.H REC,   MAINPURI (AKTU)",
        description: <>Studied Computer Science & Engineering.</>,
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Architecture",
        description: (
          <>Building high-performance, SEO-optimized web apps using Next.js (App Router), React.js, and Tailwind CSS.</>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React",
            icon: "react", // template mostly supports standard icons
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [], // Images khali chhod de, clean lagega
      },
      {
        title: "Backend & Databases",
        description: (
          <>Designing robust APIs and complex relational data models using PostgreSQL, Prisma ORM, and Express.js.</>
        ),
        tags: [
          {
            name: "PostgreSQL",
            icon: "postgresql", // safe icon name
          },
          {
            name: "Prisma",
            icon: "prisma", 
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
        ],
        images: [],
      },
      {
        title: "Security & State Management",
        description: (
          <>Managing complex global application logic with Zustand, and implementing secure user sessions with NextAuth & OAuth 2.0.</>
        ),
        tags: [
          {
            name: "NextAuth.js",
            icon: "security", 
          },
          {
            name: "Zustand",
            icon: "zustand",
          },
        ],
        images: [],
      },
    ],
  },
}

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
