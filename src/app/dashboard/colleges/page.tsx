'use client';

import { useState, useMemo } from 'react';
import { School } from 'lucide-react';
import { colleges, collegeLocations } from '@/lib/data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CollegesPage() {
  const [location, setLocation] = useState('All');
  const [course, setCourse] = useState('All');

  const availableCourses = useMemo(() => {
    const allCourses = new Set<string>();
    colleges.forEach(college => {
      college.courses.forEach(c => allCourses.add(c));
    });
    return ['All', ...Array.from(allCourses).sort()];
  }, []);

  const filteredColleges = useMemo(() => {
    return colleges.filter(college => {
      const locationMatch = location === 'All' || college.location === location;
      const courseMatch = course === 'All' || college.courses.includes(course);
      return locationMatch && courseMatch;
    });
  }, [location, course]);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <School className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold font-headline">Nearby Government Colleges Directory</h1>
          <p className="text-muted-foreground">
            Filter and find government colleges based on your preferences.
          </p>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Filter Colleges</CardTitle>
          <CardDescription>Select a location and course to narrow down your search.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="location-select" className="text-sm font-medium mb-2 block">Location</label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger id="location-select" className="w-full">
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Locations</SelectItem>
                  {collegeLocations.map(loc => (
                    <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label htmlFor="course-select" className="text-sm font-medium mb-2 block">Course</label>
              <Select value={course} onValueChange={setCourse}>
                <SelectTrigger id="course-select" className="w-full">
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent>
                  {availableCourses.map(c => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">College Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Available Courses</TableHead>
                  <TableHead>Cut-off</TableHead>
                  <TableHead>Fees</TableHead>
                  <TableHead className="text-right">Rating</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredColleges.length > 0 ? (
                  filteredColleges.map((college) => (
                    <TableRow key={college.name}>
                      <TableCell className="font-medium">{college.name}</TableCell>
                      <TableCell>{college.location}</TableCell>
                      <TableCell>{college.courses.join(', ')}</TableCell>
                      <TableCell>{college.cutoff}</TableCell>
                      <TableCell>{college.fees}</TableCell>
                      <TableCell className="text-right">{college.rating}/5</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No colleges match your criteria. Try adjusting your filters.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
