
import BlogCard from "@/components/BlogCard";

// Sample blog posts data
const posts = [
  {
    title: "Designing Minimalist Interfaces That Work",
    excerpt: "Explore the principles behind effective minimalist design and how to apply them to create intuitive, beautiful interfaces.",
    date: new Date("2023-04-15"),
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "#",
  },
  {
    title: "The Impact of Typography on User Experience",
    excerpt: "How choosing the right typography can dramatically improve readability, user engagement, and the overall feel of your digital products.",
    date: new Date("2023-03-22"),
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    url: "#",
  },
  {
    title: "Creating Seamless Animations for Modern Websites",
    excerpt: "Learn how to implement subtle, purposeful animations that enhance user experience without overwhelming your visitors.",
    date: new Date("2023-02-10"),
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "#",
  },
  {
    title: "The Psychology of Color in Web Design",
    excerpt: "Understanding how colors affect user perception and behavior can help you create more effective and engaging digital experiences.",
    date: new Date("2023-01-18"),
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    url: "#",
  },
  {
    title: "Responsive Design Best Practices in 2023",
    excerpt: "Stay up-to-date with the latest approaches to building websites that work flawlessly across all devices and screen sizes.",
    date: new Date("2022-12-05"),
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    url: "#",
  },
  {
    title: "The Art of Whitespace in Web Design",
    excerpt: "Discover how strategic use of empty space can dramatically improve the readability, visual hierarchy, and overall user experience of your designs.",
    date: new Date("2022-11-20"),
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "#",
  },
];

export default function Blog() {
  return (
    <div className="page-transition-wrapper">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">The Blog</h1>
            <p className="text-xl text-muted-foreground">
              Thoughts, insights, and perspectives on design, development, and the
              digital landscape.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <BlogCard
                key={index}
                {...post}
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
