import Image from 'next/image';

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          We are compiling a list of frequently asked questions. This section will be available soon.
        </p>
      </div>
       <div className="mt-12 flex justify-center">
        <Image
          src="https://placehold.co/600x400.png"
          alt="FAQ illustration"
          width={600}
          height={400}
          className="rounded-lg shadow-xl"
          data-ai-hint="questions answers"
        />
      </div>
    </div>
  );
}
