import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const systemStatus = [
  { feature: 'XP Minting', status: '✅ Working', notes: 'Developer-only demo' },
  { feature: 'DID Anchor', status: '🧪 Preview', notes: 'Off-chain + ENS-lite model' },
  { feature: 'Campaign Engine', status: '🧪 Testing', notes: 'Demo campaigns in sandbox' },
  { feature: 'Governance', status: '🧪 Simulated', notes: 'XP-based voting demo ready' },
  { feature: 'API', status: '🔜 Planned', notes: 'Dev portal coming soon' },
]

export default function CampaignPreview() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Explore the System
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            These modules are in early deployment — and evolving.
          </p>
        </div>

        <Card className="mt-12 p-6 md:p-8 bg-background/70 border-border/50 backdrop-blur-sm">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {systemStatus.map((item) => (
                  <TableRow key={item.feature}>
                    <TableCell className="font-medium">{item.feature}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
