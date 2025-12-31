import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { tools } from "@/data/tools";

const categoryInfo: Record<string, { name: string; description: string; icon: string }> = {
  "ai-tools": {
    name: "AI Tools",
    description: "Discover the best artificial intelligence tools including chatbots, writing assistants, image generators, and automation platforms.",
    icon: "🤖"
  },
  "productivity": {
    name: "Productivity",
    description: "Boost your efficiency with top-rated note-taking apps, task managers, time trackers, and workflow automation tools.",
    icon: "⚡"
  },
  "development": {
    name: "Development",
    description: "Essential tools for developers including code editors, version control, CI/CD, debugging, and developer utilities.",
    icon: "💻"
  },
  "design": {
    name: "Design",
    description: "Creative tools for UI/UX design, graphic design, prototyping, and design collaboration.",
    icon: "🎨"
  },
  "project-management": {
    name: "Project Management",
    description: "Streamline your team's workflow with issue tracking, collaboration, agile tools, and roadmap planning.",
    icon: "📋"
  },
  "cloud-services": {
    name: "Cloud Services",
    description: "Reliable hosting, databases, serverless functions, and cloud infrastructure solutions.",
    icon: "☁️"
  },
  "security": {
    name: "Security & Privacy",
    description: "Protect your data with password managers, VPNs, encryption tools, and security auditing solutions.",
    icon: "🔒"
  },
  "business": {
    name: "Business Tools",
    description: "Essential business software including CRM, invoicing, analytics, and business automation.",
    icon: "💼"
  }
};

// Map tool categories to URL slugs
const categoryMapping: Record<string, string> = {
  "AI Assistant": "ai-tools",
  "AI Design": "ai-tools",
  "Productivity": "productivity",
  "Development": "development",
  "Design": "design",
  "Project Management": "project-management",
  "Cloud Services": "cloud-services"
};

const CategoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? categoryInfo[slug] : undefined;

  // Get tools that belong to this category
  const categoryTools = tools.filter(tool => {
    const toolCategorySlug = categoryMapping[tool.category];
    return toolCategorySlug === slug;
  });

  if (!category) {
    return (
      <Layout>
        <SEO title="Category Not Found" description="The requested category could not be found." />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">The category you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/categories">Browse All Categories</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${category.name} - Best Tools & Software`}
        description={category.description}
        keywords={`${category.name}, best ${category.name.toLowerCase()}, top tools, software reviews`}
        canonicalUrl={`https://tools.trendexhub.com/categories/${slug}`}
      />

      <section className="py-12 md:py-16">
        <div className="container">
          {/* Back Link */}
          <Link
            to="/categories"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Categories
          </Link>

          {/* Header */}
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{category.icon}</span>
              <h1 className="text-3xl md:text-4xl font-bold">{category.name}</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              {category.description}
            </p>
          </div>

          {/* Tools Grid */}
          {categoryTools.length > 0 ? (
            <div className="grid gap-6">
              {categoryTools.map((tool, index) => (
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
                          {tool.isFree && (
                            <Badge className="bg-success/10 text-success">
                              Free Tier
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl">{tool.name}</CardTitle>
                        <CardDescription className="mt-2">
                          {tool.description}
                        </CardDescription>
                      </div>
                      <div className="flex sm:flex-col items-center sm:items-end gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-5 w-5 fill-warning text-warning" />
                          <span className="font-bold text-lg">{tool.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {tool.reviewCount.toLocaleString()} reviews
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {tool.pros.slice(0, 3).map((pro) => (
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
          ) : (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground mb-4">
                We're currently working on adding tools to this category.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Check back soon for the latest {category.name.toLowerCase()} reviews and recommendations.
              </p>
              <Button asChild variant="outline">
                <Link to="/top-tools">Browse Top Tools</Link>
              </Button>
            </Card>
          )}

          {/* Category Stats */}
          {categoryTools.length > 0 && (
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-primary">{categoryTools.length}</p>
                <p className="text-sm text-muted-foreground">Tools Reviewed</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-primary">
                  {(categoryTools.reduce((acc, t) => acc + t.rating, 0) / categoryTools.length).toFixed(1)}
                </p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-primary">
                  {categoryTools.filter(t => t.isFree).length}
                </p>
                <p className="text-sm text-muted-foreground">Free Options</p>
              </Card>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CategoryDetail;
