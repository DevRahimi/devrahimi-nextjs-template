import { ThemeProvider } from "./theme-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme={"system"}
      enableSystem={true}
      themes={["light", "dark"]}
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
}
