import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg">
                TrendexHub <span className="text-primary">Tools</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Discover the best tech, software, AI, and productivity tools to
              boost your workflow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/categories"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/top-tools"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Top Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/guides"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  How-To Guides
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/categories#ai-tools"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/categories#productivity"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Productivity
                </Link>
              </li>
              <li>
                <Link
                  to="/categories#development"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
                  to="/categories#design"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/ad-disclosure"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Ad Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TrendexHub Tools. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            This site contains affiliate links. We may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
