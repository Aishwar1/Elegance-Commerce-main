import { useEffect } from "react";
import logoImg from "@assets/image_1773890443294.png";

export default function About() {
  const bgUrl = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pictures = [
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-60"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.85)), url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="relative z-10 pt-32">
        <div className="max-w-screen-2xl mx-auto px-6 pb-24">
          <div className="max-w-4xl mb-24">
            <img src={logoImg} alt="Meridian Coreline" className="h-14 w-14 object-contain opacity-70 mb-10" />
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-12">About Us</h1>
            <p className="text-lg font-sans text-white/60 leading-relaxed mb-16">
              Meridian Coreline is a collective dedicated to engineering growth through high-fidelity systems. 
              We believe that progress is not accidental, but the result of intentional design and strategic leverage. 
              Our mission is to provide the tools and frameworks necessary for individuals and businesses to 
              transcend traditional limitations and achieve peak operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pictures.map((src, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden border border-white/10"
              >
                <img src={src} alt={`Work ${i+1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
