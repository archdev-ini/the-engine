import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Briefcase, BrainCircuit, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const partners = [
    { name: 'Youth DAOs', description: 'coordinating school repairs', hint: 'logo community'},
    { name: 'Governance pilots', description: 'in West African civic spaces', hint: 'logo government'},
    { name: 'Learning ecosystems', description: 'issuing XP credentials', hint: 'logo university'},
    { name: 'Climate action groups', description: 'using DID + proof tokens', hint: 'logo nature'},
]

export default function Ecosystem() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Why the.Engine, Why Now
            </h2>
             <div className="mt-6 text-left space-y-2 text-muted-foreground md:text-lg">
                <p>🌍 People are losing trust in top-down systems</p>
                <p>🧩 Civic tech remains fragmented and shallow</p>
                <p>🧠 Protocols rarely encode real-world coordination</p>
                <p>🪪 Identity is broken — XP repairs it</p>
                <p>📡 Africa is rising, and the.Engine starts here</p>
            </div>
            <p className="mt-6 text-2xl font-semibold font-headline text-primary">
                We don’t need more networks. We need new engines.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold tracking-tighter font-headline">Partners & Test Pilots</h3>
            <p className="mt-2 text-muted-foreground">First deployments: Nigeria, Ghana, Kenya.</p>
            <div className="mt-4 space-y-4">
                 {partners.map(partner => (
                    <div key={partner.name} data-ai-hint={partner.hint} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border border-transparent hover:border-primary/50 transition-colors">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                            <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="font-semibold">{partner.name}</p>
                            <p className="text-sm text-muted-foreground">{partner.description}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tighter font-headline">Join the.Engine</h3>
            <p className="mt-2 text-muted-foreground">We’re not launching a product. We’re building protocol-grade infrastructure for coordination.</p>
            <div className="mt-6 space-y-4">
                <Card className="bg-secondary/50 border-border/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-xl"><Briefcase className="h-6 w-6 text-primary"/> Contributors</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Build modules, audit contracts, co-design governance.</p>
                    </CardContent>
                </Card>
                 <Card className="bg-secondary/50 border-border/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-xl"><Users className="h-6 w-6 text-primary"/> Ecosystem allies</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Launch campaigns, test XP systems.</p>
                    </CardContent>
                </Card>
                 <Card className="bg-secondary/50 border-border/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-xl"><BrainCircuit className="h-6 w-6 text-primary"/> Funders</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Back protocol infrastructure, not hype.</p>
                    </CardContent>
                </Card>
            </div>
             <div className="mt-6 flex flex-wrap gap-4">
              <Link href="mailto:dev@engine-os.app" passHref>
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
