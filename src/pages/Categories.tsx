import { Link } from "react-router-dom";
import { Bot, Zap, Code, Palette, FolderKanban, Cloud, Lock, Briefcase } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  {
    id: "ai-tools",
    name: "AI Tools",
    description: "Chatbots, writing assistants, image generators, and AI-powered automation tools.",
    icon: Bot,
    count: 45,
  },
  {
    id: "productivity",
    name: "Productivity",
    description: "Note-taking apps, task managers, time trackers, and workflow automation.",
    icon: Zap,
    count: 38,
  },
  {
    id: "development",
    name: "Development",
    description: "Code editors, version control, CI/CD tools, and developer utilities.",
    icon: Code,
    count: 52,
  },
  {
    id: "design",
    name: "Design",
    description: "UI/UX tools, graphic design software, prototyping, and collaboration.",
    icon: Palette,
    count: 29,
  },
  {
    id: "project-management",
    name: "Project Management",
    description: "Issue tracking, team collaboration, agile tools, and roadmap planning.",
    icon: FolderKanban,
    count: 24,
  },
  {
    id: "cloud-services",
    name: "Cloud Services",
    description: "Hosting, databases, serverless functions, and cloud infrastructure.",
    icon: Cloud,
    count: 31,
  },
  {
    id: "security",
    name: "Security & Privacy",
    description: "Password managers, VPNs, encryption tools, and security auditing.",
    icon: Lock,
    count: 18,
  },
  {
    id: "business",
    name: "Business Tools",
    description: "CRM software, invoicing, analytics, and business automation.",
    icon: Briefcase,
    count: 27,
  },
];

const Categories = () => {
  return (
    <Layout>
      <SEO
        title="Tool Categories"
        description="Browse our curated collection of tech, AI, and productivity tools organized by category. Find the perfect tool for your needs."
        keywords="tool categories, AI tools, productivity software, development tools, design tools"
        canonicalUrl="https://tools.trendexhub.com/categories"
      />
      
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Browse by Category
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our curated collection of tools organized by category. 
              Find the perfect solution for your workflow.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link key={category.id} to={`/categories/${category.id}`}>
                  <Card 
                    className="h-full hover:border-primary/50 hover:shadow-md transition-all animate-fade-in group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {category.count} tools
                        </span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {category.name}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
