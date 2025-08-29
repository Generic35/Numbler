import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { dynamicConfig } from "./lib/dynamic-config";
import Mathler from "@/pages/mathler";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Mathler} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <DynamicContextProvider settings={dynamicConfig}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
          <DynamicWidget />
        </TooltipProvider>
      </QueryClientProvider>
    </DynamicContextProvider>
  );
}

export default App;
