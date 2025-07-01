import { ThemeToggle } from "@/components";

export default function Home() {
  return (
    <div className="bg-background relative flex h-dvh items-center justify-center p-8">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle buttonVariant={"outline"} />
      </div>
      <div className="text-foreground text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-violet-500">DevRahimi</span> <span className="text-foreground">Next.js Template</span>
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg sm:text-xl">
          A simple Next.js starter, with TailwindCSS and shadcn/ui
        </p>
        <div className="mt-6 flex items-center justify-center space-x-2">
          <div className="h-1 w-8 rounded-full bg-violet-500"></div>
          <div className="h-2 w-2 rounded-full bg-violet-400"></div>
          <div className="h-1 w-8 rounded-full bg-violet-500"></div>
        </div>
      </div>
    </div>
  );
}
