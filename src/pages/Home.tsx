import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { CodeLabel } from "@/components/ui/CodeLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TypingCursor } from "@/components/ui/TypingCursor";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    name: "Gerobak Coffee",
    slug: "gerobak-coffee",
    description: "A complete mobile application for coffee shop ordering and administration with end-to-end user flows and a robust admin dashboard.",
    stack: ["Flutter", "Dart", "Pocketbase"],
    impact: "Individual project, integrated user and admin ecosystems",
  },
  {
    name: "TripMate UI/UX",
    slug: "tripmate",
    description: "High-fidelity mockups and wireframes for a travel companion mobile app recommending destinations, culinary spots, and entertainment.",
    stack: ["Figma"],
    impact: "Individual project, seamless location-based personalization",
  },
  {
    name: "PerfectBite UI/UX",
    slug: "perfectbite",
    description: "High-fidelity UI/UX design for a smart healthy lifestyle app integrating food tracking, recipes, workouts, and calorie calculations.",
    stack: ["Figma"],
    impact: "Collaborative project (Team of 3), comprehensive health tracking UI",
  },
  {
    name: "DriveZone",
    slug: "drivezone",
    description: "A modern, responsive digital storefront for premium sports cars like Ferrari, Lamborghini, and Porsche.",
    stack: ["HTML", "TailwindCSS"],
    impact: "Individual project, premium responsive web design",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-grid">
        <div className="container">
          <div className="max-w-3xl opacity-0 animate-fade-in-up">
            {/* Code-style label */}
            <CodeLabel className="mb-6">Informatics Engineering</CodeLabel>

            {/* Headline with typing cursor */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hi, I'm Zakyirlyaqfr.
              <br />
              <span className="text-muted-foreground">I build digital solutions that solve real problems.</span>
              <TypingCursor />
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-1">
              An Informatics Engineering student at Universitas Airlangga with a passion for mobile application development, frontend engineering, UI/UX design, and software engineering. Experienced in developing responsive applications, designing intuitive user interfaces, and collaborating in both academic and organizational projects.
            </p>

            {/* CTA */}
            <div className="opacity-0 animate-fade-in-up stagger-2">
              <Button asChild size="lg" className="font-mono transition-transform hover:scale-105">
                <Link to="/work">
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <div className="opacity-0 animate-fade-in-up">
            <CodeDivider label="Featured Work" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.name} 
                className={`opacity-0 animate-fade-in-up stagger-${index + 1}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center opacity-0 animate-fade-in-up stagger-4">
            <Link 
              to="/work" 
              className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
            >
              <span className="text-primary mr-2">{"//"}</span>
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
