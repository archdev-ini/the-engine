import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, BookOpen, FileText, Beaker, Landmark, Boxes } from 'lucide-react';
import Link from 'next/link';

const documents = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'The Engine Whitepaper',
    description: 'The foundational document outlining the vision, philosophy, and core concepts of the.Engine.',
    href: '#',
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Technical Specification',
    description: 'A deep dive into the protocol architecture, smart contracts, and technical implementation details.',
    href: '#',
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: 'Governance Framework',
    description: 'The principles and processes for community-led governance and evolution of the protocol.',
    href: '#',
  },
  {
    icon: <Beaker className="h-8 w-8 text-primary" />,
    title: 'Tokenomics',
    description: 'Details on the ENGINE token, including utility, distribution, and economic model for sustainability.',
    href: '#',
  },
  {
    icon: <Boxes className="h-8 w-8 text-primary" />,
    title: 'Smart Contracts & APIs',
    description: 'Explore the code, extend the system, and build on the.Engine.',
    href: '/developers',
  },
];

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Whitepapers & Docs
        </h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Explore the core documents that define the.Engine protocol. All docs hosted at docs.engine-os.app or GitHub.
        </p>
      </div>

      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {documents.map((doc) => (
          <Link href={doc.href} key={doc.title} className="block group">
            <Card className="bg-secondary/50 border-border/50 h-full transition-all duration-300 group-hover:border-primary/50 group-hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                  {doc.icon}
                  <CardTitle className="font-headline text-xl">{doc.title}</CardTitle>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:text-primary group-hover:rotate-45" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{doc.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
