import Link from 'next/link';
import { Github, Twitter, Send, Disc } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">the.Engine Protocol</p>
            <p className="text-xs text-muted-foreground/50">Built by Inioluwa Oladipupo & global contributors</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs text-muted-foreground/80">Open Protocol • XP-Based Identity • CC0 License</p>
          </div>
          <div className="flex space-x-6">
            <Link href="https://github.com/archdev-ini" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="/docs" className="text-muted-foreground hover:text-primary transition-colors">
              <span className="text-sm">Docs</span>
            </Link>
             <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="text-sm">Substack</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Disc className="h-5 w-5" />
              <span className="sr-only">Discord</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">X</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
