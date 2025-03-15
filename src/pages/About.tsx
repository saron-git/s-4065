
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Globe, Paintbrush } from "lucide-react";

export default function About() {
  return (
    <div className="page-transition-wrapper">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Designer, developer, and minimalist passionate about creating 
              elegant digital experiences that focus on simplicity and functionality.
            </p>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden mb-16">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt="Portrait"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">My Journey</h2>
              <p className="text-lg text-muted-foreground">
                With over 7 years of experience in design and development, I've
                worked with a wide range of clients from startups to established
                companies, helping them create meaningful digital experiences
                that resonate with their users.
              </p>
              <p className="text-lg text-muted-foreground">
                My philosophy is rooted in minimalism and functionality. I believe
                that every design element should serve a purpose, and that the
                true essence of great design is found in reduction rather than
                addition.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not designing or coding, you'll find me exploring nature,
                reading about design philosophy, or experimenting with new creative
                techniques to bring into my work.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">What I Do</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-sm border hover-scale">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Paintbrush className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Design</h3>
              <p className="text-muted-foreground">
                Creating beautiful, intuitive interfaces focused on user experience
                and visual harmony. From wireframes to final designs, I ensure every
                element serves a purpose.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-sm border hover-scale">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p className="text-muted-foreground">
                Building fast, responsive and accessible websites and applications
                using modern technologies and best practices, ensuring a seamless
                experience across all devices.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-sm border hover-scale">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Strategy</h3>
              <p className="text-muted-foreground">
                Developing comprehensive digital strategies aligned with business
                goals. I help identify opportunities and create roadmaps for
                successful digital products.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/projects">
              <Button size="lg" variant="outline" className="hover-lift">
                View My Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="hover-lift">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
