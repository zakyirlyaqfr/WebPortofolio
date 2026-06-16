import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";

const softSkills = [
  "Leadership",
  "Communication",
  "Team Collaboration",
  "Problem Solving",
  "Adaptability",
  "Analytical Thinking",
  "Time Management",
  "Public Speaking",
];

const hardSkills = [
  "Flutter",
  "Dart",
  "PocketBase",
  "Laravel",
  "MySQL",
  "PostgreSQL",
  "Tailwind CSS",
  "HTML",
  "Figma",
  "Git & GitHub",
];

const achievements = [
  {
    label: "Cloud Computing Fundamentals — IBM SkillsBuild (2026)",
    href: "https://drive.google.com/file/d/1cHF1M2KIgEni-WwosNMqeWewjnjAB2jR/view?usp=sharing",
  },
  {
    label: "Journey to Cloud: Orchestrating your Solution — IBM SkillsBuild (2026)",
    href: "https://drive.google.com/file/d/1uZC09KOoICV804dS17mukjw81wOTAhqU/view?usp=sharing",
  },
  {
    label: "Junior Mobile Programmer Certification — BNSP / LSP Teknologi Digital (2025)",
    href: "https://drive.google.com/file/d/1lw0rkZzbfVTh7Og55S5Tv320eqNaFeXv/view?usp=sharing",
  },
  {
    label: "And more",
    href: "https://drive.google.com/drive/folders/1byAevngZkJ3ig3IyIwrVAP4cwhwqqBgP?usp=sharing",
  },
];

const experiences = [
  "Software Development Projects",
  "Mobile & Web Development",
  "UI/UX Design & Prototyping",
  "Executive Division Chairman — HIMA D4 Teknik Informatika",
  "Education Division Staff — HIMA D4 Teknik Informatika",
  "Sponsorship Coordinator Lead — HIMTI GOIN'",
  "Kominfo Division Staff — IMAMI",
];

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About
            </h1>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div className="mb-8 opacity-0 animate-fade-in-up stagger-1">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-2 border-primary/30 transition-all duration-300 hover:border-primary">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Muhammad Zaky Irly Alqifari"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-1">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm <span className="text-primary font-medium">Muhammad Zaky Irly Alqifari</span>, an Informatics Engineering student at Universitas Airlangga with a strong passion for software development, mobile applications, frontend engineering, and UI/UX design.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-2">
                <p className="text-muted-foreground leading-relaxed">
                  I enjoy transforming ideas into digital products that are functional, user-friendly, and impactful. Through academic projects, certifications, and organizational experiences, I have developed practical skills in building applications, designing interfaces, and collaborating within multidisciplinary teams.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-3">
                <p className="text-muted-foreground leading-relaxed">
                  My experience ranges from developing mobile applications using Flutter and PocketBase to designing user-centered interfaces in Figma and building responsive web applications. I continuously explore new technologies and development practices to improve both technical and problem-solving skills.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-4">
                <CodeDivider label="Achievements" />
              </div>

              <div className="space-y-4 font-mono text-sm opacity-0 animate-fade-in-up stagger-4">
                {achievements.map((a) => (
                  <a
                    key={a.label}
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="text-primary">{"//"}</span> {a.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up stagger-2">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Soft Skills <span className="text-muted-foreground">*/</span>
                </h2>
                <ul className="space-y-2">
                  {softSkills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      <span className="text-primary mr-2">→</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-3">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Hard Skills <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {hardSkills.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Experience <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {experiences.map((e) => (
                    <p key={e}>{e}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
