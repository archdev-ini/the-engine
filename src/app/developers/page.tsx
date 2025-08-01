import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, CodeXml } from 'lucide-react';
import Link from 'next/link';

const codeSnippet = `
import { Campaign, Action } from '@the.engine/sdk';

// 1. Define your campaign
const civicCampaign = new Campaign({
  id: 'civic-engagement-2025',
  objective: 'Increase voter registration in key districts',
});

// 2. Create actions with XP rewards
const registerVoterAction = new Action({
  name: 'Register a New Voter',
  xp: 100,
  verifiers: ['on-chain-gov-id-check'],
  metadata: { difficulty: 'easy' },
});

// 3. Add actions to campaign
civicCampaign.addAction(registerVoterAction);

// 4. Deploy and manage your campaign
await civicCampaign.deploy();
console.log('Campaign is live!');
`;

export default function DevelopersPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Build on the.Engine
        </h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Our Developer SDK is coming soon. Get ready to create powerful, decentralized applications for collective action.
        </p>
        <div className="mt-6">
          <span className="text-primary font-semibold py-1 px-3 rounded-full bg-primary/10 border border-primary/20">
            Target Release: Q4 2025
          </span>
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto">
        <Card className="bg-black border-border/50">
            <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                        <CodeXml className="h-5 w-5 text-primary" />
                        <span className="text-sm font-semibold text-muted-foreground">API & Contract Preview</span>
                    </div>
                </div>
                <pre className="text-sm bg-black p-4 rounded-md overflow-x-auto text-white/80 font-code">
                <code>{codeSnippet.trim()}</code>
                </pre>
            </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold tracking-tighter font-headline">Stay Updated</h2>
        <p className="mt-2 text-muted-foreground">
          Follow our progress and be the first to know when the SDK drops.
        </p>
        <div className="mt-6">
          <Link href="#" passHref>
            <Button size="lg">
              <Github className="mr-2 h-5 w-5" />
              Star us on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
