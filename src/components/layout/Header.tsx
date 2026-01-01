import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { tools } from "@/data/tools";
import { blogPosts } from "@/data/blogPosts";
import { guides } from "@/data/guides";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "Top Tools", href: "/top-tools" },
  { name: "Guides", href: "/guides" },
  { name: "Blog", href: "/blog" },
];

interface SearchResult {
  type: "tool" | "blog" | "guide";
  title: string;
  slug: string;
  description: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isDark, setIsDark] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize theme
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  // Handle search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    // Search tools
    tools.forEach((tool) => {
      if (
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
      ) {
        results.push({
          type: "tool",
          title: tool.name,
          slug: `/tools/${tool.slug}`,
          description: tool.description,
        });
      }
    });

    // Search blog posts
    blogPosts.forEach((post) => {
      if (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query)
      ) {
        results.push({
          type: "blog",
          title: post.title,
          slug: `/blog/${post.slug}`,
          description: post.excerpt,
        });
      }
    });

    // Search guides
    guides.forEach((guide) => {
      if (
        guide.title.toLowerCase().includes(query) ||
        guide.description.toLowerCase().includes(query)
      ) {
        results.push({
          type: "guide",
          title: guide.title,
          slug: `/guides/${guide.slug}`,
          description: guide.description,
        });
      }
    });

    setSearchResults(results.slice(0, 6));
  }, [searchQuery]);

  // Close search on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleResultClick = (slug: string) => {
    navigate(slug);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "tool":
        return "Tool";
      case "blog":
        return "Article";
      case "guide":
        return "Guide";
      default:
        return type;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo - Text only "trendera" */}
        <Link to="/" className="flex items-center">
          <span className="font-serif text-2xl tracking-tight text-foreground">
            trendera
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                location.pathname === link.href
                  ? "text-primary bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search & Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div ref={searchRef} className="relative">
            {isSearchOpen ? (
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <div className="relative">
                  <Input
                    ref={inputRef}
                    type="search"
                    placeholder="Search tools, articles..."
                    className="w-64 sm:w-80 h-10 pr-10 rounded-full border-border bg-background"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-10 w-10 rounded-full"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Search Results Dropdown */}
                {searchResults.length > 0 && (
                  <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(result.slug)}
                        className="w-full text-left px-4 py-3 hover:bg-muted transition-colors border-b border-border last:border-0"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                            {getTypeLabel(result.type)}
                          </span>
                        </div>
                        <p className="font-medium text-sm text-foreground line-clamp-1">
                          {result.title}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {result.description}
                        </p>
                      </button>
                    ))}
                  </div>
                )}

                {searchQuery && searchResults.length === 0 && (
                  <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-lg shadow-lg p-4">
                    <p className="text-sm text-muted-foreground text-center">
                      No results found for "{searchQuery}"
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="h-10 w-10 rounded-full"
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            )}
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-10 w-10 rounded-full"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-10 w-10 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.href
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
