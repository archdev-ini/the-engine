import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, UserCircle2, GitFork, Scale, DatabaseZap } from 'lucide-react';

const components = [
  {
    icon: <Award className="h-8 w-8 text-foreground" />,
    title: 'XP Protocol',
    description: 'Earn experience for verified actions. XP is not a currency — it’s proof of impact.',
  },
  {
    icon: <UserCircle2 className="h-8 w-8 text-foreground" />,
    title: 'Decentralized Identity (DID)',
    description: 'Create self-owned identities with embedded roles, scores, and histories. Tied to XP.',
  },
  {
    icon: <GitFork className="h-8 w-8 text-foreground" />,
    title: 'Campaign Engine',
    description: 'Design missions with roles, tasks, and contribution logic. Reward impact, not hype.',
  },
  {
    icon: <Scale className="h-8 w-8 text-foreground" />,
    title: 'Governance Layer',
    description: 'Proposal + voting system that respects contribution. XP = voting weight.',
  },
  {
    icon: <DatabaseZap className="h-8 w-8 text-foreground" />,
    title: 'ENGINE Token',
    description: 'Utility token for upgrades, staking, and governance boosts.',
  },
];

export default function ProtocolOverview() {
  return (
    <section id="protocol-overview" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Protocol Modules
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            All modules are interoperable, decentralized, and designed for real-world use cases.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <Card key={component.title} className="bg-background border-border hover:border-primary/50 transition-colors duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg">
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
