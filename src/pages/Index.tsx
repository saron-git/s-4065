
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "Minimal Design System",
    description: "A comprehensive design system built with React and Tailwind CSS, focused on simplicity and elegance.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "Tailwind CSS", "Design System"],
    url: "/projects",
  },
  {
    title: "Portfolio Website",
    description: "A clean and minimal portfolio website showcasing my work and skills in web development and design.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2055&q=80",
    tags: ["React", "Framer Motion", "TypeScript"],
    url: "/projects",
  },
  {
    title: "E-commerce Template",
    description: "A minimal and elegant e-commerce website template designed for modern online stores.",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    url: "/projects",
  },
];

const featuredPosts = [
  {
    title: "Designing Minimalist Interfaces That Work",
    excerpt: "Explore the principles behind effective minimalist design and how to apply them to create intuitive, beautiful interfaces.",
    date: new Date("2023-04-15"),
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "/blog",
  },
  {
    title: "The Impact of Typography on User Experience",
    excerpt: "How choosing the right typography can dramatically improve readability, user engagement, and the overall feel of your digital products.",
    date: new Date("2023-03-22"),
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    url: "/blog",
  },
  {
    title: "Creating Seamless Animations for Modern Websites",
    excerpt: "Learn how to implement subtle, purposeful animations that enhance user experience without overwhelming your visitors.",
    date: new Date("2023-02-10"),
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "/blog",
  },
];

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="section-title">About Me</h2>
            <p className="text-lg text-muted-foreground">
              I'm a minimalist designer and developer passionate about creating simple, 
              elegant, and functional digital experiences. With a focus on user-centered 
              design, I strive to create intuitive interfaces that prioritize content and 
              usability.
            </p>
            <p className="text-lg text-muted-foreground">
              My approach combines aesthetic sensitivity with technical expertise, 
              resulting in designs that are both beautiful and performant. I believe 
              that true elegance comes from reduction, focusing on what truly matters.
            </p>
            <div className="pt-4">
              <Link to="/about">
                <Button variant="outline" className="hover-lift">
                  More About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="section-container">
        <div className="flex justify-between items-end mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <Link to="/projects">
            <Button variant="ghost" className="hover-lift">
              All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </section>
      
      {/* Featured Blog Posts */}
      <section className="section-container">
        <div className="flex justify-between items-end mb-12">
          <h2 className="section-title">Latest Articles</h2>
          <Link to="/blog">
            <Button variant="ghost" className="hover-lift">
              All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <BlogCard
              key={index}
              {...post}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="section-container">
        <div className="rounded-2xl bg-primary/5 p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can 
            collaborate to bring your ideas to life with elegant, minimalist design.
          </p>
          <Link to="/contact">
            <Button size="lg" className="hover-lift">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
