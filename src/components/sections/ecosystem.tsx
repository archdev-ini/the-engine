'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Briefcase, BrainCircuit, Users, Send } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { handleNewsletterSignup } from '@/app/actions';
import { toast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

const partners = [
  {
    name: 'Youth DAOs',
    description: 'coordinating school repairs',
    hint: 'logo community',
    icon: <Users />,
  },
  {
    name: 'Governance pilots',
    description: 'in West African civic spaces',
    hint: 'logo government',
    icon: <Briefcase />,
  },
  {
    name: 'Learning ecosystems',
    description: 'issuing XP credentials',
    hint: 'logo university',
    icon: <BrainCircuit />,
  },
  {
    name: 'Climate action groups',
    description: 'using DID + proof tokens',
    hint: 'logo nature',
    icon: <Mail />,
  },
];

const NewsletterFormSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

export default function Ecosystem() {
  const form = useForm<z.infer<typeof NewsletterFormSchema>>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(data: z.infer<typeof NewsletterFormSchema>) {
    try {
      const result = await handleNewsletterSignup({ email: data.email });
      toast({
        title: 'Subscription Successful!',
        description: 'Thank you for subscribing to the.Engine newsletter.',
      });
      form.reset();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      });
    }
  }

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
              Why the.Engine, Why Now
            </h2>
            <div className="mt-6 space-y-3 text-muted-foreground md:text-lg">
              <p>🌍 People are losing trust in top-down systems</p>
              <p>🧩 Civic tech remains fragmented and shallow</p>
              <p>🧠 Protocols rarely encode real-world coordination</p>
              <p>🪪 Identity is broken — XP repairs it</p>
              <p>📡 Africa is rising, and the.Engine starts here</p>
            </div>
            <p className="mt-6 text-xl font-semibold font-headline text-primary">
              We don’t need more networks. We need new engines.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tighter font-headline">
              Join the.Engine
            </h3>
            <p className="mt-2 text-muted-foreground">
              We’re building protocol-grade infrastructure for coordination.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="mailto:dev@engine-os.app" passHref>
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> Contact Us
                </Button>
              </Link>
              <Link href="/developers" passHref>
                <Button variant="secondary">
                  <Briefcase className="mr-2 h-4 w-4" /> For Builders
                </Button>
              </Link>
            </div>
            <div className="mt-8 border-t border-border/40 pt-6">
              <h4 className="font-semibold font-headline">Stay Updated</h4>
              <p className="text-muted-foreground text-sm mt-1">
                Get the latest news and updates from the.Engine team.
              </p>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="mt-4 flex gap-2"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            className="max-w-xs bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Subscribing...' :
                    <>
                    <Send className="mr-2" />
                    Subscribe
                    </>
                    }
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold tracking-tighter font-headline text-center">
            Partners & Test Pilots
          </h3>
          <p className="mt-2 text-muted-foreground text-center">
            First deployments: Nigeria, Ghana, Kenya.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                data-ai-hint={partner.hint}
                className="text-center"
              >
                <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto border-2 border-primary/10 shadow-sm">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {React.cloneElement(partner.icon, {
                      className: 'h-8 w-8',
                    })}
                  </div>
                </div>
                <p className="font-semibold mt-4">{partner.name}</p>
                <p className="text-sm text-muted-foreground">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}