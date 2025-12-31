import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <Layout>
      <SEO
        title="Terms of Service"
        description="Terms of service for TrendexHub Tools. Read our terms and conditions for using our website."
        canonicalUrl="https://tools.trendexhub.com/terms"
      />
      
      <article className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: December 2025</p>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using TrendexHub Tools, you accept and agree to be bound by 
                these Terms of Service. If you do not agree to these terms, please do not 
                use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Use of Content</h2>
              <p className="text-muted-foreground">
                All content on this website is for informational purposes only. You may not 
                reproduce, distribute, or republish our content without written permission. 
                Personal, non-commercial use is permitted with proper attribution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
              <p className="text-muted-foreground">
                The information provided on TrendexHub Tools is for general informational 
                purposes. We make no warranties about the accuracy, completeness, or reliability 
                of this information. Any reliance you place on such information is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Affiliate Links</h2>
              <p className="text-muted-foreground">
                Some links on our website may be affiliate links. This means we may earn a 
                commission if you make a purchase through these links, at no additional cost 
                to you. See our <a href="/ad-disclosure" className="text-primary hover:underline">Ad Disclosure</a> for more details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                TrendexHub Tools shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages resulting from your use of or inability 
                to use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be 
                effective immediately upon posting. Your continued use of the website 
                constitutes acceptance of the modified terms.
              </p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Terms;
