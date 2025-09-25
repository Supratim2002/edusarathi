import { timelineEvents } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Ticket, BookOpen, GraduationCap } from 'lucide-react';

const categoryIcons: { [key: string]: React.ElementType } = {
  Exams: Ticket,
  Admissions: BookOpen,
  Scholarships: GraduationCap,
  Academics: Calendar,
};

export default function TimelinePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Calendar className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold font-headline">Timeline Tracker</h1>
          <p className="text-muted-foreground">
            Stay ahead with this schedule of important academic dates and deadlines.
          </p>
        </div>
      </div>
      
      <Card>
        <CardHeader>
            <CardTitle>Academic Year at a Glance</CardTitle>
            <CardDescription>Key events from entrance exams to the start of the academic session.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-border after:left-0">
            {timelineEvents.map((event, index) => {
              const Icon = categoryIcons[event.category] || Calendar;
              return (
                <div key={index} className="grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-2 mb-10">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                    <div className="absolute -left-9 h-full w-px bg-border" />
                    <div className="absolute -left-[34px] top-1/2 -mt-1.5 h-3 w-3 rounded-full border-2 border-secondary bg-primary" />
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center gap-4">
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                        <Badge variant="outline">{event.category}</Badge>
                    </div>
                    <p className="text-sm font-medium text-primary">{event.date}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
