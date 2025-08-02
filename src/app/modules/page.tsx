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
    description: 'Enable self-owned decentralized identity using wallets, phone, or email. Profiles are linked to on-chain XP, forming a public identity graph.',
  },
  {
    title: 'Campaign System',
    url: '/modules/campaigns',
    status: 'v0',
    description: 'Create and manage campaigns with verifiable tasks, contributors, deadlines, and rewards. Task types include form-based, location-based, and image proof.',
  },
  {
    title: 'XP Engine',
    url: '/modules/xp',
    status: 'v0',
    description: 'Non-transferable points earned for impact, proof, or participation. XP governs roles, access, and DAO voting power. Includes inflation and decay controls.',
  },
  {
    title: 'Governance Layer',
    url: '/modules/governance',
    status: 'v0',
    description: 'Supports XP-weighted voting and token-based proposals. Logic for delegation, quorum, slashing, and XP-backed accountability included.',
  },
  {
    title: 'Engine SDK',
    url: '/modules/sdk',
    status: 'in dev',
    description: 'Developer toolkit with REST + GraphQL APIs, smart contract wrappers, and plugin templates. Enables third-party tools or custom interfaces.',
  },
  {
    title: 'Maps & Check-ins',
    url: '/modules/maps',
    status: 'in dev',
    description: 'Tasks that rely on geo-tagged or time-based check-ins. Includes GPS validator, heatmap overlays, and visual campaign activity logging.',
  },
  {
    title: 'Verification Plugins',
    url: '/modules/verifiers',
    status: 'in dev',
    description: 'Flexible verification system. Use AI-based validators, trusted oracles, peer review, or automated scripts to confirm task completion.',
  },
  {
    title: 'Task Execution',
    url: '/modules/tasks',
    status: 'in dev',
    description: 'Frontend UX for users to claim, execute, and submit tasks. Includes form submission, progress tracking, and verification interface.',
  },
  {
    title: 'Badges & Reputation',
    url: '/modules/reputation',
    status: 'future',
    description: 'XP unlocks verifiable badges. On-chain or off-chain badges reflect role, milestones, and social proof. Creates public contribution trails.',
  },
  {
    title: 'Rewards Layer',
    url: '/modules/rewards',
    status: 'future',
    description: 'Configurable incentives layer. XP or task triggers token drops, NFTs, unlocks, or privileges. Optional redeemables or third-party benefits.',
  },
  {
    title: 'Vaults & Treasury',
    url: '/modules/treasury',
    status: 'future',
    description: 'DAOs and campaign creators manage funding. Logic for milestone-based releases, XP-gated access, and on-chain payout accountability.',
  },
  {
    title: 'Ecosystem API',
    url: '/modules/api',
    status: 'future',
    description: 'APIs and webhooks to connect Engine modules to external systems. Supports campaign updates, XP tracking, analytics, and integration triggers.',
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
