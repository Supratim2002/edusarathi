'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  Home,
  Lightbulb,
  GraduationCap,
  School,
  Calendar,
  User,
  LogOut,
  PanelLeft,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/dashboard', label: 'Home', icon: Home },
  { href: '/dashboard/course-suggestion', label: 'Suggestion', icon: Lightbulb },
  { href: '/dashboard/career-paths', label: 'Career Paths', icon: GraduationCap },
  { href: '/dashboard/colleges', label: 'Colleges', icon: School },
  { href: '/dashboard/timeline', label: 'Timeline', icon: Calendar },
  { href: '/dashboard/community', label: 'Community', icon: Users },
];

export default function DashboardNav() {
  const pathname = usePathname();

  const commonLinkClasses = "flex items-center gap-3 rounded-lg px-3 py-2 transition-all";
  const activeLinkClasses = "bg-secondary text-primary";
  const inactiveLinkClasses = "text-muted-foreground hover:text-primary";
  
  const NavLink = ({ href, label, icon: Icon }: { href: string, label: string, icon: React.ElementType }) => (
    <Link
      href={href}
      className={cn(commonLinkClasses, pathname === href ? activeLinkClasses : inactiveLinkClasses)}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Compass className="h-6 w-6 text-primary" />
          <span className="sr-only">EduCompass</span>
        </Link>
        {navLinks.map(link => (
          <NavLink key={link.href} {...link} />
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Compass className="h-6 w-6 text-primary" />
              <span>EduCompass</span>
            </Link>
            {navLinks.map(link => (
                <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/profile" className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/" className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
