import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const AdDisclosure = () => {
  return (
    <Layout>
      <SEO
        title="Advertising Disclosure"
        description="Advertising and affiliate disclosure for TrendexHub Tools. Learn how we monetize our content and maintain editorial integrity."
        canonicalUrl="https://tools.trendexhub.com/ad-disclosure"
      />
      
      <article className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Advertising Disclosure</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: December 2025</p>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Make Money</h2>
              <p className="text-muted-foreground">
                TrendexHub Tools is a free resource supported by advertising and affiliate 
                partnerships. This allows us to provide valuable content without charging 
                our readers. Here's how we monetize our website:
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Display Advertising</h2>
              <p className="text-muted-foreground">
                We display advertisements through Google AdSense and similar advertising 
                networks. These ads help cover our operating costs and allow us to continue 
                producing quality content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Affiliate Links</h2>
              <p className="text-muted-foreground mb-4">
                Some links on TrendexHub Tools are affiliate links. When you click on these 
                links and make a purchase, we may earn a commission at no additional cost to you.
              </p>
              <p className="text-muted-foreground">
                <strong>Important:</strong> Our reviews and recommendations are based on genuine 
                research and testing. We never recommend products solely because they offer 
                affiliate commissions. Our editorial integrity is not for sale.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Sponsored Content</h2>
              <p className="text-muted-foreground">
                Occasionally, we may publish sponsored content or accept payments for reviews. 
                Any sponsored content will be clearly labeled as such. Sponsored relationships 
                do not influence our honest opinions and assessments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Commitment to You</h2>
              <p className="text-muted-foreground mb-2">We pledge to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Always disclose affiliate relationships</li>
                <li>• Provide honest, unbiased reviews</li>
                <li>• Never let financial incentives compromise our recommendations</li>
                <li>• Clearly label sponsored content</li>
                <li>• Prioritize reader value over commissions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
              <p className="text-muted-foreground">
                If you have any questions about our advertising practices or affiliate 
                relationships, please <a href="/contact" className="text-primary hover:underline">contact us</a>. 
                We're committed to transparency and are happy to answer any questions.
              </p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default AdDisclosure;
