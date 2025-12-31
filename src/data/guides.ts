export interface Guide {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  readTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  author: string;
  publishedDate: string;
  content: string;
}

export const guides: Guide[] = [
  {
    id: 1,
    title: "How to Use ChatGPT for Content Creation",
    slug: "chatgpt-content-creation",
    category: "AI",
    description: "A comprehensive guide to leveraging AI for blog posts, social media content, and marketing copy. Learn prompting techniques and best practices.",
    readTime: "8 min",
    difficulty: "Beginner",
    author: "Alex Chen",
    publishedDate: "Dec 20, 2025",
    content: `
## Introduction

ChatGPT has revolutionized content creation, making it easier than ever to generate high-quality written content. Whether you're creating blog posts, social media updates, or marketing copy, understanding how to effectively use ChatGPT can significantly boost your productivity.

## Getting Started with ChatGPT

Before diving into advanced techniques, it's important to understand the basics:

1. **Create an account** at chat.openai.com
2. **Choose your plan** - Free tier works great for getting started
3. **Familiarize yourself** with the interface

## Writing Effective Prompts

The key to getting great results from ChatGPT lies in how you craft your prompts. Here are essential tips:

### Be Specific
Instead of asking "Write about marketing," try "Write a 500-word blog post about email marketing strategies for small e-commerce businesses."

### Provide Context
Give ChatGPT background information about your brand voice, target audience, and goals.

### Use Role-Playing
Ask ChatGPT to assume a specific role: "Act as a seasoned copywriter with 10 years of experience..."

## Content Types You Can Create

ChatGPT excels at various content formats:

- **Blog posts and articles**
- **Social media captions**
- **Email newsletters**
- **Product descriptions**
- **Landing page copy**
- **Video scripts**

## Best Practices

1. **Always edit AI-generated content** - Add your personal touch
2. **Fact-check information** - AI can occasionally provide outdated or incorrect facts
3. **Maintain your brand voice** - Use the output as a starting point
4. **Iterate and refine** - Don't settle for the first response

## Conclusion

ChatGPT is a powerful tool that can significantly enhance your content creation workflow. By mastering prompting techniques and following best practices, you can create engaging content while saving valuable time.
    `
  },
  {
    id: 2,
    title: "Setting Up Your Notion Workspace from Scratch",
    slug: "notion-workspace-setup",
    category: "Productivity",
    description: "Create an organized, efficient workspace with templates, databases, and workflows. Perfect for personal or team use.",
    readTime: "10 min",
    difficulty: "Beginner",
    author: "Sarah Miller",
    publishedDate: "Dec 18, 2025",
    content: `
## Introduction

Notion is one of the most flexible productivity tools available, but its flexibility can also be overwhelming. This guide will help you set up a workspace that actually works for you.

## Understanding Notion's Building Blocks

Before creating your workspace, understand these core concepts:

### Pages
Everything in Notion is a page. Pages can contain content, databases, or other pages.

### Databases
Databases are powerful tables that can be viewed in multiple ways: table, board, calendar, gallery, and list.

### Blocks
Every piece of content in Notion is a block—text, images, embeds, and more.

## Step 1: Create Your Home Dashboard

Your home page should be a central hub. Include:

- Quick links to frequently used pages
- A task overview widget
- Recent documents
- Goals and priorities

## Step 2: Set Up Core Databases

Create these essential databases:

1. **Tasks Database** - Track all your to-dos with properties for status, priority, and due dates
2. **Projects Database** - Manage larger initiatives
3. **Notes Database** - Store all your notes in one searchable location
4. **Resources Database** - Save useful links and references

## Step 3: Create Templates

Templates save time on repetitive tasks:

- Meeting notes template
- Weekly review template
- Project kickoff template

## Step 4: Connect Everything

Use relations and rollups to connect your databases:

- Link tasks to projects
- Associate notes with projects
- Track progress automatically

## Pro Tips

- **Use keyboard shortcuts** - Press / to see all available blocks
- **Create a sidebar** - Organize pages in a logical hierarchy
- **Archive, don't delete** - Keep old content for reference
- **Use icons and covers** - Make pages visually distinct

## Conclusion

A well-organized Notion workspace can transform your productivity. Start simple and add complexity as you need it.
    `
  },
  {
    id: 3,
    title: "Getting Started with GitHub Copilot",
    slug: "github-copilot-guide",
    category: "Development",
    description: "Boost your coding productivity with AI-powered code completion. Learn how to get the most out of this powerful tool.",
    readTime: "6 min",
    difficulty: "Intermediate",
    author: "Mike Peters",
    publishedDate: "Dec 15, 2025",
    content: `
## Introduction

GitHub Copilot is an AI pair programmer that helps you write code faster. It suggests code completions, entire functions, and can even help you learn new programming languages.

## Installation and Setup

### VS Code Setup
1. Install the GitHub Copilot extension
2. Sign in with your GitHub account
3. Authorize the extension
4. Start coding!

### JetBrains IDEs
1. Go to Settings > Plugins
2. Search for "GitHub Copilot"
3. Install and restart your IDE

## Basic Usage

### Inline Suggestions
As you type, Copilot suggests code completions in gray text. Press Tab to accept.

### Ghost Text
Copilot shows suggestions as "ghost text" that you can accept, modify, or ignore.

### Copilot Chat
Use the chat panel to ask coding questions and get explanations.

## Effective Techniques

### Write Clear Comments
\`\`\`javascript
// Function to calculate the total price with tax
// Input: price (number), taxRate (number)
// Output: total price including tax
\`\`\`

Copilot uses your comments to understand what you want.

### Use Descriptive Function Names
\`\`\`python
def fetch_user_by_email(email: str) -> User:
\`\`\`

Good naming helps Copilot generate better suggestions.

### Provide Examples
Show Copilot a pattern and it will continue:
\`\`\`typescript
const routes = {
  home: "/",
  about: "/about",
  // Copilot will suggest more routes
\`\`\`

## Best Practices

1. **Review suggestions carefully** - Don't blindly accept code
2. **Test generated code** - Always verify it works correctly
3. **Learn from suggestions** - Use it as a learning tool
4. **Customize settings** - Adjust suggestion frequency to your preference

## Security Considerations

- Don't expose sensitive data in prompts
- Be cautious with generated code in security-critical sections
- Review authentication and authorization code carefully

## Conclusion

GitHub Copilot can significantly speed up your development workflow. Use it as a tool to augment your skills, not replace your judgment.
    `
  },
  {
    id: 4,
    title: "Automating Tasks with Zapier",
    slug: "zapier-automation-guide",
    category: "Automation",
    description: "Connect your apps and automate repetitive workflows without writing any code. From simple to complex automations.",
    readTime: "12 min",
    difficulty: "Beginner",
    author: "Lisa Park",
    publishedDate: "Dec 12, 2025",
    content: `
## Introduction

Zapier connects your favorite apps and automates workflows, saving you hours of repetitive work. No coding required.

## Understanding Zaps

A Zap is an automated workflow with:
- **Trigger**: The event that starts the automation
- **Action**: What happens after the trigger

## Your First Zap

Let's create a simple automation:

### Example: Save Gmail Attachments to Google Drive

1. **Trigger**: New email with attachment in Gmail
2. **Action**: Upload file to Google Drive folder

### Step-by-Step:
1. Click "Create Zap"
2. Choose Gmail as trigger app
3. Select "New Attachment" as trigger event
4. Connect your Gmail account
5. Choose Google Drive as action app
6. Select "Upload File" as action
7. Map the attachment to the file field
8. Test and turn on

## Advanced Automation Patterns

### Multi-Step Zaps
Chain multiple actions together:
1. New form submission (Typeform)
2. Add contact to CRM (HubSpot)
3. Send welcome email (Mailchimp)
4. Notify team (Slack)

### Filters
Only run actions when conditions are met:
- If email contains specific keywords
- If amount is greater than $100
- If status equals "Completed"

### Formatters
Transform data between steps:
- Format dates
- Extract text
- Do math calculations

## Popular Automation Ideas

1. **Lead Management**: Form submission → CRM → Email sequence
2. **Social Media**: Blog post → Twitter + LinkedIn + Facebook
3. **E-commerce**: New order → Invoice + Inventory update
4. **Team Notifications**: Critical event → Slack/Teams message
5. **Data Sync**: Spreadsheet → Database → Dashboard

## Best Practices

- Start simple and add complexity
- Test thoroughly before activating
- Monitor your Zap history
- Document your automations

## Conclusion

Automation frees you to focus on important work. Start with one simple Zap and expand from there.
    `
  },
  {
    id: 5,
    title: "Building a Design System in Figma",
    slug: "figma-design-system",
    category: "Design",
    description: "Create consistent, scalable design systems with components, variants, and auto-layout. Essential for design teams.",
    readTime: "15 min",
    difficulty: "Advanced",
    author: "David Kim",
    publishedDate: "Dec 10, 2025",
    content: `
## Introduction

A design system ensures consistency across your product and speeds up the design process. Figma's component system makes this achievable for teams of any size.

## Foundation: Design Tokens

Start with the fundamentals:

### Colors
Create color styles for:
- Primary, secondary, accent colors
- Neutral shades (50-900)
- Semantic colors (success, warning, error)

### Typography
Define text styles:
- Headings (H1-H6)
- Body text (large, medium, small)
- Labels and captions

### Spacing
Create consistent spacing tokens:
- 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

### Effects
Define shadow and blur styles:
- Elevation levels (sm, md, lg, xl)
- Overlays and backgrounds

## Building Components

### Atomic Design Approach

1. **Atoms**: Buttons, inputs, icons
2. **Molecules**: Form fields, cards, badges
3. **Organisms**: Navigation, hero sections
4. **Templates**: Page layouts
5. **Pages**: Actual designs

### Component Best Practices

- Use auto-layout for everything
- Create variants for different states
- Name layers clearly
- Add descriptions to components

## Variants and Properties

### Creating Variants
Group related components:
- Button: primary, secondary, ghost
- Size: small, medium, large
- State: default, hover, disabled

### Boolean Properties
Toggle elements on/off:
- Show/hide icon
- Show/hide label

### Instance Swap
Allow swapping nested components:
- Different icons
- Different avatars

## Auto-Layout Mastery

### Key Settings
- **Spacing**: Gap between children
- **Padding**: Internal spacing
- **Alignment**: How children align
- **Resize**: Hug vs Fixed vs Fill

### Responsive Design
Use constraints and auto-layout to create responsive components that adapt to content.

## Documentation

Document your design system:
- Component usage guidelines
- Do's and don'ts
- Code equivalents
- Examples in context

## Maintenance

- Schedule regular reviews
- Version your components
- Communicate changes to the team
- Archive deprecated components

## Conclusion

A well-built design system is an investment that pays off in consistency, speed, and quality. Start small and iterate.
    `
  },
  {
    id: 6,
    title: "AI Image Generation: Midjourney vs DALL-E 3",
    slug: "ai-image-generation-comparison",
    category: "AI",
    description: "Compare the leading AI image generators and learn when to use each one for different creative projects.",
    readTime: "9 min",
    difficulty: "Beginner",
    author: "James Wilson",
    publishedDate: "Dec 8, 2025",
    content: `
## Introduction

AI image generation has transformed creative work. Two platforms lead the field: Midjourney and DALL-E 3. Understanding their strengths helps you choose the right tool.

## Overview

### Midjourney
- Accessed through Discord
- Known for artistic, stylized outputs
- Strong community and inspiration gallery
- Subscription required ($10-60/month)

### DALL-E 3
- Integrated into ChatGPT
- Excellent at following detailed prompts
- Better at text in images
- Available with ChatGPT Plus ($20/month)

## Image Quality Comparison

### Artistic Style
**Midjourney** excels at:
- Painterly and artistic styles
- Fantasy and sci-fi imagery
- Atmospheric lighting
- Unique aesthetic quality

**DALL-E 3** excels at:
- Photorealistic images
- Accurate text rendering
- Following complex instructions
- Diverse styles

### Prompt Following
DALL-E 3 generally follows prompts more literally, while Midjourney interprets prompts more creatively.

## Best Use Cases

### Choose Midjourney For:
- Concept art
- Book covers
- Album artwork
- Mood boards
- Artistic illustrations

### Choose DALL-E 3 For:
- Marketing materials with text
- Product mockups
- Educational content
- Specific visual requirements
- Quick iterations

## Prompting Differences

### Midjourney Prompts
Focus on style and mood:
\`\`\`
ethereal forest landscape, golden hour lighting, cinematic, 
highly detailed, artstation --ar 16:9 --v 6
\`\`\`

### DALL-E 3 Prompts
Be descriptive and specific:
\`\`\`
A cozy coffee shop interior with warm wooden furniture, 
exposed brick walls, and morning sunlight streaming through 
large windows. A chalkboard menu displays "Today's Special"
\`\`\`

## Pricing Comparison

| Feature | Midjourney | DALL-E 3 |
|---------|------------|----------|
| Entry Price | $10/month | $20/month (with ChatGPT Plus) |
| Images/month | 200 (Basic) | ~100 |
| Fast Generation | Limited | Included |

## Conclusion

Both tools are excellent. Use Midjourney for artistic projects and DALL-E 3 for practical applications requiring accuracy.
    `
  },
  {
    id: 7,
    title: "Setting Up CI/CD with GitHub Actions",
    slug: "github-actions-cicd",
    category: "Development",
    description: "Automate your deployment pipeline with GitHub Actions. Step-by-step guide for web applications.",
    readTime: "14 min",
    difficulty: "Intermediate",
    author: "Alex Chen",
    publishedDate: "Dec 5, 2025",
    content: `
## Introduction

Continuous Integration and Continuous Deployment (CI/CD) automates your build, test, and deployment processes. GitHub Actions makes this accessible directly in your repository.

## Understanding GitHub Actions

### Key Concepts
- **Workflow**: Automated process defined in YAML
- **Event**: Trigger that starts a workflow
- **Job**: Set of steps running on the same runner
- **Step**: Individual task in a job
- **Action**: Reusable unit of code

## Your First Workflow

Create \`.github/workflows/ci.yml\`:

\`\`\`yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
\`\`\`

## Adding Deployment

### Deploy to Vercel

\`\`\`yaml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v25
  with:
    vercel-token: \${{ secrets.VERCEL_TOKEN }}
    vercel-org-id: \${{ secrets.ORG_ID }}
    vercel-project-id: \${{ secrets.PROJECT_ID }}
    vercel-args: '--prod'
\`\`\`

### Deploy to Netlify

\`\`\`yaml
- name: Deploy to Netlify
  uses: nwtgck/actions-netlify@v2
  with:
    publish-dir: './dist'
    production-deploy: true
  env:
    NETLIFY_AUTH_TOKEN: \${{ secrets.NETLIFY_AUTH_TOKEN }}
    NETLIFY_SITE_ID: \${{ secrets.NETLIFY_SITE_ID }}
\`\`\`

## Environment Variables and Secrets

### Adding Secrets
1. Go to repository Settings
2. Click Secrets and variables > Actions
3. Add your secret

### Using Secrets
\`\`\`yaml
env:
  API_KEY: \${{ secrets.API_KEY }}
\`\`\`

## Advanced Patterns

### Matrix Builds
Test across multiple versions:

\`\`\`yaml
strategy:
  matrix:
    node-version: [18, 20, 22]
\`\`\`

### Caching
Speed up builds:

\`\`\`yaml
- uses: actions/cache@v4
  with:
    path: ~/.npm
    key: \${{ runner.OS }}-node-\${{ hashFiles('**/package-lock.json') }}
\`\`\`

## Best Practices

1. Keep workflows focused and modular
2. Use caching for dependencies
3. Set appropriate timeouts
4. Use branch protection rules
5. Monitor workflow runs

## Conclusion

GitHub Actions provides powerful, free CI/CD for your projects. Start simple and add complexity as needed.
    `
  },
  {
    id: 8,
    title: "Mastering Linear for Agile Teams",
    slug: "linear-agile-guide",
    category: "Project Management",
    description: "Optimize your team's workflow with Linear's powerful features. Cycles, projects, and keyboard shortcuts.",
    readTime: "11 min",
    difficulty: "Intermediate",
    author: "Sarah Miller",
    publishedDate: "Dec 3, 2025",
    content: `
## Introduction

Linear has become the go-to issue tracker for modern software teams. Its speed, simplicity, and thoughtful design make agile workflows more efficient.

## Getting Started

### Workspace Setup
1. Create your workspace
2. Invite team members
3. Set up teams (e.g., Engineering, Design, Product)
4. Configure integrations (GitHub, Slack)

## Understanding Linear's Structure

### Hierarchy
- **Workspace**: Your organization
- **Teams**: Groups within your org
- **Projects**: Larger initiatives
- **Issues**: Individual tasks

### Issue Properties
- Status (Backlog → Done)
- Priority (Urgent → Low)
- Estimate (points or hours)
- Labels (custom tags)
- Cycles (sprints)

## Cycles (Sprints)

### Setting Up Cycles
1. Go to Team Settings > Cycles
2. Choose cycle length (1-4 weeks)
3. Set start day
4. Enable auto-close if desired

### Planning Cycles
1. Review backlog
2. Drag issues into the cycle
3. Balance workload across team
4. Set cycle goals

## Projects for Larger Initiatives

### When to Use Projects
- Features spanning multiple cycles
- Cross-team initiatives
- Milestones with deadlines

### Project Best Practices
- Set clear milestones
- Link related issues
- Track progress with status updates
- Use project roadmap view

## Keyboard Shortcuts

Master these for maximum speed:

| Shortcut | Action |
|----------|--------|
| C | Create issue |
| K/J | Navigate up/down |
| Enter | Open issue |
| Esc | Close panel |
| Cmd+K | Command palette |
| S | Set status |
| P | Set priority |
| A | Assign |

## Views and Filters

### Custom Views
Create saved views for:
- My issues
- Urgent items
- This cycle's work
- Bugs only

### Filter Syntax
\`is:open assignee:@me priority:urgent\`

## Integrations

### GitHub
- Auto-link PRs to issues
- Close issues on merge
- Sync branch status

### Slack
- Create issues from Slack
- Get notifications
- Update issue status

## Best Practices

1. Keep issues small and actionable
2. Use templates for common issue types
3. Write clear issue descriptions
4. Update status as work progresses
5. Review and groom backlog weekly

## Conclusion

Linear's power lies in its speed and simplicity. Learn the shortcuts, establish good habits, and your team's productivity will soar.
    `
  }
];

export const getGuideBySlug = (slug: string): Guide | undefined => {
  return guides.find(guide => guide.slug === slug);
};

export const getGuidesByCategory = (category: string): Guide[] => {
  return guides.filter(guide => guide.category === category);
};
