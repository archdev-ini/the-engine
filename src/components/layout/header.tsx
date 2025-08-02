import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Bot } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Protocol' },
  { href: '/developers', label: 'Builders' },
  { href: '/docs', label: 'Docs' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">the.Engine</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between md:justify-end">
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="mr-2">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pr-0">
                   <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                    <Bot className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">the.Engine</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="transition-colors hover:text-foreground/80 text-foreground/60 text-lg"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            
             <Link href="/" className="flex items-center space-x-2 md:hidden">
                <Bot className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">the.Engine</span>
            </Link>

          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="mailto:dev@engine-os.app">
                Contact
              </Link>
            </Button>
             <Button asChild>
              <Link href="https://github.com/archdev-ini/the-engine">
                Star on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
