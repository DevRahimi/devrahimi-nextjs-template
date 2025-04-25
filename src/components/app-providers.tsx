import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme={"system"}
      enableSystem={true}
      disableTransitionOnChange={false}
    >
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
