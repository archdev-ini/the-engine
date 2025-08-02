import Link from 'next/link';
import { Github, Twitter, Send, Disc, Bot } from 'lucide-react';

const footerLinks = {
  engine: [
    { href: '/modules', label: 'Modules' },
    { href: '/docs', label: 'Docs' },
    { href: '/developers', label: 'Builders' },
  ],
  community: [
    { href: 'https://github.com/archdev-ini/the-engine', label: 'GitHub' },
    { href: '#', label: 'Discord' },
    { href: '#', label: 'X/Twitter' },
  ],
  legal: [
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Privacy Policy' },
    { href: 'https://celo.org', label: 'Celo Ecosystem' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Bot className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">
                the.Engine
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              The Operating System for Collective Action.
            </p>
             <p className="mt-2 text-sm text-muted-foreground">
              Contact: <a href="mailto:dev@engine-os.app" className="hover:text-primary">dev@engine-os.app</a>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Engine
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.engine.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Community
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>Built by Inioluwa Oladipupo & global contributors</p>
          <p className="mt-2 sm:mt-0">
            Open Protocol • XP-Based Identity • CC0 License
          </p>
        </div>
      </div>
    </footer>
  );
}
