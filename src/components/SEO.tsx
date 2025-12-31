import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/og-image.png",
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | TrendexHub Tools`;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMeta("description", description);
    if (keywords) updateMeta("keywords", keywords);
    
    // Open Graph
    updateMeta("og:title", `${title} | TrendexHub Tools`, true);
    updateMeta("og:description", description, true);
    updateMeta("og:type", "website", true);
    if (ogImage) updateMeta("og:image", ogImage, true);
    
    // Twitter Card
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", `${title} | TrendexHub Tools`);
    updateMeta("twitter:description", description);

    // Canonical URL
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonicalUrl);
    }
  }, [title, description, keywords, canonicalUrl, ogImage]);

  return null;
};

export default SEO;
