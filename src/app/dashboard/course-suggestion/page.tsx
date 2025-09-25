
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { quizData } from '@/lib/data';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Lightbulb, Loader2, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const formSchema = z.object({
  interests: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one interest.',
  }),
  aptitudes: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one aptitude.',
  }),
  personalityTraits: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one personality trait.',
  }),
});

type FormData = z.infer<typeof formSchema>;

const sampleSuggestions = {
    suggestedStreams: ['Science', 'Arts'],
    suggestedSubjects: ['Physics', 'Mathematics', 'History', 'Literature'],
    careerPaths: ['Software Engineer', 'Data Scientist', 'Journalist', 'Teacher'],
};

export default function CourseSuggestionPage() {
  const [suggestions, setSuggestions] = useState<typeof sampleSuggestions | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: [],
      aptitudes: [],
      personalityTraits: [],
    },
  });

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    setSuggestions(null);
    // Simulate API call
    setTimeout(() => {
      setSuggestions(sampleSuggestions);
      setIsLoading(false);
    }, 1500);
  }

  const CheckboxGroup = ({ name, items }: { name: keyof FormData, items: string[] }) => (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <FormField
                key={item}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem
                    key={item}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...(field.value || []), item])
                            : field.onChange(
                                (field.value || []).filter(
                                  (value) => value !== item
                                )
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal text-sm">{item}</FormLabel>
                  </FormItem>
                )}
              />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
  
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Lightbulb className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold font-headline">Aptitude & Interest-Based Course Suggestion</h1>
          <p className="text-muted-foreground">
            Complete this short quiz to receive personalized recommendations for your academic and career path.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Discovery Quiz</CardTitle>
          <CardDescription>Select all options that apply to you in each category.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">My Interests</h3>
                <CheckboxGroup name="interests" items={quizData.interests} />
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">My Aptitudes</h3>
                 <CheckboxGroup name="aptitudes" items={quizData.aptitudes} />
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">My Personality Traits</h3>
                 <CheckboxGroup name="personalityTraits" items={quizData.personalityTraits} />
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Get Suggestions
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="flex flex-col items-center justify-center text-center p-8 space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <h2 className="text-xl font-semibold">Generating your personalized suggestions...</h2>
          <p className="text-muted-foreground">Our AI is analyzing your results. This might take a moment.</p>
        </div>
      )}

      {suggestions && (
        <Card className="bg-secondary/50">
          <CardHeader>
            <CardTitle className="text-2xl font-headline flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary"/> Your Personalized Recommendations
            </CardTitle>
            <CardDescription>Based on your quiz results, here are some paths you might excel in.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg flex items-center gap-2"><BookOpen className="h-5 w-5"/>Suggested Streams</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {suggestions.suggestedStreams.map(stream => <li key={stream}>{stream}</li>)}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg flex items-center gap-2"><BookOpen className="h-5 w-5"/>Suggested Subjects</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {suggestions.suggestedSubjects.map(subject => <li key={subject}>{subject}</li>)}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg flex items-center gap-2"><Briefcase className="h-5 w-5"/>Potential Career Paths</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {suggestions.careerPaths.map(path => <li key={path}>{path}</li>)}
              </ul>
            </div>
          </CardContent>
           <CardFooter>
            <p className="text-xs text-muted-foreground">These recommendations are sample data and should be used as a starting point for your research.</p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
