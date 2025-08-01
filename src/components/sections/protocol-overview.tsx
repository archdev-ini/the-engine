import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DatabaseZap, GitFork, Scale, UserCircle2, Grid3x3 } from 'lucide-react';

const components = [
  {
    icon: <Grid3x3 className="h-8 w-8 text-primary" />,
    title: 'XP Protocol',
    description: 'A standardized framework for quantifying contributions and experiences within a network.',
  },
  {
    icon: <UserCircle2 className="h-8 w-8 text-primary" />,
    title: 'Decentralized ID (DID)',
    description: 'Self-sovereign identity that anchors reputation and XP, giving users control over their data.',
  },
  {
    icon: <GitFork className="h-8 w-8 text-primary" />,
    title: 'Campaign Engine',
    description: 'Tools to design, launch, and manage collective action campaigns with clear roles and rewards.',
  },
  {
    icon: <Scale className="h-8 w-8 text-primary" />,
    title: 'Governance Logic',
    description: 'On-chain and off-chain rules that enable fair, transparent, and adaptable decision-making.',
  },
  {
    icon: <DatabaseZap className="h-8 w-8 text-primary" />,
    title: 'ENGINE Token',
    description: 'The native utility and governance token that fuels the ecosystem and aligns incentives.',
  },
];

export default function ProtocolOverview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            System Overview
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            the.Engine is a modular stack designed for seamless, decentralized coordination. Each component plays a crucial role.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <Card key={component.title} className="bg-secondary/50 border-border/50 hover:border-primary/50 transition-colors duration-300 transform hover:-translate-y-1 lg:col-span-1 even:lg:col-start-2 odd:lg:last:col-start-2">
              <CardHeader className="flex flex-row items-center gap-4">
                {component.icon}
                <CardTitle className="font-headline text-xl">{component.title}</CardTitle>

              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{component.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
