import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FeaturedArticle = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-background to-info/10 border border-border">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Featured
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 max-w-3xl">
              The Ultimate Guide to AI Productivity Tools in 2025
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Discover how artificial intelligence is transforming the way we work. 
              From automated writing assistants to intelligent code completion, 
              explore the best AI tools that will supercharge your productivity.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Dec 28, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                12 min read
              </span>
            </div>
            
            <Link
              to="/blog/ai-productivity-tools-2025"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
            >
              Read Full Article
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
