import { Link } from "react-router-dom";
import { Star, ExternalLink, TrendingUp } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const topTools = [
  {
    id: 1,
    name: "ChatGPT",
    category: "AI Assistant",
    description: "OpenAI's powerful language model for writing, coding, analysis, and creative tasks. The most versatile AI assistant available.",
    rating: 4.8,
    reviews: 15420,
    pricing: "Free / $20/mo",
    pros: ["Versatile capabilities", "Regular updates", "Plugin ecosystem"],
    slug: "chatgpt",
    trending: true,
  },
  {
    id: 2,
    name: "Notion",
    category: "Productivity",
    description: "All-in-one workspace combining notes, docs, wikis, databases, and project management in a beautiful interface.",
    rating: 4.7,
    reviews: 12350,
    pricing: "Free / $10/mo",
    pros: ["Flexible databases", "Great templates", "Team collaboration"],
    slug: "notion",
    trending: true,
  },
  {
    id: 3,
    name: "Figma",
    category: "Design",
    description: "Browser-based collaborative design tool for creating interfaces, prototypes, and design systems.",
    rating: 4.9,
    reviews: 9870,
    pricing: "Free / $15/mo",
    pros: ["Real-time collaboration", "Powerful prototyping", "Community resources"],
    slug: "figma",
    trending: false,
  },
  {
    id: 4,
    name: "Linear",
    category: "Project Management",
    description: "Fast, streamlined issue tracking built for modern software teams who value speed and simplicity.",
    rating: 4.8,
    reviews: 4520,
    pricing: "Free / $8/mo",
    pros: ["Lightning fast", "Keyboard shortcuts", "Beautiful design"],
    slug: "linear",
    trending: true,
  },
  {
    id: 5,
    name: "GitHub Copilot",
    category: "Development",
    description: "AI pair programmer that suggests code completions, entire functions, and helps you code faster.",
    rating: 4.6,
    reviews: 8930,
    pricing: "$10/mo",
    pros: ["Context-aware suggestions", "Multi-language support", "IDE integration"],
    slug: "github-copilot",
    trending: true,
  },
  {
    id: 6,
    name: "Vercel",
    category: "Cloud Services",
    description: "Frontend cloud platform for deploying web applications with zero configuration and instant rollbacks.",
    rating: 4.8,
    reviews: 6120,
    pricing: "Free / $20/mo",
    pros: ["Instant deploys", "Edge functions", "Great DX"],
    slug: "vercel",
    trending: false,
  },
];

const TopTools = () => {
  return (
    <Layout>
      <SEO
        title="Top Rated Tools"
        description="Discover the highest-rated tech, AI, and productivity tools. Curated list of the best software based on user reviews and expert analysis."
        keywords="best tools, top rated software, AI tools, productivity apps, software reviews"
        canonicalUrl="https://tools.trendexhub.com/top-tools"
      />
      
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Top Rated Tools
            </h1>
            <p className="text-lg text-muted-foreground">
              The highest-rated tools based on user reviews, features, and overall value. 
              Updated regularly with the latest releases.
            </p>
          </div>

          <div className="grid gap-6">
            {topTools.map((tool, index) => (
              <Card 
                key={tool.id} 
                className="hover:border-primary/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{tool.category}</Badge>
                        {tool.trending && (
                          <Badge className="bg-success/10 text-success hover:bg-success/20">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <CardDescription className="mt-2">{tool.description}</CardDescription>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-warning text-warning" />
                        <span className="font-bold text-lg">{tool.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {tool.reviews.toLocaleString()} reviews
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {tool.pros.map((pro) => (
                        <Badge key={pro} variant="secondary" className="font-normal">
                          ✓ {pro}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">{tool.pricing}</span>
                      <Button asChild size="sm">
                        <Link to={`/tools/${tool.slug}`}>
                          View Details
                          <ExternalLink className="h-3.5 w-3.5 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TopTools;
