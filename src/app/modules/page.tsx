import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowUpRight, Github } from 'lucide-react';
import Link from 'next/link';

const modules = [
  {
    title: 'Identity & Onboarding',
    url: '/modules/identity',
    status: 'v0',
    description: 'DID infrastructure for verifiable, evolving reputation.',
  },
  {
    title: 'Campaign System',
    url: '/modules/campaigns',
    status: 'v0',
    description: 'Tools for creating and managing collective action missions.',
  },
  {
    title: 'XP Economy',
    url: '/modules/xp',
    status: 'v0',
    description: 'Protocol for minting non-transferable experience points.',
  },
  {
    title: 'Governance & Proposals',
    url: '/modules/governance',
    status: 'v0',
    description: 'XP-weighted voting and community decision-making.',
  },
  {
    title: 'Engine SDK',
    url: '/modules/sdk',
    status: 'in dev',
    description: 'Developer toolkit for building on The Engine OS.',
  },
  {
    title: 'Maps & Check-ins',
    url: '/modules/maps',
    status: 'in dev',
    description: 'Geospatial tools for localized campaigns and verification.',
  },
  {
    title: 'Verification Plugins',
    url: '/modules/verifiers',
    status: 'in dev',
    description: 'Pluggable modules for task and contribution validation.',
  },
  {
    title: 'Task Execution',
    url: '/modules/tasks',
    status: 'in dev',
    description: 'System for managing and tracking task completion.',
  },
  {
    title: 'Reputation & Badges',
    url: '/modules/reputation',
    status: 'future',
    description: 'On-chain credentials and badges for recognizing achievements.',
  },
  {
    title: 'Rewards Layer',
    url: '/modules/rewards',
    status: 'future',
    description: 'Incentive mechanisms for campaign participation.',
  },
  {
    title: 'Treasury + Vaults',
    url: '/modules/treasury',
    status: 'future',
    description: 'Secure management of community funds and assets.',
  },
  {
    title: 'Ecosystem API',
    url: '/modules/api',
    status: 'future',
    description: 'Public API for third-party integrations.',
  },
];

export default function ModulesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          The Engine Modules
        </h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Explore the 12 core components that make up The Engine OS.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((mod) => (
          <Card
            key={mod.title}
            className="bg-card border h-full transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col"
          >
            <CardHeader className="flex-grow">
              <CardTitle className="font-headline text-xl">{mod.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <p className="text-muted-foreground flex-grow">{mod.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    mod.status === 'v0'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : mod.status === 'in dev'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}
                >
                  {mod.status}
                </span>
                <Link
                  href={mod.url}
                  className="text-primary hover:underline flex items-center"
                >
                  Explore <ArrowUpRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
