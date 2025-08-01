import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedGrid from '@/components/ui/animated-grid';

export default function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
      <AnimatedGrid />
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2">
            the.Engine: Collective Action
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            A new protocol for decentralized coordination. We turn trust into a measurable asset, enabling transparent and effective collaboration at scale.
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/docs">
            <Button size="lg">Read the Whitepaper</Button>
          </Link>
          <Link href="/developers">
            <Button size="lg" variant="secondary">
              Developer SDK
            </Button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-4 border border-border rounded-lg bg-background/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold font-headline text-primary">XP</h3>
            <p className="mt-2 text-muted-foreground">Quantify contributions and build verifiable reputation.</p>
          </div>
          <div className="p-4 border border-border rounded-lg bg-background/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold font-headline text-primary">Trust</h3>
            <p className="mt-2 text-muted-foreground">Create transparent systems of accountability.</p>
          </div>
          <div className="p-4 border border-border rounded-lg bg-background/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold font-headline text-primary">Coordination</h3>
            <p className="mt-2 text-muted-foreground">Mobilize communities towards shared goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
