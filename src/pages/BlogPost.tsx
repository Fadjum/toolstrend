import { useParams, Link } from "react-router-dom";
import { Clock, ArrowLeft, User, Calendar, Tag } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Browse All Articles</Link>
          </Button>
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
          <div className="max-w-4xl mx-auto">
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
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="secondary">{post.category}</Badge>
                {post.featured && (
                  <Badge className="bg-primary/10 text-primary">Featured</Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime} read
                </span>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none mb-16">
              <div 
                className="space-y-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:text-muted-foreground [&>ul]:space-y-2 [&>ul]:text-muted-foreground [&>ol]:space-y-2 [&>ol]:text-muted-foreground [&>pre]:bg-muted [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto"
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

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="border-t pt-12">
                <div className="flex items-center gap-2 mb-6">
                  <Tag className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">Related Articles</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                      <Card className="h-full hover:border-primary/50 transition-colors group">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {relatedPost.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {relatedPost.readTime}
                            </span>
                          </div>
                          <CardTitle className="text-base group-hover:text-primary transition-colors">
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
