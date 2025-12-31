import { Link } from "react-router-dom";
import { ArrowRight, Star, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { tools } from "@/data/tools";

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
