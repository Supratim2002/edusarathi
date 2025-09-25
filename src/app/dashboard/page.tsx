'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, GraduationCap, School, Calendar, User, ArrowRight, Users } from 'lucide-react';

const features = [
  {
    title: 'Get Course Suggestions',
    description: 'Take a short quiz to find course streams that match your interests and personality.',
    icon: Lightbulb,
    href: '/dashboard/course-suggestion',
  },
  {
    title: 'Explore Career Paths',
    description: 'Discover various career opportunities and what it takes to get there.',
    icon: GraduationCap,
    href: '/dashboard/career-paths',
  },
  {
    title: 'Find Colleges',
    description: 'Search for government colleges based on location and course preferences.',
    icon: School,
    href: '/dashboard/colleges',
  },
  {
    title: 'Timeline Tracker',
    description: 'Never miss a deadline with our timeline of important academic events.',
    icon: Calendar,
    href: '/dashboard/timeline',
  },
  {
    title: 'Student Community',
    description: 'Connect with peers, ask questions, and share your knowledge in the community forum.',
    icon: Users,
    href: '/dashboard/community',
  },
];

export default function DashboardPage() {
  return (
    <div className="container mx-auto">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Welcome to your Dashboard</h1>
        <p className="text-muted-foreground">Here's your personalized hub for career and education planning.</p>
        <Button asChild>
          <Link href="/dashboard/profile">
            <User className="mr-2 h-4 w-4" /> Update Profile
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-headline">{feature.title}</CardTitle>
              <feature.icon className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
               <Button asChild variant="outline">
                <Link href={feature.href} className="flex items-center gap-2">
                  Go to section <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
