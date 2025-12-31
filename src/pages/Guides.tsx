import { Link } from "react-router-dom";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const guides = [
  {
    id: 1,
    title: "How to Use ChatGPT for Content Creation",
    description: "A comprehensive guide to leveraging AI for blog posts, social media content, and marketing copy. Learn prompting techniques and best practices.",
    category: "AI",
    readTime: "8 min",
    difficulty: "Beginner",
    slug: "chatgpt-content-creation",
  },
  {
    id: 2,
    title: "Setting Up Your Notion Workspace from Scratch",
    description: "Create an organized, efficient workspace with templates, databases, and workflows. Perfect for personal or team use.",
    category: "Productivity",
    readTime: "10 min",
    difficulty: "Beginner",
    slug: "notion-workspace-setup",
  },
  {
    id: 3,
    title: "Getting Started with GitHub Copilot",
    description: "Boost your coding productivity with AI-powered code completion. Learn how to get the most out of this powerful tool.",
    category: "Development",
    readTime: "6 min",
    difficulty: "Intermediate",
    slug: "github-copilot-guide",
  },
  {
    id: 4,
    title: "Automating Tasks with Zapier",
    description: "Connect your apps and automate repetitive workflows without writing any code. From simple to complex automations.",
    category: "Automation",
    readTime: "12 min",
    difficulty: "Beginner",
    slug: "zapier-automation-guide",
  },
  {
    id: 5,
    title: "Building a Design System in Figma",
    description: "Create consistent, scalable design systems with components, variants, and auto-layout. Essential for design teams.",
    category: "Design",
    readTime: "15 min",
    difficulty: "Advanced",
    slug: "figma-design-system",
  },
  {
    id: 6,
    title: "AI Image Generation: Midjourney vs DALL-E 3",
    description: "Compare the leading AI image generators and learn when to use each one for different creative projects.",
    category: "AI",
    readTime: "9 min",
    difficulty: "Beginner",
    slug: "ai-image-generation-comparison",
  },
  {
    id: 7,
    title: "Setting Up CI/CD with GitHub Actions",
    description: "Automate your deployment pipeline with GitHub Actions. Step-by-step guide for web applications.",
    category: "Development",
    readTime: "14 min",
    difficulty: "Intermediate",
    slug: "github-actions-cicd",
  },
  {
    id: 8,
    title: "Mastering Linear for Agile Teams",
    description: "Optimize your team's workflow with Linear's powerful features. Cycles, projects, and keyboard shortcuts.",
    category: "Project Management",
    readTime: "11 min",
    difficulty: "Intermediate",
    slug: "linear-agile-guide",
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-success/10 text-success";
    case "Intermediate":
      return "bg-warning/10 text-warning";
    case "Advanced":
      return "bg-destructive/10 text-destructive";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Guides = () => {
  return (
    <Layout>
      <SEO
        title="How-To Guides"
        description="Step-by-step tutorials and guides for the best tech, AI, and productivity tools. Learn from beginner to advanced techniques."
        keywords="how-to guides, tutorials, AI tutorials, productivity guides, software tutorials"
        canonicalUrl="https://tools.trendexhub.com/guides"
      />
      
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-primary mb-4">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Tutorials</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              How-To Guides
            </h1>
            <p className="text-lg text-muted-foreground">
              Step-by-step tutorials to help you master the best tools. 
              From beginner basics to advanced techniques.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {guides.map((guide, index) => (
              <Link key={guide.id} to={`/guides/${guide.slug}`}>
                <Card 
                  className="h-full hover:border-primary/50 hover:shadow-md transition-all animate-fade-in group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="secondary">{guide.category}</Badge>
                      <Badge className={getDifficultyColor(guide.difficulty)}>
                        {guide.difficulty}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {guide.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {guide.description}
                    </CardDescription>
                    <span className="text-sm text-primary font-medium inline-flex items-center gap-1 group-hover:underline underline-offset-4">
                      Read Guide <ArrowRight className="h-3.5 w-3.5" />
                    </span>
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

export default Guides;
