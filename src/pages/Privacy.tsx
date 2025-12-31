import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for TrendexHub Tools. Learn how we collect, use, and protect your personal information."
        canonicalUrl="https://tools.trendexhub.com/privacy"
      />
      
      <article className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: December 2025</p>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                TrendexHub Tools ("we," "our," or "us") respects your privacy and is committed to 
                protecting your personal data. This privacy policy explains how we collect, use, 
                and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-2">We may collect the following types of information:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Email addresses (when you subscribe to our newsletter)</li>
                <li>• Usage data (pages visited, time spent, browser type)</li>
                <li>• Device information (IP address, device type, operating system)</li>
                <li>• Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-2">We use collected information to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Provide and improve our content and services</li>
                <li>• Send newsletters and updates (with your consent)</li>
                <li>• Analyze website performance and user behavior</li>
                <li>• Display relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground">
                We use third-party services including Google Analytics and Google AdSense. 
                These services may collect information about your browsing behavior. 
                Please review their respective privacy policies for more information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, correct, or delete your personal data. 
                You can opt out of email communications at any time by clicking the 
                unsubscribe link in our emails.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this privacy policy, please contact us through 
                our <a href="/contact" className="text-primary hover:underline">contact page</a>.
              </p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Privacy;
