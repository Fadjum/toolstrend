import { Link } from "react-router-dom";
import { ArrowRight, Star, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tools = [
  {
    id: 1,
    name: "ChatGPT",
    category: "AI Assistant",
    description: "Advanced AI chatbot for writing, coding, and problem-solving.",
    rating: 4.8,
    isFree: true,
    slug: "chatgpt",
  },
  {
    id: 2,
    name: "Notion",
    category: "Productivity",
    description: "All-in-one workspace for notes, docs, wikis, and project management.",
    rating: 4.7,
    isFree: true,
    slug: "notion",
  },
  {
    id: 3,
    name: "Figma",
    category: "Design",
    description: "Collaborative interface design tool for teams.",
    rating: 4.9,
    isFree: true,
    slug: "figma",
  },
  {
    id: 4,
    name: "GitHub Copilot",
    category: "Development",
    description: "AI pair programmer that helps you write better code faster.",
    rating: 4.6,
    isFree: false,
    slug: "github-copilot",
  },
  {
    id: 5,
    name: "Midjourney",
    category: "AI Design",
    description: "Create stunning AI-generated artwork and images from text prompts.",
    rating: 4.7,
    isFree: false,
    slug: "midjourney",
  },
  {
    id: 6,
    name: "Linear",
    category: "Project Management",
    description: "Streamlined issue tracking for high-performance software teams.",
    rating: 4.8,
    isFree: true,
    slug: "linear",
  },
];

const ToolsGrid = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Popular Tools</h2>
            <p className="text-muted-foreground mt-1">
              Top-rated tools loved by professionals
            </p>
          </div>
          <Link
            to="/top-tools"
            className="hidden sm:flex items-center gap-1 text-primary font-medium hover:underline underline-offset-4"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <Card
              key={tool.id}
              className="group hover:border-primary/50 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {tool.name}
                    </CardTitle>
                    <CardDescription className="text-xs mt-1">
                      {tool.category}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    {tool.isFree && (
                      <Badge variant="secondary" className="text-xs">
                        Free
                      </Badge>
                    )}
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                      <span className="font-medium">{tool.rating}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {tool.description}
                </p>
                <Link
                  to={`/tools/${tool.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline underline-offset-4"
                >
                  Learn More <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <Link
          to="/top-tools"
          className="flex sm:hidden items-center justify-center gap-1 mt-6 text-primary font-medium hover:underline underline-offset-4"
        >
          View All Tools <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default ToolsGrid;
