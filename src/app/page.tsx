import { DarkModeToggle } from '@/components/commons/dark-mode-toggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div>
      <Input />
      <Button>Hello</Button>
      <DarkModeToggle />
    </div>
  );
}
