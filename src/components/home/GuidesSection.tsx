import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const guides = [
  {
    id: 1,
    title: "How to Use ChatGPT for Content Creation",
    description: "Step-by-step guide to leveraging AI for blog posts, social media, and marketing copy.",
    category: "AI",
    readTime: "8 min",
    slug: "chatgpt-content-creation",
  },
  {
    id: 2,
    title: "Setting Up Your Notion Workspace",
    description: "Create an organized, efficient workspace with templates and databases.",
    category: "Productivity",
    readTime: "10 min",
    slug: "notion-workspace-setup",
  },
  {
    id: 3,
    title: "Getting Started with GitHub Copilot",
    description: "Boost your coding productivity with AI-powered code completion.",
    category: "Development",
    readTime: "6 min",
    slug: "github-copilot-guide",
  },
  {
    id: 4,
    title: "Automating Tasks with Zapier",
    description: "Connect your apps and automate repetitive workflows without code.",
    category: "Automation",
    readTime: "12 min",
    slug: "zapier-automation-guide",
  },
];

const GuidesSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">How-To Guides</h2>
            <p className="text-muted-foreground mt-1">
              Learn to master the best tools
            </p>
          </div>
          <Link
            to="/guides"
            className="hidden sm:flex items-center gap-1 text-primary font-medium hover:underline underline-offset-4"
          >
            All Guides <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map((guide, index) => (
            <Link key={guide.id} to={`/guides/${guide.slug}`}>
              <Card 
                className="h-full hover:border-primary/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {guide.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {guide.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-snug hover:text-primary transition-colors">
                    {guide.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{guide.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <Link
          to="/guides"
          className="flex sm:hidden items-center justify-center gap-1 mt-6 text-primary font-medium hover:underline underline-offset-4"
        >
          View All Guides <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default GuidesSection;
