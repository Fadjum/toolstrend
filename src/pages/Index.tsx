import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import FeaturedArticle from "@/components/home/FeaturedArticle";
import ToolsGrid from "@/components/home/ToolsGrid";
import ComparisonTable from "@/components/home/ComparisonTable";
import GuidesSection from "@/components/home/GuidesSection";
import NewsletterCTA from "@/components/home/NewsletterCTA";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Best Tech, AI & Productivity Tools"
        description="Discover the best tech, software, AI, and productivity tools to boost your workflow. Expert reviews, comparisons, and how-to guides."
        keywords="AI tools, productivity software, tech tools, software reviews, best AI apps, productivity apps"
        canonicalUrl="https://tools.trendexhub.com"
      />
      <FeaturedArticle />
      <ToolsGrid />
      <ComparisonTable />
      <GuidesSection />
      <NewsletterCTA />
    </Layout>
  );
};

export default Index;
