import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const FeaturedArticle = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent via-background to-muted border border-border">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6">
              Featured
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight mb-6 max-w-3xl">
              The Ultimate Guide to AI Productivity Tools in 2025
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Discover how artificial intelligence is transforming the way we work. 
              From automated writing assistants to intelligent code completion, 
              explore the best AI tools that will supercharge your productivity.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">By Lubega Fahad</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                Dec 28, 2025
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                12 min read
              </span>
            </div>
            
            <Link
              to="/blog/ai-productivity-tools-2025"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Read Article
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
