'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Compass, Lightbulb, GraduationCap, School, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Personalized Suggestions',
    description: 'Discover courses and career paths tailored to your unique interests and strengths.',
    icon: Lightbulb,
    href: '/dashboard/course-suggestion',
  },
  {
    title: 'Explore Career Paths',
    description: 'Dive deep into different career options, from required education to job market insights.',
    icon: GraduationCap,
    href: '/dashboard/career-paths',
  },
  {
    title: 'Find Your College',
    description: 'Search and filter through a directory of colleges to find the perfect fit for you.',
    icon: School,
    href: '/dashboard/colleges',
  },
];


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <Compass className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">EduCompass</span>
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            <Button asChild variant="ghost">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-left">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-headline">
                  Navigate Your Future with Confidence
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  EduCompass is your personal guide to discovering the right educational and career path. Stop guessing and start planning.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button asChild size="lg">
                    <Link href="/login">Find Your Path Now</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://picsum.photos/seed/compass-hero/600/500"
                  alt="A student confidently looking towards their future"
                  data-ai-hint="student future confident"
                  width={600}
                  height={500}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-secondary/50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                Everything You Need to Succeed
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                Personalized tools and resources to help you make informed decisions about your future.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="text-left flex flex-col hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="bg-primary/10 text-primary h-12 w-12 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="pt-4 font-headline">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link href={feature.href}>
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 text-center">
          <div className="flex justify-center">
            <Compass className="h-8 w-8 text-foreground" />
          </div>
          <p className="mt-4 text-sm leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} EduCompass. Your journey, guided.
          </p>
        </div>
      </footer>
    </div>
  );
}
