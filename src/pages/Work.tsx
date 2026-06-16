import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";

type Project = {
  name: string;
  slug: string;
  description: string;
  stack: string[];
  impact: string;
};

const projectGroups: { category: string; projects: Project[] }[] = [
  {
    category: "UI/UX",
    projects: [
      {
        name: "TripMate",
        slug: "tripmate",
        description:
          "Comprehensive UI/UX design featuring high-fidelity mockups and wireframes for a travel companion mobile app. Tailored to user locations, it recommends destinations, culinary spots, and entertainment.",
        stack: ["Figma"],
        impact: "Individual project, seamless location-based personalization",
      },
      {
        name: "PerfectBite",
        slug: "perfectbite",
        description:
          "High-fidelity UI/UX design for a smart healthy lifestyle mobile application. Integrates food tracking, healthy recipes, supportive workouts, and calorie calculations into an intuitive interface.",
        stack: ["Figma"],
        impact: "Collaborative project (Team of 3), comprehensive health tracking UI",
      },
      {
        name: "KamusKita",
        slug: "kamuskita",
        description:
          "Complete UI/UX design with dark and light modes, plus wireframes, for an Indonesian regional language dictionary app. Features a gamified learning experience adapted to user proficiency, similar to Duolingo.",
        stack: ["Figma"],
        impact: "Collaborative project (Team of 4), engaging gamified learning interfaces",
      },
    ],
  },
  {
    category: "Mobile",
    projects: [
      {
        name: "Gerobak Coffee",
        slug: "gerobak-coffee",
        description:
          "A complete mobile application for coffee shop ordering and administration. Features end-to-end user flows for ordering and payments, coupled with a robust admin dashboard for inventory management and cashier operations.",
        stack: ["Flutter", "Dart", "Pocketbase"],
        impact: "Individual project, integrated user and admin ecosystems",
      },
    ],
  },
  {
    category: "Website",
    projects: [
      {
        name: "CampusLibrary",
        slug: "campuslibrary",
        description:
          "An integrated library management website designed to streamline the handling of books, categories, users, and borrowing processes. Features distinct role-based access for Admins, Lecturers, and Students.",
        stack: ["Laravel", "PHP", "Laragon"],
        impact: "Individual project, efficient operational management",
      },
    ],
  },
  {
    category: "Backend",
    projects: [
      {
        name: "Sistem Pelaporan Prestasi API",
        slug: "sistem-pelaporan-prestasi-api",
        description:
          "A backend service designed to efficiently manage student achievement reporting and verification. Utilizes a dual-database approach for structured relational data and flexible unstructured logs, complete with Swagger documentation.",
        stack: ["Golang", "Fiber", "PostgreSQL", "MongoDB", "Swagger"],
        impact: "Individual project, secure and structured data management",
      },
      {
        name: "Alumni Management System API",
        slug: "alumni-management-system-api",
        description:
          "A core backend configuration for an alumni system featuring robust routing, database connections, and secure API endpoints. Includes middleware for authentication, CORS, and role-based access control.",
        stack: ["Golang", "Fiber", "MongoDB"],
        impact: "Individual project, secure scalable routing architecture",
      },
    ],
  },
  {
    category: "Frontend",
    projects: [
      {
        name: "DriveZone",
        slug: "drivezone",
        description:
          "A modern, responsive digital storefront for premium sports cars like Ferrari, Lamborghini, and Porsche. Designed with a sleek UI to provide a comfortable, fast, and informative browsing and purchasing experience.",
        stack: ["HTML", "TailwindCSS"],
        impact: "Individual project, premium responsive web design",
      },
    ],
  },
];

export default function Work() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              A selection of projects showcasing systems engineering, product development,
              UI/UX design, and technical problem-solving. Each project represents real
              challenges solved with measurable impact.
            </p>
          </div>

          {projectGroups.map((group) => (
            <div key={group.category} className="mb-12">
              <div className="opacity-0 animate-fade-in-up">
                <CodeDivider label={group.category} />
              </div>
              <div className="grid gap-8">
                {group.projects.map((project) => (
                  <div key={project.slug} className="opacity-0 animate-fade-in-up">
                    <ProjectCard {...project} className="hover-lift" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
