
import ProjectCard from "@/components/ProjectCard";

// Sample project data
const projects = [
  {
    title: "Minimal Design System",
    description: "A comprehensive design system built with React and Tailwind CSS, focused on simplicity and elegance.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "Tailwind CSS", "Design System"],
    url: "#",
  },
  {
    title: "Portfolio Website",
    description: "A clean and minimal portfolio website showcasing my work and skills in web development and design.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2055&q=80",
    tags: ["React", "Framer Motion", "TypeScript"],
    url: "#",
  },
  {
    title: "E-commerce Template",
    description: "A minimal and elegant e-commerce website template designed for modern online stores.",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    url: "#",
  },
  {
    title: "Budget Tracker App",
    description: "A minimal finance management application that helps users track expenses and manage budgets.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80",
    tags: ["React Native", "Firebase", "Mobile App"],
    url: "#",
  },
  {
    title: "Productivity Dashboard",
    description: "A clean and minimal dashboard for tracking productivity, tasks, and goals with intuitive visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Vue.js", "D3.js", "Dashboard"],
    url: "#",
  },
  {
    title: "Recipe Sharing Platform",
    description: "A community-driven platform for sharing and discovering recipes with a focus on beautiful food photography.",
    image: "https://images.unsplash.com/photo-1556911220-bda9f6d22256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "Node.js", "MongoDB"],
    url: "#",
  },
];

export default function Projects() {
  return (
    <div className="page-transition-wrapper">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-muted-foreground">
              A collection of my most recent work showcasing my dedication to
              minimal design and attention to detail.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
