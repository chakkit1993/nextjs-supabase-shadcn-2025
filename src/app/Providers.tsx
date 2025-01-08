import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/toaster";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        
        {children}
        <Toaster />
      </ThemeProvider>
    </>
  );
};
export default Providers;