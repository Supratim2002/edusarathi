'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { careerPaths, courseCategories } from '@/lib/data';
import { GraduationCap } from 'lucide-react';

export default function CareerPathsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPaths = selectedCategory === 'All'
    ? careerPaths
    : careerPaths.filter(path => path.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <GraduationCap className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold font-headline">Course-to-Career Path Mapping</h1>
            <p className="text-muted-foreground">
              Explore detailed flashcards to understand what each degree offers.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Filter by category:</span>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              {courseCategories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPaths.map((path, index) => (
          <motion.div
            key={path.degree}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="h-full flex flex-col hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <path.icon className="h-10 w-10 text-primary" />
                  <Badge variant="secondary">{path.category}</Badge>
                </div>
                <CardTitle className="pt-4 font-headline">{path.degree}</CardTitle>
                <CardDescription>{path.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <div>
                  <h4 className="font-semibold text-sm">Top Industries</h4>
                  <p className="text-sm text-muted-foreground">{path.industries.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Potential Private Jobs</h4>
                  <p className="text-sm text-muted-foreground">{path.privateJobs.slice(0, 3).join(', ')}...</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Relevant Government Exams</h4>
                  <p className="text-sm text-muted-foreground">{path.govtExams.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Higher Education</h4>
                  <p className="text-sm text-muted-foreground">{path.higherEducation.join(', ')}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
