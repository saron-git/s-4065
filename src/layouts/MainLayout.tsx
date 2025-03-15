
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("animate-page-in");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("animate-page-out");

      const timeout = setTimeout(() => {
        setTransitionStage("animate-page-in");
        setDisplayLocation(location);
        window.scrollTo(0, 0);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={cn("flex-1 pt-16", transitionStage)}>
        {children}
      </main>
      <footer className="py-6 border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
