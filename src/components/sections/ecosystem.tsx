import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Book, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Ecosystem() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              From Nigeria, For The World
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              the.Engine was born from the need for better coordination tools in Nigeria's vibrant civic tech space. Our vision is global: to empower communities everywhere to organize, collaborate, and create shared value.
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We are building an ecosystem of builders, thinkers, and doers. We invite civic organizations, DAOs, universities, and developers to join us in shaping the future of decentralized action.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="mailto:collaborate@the.engine" passHref>
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> Collaborate With Us
                </Button>
              </Link>
              <Link href="#" passHref>
                <Button variant="secondary">
                  <Book className="mr-2 h-4 w-4" /> Read our Substack
                </Button>
              </Link>
            </div>
          </div>
          <Card className="bg-secondary/50 border-border/50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg flex items-center font-headline"><Users className="mr-2 h-5 w-5 text-primary" /> Early Partners & Supporters</h3>
              <p className="text-sm text-muted-foreground mb-4">We are proud to be building alongside visionary organizations.</p>
              <div className="grid grid-cols-2 gap-4">
                <div data-ai-hint="logo company" className="flex items-center justify-center p-6 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground font-semibold">Civic Org 1</span>
                </div>
                <div data-ai-hint="logo university" className="flex items-center justify-center p-6 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground font-semibold">University Partner</span>
                </div>
                <div data-ai-hint="logo crypto" className="flex items-center justify-center p-6 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground font-semibold">DAO Global</span>
                </div>
                 <div data-ai-hint="logo tech" className="flex items-center justify-center p-6 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground font-semibold">Tech Hub</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
