
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-12 md:gap-16">
          <div
            className="space-y-6 animate-slide-in"
            style={{ animationDelay: "200ms" }}
          >
            <div>
              <span className="inline-block font-medium text-primary/80 tracking-widest uppercase text-sm mb-2">
                Hello, I'm
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
                <span className="block">Minimal</span>
                <span className="block">Designer</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              I create minimal, intuitive digital experiences that prioritize 
              functionality and elegance through thoughtful design.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="hover-lift">
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="hover-lift">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="rounded-full opacity-70 hover:opacity-100"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
