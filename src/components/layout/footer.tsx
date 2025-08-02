import Link from 'next/link';
import { Github, Twitter, Send, Disc, Bot } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Bot className="h-6 w-6 text-foreground" />
            <span className="font-bold font-headline">the.Engine</span>
          </div>
           <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">Open Protocol • XP-Based Identity • CC0 License</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/archdev-ini/the.engine" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
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
         <div className="mt-4 pt-4 border-t border-border/40 text-center text-xs text-muted-foreground/50">
           <p>Built by Inioluwa Oladipupo & global contributors</p>
        </div>
      </div>
    </footer>
  );
}
