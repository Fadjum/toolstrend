import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Learn about TrendexHub Tools - your trusted source for tech, AI, and productivity tool reviews and guides."
        canonicalUrl="https://tools.trendexhub.com/about"
      />
      
      <article className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About TrendexHub Tools</h1>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              TrendexHub Tools is your trusted source for discovering, comparing, and 
              mastering the best tech, software, AI, and productivity tools available today.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              We believe that the right tools can transform how you work. Our mission is to 
              cut through the noise and help you find tools that genuinely improve your 
              productivity, creativity, and workflow.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">What We Do</h2>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>In-depth Reviews:</strong> We test and evaluate tools based on real-world usage.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Comparison Guides:</strong> Side-by-side comparisons to help you make informed decisions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>How-To Tutorials:</strong> Step-by-step guides to help you get the most out of your tools.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Latest Updates:</strong> Stay informed about new features, pricing changes, and industry trends.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
            <p className="text-muted-foreground mb-4">
              We prioritize honesty, thoroughness, and user value in everything we publish. 
              Our recommendations are based on genuine research and testing, not just 
              marketing claims.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              Have questions, suggestions, or want to partner with us? We'd love to hear from you. 
              Visit our <a href="/contact" className="text-primary hover:underline">contact page</a> to get in touch.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default About;
