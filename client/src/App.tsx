import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Components
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Pages
import Home from "@/pages/Home";
import Collection from "@/pages/Collection";
import ProductDetail from "@/pages/ProductDetail";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Booking from "@/pages/Booking";
import JoinUs from "@/pages/JoinUs";
import BusinessConsultancy from "@/pages/BusinessConsultancy";
import FinancialLeverage from "@/pages/FinancialLeverage";
import DigitalSystems from "@/pages/DigitalSystems";
import ExecutiveCoaching from "@/pages/ExecutiveCoaching";
import PerformanceOptimization from "@/pages/PerformanceOptimization";
import AutomationPage from "@/pages/AutomationPage";
import AIAutomations from "@/pages/AIAutomations";
import Services from "@/pages/Services";
import Studio from "@/pages/Studio";
import Insights from "@/pages/Insights";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ai-automations" component={AIAutomations} />
      <Route path="/services" component={Services} />
      <Route path="/studio" component={Studio} />
      <Route path="/insights" component={Insights} />
      <Route path="/collection" component={Collection} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/booking" component={Booking} />
      <Route path="/join-us" component={JoinUs} />
      <Route path="/consultancy/business" component={BusinessConsultancy} />
      <Route path="/consultancy/financial" component={FinancialLeverage} />
      <Route path="/consultancy/digital" component={DigitalSystems} />
      <Route path="/consultancy/executive" component={ExecutiveCoaching} />
      <Route path="/consultancy/performance" component={PerformanceOptimization} />
      
      <Route path="/automation/client-acquisition">
        {() => <AutomationPage title="AI Client Acquisition" type="client-acquisition" />}
      </Route>
      <Route path="/automation/workflow-optimization">
        {() => <AutomationPage title="Workflow Optimization" type="workflow-optimization" />}
      </Route>
      <Route path="/automation/data-intelligence">
        {() => <AutomationPage title="Data Intelligence" type="data-intelligence" />}
      </Route>
      <Route path="/automation/system-scaling">
        {() => <AutomationPage title="System Scaling" type="system-scaling" />}
      </Route>
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Global noise overlay for aesthetic */}
        <div className="noise-overlay" />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Router />
          </main>
          
          <Footer />
        </div>

        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
