import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedGrid from '@/components/ui/animated-grid';
import { BookOpen, Codepen, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
      <AnimatedGrid />
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
           <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2">
            the.Engine
          </h1>
          <p className="text-2xl md:text-3xl font-headline text-primary">The Operating System for Collective Action</p>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A protocol for verifiable coordination, XP-based identity, and decentralized governance — built for communities, movements, and builders shaping the next era of self-determined systems.
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/docs">
            <Button size="lg"><BookOpen className="mr-2"/> Read the Whitepaper</Button>
          </Link>
          <Link href="/#protocol-overview">
            <Button size="lg" variant="secondary">
              <Codepen className="mr-2"/> Explore the Stack
            </Button>
          </Link>
          <Link href="/developers">
            <Button size="lg" variant="secondary">
              <Users className="mr-2"/> Build With Us
            </Button>
          </Link>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center font-headline mb-6">What is the.Engine?</h2>
            <p className="text-lg text-muted-foreground text-center">
                the.Engine is a protocol stack for unlocking trust, reputation, and coordination at scale. It allows communities to:
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                <div className="p-4 border-l-4 border-primary bg-background/50">
                    Coordinate campaigns using verifiable contributions.
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background/50">
                    Earn XP for work that matters.
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background/50">
                    Govern decisions based on lived reputation.
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background/50">
                    Anchor digital identities that evolve over time.
                </div>
            </div>
             <p className="mt-6 text-lg text-muted-foreground text-center">
                Built for a world where legacy systems are failing, and new systems must rise from the bottom up.
            </p>
        </div>

      </div>
    </section>
  );
}
