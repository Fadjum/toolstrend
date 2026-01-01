import { useParams, Link } from "react-router-dom";
import { Clock, ArrowLeft, Calendar, Tag } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBlogPostBySlug, blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <Layout>
        <SEO title="Article Not Found" description="The requested article could not be found." />
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-display mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Browse All Articles
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category}, ${post.title}, tech blog, AI news`}
        canonicalUrl={`https://tools.trendexhub.com/blog/${post.slug}`}
      />

      <article className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-8 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-border">
                <span className="font-medium text-foreground">By Lubega Fahad</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime} read
                </span>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
              <div 
                className="space-y-6 [&>h2]:text-2xl [&>h2]:font-display [&>h2]:mt-12 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-display [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>ul]:space-y-2 [&>ul]:text-muted-foreground [&>ol]:space-y-2 [&>ol]:text-muted-foreground [&>pre]:bg-muted [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
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

            {/* Author Box */}
            <div className="p-6 rounded-2xl bg-accent/50 border border-border mb-16">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display text-lg">
                  LF
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Lubega Fahad</p>
                  <p className="text-sm text-muted-foreground">
                    Tech enthusiast and writer covering AI, productivity tools, and digital workflows. 
                    Passionate about helping people work smarter with the right tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="border-t border-border pt-12">
                <div className="flex items-center gap-2 mb-8">
                  <Tag className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-display">Related Articles</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                      <Card className="h-full hover:border-primary/50 transition-colors group">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                              {relatedPost.category}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {relatedPost.readTime}
                            </span>
                          </div>
                          <CardTitle className="text-base font-display group-hover:text-primary transition-colors">
                            {relatedPost.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {relatedPost.excerpt}
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

export default BlogPost;
