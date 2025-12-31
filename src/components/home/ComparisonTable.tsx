import { Link } from "react-router-dom";
import { Check, X, ArrowRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const comparisons = [
  {
    name: "ChatGPT",
    freeTier: true,
    api: true,
    mobileApp: true,
    plugins: true,
    pricing: "Free / $20/mo",
  },
  {
    name: "Claude",
    freeTier: true,
    api: true,
    mobileApp: true,
    plugins: false,
    pricing: "Free / $20/mo",
  },
  {
    name: "Gemini",
    freeTier: true,
    api: true,
    mobileApp: true,
    plugins: true,
    pricing: "Free / $20/mo",
  },
  {
    name: "Perplexity",
    freeTier: true,
    api: true,
    mobileApp: true,
    plugins: false,
    pricing: "Free / $20/mo",
  },
];

const ComparisonTable = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">AI Chatbots Compared</h2>
            <p className="text-muted-foreground mt-1">
              Find the best AI assistant for your needs
            </p>
          </div>
          <Link
            to="/guides/ai-chatbot-comparison"
            className="hidden sm:flex items-center gap-1 text-primary font-medium hover:underline underline-offset-4"
          >
            Full Comparison <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Tool</TableHead>
                <TableHead className="text-center font-semibold">Free Tier</TableHead>
                <TableHead className="text-center font-semibold">API Access</TableHead>
                <TableHead className="text-center font-semibold hidden sm:table-cell">Mobile App</TableHead>
                <TableHead className="text-center font-semibold hidden md:table-cell">Plugins</TableHead>
                <TableHead className="text-right font-semibold">Pricing</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisons.map((tool) => (
                <TableRow key={tool.name} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{tool.name}</TableCell>
                  <TableCell className="text-center">
                    {tool.freeTier ? (
                      <Check className="h-4 w-4 mx-auto text-success" />
                    ) : (
                      <X className="h-4 w-4 mx-auto text-muted-foreground" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {tool.api ? (
                      <Check className="h-4 w-4 mx-auto text-success" />
                    ) : (
                      <X className="h-4 w-4 mx-auto text-muted-foreground" />
                    )}
                  </TableCell>
                  <TableCell className="text-center hidden sm:table-cell">
                    {tool.mobileApp ? (
                      <Check className="h-4 w-4 mx-auto text-success" />
                    ) : (
                      <X className="h-4 w-4 mx-auto text-muted-foreground" />
                    )}
                  </TableCell>
                  <TableCell className="text-center hidden md:table-cell">
                    {tool.plugins ? (
                      <Check className="h-4 w-4 mx-auto text-success" />
                    ) : (
                      <X className="h-4 w-4 mx-auto text-muted-foreground" />
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="font-normal">
                      {tool.pricing}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Link
          to="/guides/ai-chatbot-comparison"
          className="flex sm:hidden items-center justify-center gap-1 mt-6 text-primary font-medium hover:underline underline-offset-4"
        >
          View Full Comparison <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default ComparisonTable;
