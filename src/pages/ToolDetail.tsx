import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { getToolBySlug, getRelatedTools, tools } from "@/data/tools";
import { 
  Star, 
  ExternalLink, 
  Check, 
  X, 
  ArrowLeft, 
  Calendar,
  Users,
  Zap,
  Target
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ToolDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = slug ? getToolBySlug(slug) : undefined;

  if (!tool) {
    return (
      <Layout>
        <SEO title="Tool Not Found" description="The requested tool could not be found." />
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Tool Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The tool you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/top-tools">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Browse All Tools
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedTools = getRelatedTools(tool.slug, tool.alternatives);
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating)
            ? "fill-warning text-warning"
            : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  return (
    <Layout>
      <SEO
        title={`${tool.name} Review - Features, Pricing & Alternatives`}
        description={`Complete ${tool.name} review with features, pros & cons, pricing, and alternatives. ${tool.description}`}
      />

      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/top-tools" className="hover:text-foreground transition-colors">
              Tools
            </Link>
            <span>/</span>
            <span className="text-foreground">{tool.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 md:py-12 border-b bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <Link
            to="/top-tools"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all tools
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl">
                  {tool.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-3xl md:text-4xl font-bold">{tool.name}</h1>
                    {tool.isFree && (
                      <Badge className="bg-success text-success-foreground">Free Tier</Badge>
                    )}
                  </div>
                  <Badge variant="secondary">{tool.category}</Badge>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {tool.longDescription}
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(tool.rating)}</div>
                  <span className="font-semibold text-lg">{tool.rating}</span>
                  <span className="text-muted-foreground">
                    ({tool.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Updated {tool.lastUpdated}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Pricing</p>
                    <p className="font-medium">{tool.pricing}</p>
                  </div>
                  <Separator />
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full">
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              {/* Key Features */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-primary" />
                  Key Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {tool.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border"
                    >
                      <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-success/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2 text-success">
                      <Check className="h-5 w-5" />
                      Pros
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tool.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-success shrink-0 mt-1" />
                          <span className="text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-destructive/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2 text-destructive">
                      <X className="h-5 w-5" />
                      Cons
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tool.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <X className="h-4 w-4 text-destructive shrink-0 mt-1" />
                          <span className="text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Use Cases */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  Best Use Cases
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {tool.useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border bg-card hover:border-primary/50 transition-colors"
                    >
                      <p className="font-medium">{useCase}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Alternatives */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Alternatives
                </h3>
                {relatedTools.length > 0 ? (
                  <div className="space-y-3">
                    {relatedTools.map((altTool) => (
                      <Link key={altTool.id} to={`/tools/${altTool.slug}`}>
                        <Card className="hover:border-primary/50 transition-colors">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{altTool.name}</h4>
                              <div className="flex items-center gap-1 text-sm">
                                <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                                <span>{altTool.rating}</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {altTool.description}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">
                    No alternatives available in our database yet.
                  </p>
                )}

                <Separator className="my-6" />

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Need Help Choosing?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Check out our comparison guides to find the perfect tool for your needs.
                    </p>
                    <Link to="/guides">
                      <Button variant="outline" size="sm" className="w-full">
                        View Guides
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Quick Comparison</h2>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Tool</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Free Tier</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-primary/5">
                  <TableCell className="font-semibold">{tool.name}</TableCell>
                  <TableCell>{tool.category}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-warning text-warning" />
                      {tool.rating}
                    </div>
                  </TableCell>
                  <TableCell>
                    {tool.isFree ? (
                      <Check className="h-4 w-4 text-success" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground" />
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge>Current</Badge>
                  </TableCell>
                </TableRow>
                {relatedTools.slice(0, 3).map((altTool) => (
                  <TableRow key={altTool.id}>
                    <TableCell className="font-medium">{altTool.name}</TableCell>
                    <TableCell>{altTool.category}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-warning text-warning" />
                        {altTool.rating}
                      </div>
                    </TableCell>
                    <TableCell>
                      {altTool.isFree ? (
                        <Check className="h-4 w-4 text-success" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground" />
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Link to={`/tools/${altTool.slug}`}>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* More Tools CTA */}
      <section className="py-10 md:py-14">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Explore More Tools</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Discover more productivity and tech tools to enhance your workflow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/top-tools">
              <Button>View All Tools</Button>
            </Link>
            <Link to="/categories">
              <Button variant="outline">Browse Categories</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ToolDetail;
