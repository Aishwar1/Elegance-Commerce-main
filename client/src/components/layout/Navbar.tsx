import { Link, useLocation } from "wouter";
import { useCart } from "@/store/use-cart";
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const aiAutomationsItems = [
  { label: "AI Client Acquisition", href: "/automation/client-acquisition" },
  { label: "Workflow Optimization", href: "/automation/workflow-optimization" },
  { label: "Data Intelligence", href: "/automation/data-intelligence" },
  { label: "System Scaling", href: "/automation/system-scaling" },
];

const servicesItems = [
  { label: "Business Consultancy", href: "/consultancy/business" },
  { label: "Financial Advisory", href: "/consultancy/financial" },
  { label: "Digital Strategy", href: "/consultancy/digital" },
  { label: "Executive Coaching", href: "/consultancy/executive" },
  { label: "Performance Growth", href: "/consultancy/performance" },
];

function DropdownMenu({ items, isOpen }: { items: { label: string; href: string }[]; isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-0 mt-2 bg-black border border-white/10 min-w-[220px] z-50"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/50 hover:text-white hover:bg-white/5 transition-all border-b border-white/5 last:border-0"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const cartItemsCount = useCart((state) => state.totalItems());
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiDropdownOpen, setAiDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileAiOpen, setMobileAiOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const aiRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setAiDropdownOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (aiRef.current && !aiRef.current.contains(e.target as Node)) setAiDropdownOpen(false);
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isAiActive = location.startsWith("/ai-automations") || location.startsWith("/automation/");
  const isServicesActive = location.startsWith("/services") || location.startsWith("/consultancy/");

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-panel py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2.5">
            <img src="/meridian-logo.png" alt="MC" className="h-8 w-8 object-contain" />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold tracking-[0.22em] text-[11px] text-white uppercase">Meridian</span>
              <span className="font-display font-light tracking-[0.35em] text-[8px] text-white/50 uppercase">Coreline</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/" className={`font-mono text-xs uppercase tracking-widest hover:text-white transition-colors ${location === "/" ? "text-white" : "text-white/50"}`}>Home</Link>

            {/* AI Automations Dropdown */}
            <div
              ref={aiRef}
              className="relative"
              onMouseEnter={() => setAiDropdownOpen(true)}
              onMouseLeave={() => setAiDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors ${isAiActive ? "text-white" : "text-white/50"}`}
                onClick={() => setAiDropdownOpen(!aiDropdownOpen)}
              >
                AI Automations <ChevronDown className={`w-3 h-3 transition-transform ${aiDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <DropdownMenu items={aiAutomationsItems} isOpen={aiDropdownOpen} />
            </div>

            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-mono text-xs uppercase tracking-widest hover:text-white transition-colors ${isServicesActive ? "text-white" : "text-white/50"}`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services <ChevronDown className={`w-3 h-3 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <DropdownMenu items={servicesItems} isOpen={servicesDropdownOpen} />
            </div>

            <Link href="/studio" className={`font-mono text-xs uppercase tracking-widest hover:text-white transition-colors ${location === "/studio" ? "text-white" : "text-white/50"}`}>Studio</Link>
            <Link href="/insights" className={`font-mono text-xs uppercase tracking-widest hover:text-white transition-colors ${location === "/insights" ? "text-white" : "text-white/50"}`}>Insights</Link>
            <Link href="/collection" className={`font-mono text-xs uppercase tracking-widest hover:text-white transition-colors ${location === "/collection" ? "text-white" : "text-white/50"}`}>Collection</Link>
            <Link href="/about" className={`font-mono text-xs uppercase tracking-widest hover:text-white transition-colors ${location === "/about" ? "text-white" : "text-white/50"}`}>About</Link>
            <Link href="/contact" className={`font-mono text-xs uppercase tracking-widest hover:text-white transition-colors ${location === "/contact" ? "text-white" : "text-white/50"}`}>Contact</Link>

            <Link href="/cart" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors">
              <span>Cart</span>
              <div className="relative">
                <ShoppingCart className="w-4 h-4" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-[9px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                    {cartItemsCount}
                  </span>
                )}
              </div>
            </Link>
          </nav>

          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(true)} data-testid="button-mobile-menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-black flex flex-col pt-6 px-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-2.5">
                <img src="/meridian-logo.png" alt="MC" className="h-8 w-8 object-contain" />
                <div className="flex flex-col leading-none">
                  <span className="font-display font-bold tracking-[0.22em] text-[11px] text-white uppercase">Meridian</span>
                  <span className="font-display font-light tracking-[0.35em] text-[8px] text-white/50 uppercase">Coreline</span>
                </div>
              </div>
              <button className="text-white p-2" onClick={() => setMobileMenuOpen(false)} data-testid="button-close-menu">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              <Link href="/" className="py-4 border-b border-white/10 font-mono text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors">Home</Link>

              {/* Mobile AI Automations */}
              <div className="border-b border-white/10">
                <button
                  className="w-full flex items-center justify-between py-4 font-mono text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                  onClick={() => setMobileAiOpen(!mobileAiOpen)}
                >
                  AI Automations <ChevronDown className={`w-4 h-4 transition-transform ${mobileAiOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileAiOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 pb-2"
                    >
                      {aiAutomationsItems.map((item) => (
                        <Link key={item.href} href={item.href} className="block py-3 font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Services */}
              <div className="border-b border-white/10">
                <button
                  className="w-full flex items-center justify-between py-4 font-mono text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 pb-2"
                    >
                      {servicesItems.map((item) => (
                        <Link key={item.href} href={item.href} className="block py-3 font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/studio" className="py-4 border-b border-white/10 font-mono text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors">Studio</Link>
              <Link href="/insights" className="py-4 border-b border-white/10 font-mono text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors">Insights</Link>
              <Link href="/collection" className="py-4 border-b border-white/10 font-mono text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors">Collection</Link>
              <Link href="/about" className="py-4 border-b border-white/10 font-mono text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="py-4 border-b border-white/10 font-mono text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors">Contact</Link>
              <Link href="/cart" className="py-4 font-mono text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors flex items-center gap-3">
                Cart
                {cartItemsCount > 0 && (
                  <span className="bg-white text-black text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">{cartItemsCount}</span>
                )}
              </Link>
            </nav>

            <div className="mt-auto pt-10 pb-6 border-t border-white/10">
              <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-3">Contact</p>
              <a href="mailto:onepercentloss@gmail.com" className="block font-sans text-sm text-white/60 hover:text-white transition-colors mb-1">onepercentloss@gmail.com</a>
              <a href="tel:+916306248624" className="block font-sans text-sm text-white/60 hover:text-white transition-colors">+91 6306248624</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
