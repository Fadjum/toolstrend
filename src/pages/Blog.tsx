import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to AI Productivity Tools in 2025",
    excerpt: "Discover how artificial intelligence is transforming the way we work. From automated writing assistants to intelligent code completion, explore the best AI tools.",
    category: "AI",
    author: "Alex Chen",
    date: "Dec 28, 2025",
    readTime: "12 min",
    featured: true,
    slug: "ai-productivity-tools-2025",
  },
  {
    id: 2,
    title: "10 Hidden Notion Features You're Not Using",
    excerpt: "Unlock the full potential of Notion with these lesser-known features that can dramatically improve your productivity.",
    category: "Productivity",
    author: "Sarah Miller",
    date: "Dec 25, 2025",
    readTime: "7 min",
    featured: false,
    slug: "hidden-notion-features",
  },
  {
    id: 3,
    title: "ChatGPT vs Claude: Which AI is Right for You?",
    excerpt: "A detailed comparison of the two leading AI assistants. We break down their strengths, weaknesses, and ideal use cases.",
    category: "AI",
    author: "James Wilson",
    date: "Dec 22, 2025",
    readTime: "9 min",
    featured: false,
    slug: "chatgpt-vs-claude",
  },
  {
    id: 4,
    title: "The Rise of AI-First Development Tools",
    excerpt: "How AI is revolutionizing software development with tools like GitHub Copilot, Cursor, and AI-powered debugging.",
    category: "Development",
    author: "Mike Peters",
    date: "Dec 20, 2025",
    readTime: "10 min",
    featured: false,
    slug: "ai-first-development-tools",
  },
  {
    id: 5,
    title: "Best Free Alternatives to Expensive Software",
    excerpt: "Don't break the bank on software. These free tools offer comparable features to their premium counterparts.",
    category: "Productivity",
    author: "Lisa Park",
    date: "Dec 18, 2025",
    readTime: "8 min",
    featured: false,
    slug: "free-software-alternatives",
  },
  {
    id: 6,
    title: "How to Build a Personal Knowledge Base",
    excerpt: "Create a second brain using modern tools like Obsidian, Notion, and AI-powered note-taking apps.",
    category: "Productivity",
    author: "David Kim",
    date: "Dec 15, 2025",
    readTime: "11 min",
    featured: false,
    slug: "personal-knowledge-base",
  },
];

const Blog = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Latest news, insights, and articles about tech, AI, and productivity tools. Stay updated with the latest trends and tips."
        keywords="tech blog, AI news, productivity tips, software reviews, tool comparisons"
        canonicalUrl="https://tools.trendexhub.com/blog"
      />
      
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Latest insights, tips, and updates from the world of tech, 
              AI, and productivity tools.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Link to={`/blog/${featuredPost.slug}`} className="block mb-8">
              <Card className="overflow-hidden hover:border-primary/50 transition-colors group">
                <div className="p-6 md:p-8 lg:p-10 bg-gradient-to-br from-primary/5 to-transparent">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge>Featured</Badge>
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-base mb-6 max-w-2xl">
                    {featuredPost.excerpt}
                  </CardDescription>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          )}

          {/* Regular Posts Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <Card 
                  className="h-full hover:border-primary/50 transition-colors animate-fade-in group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                      <span className="text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:underline underline-offset-4">
                        Read <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
