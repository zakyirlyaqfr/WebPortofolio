import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import { ArrowLeft, ExternalLink, Github, Figma, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectData = {
  name: string;
  fullDescription: string;
  stack: string[];
  impact: string;
  challenges: string[];
  features: string[];
  demoAccounts?: string[];
  links?: { label: string; href: string; icon: "github" | "external" | "figma" | "report" }[];
};

const projectsData: Record<string, ProjectData> = {
  tripmate: {
    name: "TripMate",
    fullDescription:
      "Complete UI/UX design with high-fidelity mockups and wireframes for a travel companion mobile app recommending destinations, culinary spots, and entertainment based on user location.",
    stack: ["Figma"],
    impact: "Individual project, seamless location-based personalization",
    challenges: [
      "Designing an intuitive location-based recommendation interface",
      "Creating a seamless user journey from discovery to adding items to a wishlist",
      "Building an engaging and welcoming user onboarding and account setup flow",
    ],
    features: [
      "Destination, culinary, and entertainment recommendations",
      "Wishlist management system",
      "User account setup and authentication UI",
    ],
    links: [
      { label: "View Figma", icon: "figma", href: "https://www.figma.com/design/GiyvWx4vgEoRSoSnSdZTs3/TripMate?node-id=0-1&p=f&t=vqFR6z3VBBU7mpHK-0" },
      { label: "Live Prototype", icon: "external", href: "https://www.figma.com/proto/GiyvWx4vgEoRSoSnSdZTs3/TripMate?node-id=0-1&p=f&viewport=-4026%2C858%2C0.19&t=vqFR6z3VBBU7mpHK-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=459%3A3720&show-proto-sidebar=1" },
    ],
  },
  perfectbite: {
    name: "PerfectBite",
    fullDescription:
      "High-fidelity UI/UX design for a smart healthy lifestyle mobile app. It tracks food intake, recommends healthy recipes, supports workouts, and calculates calories.",
    stack: ["Figma"],
    impact: "Collaborative project (Team of 3), comprehensive health tracking UI",
    challenges: [
      "Integrating multiple complex features (camera scan, recipes, workouts) without cluttering the UI",
      "Designing an engaging and easy-to-read calorie tracking interface",
      "Creating a seamless flow for specialized healthy food online ordering",
    ],
    features: [
      "Nutritional camera scan UI",
      "Healthy recipe recommendations & online ordering system",
      "Workout tracking and calorie calculation dashboards",
    ],
    links: [
      { label: "View Figma", icon: "figma", href: "https://www.figma.com/design/3Lter2VO75rLd6bNk9OIZ2/PerfectBite?node-id=0-1&p=f&t=nbedRKDrHPvtuLAW-0" },
      { label: "Live Prototype", icon: "external", href: "https://www.figma.com/proto/3Lter2VO75rLd6bNk9OIZ2/PerfectBite?node-id=0-1&p=f&viewport=582%2C323%2C0.09&t=nbedRKDrHPvtuLAW-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=112%3A3" },
    ],
  },
  kamuskita: {
    name: "KamusKita",
    fullDescription:
      "Comprehensive UI/UX design with light/dark modes and wireframes for an Indonesian regional language learning app, featuring gamification similar to Duolingo tailored to user proficiency.",
    stack: ["Figma"],
    impact: "Collaborative project (Team of 4), engaging gamified learning interfaces",
    challenges: [
      "Balancing aesthetic consistency across both dark and light modes",
      "Designing engaging gamified learning paths and reward systems to retain users",
      "Structuring complex regional language dictionary data into an accessible mobile layout",
    ],
    features: [
      "User leaderboard and detailed statistics",
      "Gamification and rewarding systems",
      "Premium features and regional language dictionary access",
    ],
    links: [
      { label: "View Figma", icon: "figma", href: "https://www.figma.com/design/I348xRQqipLsp0TeSrjpUj/kamusKita?node-id=0-1&p=f&t=ORVj4yNBf2gLLbMJ-0" },
      { label: "Live Prototype", icon: "external", href: "https://www.figma.com/proto/I348xRQqipLsp0TeSrjpUj/kamusKita?node-id=0-1&p=f&viewport=-1624%2C1179%2C0.66&t=ORVj4yNBf2gLLbMJ-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A2" },
    ],
  },
  "gerobak-coffee": {
    name: "Gerobak Coffee",
    fullDescription:
      "Mobile application for coffee shop ordering and management. Includes user-facing ordering features and an admin dashboard for inventory, sales, and user management.",
    stack: ["Flutter", "Dart", "Pocketbase"],
    impact: "Individual project, integrated user and admin ecosystems",
    challenges: [
      "Synchronizing real-time cart and payment states for users",
      "Building a dual-role application (Admin/User) within a single ecosystem",
      "Integrating barcode scanning functionality for cashiers alongside manual input",
    ],
    features: [
      "User: Ordering, cart, payments, order history, and total expense tracking",
      "Admin: Dashboard for products, stock, and category management",
      "Admin: Cashier scanner and manual data input, comprehensive reporting",
    ],
    demoAccounts: [
      "Admin: admin@gmail.com | Password: 12345678",
      "User: Register a new account",
    ],
    links: [
      { label: "View Code", icon: "github", href: "https://github.com/zakyirlyaqfr/GRBK" },
      { label: "Live Demo", icon: "external", href: "https://zakyirlyaqfr.github.io/GRBK/" },
    ],
  },
  campuslibrary: {
    name: "CampusLibrary",
    fullDescription:
      "Integrated library management website to handle books, categories, users, and borrowing/returning processes with distinct access rights for Admins, Lecturers, and Students.",
    stack: ["Laravel", "PHP", "Laragon", "MySQL"],
    impact: "Individual project, efficient operational management",
    challenges: [
      "Implementing complex role-based access control (RBAC) securely",
      "Managing relational data effectively between users, books, and borrowing histories",
      "Creating an intuitive interface for multi-tier user groups",
    ],
    features: [
      "Admin: Manage users, roles, and system menus",
      "Student: Seamless book borrowing and returning system",
      "Lecturer: Manage book categories and inventory",
    ],
    demoAccounts: [
      "Password for all is 12345678",
      "Admin: admin@gmail.com",
      "Student: mhs@gmail.com",
      "Lecturer: dosen@gmail.com",
    ],
    links: [
      { label: "View Code", icon: "github", href: "https://github.com/zakyirlyaqfr/perpustkaan-laravel" },
      { label: "Live Demo", icon: "external", href: "https://perpustkaan-laravel-production.up.railway.app/" },
    ],
  },
  "sistem-pelaporan-prestasi-api": {
    name: "Sistem Pelaporan Prestasi API",
    fullDescription:
      "Backend service designed to manage student achievement reporting and verification in a structured and efficient manner, featuring comprehensive API documentation via Swagger.",
    stack: ["Golang", "Fiber", "PostgreSQL", "MongoDB", "Swagger"],
    impact: "Individual project, secure and structured data management",
    challenges: [
      "Managing hybrid databases (PostgreSQL for relations, MongoDB for flexible logs/attachments)",
      "Ensuring secure authentication, role-based access, and token lifecycle management",
      "Structuring complex relational data between students, advisory lecturers, and achievements",
    ],
    features: [
      "Authentication & Authorization (login, refresh token, profile, logout)",
      "Admin User & Role Management (CRUD)",
      "Achievement lifecycle (create, submit, verify, reject, history, attachment upload)",
      "General statistics and per-student reporting analytics",
    ],
    links: [
      { label: "View Code", icon: "github", href: "https://github.com/zakyirlyaqfr/gouas" },
      { label: "View Report", icon: "report", href: "https://drive.google.com/file/d/1HWSp7oSHmd4lGKFo7F-YLNiHyJElqTCd/view?usp=sharing" },
    ],
  },
  "alumni-management-system-api": {
    name: "Alumni Management System API",
    fullDescription:
      "Backend API handling authentication, alumni management, job postings, and file uploads, fortified with middleware for security, CORS, and role-based access control.",
    stack: ["Golang", "Fiber", "MongoDB"],
    impact: "Individual project, secure scalable routing architecture",
    challenges: [
      "Implementing secure and efficient file upload handling mechanisms",
      "Setting up structured routing and global middleware effectively",
      "Ensuring strict role-based access control across sensitive endpoints",
    ],
    features: [
      "Secure authentication system",
      "Alumni and job posting management endpoints",
      "File upload processing and trash/recovery management",
    ],
    links: [
      { label: "View Code", icon: "github", href: "https://github.com/zakyirlyaqfr/GoLanjutan" },
    ],
  },
  drivezone: {
    name: "DriveZone",
    fullDescription:
      "Premium sports car sales website providing a modern digital experience for exploring and purchasing high-end vehicles like Ferrari, Lamborghini, and Porsche.",
    stack: ["HTML", "TailwindCSS"],
    impact: "Individual project, premium responsive web design",
    challenges: [
      "Crafting a highly visual, premium-feeling UI using only HTML and CSS frameworks",
      "Ensuring full responsiveness and performance across various device screen sizes",
      "Designing comprehensive user flows from product discovery to checkout and dashboard views",
    ],
    features: [
      "Hero section and complete sports car catalog with detailed specifications",
      "Shopping cart, checkout flow, and payment confirmation UI",
      "User authentication, profile dashboards, and transaction history",
      "Admin dashboard for managing users, products, articles, and transactions",
    ],
    links: [
      { label: "View Code", icon: "github", href: "https://github.com/zakyirlyaqfr/DriveZone_TailwindCSS" },
      { label: "Live Demo", icon: "external", href: "https://zakyirlyaqfr.github.io/DriveZone_TailwindCSS/" },
    ],
  },
};

const iconMap = {
  github: Github,
  external: ExternalLink,
  figma: Figma,
  report: FileText,
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
              <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
              <Button asChild>
                <Link to="/work">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Project
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          <Link
            to="/work"
            className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors mb-8 opacity-0 animate-fade-in-up"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Project
          </Link>

          <div className="mb-12 opacity-0 animate-fade-in-up stagger-1">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {project.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>

            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <span className="font-mono text-sm text-primary">
                <span className="text-muted-foreground">{"//"}</span> Impact: {project.impact}
              </span>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-2">
            <CodeDivider label="Challenges" />
          </div>
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-3">
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary mt-1">→</span>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-3">
            <CodeDivider label="Features" />
          </div>
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-4">
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.demoAccounts && (
            <>
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <CodeDivider label="Demo Accounts" />
              </div>
              <div className="mb-12 p-4 bg-card border border-border rounded-lg opacity-0 animate-fade-in-up stagger-4">
                <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                  {project.demoAccounts.map((acc, i) => (
                    <li key={i}>
                      <span className="text-primary mr-2">//</span>
                      {acc}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-4 pt-8 border-t border-border opacity-0 animate-fade-in-up stagger-4">
              {project.links.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <Button
                    key={link.label}
                    variant="outline"
                    className="font-mono"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="mr-2 h-4 w-4" />
                      {link.label}
                    </a>
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
