import Link from 'next/link';
import { Compass } from 'lucide-react';
import LoginForm from '@/components/login-form';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="absolute top-6 left-6">
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <Compass className="h-6 w-6" />
          <span className="font-bold text-lg">EduCompass</span>
        </Link>
      </div>
      <LoginForm />
    </div>
  );
}
