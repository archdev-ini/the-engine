import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Codepen, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
           <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            the.Engine
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            The Operating System for Collective Action. A protocol for verifiable coordination, XP-based identity, and decentralized governance.
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
        </div>
      </div>
    </section>
  );
}
