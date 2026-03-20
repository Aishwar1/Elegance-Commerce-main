import { Link, useLocation } from "wouter";
import { Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { MinimalButton } from "@/components/ui/MinimalButton";
import logoImg from "@assets/image_1773890443294.png";

export function Footer() {
  const [location] = useLocation();
  
  const showForm = location !== "/booking";

  if (!showForm) {
    return (
      <footer className="py-8 px-4 sm:px-6 mt-auto relative z-20 border-t border-white/5 bg-black">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="M" className="h-6 w-6 object-contain opacity-70" />
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold tracking-[0.2em] text-sm uppercase text-white">Meridian</span>
                <span className="font-display font-light tracking-[0.3em] text-[10px] text-white/50 uppercase">Coreline</span>
              </div>
            </div>
            <nav className="hidden sm:flex gap-4 border-l border-white/10 pl-6">
              <Link href="/" className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all">Home</Link>
              <Link href="/collection" className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all">Collection</Link>
              <Link href="/about" className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all">About</Link>
              <Link href="/contact" className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all">Contact</Link>
            </nav>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/10 hover:text-white transition-colors"><Linkedin className="w-3 h-3" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/10 hover:text-white transition-colors"><Twitter className="w-3 h-3" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/10 hover:text-white transition-colors"><Instagram className="w-3 h-3" /></a>
              <a href="mailto:onepercentloss@gmail.com" className="text-white/10 hover:text-white transition-colors"><Mail className="w-3 h-3" /></a>
            </div>
            <div className="flex flex-wrap gap-6 font-mono text-[8px] uppercase tracking-[0.3em] text-white/30">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <span className="text-white/20">© 2026 MERIDIAN CORELINE</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 mt-auto relative z-20 border-t border-white/5 bg-black">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Brand and Links */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <div>
              <div className="mb-8">
                <img src={logoImg} alt="Meridian Coreline" className="h-10 w-10 object-contain opacity-80 mb-4" />
                <div className="flex flex-col leading-none">
                  <span className="font-display font-bold tracking-[0.2em] text-2xl sm:text-3xl uppercase text-white">Meridian</span>
                  <span className="font-display font-light tracking-[0.35em] text-base sm:text-lg text-white/50 uppercase">Coreline</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                <Link href="/about" className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all">About</Link>
                <Link href="/contact" className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all">Contact</Link>
                <Link href="/collection" className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all">Collection</Link>
                <Link href="/" className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all">Home</Link>
                <Link href="/studio" className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all">Studio</Link>
                <Link href="/booking" className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all">Booking</Link>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25 mb-4">Get In Touch</p>
              <a
                href="mailto:onepercentloss@gmail.com"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 shrink-0 group-hover:text-white transition-colors" />
                <span className="font-sans text-sm">onepercentloss@gmail.com</span>
              </a>
              <a
                href="tel:+916306248624"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 shrink-0 group-hover:text-white transition-colors" />
                <span className="font-sans text-sm">+91 6306248624</span>
              </a>
            </div>

            {/* Socials & Legal */}
            <div className="space-y-5">
              <div className="flex gap-6">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="mailto:onepercentloss@gmail.com" className="text-white/40 hover:text-white transition-colors"><Mail className="w-4 h-4" /></a>
              </div>
              <div className="flex flex-wrap gap-6 font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                <span className="text-white/20">© 2026 MERIDIAN CORELINE</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-8" id="footer-form">
            <div className="w-full bg-white/[0.02] border border-white/5 p-8 sm:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors" />
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tighter mb-8 text-white relative z-10">Join The Movement</h3>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3">
                  <label className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 px-0 py-3 focus:border-white outline-none transition-all font-sans text-sm text-white placeholder:text-white/10" placeholder="John" required />
                </div>
                <div className="space-y-3">
                  <label className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 px-0 py-3 focus:border-white outline-none transition-all font-sans text-sm text-white placeholder:text-white/10" placeholder="Doe" required />
                </div>
                <div className="space-y-3">
                  <label className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 px-0 py-3 focus:border-white outline-none transition-all font-sans text-sm text-white placeholder:text-white/10" placeholder="john@example.com" required />
                </div>
                <div className="space-y-3">
                  <label className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">Interest</label>
                  <select className="w-full bg-transparent border-b border-white/10 px-0 py-3 focus:border-white outline-none transition-all font-sans text-sm appearance-none cursor-pointer text-white">
                    <option className="bg-black text-white" value="business">Business owner</option>
                    <option className="bg-black text-white" value="employee">Employee</option>
                    <option className="bg-black text-white" value="digital">Digital products</option>
                  </select>
                </div>
                <div className="sm:col-span-2 pt-4">
                  <MinimalButton variant="primary" className="w-full h-12 sm:h-14 bg-white text-black hover:bg-white/90 uppercase tracking-[0.2em] font-mono text-[10px]">Initialize Sequence</MinimalButton>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
