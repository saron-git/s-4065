
import { CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: Date;
  readTime: string;
  image: string;
  url: string;
  className?: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  image,
  url,
  className,
}: BlogCardProps) {
  return (
    <a
      href={url}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all duration-300 hover-scale",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col space-y-2 p-6">
        <div className="flex items-center text-xs text-muted-foreground gap-3">
          <span className="flex items-center gap-1">
            <CalendarIcon className="h-3 w-3" />
            {format(date, "MMM d, yyyy")}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {readTime}
          </span>
        </div>

        <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
      </div>
    </a>
  );
}
