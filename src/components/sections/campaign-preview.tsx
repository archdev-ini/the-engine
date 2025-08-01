import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, User, Target, Award } from 'lucide-react';

const OrbitingCircle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={className}>
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin [animation-duration:8s]"></div>
      <div className="absolute inset-2 border border-primary/20 rounded-full animate-spin [animation-duration:12s] [animation-direction:reverse]"></div>
      <div className="absolute inset-0 flex items-center justify-center bg-background rounded-full">
        {children}
      </div>
    </div>
  </div>
);

export default function CampaignPreview() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Campaigns in Action
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            See how the protocol translates vision into verifiable action. Here’s a mock example of a civic engagement campaign.
          </p>
        </div>

        <Card className="mt-12 p-6 md:p-8 bg-background/70 border-border/50 backdrop-blur-sm">
          <CardContent className="p-0">
            <h3 className="text-2xl font-semibold mb-8 font-headline text-center text-primary">Campaign: "Clean Up Lagos"</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-6 md:gap-2 text-center">
              
              <div className="flex flex-col items-center space-y-2">
                <OrbitingCircle>
                  <User className="h-7 w-7 text-primary" />
                </OrbitingCircle>
                <h4 className="font-semibold mt-2">Role</h4>
                <p className="text-sm text-muted-foreground">Community Volunteer</p>
              </div>

              <ArrowRight className="h-8 w-8 text-muted-foreground mx-auto transform rotate-90 md:rotate-0" />

              <div className="flex flex-col items-center space-y-2">
                <OrbitingCircle>
                  <Target className="h-7 w-7 text-primary" />
                </OrbitingCircle>
                <h4 className="font-semibold mt-2">Action</h4>
                <p className="text-sm text-muted-foreground">Participate in 3 neighborhood cleanups</p>
              </div>

              <ArrowRight className="h-8 w-8 text-muted-foreground mx-auto transform rotate-90 md:rotate-0" />

              <div className="flex flex-col items-center space-y-2">
                <OrbitingCircle>
                  <Award className="h-7 w-7 text-primary" />
                </OrbitingCircle>
                <h4 className="font-semibold mt-2">Result</h4>
                <p className="text-sm text-muted-foreground">+150 XP issued to DID</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-8 text-sm italic">
              This entire process is verifiable on-chain, building a permanent, portable reputation for the participant.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
