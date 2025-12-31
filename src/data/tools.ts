export interface Tool {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  longDescription: string;
  rating: number;
  reviewCount: number;
  isFree: boolean;
  pricing: string;
  website: string;
  features: string[];
  pros: string[];
  cons: string[];
  useCases: string[];
  alternatives: string[];
  lastUpdated: string;
}

export const tools: Tool[] = [
  {
    id: 1,
    name: "ChatGPT",
    slug: "chatgpt",
    category: "AI Assistant",
    description: "Advanced AI chatbot for writing, coding, and problem-solving.",
    longDescription: "ChatGPT is a powerful AI language model developed by OpenAI that can assist with a wide range of tasks including writing, coding, analysis, and creative projects. It understands context, generates human-like text, and can engage in detailed conversations on virtually any topic.",
    rating: 4.8,
    reviewCount: 2847,
    isFree: true,
    pricing: "Free tier available, Plus at $20/mo, Team at $25/user/mo",
    website: "https://chat.openai.com",
    features: [
      "Natural language understanding",
      "Code generation and debugging",
      "Content writing and editing",
      "Data analysis and summarization",
      "Multi-language support",
      "Plugin ecosystem"
    ],
    pros: [
      "Extremely versatile for various tasks",
      "Constantly improving with updates",
      "Great for brainstorming and ideation",
      "Excellent code assistance"
    ],
    cons: [
      "Can occasionally provide incorrect information",
      "Knowledge cutoff date limitations",
      "Rate limits on free tier"
    ],
    useCases: [
      "Content creation and copywriting",
      "Code assistance and debugging",
      "Research and learning",
      "Customer support automation"
    ],
    alternatives: ["claude", "gemini", "copilot"],
    lastUpdated: "2024-12-15"
  },
  {
    id: 2,
    name: "Notion",
    slug: "notion",
    category: "Productivity",
    description: "All-in-one workspace for notes, docs, wikis, and project management.",
    longDescription: "Notion is a versatile productivity platform that combines notes, documents, databases, and project management into a single, customizable workspace. It's designed for individuals and teams who want to consolidate their tools and create interconnected systems for knowledge management.",
    rating: 4.7,
    reviewCount: 3215,
    isFree: true,
    pricing: "Free for personal use, Plus at $10/mo, Business at $15/user/mo",
    website: "https://notion.so",
    features: [
      "Flexible page and database system",
      "Real-time collaboration",
      "Templates library",
      "API and integrations",
      "Cross-platform sync",
      "AI writing assistant"
    ],
    pros: [
      "Highly customizable workspace",
      "Great for team collaboration",
      "Excellent template ecosystem",
      "Clean and intuitive interface"
    ],
    cons: [
      "Steep learning curve for advanced features",
      "Can feel slow with large databases",
      "Offline mode limitations"
    ],
    useCases: [
      "Personal knowledge management",
      "Team wikis and documentation",
      "Project and task management",
      "Meeting notes and planning"
    ],
    alternatives: ["obsidian", "coda", "clickup"],
    lastUpdated: "2024-12-10"
  },
  {
    id: 3,
    name: "Figma",
    slug: "figma",
    category: "Design",
    description: "Collaborative interface design tool for teams.",
    longDescription: "Figma is a cloud-based design platform that enables teams to collaborate on interface design in real-time. It's become the industry standard for UI/UX design, prototyping, and design systems, allowing designers and developers to work together seamlessly.",
    rating: 4.9,
    reviewCount: 4102,
    isFree: true,
    pricing: "Free tier available, Professional at $15/editor/mo, Organization at $45/editor/mo",
    website: "https://figma.com",
    features: [
      "Real-time collaboration",
      "Prototyping and interactions",
      "Design systems and components",
      "Developer handoff tools",
      "Plugin ecosystem",
      "FigJam whiteboarding"
    ],
    pros: [
      "Industry-leading collaboration features",
      "Browser-based - no installation needed",
      "Powerful component and variant system",
      "Excellent plugin ecosystem"
    ],
    cons: [
      "Requires internet connection",
      "Can be resource-intensive for complex files",
      "Learning curve for advanced features"
    ],
    useCases: [
      "UI/UX design",
      "Design system creation",
      "Interactive prototyping",
      "Team collaboration and feedback"
    ],
    alternatives: ["sketch", "adobe-xd", "penpot"],
    lastUpdated: "2024-12-12"
  },
  {
    id: 4,
    name: "GitHub Copilot",
    slug: "github-copilot",
    category: "Development",
    description: "AI pair programmer that helps you write better code faster.",
    longDescription: "GitHub Copilot is an AI-powered coding assistant that integrates directly into your IDE. It suggests code completions, entire functions, and helps developers write code faster by understanding context and intent from comments and existing code.",
    rating: 4.6,
    reviewCount: 1893,
    isFree: false,
    pricing: "Individual at $10/mo, Business at $19/user/mo",
    website: "https://github.com/features/copilot",
    features: [
      "Context-aware code suggestions",
      "Multi-language support",
      "IDE integration (VS Code, JetBrains, etc.)",
      "Chat interface for coding questions",
      "Code explanation and documentation",
      "Test generation"
    ],
    pros: [
      "Significantly speeds up coding",
      "Excellent for boilerplate code",
      "Learns from your coding style",
      "Great multi-language support"
    ],
    cons: [
      "Subscription required",
      "Suggestions aren't always accurate",
      "Privacy concerns with code training"
    ],
    useCases: [
      "Faster code writing",
      "Learning new programming languages",
      "Generating boilerplate code",
      "Code documentation"
    ],
    alternatives: ["cursor", "codeium", "tabnine"],
    lastUpdated: "2024-12-08"
  },
  {
    id: 5,
    name: "Midjourney",
    slug: "midjourney",
    category: "AI Design",
    description: "Create stunning AI-generated artwork and images from text prompts.",
    longDescription: "Midjourney is a leading AI image generation tool that creates stunning, artistic images from text descriptions. Known for its aesthetic quality and artistic style, it's widely used by designers, artists, and content creators for everything from concept art to marketing materials.",
    rating: 4.7,
    reviewCount: 2156,
    isFree: false,
    pricing: "Basic at $10/mo, Standard at $30/mo, Pro at $60/mo",
    website: "https://midjourney.com",
    features: [
      "Text-to-image generation",
      "High-resolution outputs",
      "Style customization",
      "Image variations and upscaling",
      "Community showcase",
      "Fast generation modes"
    ],
    pros: [
      "Exceptional artistic quality",
      "Unique aesthetic style",
      "Active community and inspiration",
      "Regular model updates"
    ],
    cons: [
      "Discord-only interface (currently)",
      "Learning curve for prompting",
      "No free tier available"
    ],
    useCases: [
      "Concept art and illustration",
      "Marketing and social media content",
      "Book covers and album art",
      "Design inspiration"
    ],
    alternatives: ["dall-e", "stable-diffusion", "leonardo-ai"],
    lastUpdated: "2024-12-14"
  },
  {
    id: 6,
    name: "Linear",
    slug: "linear",
    category: "Project Management",
    description: "Streamlined issue tracking for high-performance software teams.",
    longDescription: "Linear is a modern project management tool designed specifically for software development teams. It offers a fast, keyboard-driven interface with powerful features for issue tracking, sprint planning, and roadmap management, all while maintaining simplicity and speed.",
    rating: 4.8,
    reviewCount: 1567,
    isFree: true,
    pricing: "Free for small teams, Standard at $8/user/mo, Plus at $14/user/mo",
    website: "https://linear.app",
    features: [
      "Fast, keyboard-driven interface",
      "Cycles and roadmaps",
      "GitHub/GitLab integration",
      "Automated workflows",
      "Custom views and filters",
      "API and integrations"
    ],
    pros: [
      "Incredibly fast and responsive",
      "Beautiful, minimal design",
      "Excellent keyboard shortcuts",
      "Great developer experience"
    ],
    cons: [
      "Limited customization options",
      "Primarily for software teams",
      "Mobile app could be better"
    ],
    useCases: [
      "Software development tracking",
      "Sprint planning and management",
      "Bug tracking and triage",
      "Product roadmap planning"
    ],
    alternatives: ["jira", "asana", "height"],
    lastUpdated: "2024-12-11"
  }
];

export const getToolBySlug = (slug: string): Tool | undefined => {
  return tools.find(tool => tool.slug === slug);
};

export const getRelatedTools = (currentSlug: string, alternativeSlugs: string[]): Tool[] => {
  return tools.filter(tool => 
    alternativeSlugs.includes(tool.slug) && tool.slug !== currentSlug
  );
};

export const getToolsByCategory = (category: string): Tool[] => {
  return tools.filter(tool => tool.category === category);
};
