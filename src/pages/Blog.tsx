import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";

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
            <h1 className="text-3xl md:text-4xl font-display mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Insights, guides, and thoughtful perspectives on tech, 
              AI, and mindful productivity.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Link to={`/blog/${featuredPost.slug}`} className="block mb-10">
              <Card className="overflow-hidden hover:border-primary/50 transition-colors group">
                <div className="p-8 md:p-10 lg:p-12 bg-gradient-to-br from-accent/50 to-transparent">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      Featured
                    </span>
                    <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                      {featuredPost.category}
                    </span>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-display mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-base mb-6 max-w-2xl">
                    {featuredPost.excerpt}
                  </CardDescription>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">By Lubega Fahad</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          )}

          {/* Regular Posts Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <Card 
                  className="h-full hover:border-primary/50 transition-colors animate-fade-in group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-snug font-display group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {post.date}
                      </span>
                      <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:underline underline-offset-4">
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
