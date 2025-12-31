import { useParams, Link } from "react-router-dom";
import { Clock, ArrowLeft, BookOpen, User, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getGuideBySlug, guides } from "@/data/guides";

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

const GuideDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getGuideBySlug(slug) : undefined;

  if (!guide) {
    return (
      <Layout>
        <SEO title="Guide Not Found" description="The requested guide could not be found." />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Guide Not Found</h1>
          <p className="text-muted-foreground mb-8">The guide you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/guides">Browse All Guides</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const relatedGuides = guides
    .filter(g => g.category === guide.category && g.id !== guide.id)
    .slice(0, 3);

  return (
    <Layout>
      <SEO
        title={guide.title}
        description={guide.description}
        keywords={`${guide.category} guide, ${guide.title}, how to, tutorial`}
        canonicalUrl={`https://tools.trendexhub.com/guides/${guide.slug}`}
      />

      <article className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Guides
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="secondary">{guide.category}</Badge>
                <Badge className={getDifficultyColor(guide.difficulty)}>
                  {guide.difficulty}
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {guide.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                {guide.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {guide.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {guide.publishedDate}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {guide.readTime} read
                </span>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
              <div 
                className="space-y-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:text-muted-foreground [&>ul]:space-y-2 [&>ul]:text-muted-foreground [&>ol]:space-y-2 [&>ol]:text-muted-foreground [&>pre]:bg-muted [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto"
                dangerouslySetInnerHTML={{ 
                  __html: guide.content
                    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                    .replace(/^\*\*(.*?)\*\*/gm, '<strong>$1</strong>')
                    .replace(/^\- (.*$)/gm, '<li>$1</li>')
                    .replace(/^(\d+)\. (.*$)/gm, '<li>$2</li>')
                    .replace(/```[\s\S]*?```/g, (match) => {
                      const code = match.replace(/```\w*\n?/g, '').replace(/```/g, '');
                      return `<pre><code>${code}</code></pre>`;
                    })
                    .replace(/\n\n/g, '</p><p>')
                }}
              />
            </div>

            {/* Related Guides */}
            {relatedGuides.length > 0 && (
              <section className="border-t pt-12">
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">Related Guides</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {relatedGuides.map((relatedGuide) => (
                    <Link key={relatedGuide.id} to={`/guides/${relatedGuide.slug}`}>
                      <Card className="h-full hover:border-primary/50 transition-colors group">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {relatedGuide.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {relatedGuide.readTime}
                            </span>
                          </div>
                          <CardTitle className="text-base group-hover:text-primary transition-colors">
                            {relatedGuide.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {relatedGuide.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default GuideDetail;
